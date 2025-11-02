
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
    if (document.querySelector('.pomodoro-app.active')) {
        new PomodoroTimer();
    }
    if (document.querySelector('.memory-app')) {
        new MemoryGame();
    }
    if (document.querySelector('.drawing-app')) {
        new DrawingApp();
    }
});

// Drawing App Class
class DrawingApp {
    constructor() {
        this.canvas = document.getElementById('drawingCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.lastX = 0;
        this.lastY = 0;
        this.currentTool = 'pencil';
        this.currentColor = '#000000';
        this.brushSize = 5;
        this.opacity = 1;
        this.history = [];
        this.historyIndex = -1;
        this.startTime = null;
        this.timerInterval = null;
        this.strokeCount = 0;
        this.drawingScore = 0;

        this.initializeElements();
        this.setupEventListeners();
        this.setupCanvas();
        this.loadGallery();
        this.startTimer();
    }

    initializeElements() {
        // Tool buttons
        this.toolBtns = document.querySelectorAll('.tool-btn');
        this.colorBtns = document.querySelectorAll('.color-btn');
        this.colorPicker = document.getElementById('colorPicker');

        // Control buttons
        this.saveBtn = document.getElementById('saveBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.undoBtn = document.getElementById('undoBtn');
        this.redoBtn = document.getElementById('redoBtn');

        // Sliders
        this.brushSizeSlider = document.getElementById('brushSize');
        this.opacitySlider = document.getElementById('opacity');
        this.brushSizeValue = document.getElementById('brushSizeValue');
        this.opacityValue = document.getElementById('opacityValue');

        // Stats
        this.drawingTimeEl = document.getElementById('drawingTime');
        this.strokeCountEl = document.getElementById('strokeCount');
        this.drawingScoreEl = document.getElementById('drawingScore');

        // Gallery
        this.galleryGrid = document.getElementById('galleryGrid');
    }

    setupEventListeners() {
        // Canvas events
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseout', () => this.stopDrawing());

        // Touch events for mobile
        this.canvas.addEventListener('touchstart', (e) => this.startDrawing(e));
        this.canvas.addEventListener('touchmove', (e) => this.draw(e));
        this.canvas.addEventListener('touchend', () => this.stopDrawing());

        // Tool selection
        this.toolBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.toolBtns.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.currentTool = e.currentTarget.dataset.tool;
            });
        });

        // Color selection
        this.colorBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.colorBtns.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.currentColor = e.currentTarget.dataset.color;
                this.colorPicker.value = this.currentColor;
            });
        });

        // Color picker
        this.colorPicker.addEventListener('input', (e) => {
            this.currentColor = e.target.value;
            this.colorBtns.forEach(b => b.classList.remove('active'));
        });

        // Brush size
        this.brushSizeSlider.addEventListener('input', (e) => {
            this.brushSize = parseInt(e.target.value);
            this.brushSizeValue.textContent = `${this.brushSize}px`;
        });

        // Opacity
        this.opacitySlider.addEventListener('input', (e) => {
            this.opacity = parseInt(e.target.value) / 100;
            this.opacityValue.textContent = `${parseInt(e.target.value)}%`;
        });

        // Control buttons
        this.saveBtn.addEventListener('click', () => this.saveDrawing());
        this.clearBtn.addEventListener('click', () => this.clearCanvas());
        this.undoBtn.addEventListener('click', () => this.undo());
        this.redoBtn.addEventListener('click', () => this.redo());
    }

    setupCanvas() {
        // Set canvas background
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Save initial state to history
        this.saveToHistory();
    }

    startDrawing(e) {
        this.isDrawing = true;
        const pos = this.getMousePos(e);
        [this.lastX, this.lastY] = [pos.x, pos.y];

        // For shape tools, store starting position
        if (['rectangle', 'circle', 'line'].includes(this.currentTool)) {
            this.startX = pos.x;
            this.startY = pos.y;
        }

        // For text tool, prompt for input
        if (this.currentTool === 'text') {
            this.addText(pos.x, pos.y);
            this.isDrawing = false;
            return;
        }
    }

    draw(e) {
        if (!this.isDrawing) return;

        const pos = this.getMousePos(e);
        const currentX = pos.x;
        const currentY = pos.y;

        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.globalAlpha = this.opacity;

        switch (this.currentTool) {
            case 'pencil':
                this.ctx.lineWidth = this.brushSize;
                this.ctx.strokeStyle = this.currentColor;
                this.ctx.beginPath();
                this.ctx.moveTo(this.lastX, this.lastY);
                this.ctx.lineTo(currentX, currentY);
                this.ctx.stroke();
                [this.lastX, this.lastY] = [currentX, currentY];
                break;

            case 'eraser':
                this.ctx.lineWidth = this.brushSize;
                this.ctx.strokeStyle = 'white';
                this.ctx.beginPath();
                this.ctx.moveTo(this.lastX, this.lastY);
                this.ctx.lineTo(currentX, currentY);
                this.ctx.stroke();
                [this.lastX, this.lastY] = [currentX, currentY];
                break;

            case 'line':
                // Redraw canvas from history to remove previous line preview
                this.redrawFromHistory();
                this.ctx.strokeStyle = this.currentColor;
                this.ctx.lineWidth = this.brushSize;
                this.ctx.beginPath();
                this.ctx.moveTo(this.startX, this.startY);
                this.ctx.lineTo(currentX, currentY);
                this.ctx.stroke();
                break;

            case 'rectangle':
                this.redrawFromHistory();
                this.ctx.strokeStyle = this.currentColor;
                this.ctx.lineWidth = this.brushSize;
                this.ctx.strokeRect(
                    this.startX,
                    this.startY,
                    currentX - this.startX,
                    currentY - this.startY
                );
                break;

            case 'circle':
                this.redrawFromHistory();
                this.ctx.strokeStyle = this.currentColor;
                this.ctx.lineWidth = this.brushSize;
                const radius = Math.sqrt(
                    Math.pow(currentX - this.startX, 2) +
                    Math.pow(currentY - this.startY, 2)
                );
                this.ctx.beginPath();
                this.ctx.arc(this.startX, this.startY, radius, 0, Math.PI * 2);
                this.ctx.stroke();
                break;
        }
    }

    stopDrawing() {
        if (!this.isDrawing) return;

        this.isDrawing = false;

        // Save to history after completing a drawing action
        if (this.currentTool !== 'text') {
            this.strokeCount++;
            this.updateDrawingScore();
            this.saveToHistory();
        }
    }

    getMousePos(e) {
        const rect = this.canvas.getBoundingClientRect();
        let clientX, clientY;

        if (e.type.includes('touch')) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    addText(x, y) {
        const text = prompt('Enter text:');
        if (text) {
            this.ctx.font = `${this.brushSize * 4}px Arial`;
            this.ctx.fillStyle = this.currentColor;
            this.ctx.globalAlpha = this.opacity;
            this.ctx.fillText(text, x, y);

            this.strokeCount++;
            this.updateDrawingScore();
            this.saveToHistory();
        }
    }

    redrawFromHistory() {
        if (this.historyIndex >= 0) {
            const img = new Image();
            img.onload = () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.drawImage(img, 0, 0);
            };
            img.src = this.history[this.historyIndex];
        }
    }

    saveToHistory() {
        // Remove any future states if we're not at the end of history
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }

        // Add current state to history
        this.history.push(this.canvas.toDataURL());
        this.historyIndex++;

        // Update undo/redo buttons
        this.updateHistoryButtons();
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.redrawFromHistory();
            this.updateHistoryButtons();
        }
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.redrawFromHistory();
            this.updateHistoryButtons();
        }
    }

    updateHistoryButtons() {
        this.undoBtn.disabled = this.historyIndex <= 0;
        this.redoBtn.disabled = this.historyIndex >= this.history.length - 1;
    }

    clearCanvas() {
        if (confirm('Are you sure you want to clear the canvas?')) {
            this.ctx.fillStyle = 'white';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.saveToHistory();
            this.strokeCount = 0;
            this.updateDrawingScore();
            this.updateStats();
        }
    }

    saveDrawing() {
        const dataURL = this.canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `drawing-${new Date().toISOString().slice(0, 19)}.png`;
        link.href = dataURL;
        link.click();

        // Save to gallery
        this.saveToGallery(dataURL);

        // Update score
        this.drawingScore += 50;
        this.updateStats();
    }

    saveToGallery(dataURL) {
        const drawings = JSON.parse(localStorage.getItem('drawing-gallery') || '[]');
        const drawing = {
            id: Date.now(),
            dataURL: dataURL,
            date: new Date().toLocaleString(),
            strokes: this.strokeCount,
            score: this.drawingScore
        };

        drawings.push(drawing);
        localStorage.setItem('drawing-gallery', JSON.stringify(drawings));
        this.loadGallery();
    }

    loadGallery() {
        const drawings = JSON.parse(localStorage.getItem('drawing-gallery') || '[]');
        this.galleryGrid.innerHTML = '';

        drawings.slice(-6).reverse().forEach(drawing => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                        <img src="${drawing.dataURL}" alt="Drawing" class="gallery-image">
                        <div class="gallery-info">
                            <span>${drawing.date}</span>
                            <span>${drawing.strokes} strokes</span>
                        </div>
                    `;

            galleryItem.addEventListener('click', () => {
                if (confirm('Load this drawing?')) {
                    const img = new Image();
                    img.onload = () => {
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        this.ctx.drawImage(img, 0, 0);
                        this.saveToHistory();
                    };
                    img.src = drawing.dataURL;
                }
            });

            this.galleryGrid.appendChild(galleryItem);
        });
    }

    startTimer() {
        this.startTime = new Date();
        this.timerInterval = setInterval(() => {
            const now = new Date();
            const diff = Math.floor((now - this.startTime) / 1000);
            const minutes = Math.floor(diff / 60);
            const seconds = diff % 60;
            this.drawingTimeEl.textContent =
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    updateDrawingScore() {
        // Score based on strokes and time (simplified)
        this.drawingScore = this.strokeCount * 10;
        this.updateStats();
    }

    updateStats() {
        this.strokeCountEl.textContent = this.strokeCount;
        this.drawingScoreEl.textContent = this.drawingScore;
    }
}

// Previous PomodoroTimer and MemoryGame classes would be here
// For brevity, I'm including simplified versions

class PomodoroTimer {
    constructor() {
        // Simplified implementation
        console.log("Pomodoro Timer Initialized");
        // Actual implementation would be here
    }
}

class MemoryGame {
    constructor() {
        // Simplified implementation
        console.log("Memory Game Initialized");
        // Actual implementation would be here
    }
}
