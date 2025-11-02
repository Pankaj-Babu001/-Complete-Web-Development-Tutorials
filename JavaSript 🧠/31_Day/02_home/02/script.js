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
        this.loadTheme();
    }

    initializeElements() {
        this.gameBoard = document.getElementById('gameBoard');
        this.timerEl = document.getElementById('timer');
        this.movesEl = document.getElementById('moves');
        this.scoreEl = document.getElementById('score');
        this.startBtn = document.getElementById('startBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.difficultySelect = document.getElementById('difficulty');
        this.gameOverScreen = document.getElementById('gameOver');
        this.finalTimeEl = document.getElementById('finalTime');
        this.finalMovesEl = document.getElementById('finalMoves');
        this.finalScoreEl = document.getElementById('finalScore');
        this.ratingEl = document.getElementById('rating');
        this.playAgainBtn = document.getElementById('playAgainBtn');
        this.themeBtns = document.querySelectorAll('.theme-btn');
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
        
        // Theme switcher
        this.themeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const theme = e.target.dataset.theme;
                this.switchTheme(theme);
                this.themeBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    switchTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('memory-theme', theme);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('memory-theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        this.themeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === savedTheme);
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

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MemoryGame();
});