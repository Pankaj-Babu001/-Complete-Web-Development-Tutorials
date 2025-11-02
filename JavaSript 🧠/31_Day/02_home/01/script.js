class PomodoroTimer {
    constructor() {
        this.modes = {
            pomodoro: { duration: 25 * 60, color: '#e74c3c' },
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
        
        // Theme elements
        this.themeBtns = document.querySelectorAll('.theme-btn');
        
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
        
        // Theme selection
        this.themeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const theme = e.target.dataset.theme;
                this.switchTheme(theme);
                this.themeBtns.forEach(b => b.classList.remove('active'));
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

    switchTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('pomodoro-theme', theme);
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
            taskText.style.textDecoration = completed ? 'line-through' : 'none';
            
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
                taskItem.remove();
                this.saveTasks();
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
        }
        
        // Load theme
        const savedTheme = localStorage.getItem('pomodoro-theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        this.themeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === savedTheme);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PomodoroTimer();
});