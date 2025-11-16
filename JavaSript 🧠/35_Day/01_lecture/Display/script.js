let allUsers = [];
let filteredUsers = [];
let currentSuggestions = [];
let selectedSuggestionIndex = -1;

// Debounce function to limit API calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Show loading overlay
function showLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.add('active');
}

// Hide loading overlay
function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.remove('active');
}

// Show search loading indicator
function showSearchLoading() {
    const container = document.getElementById('users-container');
    container.innerHTML = '<div class="search-loading">🔍 Searching users...</div>';
}

// Fetch GitHub users
async function fetchGitHubUsers() {
    showLoadingOverlay();
    const container = document.getElementById('users-container');

    try {
        const response = await fetch('https://api.github.com/users');

        if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
        }

        allUsers = await response.json();
        filteredUsers = [...allUsers];
        displayUsers(allUsers);

        // Set initial sort
        sortUsers('name-asc');
    } catch (error) {
        console.error('Error fetching users:', error);
        container.innerHTML = `
            <div class="error" role="alert">
                ⚠️ Oops! Something went wrong.<br>
                <small>${error.message}</small><br>
                <button class="retry-btn" onclick="fetchGitHubUsers()">Try Again</button>
            </div>
        `;
    } finally {
        hideLoadingOverlay();
    }
}

// Display users in the container
function displayUsers(users) {
    const container = document.getElementById('users-container');

    if (users.length === 0) {
        container.innerHTML = '<div class="no-results">🔍 No users found. Try a different search.</div>';
        return;
    }

    container.innerHTML = users.map((user, index) => `
        <div class="user-card" 
             tabindex="0" 
             role="button"
             aria-label="GitHub user ${user.login}, User ID: ${user.id}"
             onclick="openUserProfile('${user.html_url}')"
             onkeydown="handleUserCardKeydown(event, '${user.html_url}')"
             style="animation-delay: ${index * 0.05}s">
            <div class="avatar-container">
                <img src="${user.avatar_url}" alt="${user.login}'s avatar" class="avatar">
                <div class="user-badge">#${user.id}</div>
            </div>
            <h2 class="username">${user.login}</h2>
            <p class="user-id">User ID: ${user.id}</p>
            <a href="${user.html_url}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="profile-link"
               aria-label="Visit ${user.login}'s GitHub profile"
               onclick="event.stopPropagation()">
                View Profile →
            </a>
        </div>
    `).join('');
}

// Handle keyboard navigation for user cards
function handleUserCardKeydown(event, url) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openUserProfile(url);
    }
}

// Open user profile in new tab
function openUserProfile(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Search functionality with debouncing
const performSearch = debounce((searchTerm) => {
    if (searchTerm.trim() === '') {
        filteredUsers = [...allUsers];
        displayUsers(filteredUsers);
        hideSuggestions();
        return;
    }

    showSearchLoading();

    // Filter users based on search term
    filteredUsers = allUsers.filter(user =>
        user.login.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toString().includes(searchTerm)
    );

    // Update suggestions
    updateSearchSuggestions(searchTerm);

    // Display filtered results
    displayUsers(filteredUsers);
}, 300);

// Update search suggestions
function updateSearchSuggestions(searchTerm) {
    const suggestionsContainer = document.getElementById('searchSuggestions');

    if (searchTerm.trim() === '') {
        hideSuggestions();
        return;
    }

    // Get matching users for suggestions
    currentSuggestions = allUsers
        .filter(user =>
            user.login.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5);

    if (currentSuggestions.length > 0) {
        suggestionsContainer.innerHTML = currentSuggestions
            .map((user, index) => `
                <div class="search-suggestion ${index === 0 ? 'active' : ''}" 
                     tabindex="0"
                     role="button"
                     onclick="selectSuggestion('${user.login}')"
                     onkeydown="handleSuggestionKeydown(event, ${index}, '${user.login}')">
                    ${user.login}
                </div>
            `).join('');
        suggestionsContainer.style.display = 'block';
        selectedSuggestionIndex = 0;
    } else {
        hideSuggestions();
    }
}

// Hide search suggestions
function hideSuggestions() {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    suggestionsContainer.style.display = 'none';
    selectedSuggestionIndex = -1;
}

// Handle keyboard navigation for suggestions
function handleSuggestionKeydown(event, index, username) {
    const suggestions = document.querySelectorAll('.search-suggestion');

    switch(event.key) {
        case 'ArrowDown':
            event.preventDefault();
            selectedSuggestionIndex = (index + 1) % suggestions.length;
            updateActiveSuggestion();
            break;
        case 'ArrowUp':
            event.preventDefault();
            selectedSuggestionIndex = (index - 1 + suggestions.length) % suggestions.length;
            updateActiveSuggestion();
            break;
        case 'Enter':
            event.preventDefault();
            selectSuggestion(username);
            break;
        case 'Escape':
            hideSuggestions();
            document.getElementById('searchInput').focus();
            break;
    }
}

// Update active suggestion styling
function updateActiveSuggestion() {
    const suggestions = document.querySelectorAll('.search-suggestion');
    suggestions.forEach((suggestion, index) => {
        if (index === selectedSuggestionIndex) {
            suggestion.classList.add('active');
            suggestion.focus();
        } else {
            suggestion.classList.remove('active');
        }
    });
}

// Select a search suggestion
function selectSuggestion(username) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = username;
    hideSuggestions();
    performSearch(username);
}

// Sort users based on selected criteria
function sortUsers(criteria) {
    const sortedUsers = [...filteredUsers];

    switch(criteria) {
        case 'name-asc':
            sortedUsers.sort((a, b) => a.login.localeCompare(b.login));
            break;
        case 'name-desc':
            sortedUsers.sort((a, b) => b.login.localeCompare(a.login));
            break;
        case 'id-asc':
            sortedUsers.sort((a, b) => a.id - b.id);
            break;
        case 'id-desc':
            sortedUsers.sort((a, b) => b.id - a.id);
            break;
        default:
            break;
    }

    displayUsers(sortedUsers);
}

// Initialize the app
function initApp() {
    // Fetch users on load
    fetchGitHubUsers();

    // Search input event listener
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    // Sort select event listener
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', (e) => {
        sortUsers(e.target.value);
    });

    // Keyboard navigation for search
    searchInput.addEventListener('keydown', (e) => {
        const suggestions = document.querySelectorAll('.search-suggestion');

        if (suggestions.length > 0) {
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    selectedSuggestionIndex = 0;
                    updateActiveSuggestion();
                    break;
                case 'Escape':
                    hideSuggestions();
                    break;
            }
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSuggestions();
        }
    });

    // Add focus trap for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && document.activeElement.classList.contains('search-suggestion')) {
            hideSuggestions();
        }
    });
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);