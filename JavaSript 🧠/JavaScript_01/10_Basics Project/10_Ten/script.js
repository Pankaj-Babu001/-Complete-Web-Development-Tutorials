// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const startBtn = document.getElementById('startBtn');
const quizContainer = document.getElementById('quizContainer');
const form = document.getElementById('quizForm');
const questionsContainer = document.getElementById('questionsContainer');
const questionNav = document.getElementById('questionNav');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('resultContainer');
const container = document.querySelector('.container');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const currentQEl = document.getElementById('currentQ');
const answeredEl = document.getElementById('answered');
const timerEl = document.getElementById('timer');
const retryBtn = document.getElementById('retryBtn');
const shareBtn = document.getElementById('shareBtn');
const scoreRing = document.getElementById('scoreRing');
const scoreNumber = document.getElementById('scoreNumber');
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const resultPercentage = document.getElementById('resultPercentage');
const resultDetails = document.getElementById('resultDetails');
const correctCountEl = document.getElementById('correctCount');
const incorrectCountEl = document.getElementById('incorrectCount');
const timeTakenEl = document.getElementById('timeTaken');

// Quiz Data - 25 Questions
const quizData = [
    {
        question: "What is the maximum number of runs a batsman can score off a single legal delivery?",
        options: ["4", "6", "7", "8"],
        answer: "8",
        difficulty: "hard"
    },
    {
        question: "Which country won the first-ever Cricket World Cup in 1975?",
        options: ["Australia", "West Indies", "England", "India"],
        answer: "West Indies",
        difficulty: "medium"
    },
    {
        question: "What is the name of the highest individual award given to a Test match cricketer?",
        options: ["Man of the Match", "Compton-Miller Medal", "Sir Garfield Sobers Trophy", "Wisden Trophy"],
        answer: "Compton-Miller Medal",
        difficulty: "hard"
    },
    {
        question: "Who holds the record for the highest individual score in an ODI inning?",
        options: ["Sachin Tendulkar", "Chris Gayle", "Martin Guptill", "Rohit Sharma"],
        answer: "Rohit Sharma",
        difficulty: "medium"
    },
    {
        question: "In which year was the first-ever Test match played?",
        options: ["1777", "1877", "1900", "1882"],
        answer: "1877",
        difficulty: "hard"
    },
    {
        question: "What does the term 'Chinaman' refer to in cricket?",
        options: ["A batsman from China", "A left-arm unorthodox spinner", "A type of bouncer", "A defensive shot"],
        answer: "A left-arm unorthodox spinner",
        difficulty: "hard"
    },
    {
        question: "The 'Ashes' is a famous Test series played between which two nations?",
        options: ["India and Pakistan", "England and Australia", "South Africa and New Zealand", "West Indies and England"],
        answer: "England and Australia",
        difficulty: "easy"
    },
    {
        question: "Who is the only bowler to take 10 wickets in a single Test innings?",
        options: ["Shane Warne", "Muttiah Muralitharan", "Jim Laker", "Anil Kumble"],
        answer: "Jim Laker",
        difficulty: "hard"
    },
    {
        question: "What is the distance between the two popping creases on a cricket pitch?",
        options: ["20 yards", "22 yards", "58 feet", "24 yards"],
        answer: "22 yards",
        difficulty: "medium"
    },
    {
        question: "Which player has scored the most runs in international cricket across all formats?",
        options: ["Ricky Ponting", "Virat Kohli", "Kumar Sangakkara", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar",
        difficulty: "easy"
    },
    {
        question: "If a batsman is out 'Hit Wicket,' how did they get dismissed?",
        options: [
            "The ball hit the stumps after pitching",
            "The batsman accidentally broke the stumps with their body or bat",
            "The batsman was hit on the pads in line with the stumps",
            "The batsman obstructed the field"
        ],
        answer: "The batsman accidentally broke the stumps with their body or bat",
        difficulty: "medium"
    },
    {
        question: "Which team won the inaugural ICC World Test Championship in 2021?",
        options: ["India", "Australia", "New Zealand", "England"],
        answer: "New Zealand",
        difficulty: "medium"
    },
    {
        question: "What is the nickname of the Indian Premier League (IPL) team 'Royal Challengers Bangalore'?",
        options: ["The Super Kings", "The Challengers", "RCB", "Men in Red"],
        answer: "RCB",
        difficulty: "easy"
    },
    {
        question: "Who was the first batsman to score a double century in an ODI match?",
        options: ["Virender Sehwag", "Chris Gayle", "Sachin Tendulkar", "Martin Guptill"],
        answer: "Sachin Tendulkar",
        difficulty: "medium"
    },
    {
        question: "What is the term for a bowler taking three wickets in three consecutive deliveries?",
        options: ["Triple Strike", "A Hat-Trick", "Golden Wickets", "A Treble"],
        answer: "A Hat-Trick",
        difficulty: "easy"
    },
    {
        question: "Which of these fielding positions is located behind the batsman on the off-side?",
        options: ["Square Leg", "Mid-wicket", "Gully", "Third Man"],
        answer: "Third Man",
        difficulty: "medium"
    },
    {
        question: "Who has taken the most wickets in Test cricket history?",
        options: ["Shane Warne", "James Anderson", "Anil Kumble", "Muttiah Muralitharan"],
        answer: "Muttiah Muralitharan",
        difficulty: "easy"
    },
    {
        question: "The 'Boom Boom' nickname is associated with which Pakistani cricketer?",
        options: ["Wasim Akram", "Shahid Afridi", "Waqar Younis", "Shoaib Akhtar"],
        answer: "Shahid Afridi",
        difficulty: "easy"
    },
    {
        question: "In a T20 international, how many overs can a single bowler bowl maximum?",
        options: ["5", "4", "10", "8"],
        answer: "4",
        difficulty: "medium"
    },
    {
        question: "What does DRS stand for in cricket?",
        options: ["Decision Review System", "Digital Referral Service", "Delivery Review Signal", "Dismissal Recording System"],
        answer: "Decision Review System",
        difficulty: "easy"
    },
    {
        question: "Which Indian cricketer is known as the 'Wall'?",
        options: ["Sunil Gavaskar", "Virat Kohli", "Rahul Dravid", "Cheteshwar Pujara"],
        answer: "Rahul Dravid",
        difficulty: "easy"
    },
    {
        question: "Which country's national team is nicknamed 'The Proteas'?",
        options: ["New Zealand", "Sri Lanka", "South Africa", "Zimbabwe"],
        answer: "South Africa",
        difficulty: "medium"
    },
    {
        question: "What is the minimum number of players required to field a cricket team?",
        options: ["9", "10", "11", "8"],
        answer: "11",
        difficulty: "easy"
    },
    {
        question: "Who captained the Indian team to its second World Cup victory in 2011?",
        options: ["Sourav Ganguly", "M.S. Dhoni", "Virat Kohli", "Rahul Dravid"],
        answer: "M.S. Dhoni",
        difficulty: "easy"
    },
    {
        question: "If a match ends with the scores level and the batting side has lost all its wickets, the result is a:",
        options: ["Win for the batting side", "Win for the bowling side", "Tie", "Draw"],
        answer: "Tie",
        difficulty: "medium"
    }
];

// State
let currentQuestion = 0;
let userAnswers = {};
let startTime = null;
let timerInterval = null;
let totalSeconds = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createQuestions();
    createNavigationDots();
});

// Start Quiz
startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        quizContainer.classList.add('active');
        startTimer();
    }, 800);
});

// Create Questions
function createQuestions() {
    quizData.forEach((data, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = `question-card ${index === 0 ? 'active' : ''}`;
        questionCard.dataset.question = index;

        questionCard.innerHTML = `
            <div class="question-header">
                <span class="question-number">Q${index + 1}</span>
                <span class="difficulty-badge ${data.difficulty}">${data.difficulty}</span>
            </div>
            <h3 class="question-text">${data.question}</h3>
            <div class="options">
                ${data.options.map((option, i) => `
                    <label class="option">
                        <input type="radio" name="q${index}" value="${option}">
                        <span class="option-label">
                            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                            <span class="option-text">${option}</span>
                        </span>
                    </label>
                `).join('')}
            </div>
        `;

        questionsContainer.appendChild(questionCard);

        // Add event listeners to radio buttons
        const radioButtons = questionCard.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', handleAnswerSelect);
        });
    });
}

// Create Navigation Dots
function createNavigationDots() {
    quizData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `nav-dot ${index === 0 ? 'active' : ''}`;
        dot.textContent = index + 1;
        dot.addEventListener('click', () => goToQuestion(index));
        questionNav.appendChild(dot);
    });
}

// Handle Answer Selection
function handleAnswerSelect(e) {
    const questionIndex = parseInt(e.target.name.replace('q', ''));
    userAnswers[questionIndex] = e.target.value;
    updateProgress();
    updateNavigationDots();
}

// Update Progress
function updateProgress() {
    const answeredCount = Object.keys(userAnswers).length;
    const progress = (answeredCount / quizData.length) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';
    answeredEl.textContent = answeredCount;
}

// Update Navigation Dots
function updateNavigationDots() {
    const dots = questionNav.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
        if (userAnswers.hasOwnProperty(index)) {
            dot.classList.add('answered');
        } else {
            dot.classList.remove('answered');
        }
    });
}

// Navigation Functions
function goToQuestion(index) {
    if (index < 0 || index >= quizData.length) return;

    const questions = questionsContainer.querySelectorAll('.question-card');
    const dots = questionNav.querySelectorAll('.nav-dot');

    // Update questions
    questions[currentQuestion].classList.remove('active');
    questions[currentQuestion].classList.add('prev');
    questions[index].classList.add('active');
    questions[index].classList.remove('prev');

    // Update dots
    dots[currentQuestion].classList.remove('active');
    dots[index].classList.add('active');

    currentQuestion = index;
    currentQEl.textContent = currentQuestion + 1;

    // Update buttons
    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

prevBtn.addEventListener('click', () => {
    goToQuestion(currentQuestion - 1);
});

nextBtn.addEventListener('click', () => {
    goToQuestion(currentQuestion + 1);
});

// Timer
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        totalSeconds = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Form Submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Object.keys(userAnswers).length < quizData.length) {
        showNotification('⚠️ Please answer all questions before submitting!', 'warning');
        highlightUnansweredQuestions();
        return;
    }

    stopTimer();
    calculateResults();
});

// Highlight Unanswered Questions
function highlightUnansweredQuestions() {
    const dots = questionNav.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
        if (!userAnswers.hasOwnProperty(index)) {
            dot.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                dot.style.animation = '';
            }, 500);
        }
    });
}

// Calculate Results
function calculateResults() {
    let correctCount = 0;

    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            correctCount++;
        }
    });

    displayResults(correctCount);
}

// Display Results
function displayResults(score) {
    container.classList.add('results-shown');
    resultContainer.classList.add('show');

    setTimeout(() => {
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Update score
    scoreNumber.textContent = score;
    correctCountEl.textContent = score;
    incorrectCountEl.textContent = quizData.length - score;

    // Format time
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timeTakenEl.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;

    // Animate score ring
    const percentage = (score / quizData.length) * 100;
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percentage / 100) * circumference;

    setTimeout(() => {
        scoreRing.style.strokeDashoffset = offset;
    }, 300);

    // Update gradient and messages
    updateResultDisplay(score, percentage);

    // Show detailed results
    displayDetailedResults();

    // Show confetti for high scores
    if (score >= quizData.length * 0.8) {
        showConfetti();
    }
}

// Update Result Display
function updateResultDisplay(score, percentage) {
    const scoreGradient = document.getElementById('scoreGradient');
    const stops = scoreGradient.querySelectorAll('stop');

    if (percentage === 100) {
        resultIcon.textContent = '🏆';
        resultTitle.textContent = 'Perfect Score!';
        resultMessage.textContent = 'Absolutely Outstanding! You are a true cricket legend! 🎉';
        stops[0].setAttribute('stop-color', '#00B894');
        stops[1].setAttribute('stop-color', '#00A86B');
    } else if (percentage >= 80) {
        resultIcon.textContent = '⭐';
        resultTitle.textContent = 'Excellent Performance!';
        resultMessage.textContent = 'Fantastic! You really know your cricket! 👏';
        stops[0].setAttribute('stop-color', '#00B894');
        stops[1].setAttribute('stop-color', '#00A86B');
    } else if (percentage >= 60) {
        resultIcon.textContent = '😊';
        resultTitle.textContent = 'Good Job!';
        resultMessage.textContent = 'Well done! Keep learning more about cricket! 👍';
        stops[0].setAttribute('stop-color', '#FDCB6E');
        stops[1].setAttribute('stop-color', '#F39C12');
    } else if (percentage >= 40) {
        resultIcon.textContent = '📚';
        resultTitle.textContent = 'Keep Practicing!';
        resultMessage.textContent = 'You can do better! Study more cricket history! 💪';
        stops[0].setAttribute('stop-color', '#FF7675');
        stops[1].setAttribute('stop-color', '#D63031');
    } else {
        resultIcon.textContent = '🎯';
        resultTitle.textContent = 'Try Again!';
        resultMessage.textContent = 'Don\'t give up! Practice makes perfect! 🔄';
        stops[0].setAttribute('stop-color', '#FF7675');
        stops[1].setAttribute('stop-color', '#D63031');
    }

    resultPercentage.textContent = `You scored ${percentage.toFixed(1)}% • ${getPerformanceLevel(percentage)}`;
}

// Get Performance Level
function getPerformanceLevel(percentage) {
    if (percentage === 100) return 'Perfect';
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Fair';
    return 'Needs Improvement';
}

// Display Detailed Results
function displayDetailedResults() {
    resultDetails.innerHTML = '';

    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.answer;

        const detailItem = document.createElement('div');
        detailItem.className = 'detail-item';

        detailItem.innerHTML = `
            <div class="detail-number">${index + 1}</div>
            <div class="detail-content">
                <div class="detail-question">${question.question}</div>
                <div class="detail-answer">
                    ${isCorrect
            ? `✓ Your answer: <strong>${userAnswer}</strong>`
            : `✗ Your answer: ${userAnswer || 'Not answered'}<br>✓ Correct answer: <strong>${question.answer}</strong>`
        }
                </div>
            </div>
            <div class="detail-status ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓' : '✗'}
            </div>
        `;

        resultDetails.appendChild(detailItem);
    });
}

// Retry Quiz
retryBtn.addEventListener('click', () => {
    // Reset state
    currentQuestion = 0;
    userAnswers = {};
    totalSeconds = 0;
    startTime = null;

    // Reset UI
    container.classList.remove('results-shown');
    resultContainer.classList.remove('show');
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    currentQEl.textContent = '1';
    answeredEl.textContent = '0';
    timerEl.textContent = '00:00';
    scoreRing.style.strokeDashoffset = '565.48';

    // Reset form
    form.reset();

    // Reset navigation
    const questions = questionsContainer.querySelectorAll('.question-card');
    const dots = questionNav.querySelectorAll('.nav-dot');

    questions.forEach((q, i) => {
        q.classList.remove('active', 'prev');
        if (i === 0) q.classList.add('active');
    });

    dots.forEach((d, i) => {
        d.classList.remove('active', 'answered');
        if (i === 0) d.classList.add('active');
    });

    // Reset buttons
    prevBtn.disabled = true;
    nextBtn.style.display = 'flex';
    submitBtn.style.display = 'none';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Restart timer
    startTimer();

    showNotification('🎯 Ready for another try? Good luck! 🍀', 'info');
});

// Share Score
shareBtn.addEventListener('click', () => {
    const score = parseInt(scoreNumber.textContent);
    const percentage = ((score / quizData.length) * 100).toFixed(1);
    const shareText = `🏏 I scored ${score}/${quizData.length} (${percentage}%) in the Cricket Quiz Challenge! Can you beat my score? 🎯`;

    if (navigator.share) {
        navigator.share({
            title: 'Cricket Quiz Challenge',
            text: shareText
        }).catch(err => console.log('Error sharing:', err));
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('📋 Score copied to clipboard!', 'success');
        });
    }
});

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const colors = {
        success: 'linear-gradient(135deg, #00B894, #00A86B)',
        warning: 'linear-gradient(135deg, #FF6B35, #FF5722)',
        info: 'linear-gradient(135deg, #667eea, #764ba2)'
    };

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 18px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 15px;
        z-index: 10000;
        animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2.6s;
        max-width: 350px;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Confetti Effect
function showConfetti() {
    const colors = ['#FFD700', '#FF6B35', '#00A86B', '#00B894', '#667eea', '#764ba2'];
    const confettiContainer = document.getElementById('confettiContainer');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.cssText = `
            left: ${Math.random() * 100}%;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation-delay: ${Math.random() * 2}s;
            animation-duration: ${2 + Math.random() * 2}s;
        `;

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);