
// App Switching Logic
document.addEventListener('DOMContentLoaded', function () {
    const appBtns = document.querySelectorAll('.app-btn');
    const appContainers = document.querySelectorAll('.app-container');

    appBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const targetApp = this.dataset.app;

            // Update active button
            appBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Show target app
            appContainers.forEach(container => {
                container.classList.remove('active');
                if (container.classList.contains(`${targetApp}-app`)) {
                    container.classList.add('active');
                }
            });
        });
    });

    // Theme Switching Logic
    const themeBtns = document.querySelectorAll('.theme-btn');

    themeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const theme = this.dataset.theme;

            // Update active theme button
            themeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Apply theme
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('web-apps-theme', theme);
        });
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('web-apps-theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    themeBtns.forEach(btn => {
        if (btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });

    // Initialize apps
    new PomodoroTimer();
    new MemoryGame();
});

// Pomodoro Timer Class
class PomodoroTimer {
    constructor() {
        this.modes = {
            pomodoro: { duration: 25 * 60, color: '#8e44ad' },
            'short-break': { duration: 5 * 60, color: '#3498db' },
            'long-break': { duration: 15 * 60, color: '#9b59b6' }
        };

        this.currentMode = 'pomodoro';
        this.timeLeft = this.modes.pomodoro.duration;
        this.isRunning = false;
        this.interval = null;
        this.completedPomodoros = 0;
        this.completedTasks = 0;
        this.productivityScore = 0;

        this.initializeElements();
        this.loadData();
        this.setupEventListeners();
        this.updateDisplay();
    }

    initializeElements() {
        // Timer elements
        this.minutesEl = document.getElementById('minutes');
        this.secondsEl = document.getElementById('seconds');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.progressCircle = document.querySelector('.progress-ring-circle');

        // Mode buttons
        this.modeBtns = document.querySelectorAll('.mode-btn');

        // Task elements
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.tasksList = document.getElementById('tasksList');

        // Stats elements
        this.completedPomodorosEl = document.getElementById('completedPomodoros');
        this.completedTasksEl = document.getElementById('completedTasks');
        this.productivityScoreEl = document.getElementById('productivityScore');

        // Setup progress ring
        this.setupProgressRing();
    }

    setupProgressRing() {
        const radius = this.progressCircle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        this.progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        this.progressCircle.style.strokeDashoffset = circumference;
        this.circumference = circumference;
    }

    setProgress(percent) {
        const offset = this.circumference - (percent / 100) * this.circumference;
        this.progressCircle.style.strokeDashoffset = offset;
        this.progressCircle.style.stroke = this.modes[this.currentMode].color;
    }

    setupEventListeners() {
        // Timer controls
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());

        // Mode selection
        this.modeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchMode(e.target.dataset.mode);
                this.modeBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Task management
        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
    }

    switchMode(mode) {
        this.currentMode = mode;
        this.timeLeft = this.modes[mode].duration;
        this.reset();
        this.updateDisplay();

        // Add animation
        document.querySelector('.timer-display').classList.add('pulse');
        setTimeout(() => {
            document.querySelector('.timer-display').classList.remove('pulse');
        }, 1000);
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startBtn.disabled = true;
            this.pauseBtn.disabled = false;

            this.interval = setInterval(() => {
                this.timeLeft--;
                this.updateDisplay();

                if (this.timeLeft <= 0) {
                    this.completeSession();
                }
            }, 1000);
        }
    }

    pause() {
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        clearInterval(this.interval);
    }

    reset() {
        this.pause();
        this.timeLeft = this.modes[this.currentMode].duration;
        this.updateDisplay();
    }

    completeSession() {
        this.pause();

        // Play notification sound
        this.playNotification();

        // Update stats
        if (this.currentMode === 'pomodoro') {
            this.completedPomodoros++;
            this.updateProductivityScore();
        }

        // Show notification
        this.showNotification();

        // Auto-switch to break after pomodoro
        if (this.currentMode === 'pomodoro') {
            const nextMode = this.completedPomodoros % 4 === 0 ? 'long-break' : 'short-break';
            setTimeout(() => {
                this.switchMode(nextMode);
                this.modeBtns.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.mode === nextMode);
                });
            }, 2000);
        }
    }

    playNotification() {
        // Create audio context for notification sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            console.log("Audio context not supported");
        }
    }

    showNotification() {
        const message = this.currentMode === 'pomodoro'
            ? 'Time for a break! 🎉'
            : 'Break time is over! Back to work! 💪';

        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: var(--surface);
                    color: var(--text);
                    padding: 1rem 2rem;
                    border-radius: var(--radius);
                    box-shadow: var(--shadow);
                    z-index: 1000;
                    animation: slideIn 0.3s ease;
                    border-left: 4px solid ${this.modes[this.currentMode].color};
                `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;

        this.minutesEl.textContent = minutes.toString().padStart(2, '0');
        this.secondsEl.textContent = seconds.toString().padStart(2, '0');

        // Update progress ring
        const totalDuration = this.modes[this.currentMode].duration;
        const progress = ((totalDuration - this.timeLeft) / totalDuration) * 100;
        this.setProgress(progress);

        // Update stats
        this.updateStats();
    }

    addTask() {
        const text = this.taskInput.value.trim();
        if (text) {
            this.createTaskElement(text);
            this.taskInput.value = '';
            this.saveTasks();
        }
    }

    createTaskElement(text, completed = false) {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item ${completed ? 'completed' : ''}`;
        taskItem.innerHTML = `
                    <div class="task-checkbox ${completed ? 'checked' : ''}"></div>
                    <span class="task-text">${text}</span>
                    <button class="delete-task">🗑️</button>
                `;

        const checkbox = taskItem.querySelector('.task-checkbox');
        const deleteBtn = taskItem.querySelector('.delete-task');
        const taskText = taskItem.querySelector('.task-text');

        checkbox.addEventListener('click', () => {
            completed = !completed;
            taskItem.classList.toggle('completed', completed);
            checkbox.classList.toggle('checked', completed);

            if (completed) {
                this.completedTasks++;
                this.updateProductivityScore();
            } else {
                this.completedTasks = Math.max(0, this.completedTasks - 1);
            }

            this.saveTasks();
            this.updateStats();
        });

        deleteBtn.addEventListener('click', () => {
            taskItem.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                if (!taskItem.classList.contains('completed')) {
                    this.completedTasks = Math.max(0, this.completedTasks - 1);
                }
                taskItem.remove();
                this.saveTasks();
                this.updateStats();
            }, 300);
        });

        this.tasksList.appendChild(taskItem);
    }

    updateProductivityScore() {
        // Calculate score based on completed pomodoros and tasks
        this.productivityScore = (this.completedPomodoros * 10) + (this.completedTasks * 5);
    }

    updateStats() {
        this.completedPomodorosEl.textContent = this.completedPomodoros;
        this.completedTasksEl.textContent = this.completedTasks;
        this.productivityScoreEl.textContent = this.productivityScore;
    }

    saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(item => {
            tasks.push({
                text: item.querySelector('.task-text').textContent,
                completed: item.classList.contains('completed')
            });
        });

        const data = {
            tasks,
            completedPomodoros: this.completedPomodoros,
            completedTasks: this.completedTasks,
            productivityScore: this.productivityScore
        };

        localStorage.setItem('pomodoro-data', JSON.stringify(data));
    }

    loadData() {
        const saved = localStorage.getItem('pomodoro-data');
        if (saved) {
            const data = JSON.parse(saved);

            // Load tasks
            data.tasks?.forEach(task => {
                this.createTaskElement(task.text, task.completed);
            });

            // Load stats
            this.completedPomodoros = data.completedPomodoros || 0;
            this.completedTasks = data.completedTasks || 0;
            this.productivityScore = data.productivityScore || 0;
            this.updateStats();
        }
    }
}

// Memory Game Class
class MemoryGame {
    constructor() {
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.score = 0;
        this.time = 0;
        this.timer = null;
        this.isPlaying = false;
        this.difficulty = 'medium';

        this.icons = [
            '⭐', '🎮', '🎨', '🚀', '🌈', '🎯', '🎸', '🎭',
            '🐶', '🐱', '🐼', '🐨', '🦁', '🐯', '🐮', '🐷',
            '🍎', '🍕', '🎂', '🍦', '☕', '🎁', '💎', '🔑',
            '🌍', '🌙', '🔥', '💧', '🌪️', '❄️', '⚡', '🌈'
        ];

        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        this.gameBoard = document.getElementById('gameBoard');
        this.timerEl = document.getElementById('timer');
        this.movesEl = document.getElementById('moves');
        this.scoreEl = document.getElementById('score');
        this.startBtn = document.getElementById('memoryStartBtn');
        this.resetBtn = document.getElementById('memoryResetBtn');
        this.difficultySelect = document.getElementById('difficulty');
        this.gameOverScreen = document.getElementById('gameOver');
        this.finalTimeEl = document.getElementById('finalTime');
        this.finalMovesEl = document.getElementById('finalMoves');
        this.finalScoreEl = document.getElementById('finalScore');
        this.ratingEl = document.getElementById('rating');
        this.playAgainBtn = document.getElementById('playAgainBtn');
    }

    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.difficultySelect.addEventListener('change', (e) => {
            this.difficulty = e.target.value;
        });
        this.playAgainBtn.addEventListener('click', () => {
            this.gameOverScreen.classList.add('hidden');
            this.resetGame();
        });
    }

    getGridSize() {
        const sizes = {
            easy: { cols: 4, rows: 4, pairs: 8 },
            medium: { cols: 5, rows: 4, pairs: 10 },
            hard: { cols: 6, rows: 5, pairs: 15 }
        };
        return sizes[this.difficulty];
    }

    generateCards() {
        const grid = this.getGridSize();
        const requiredIcons = this.icons.slice(0, grid.pairs);
        const cardPairs = [...requiredIcons, ...requiredIcons];

        // Shuffle cards using Fisher-Yates algorithm
        for (let i = cardPairs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]];
        }

        return cardPairs;
    }

    createCardElement(icon, index) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.dataset.icon = icon;

        card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">${icon}</div>
                        <div class="card-back">?</div>
                    </div>
                `;

        card.addEventListener('click', () => this.flipCard(card));
        return card;
    }

    renderBoard() {
        this.gameBoard.innerHTML = '';
        const grid = this.getGridSize();
        this.gameBoard.className = `game-board ${this.difficulty}`;

        this.cards.forEach((icon, index) => {
            const cardElement = this.createCardElement(icon, index);
            this.gameBoard.appendChild(cardElement);
        });
    }

    startGame() {
        if (this.isPlaying) return;

        this.isPlaying = true;
        this.startBtn.disabled = true;
        this.cards = this.generateCards();
        this.renderBoard();
        this.startTimer();

        // Add initial animation to cards
        setTimeout(() => {
            document.querySelectorAll('.card').forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.add('bounce');
                setTimeout(() => card.classList.remove('bounce'), 600);
            });
        }, 100);
    }

    resetGame() {
        this.stopTimer();
        this.isPlaying = false;
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.score = 0;
        this.time = 0;
        this.startBtn.disabled = false;

        this.updateDisplay();
        this.gameBoard.innerHTML = '';
        this.gameOverScreen.classList.add('hidden');
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.time++;
            this.updateDisplay();
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    flipCard(card) {
        if (!this.isPlaying) return;
        if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
        if (this.flippedCards.length >= 2) return;

        card.classList.add('flipped');
        this.flippedCards.push(card);

        if (this.flippedCards.length === 2) {
            this.moves++;
            this.checkMatch();
        }

        this.updateDisplay();
    }

    checkMatch() {
        const [card1, card2] = this.flippedCards;
        const isMatch = card1.dataset.icon === card2.dataset.icon;

        if (isMatch) {
            this.handleMatch();
        } else {
            this.handleMismatch();
        }
    }

    handleMatch() {
        this.flippedCards.forEach(card => {
            card.classList.add('matched');
            card.style.animationDelay = '0s';
            card.classList.add('bounce');
            setTimeout(() => card.classList.remove('bounce'), 600);
        });

        this.matchedPairs++;
        this.score += 100;

        // Bonus for consecutive matches
        if (this.matchedPairs % 5 === 0) {
            this.score += 200;
            this.showBonus('Combo Bonus! +200');
        }

        this.flippedCards = [];

        if (this.matchedPairs === this.getGridSize().pairs) {
            setTimeout(() => this.endGame(), 500);
        }
    }

    handleMismatch() {
        setTimeout(() => {
            this.flippedCards.forEach(card => {
                card.classList.remove('flipped');
            });
            this.flippedCards = [];
        }, 1000);
    }

    showBonus(message) {
        const bonus = document.createElement('div');
        bonus.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: var(--accent);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: var(--radius);
                    font-weight: 700;
                    font-size: 1.5rem;
                    z-index: 1000;
                    animation: bounce 0.6s ease;
                `;
        bonus.textContent = message;

        document.body.appendChild(bonus);

        setTimeout(() => {
            bonus.style.animation = 'bounce 0.6s ease reverse';
            setTimeout(() => bonus.remove(), 600);
        }, 1500);
    }

    endGame() {
        this.stopTimer();
        this.isPlaying = false;

        // Calculate final score with time bonus
        const timeBonus = Math.max(0, 1000 - this.time * 2);
        const moveBonus = Math.max(0, 500 - this.moves * 5);
        this.score += timeBonus + moveBonus;

        this.showGameOver();
    }

    showGameOver() {
        this.finalTimeEl.textContent = this.formatTime(this.time);
        this.finalMovesEl.textContent = this.moves;
        this.finalScoreEl.textContent = this.score;
        this.ratingEl.textContent = this.calculateRating();

        this.gameOverScreen.classList.remove('hidden');
    }

    calculateRating() {
        const grid = this.getGridSize();
        const maxPairs = grid.pairs;
        const efficiency = (maxPairs / this.moves) * 100;
        const timePerCard = this.time / maxPairs;

        if (efficiency > 80 && timePerCard < 5) return '⭐⭐⭐⭐⭐';
        if (efficiency > 60 && timePerCard < 8) return '⭐⭐⭐⭐';
        if (efficiency > 40) return '⭐⭐⭐';
        return '⭐⭐';
    }

    updateDisplay() {
        this.timerEl.textContent = this.formatTime(this.time);
        this.movesEl.textContent = this.moves;
        this.scoreEl.textContent = this.score;
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}