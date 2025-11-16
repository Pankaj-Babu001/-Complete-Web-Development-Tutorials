// Enhanced version with status tracking
class AppInitializer {
    constructor() {
        this.initialized = false;
        this.initPromise = this.initialize();
    }

    async initialize() {
        try {
            console.log('Starting background initialization...');

            // Initialize multiple services in parallel
            const [config, user, preferences] = await Promise.all([
                this.loadConfig(),
                this.loadUser(),
                this.loadPreferences()
            ]);

            this.initialized = true;
            console.log('Background initialization complete');
            return { config, user, preferences };
        } catch (error) {
            console.error('Initialization failed:', error);
            throw error;
        }
    }

    async loadConfig() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return { theme: 'dark', language: 'en' };
    }

    async loadUser() {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return { name: 'John Doe', id: 123 };
    }

    async loadPreferences() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { notifications: true, emailUpdates: false };
    }

    async whenReady() {
        return this.initPromise;
    }
}

// Usage
console.log('App starting...');
const app = new AppInitializer();

// UI can be used immediately
console.log('UI is ready and responsive');

// Check initialization status later
app.whenReady().then(() => {
    console.log('App fully initialized');
});