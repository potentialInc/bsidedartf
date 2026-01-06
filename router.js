// Simple Client-Side Router with Draft Support
// Each draft can have different routing structure
const Router = {
    currentDraft: 1, // Default draft
    
    // Draft-based routes - Each draft can have completely different route structure
    draftRoutes: {
        // Draft 1 routes (current structure)
        1: {
            'home': 'Draft1-home.html',
            'artwork': 'Draft1-Artwork view.html',
            'artist': 'Draft1-Artist.html',
            'settings': 'Draft1-setting.html'
        },
        // Draft 2 routes
        2: {
            'home': 'Draft2-home.html',
            'artwork': 'Draft2-Artwork view.html',
            'artist': 'Draft2-Artist.html',
            'settings': 'Draft2-setting.html'
        },
        // Draft 3 routes
        3: {
            'home': 'Draft3-home.html',
            'artwork': 'Draft3-Artwork view.html',
            'artist': 'Draft3-Artist.html',
            'settings': 'Draft3-setting.html'
        }
    },

    // Set current draft (stored in sessionStorage)
    setDraft: function(draftNumber) {
        this.currentDraft = draftNumber;
        sessionStorage.setItem('currentDraft', draftNumber);
    },

    // Get current draft
    getDraft: function() {
        const stored = sessionStorage.getItem('currentDraft');
        return stored ? parseInt(stored) : 1;
    },

    // Navigate to a specific draft
    navigateToDraft: function(draftNumber) {
        this.setDraft(draftNumber);
        const routes = this.draftRoutes[draftNumber];
        if (routes && routes['home']) {
            window.location.href = routes['home'];
        } else {
            console.error(`Draft ${draftNumber} home route not found`);
            // Fallback: try direct file name
            window.location.href = `Draft${draftNumber}-home.html`;
        }
    },

    // Navigate within current draft
    navigate: function(route) {
        const draft = this.getDraft();
        const routes = this.draftRoutes[draft];
        if (routes && routes[route]) {
            window.location.href = routes[route];
        } else {
            console.warn(`Route "${route}" not found for draft ${draft}`);
            console.warn(`Available routes for draft ${draft}:`, Object.keys(routes || {}));
        }
    },

    // Add custom route for a specific draft (for future use)
    addRoute: function(draftNumber, routeName, fileName) {
        if (!this.draftRoutes[draftNumber]) {
            this.draftRoutes[draftNumber] = {};
        }
        this.draftRoutes[draftNumber][routeName] = fileName;
    },

    // Get all routes for a specific draft
    getRoutes: function(draftNumber) {
        return this.draftRoutes[draftNumber] || {};
    },

    // Helper function for onclick handlers
    go: function(route) {
        this.navigate(route);
    },

    // Navigate back to draft selector
    goToDraftSelector: function() {
        window.location.href = 'draftchoice.html';
    }
};

// Make Router globally available
window.Router = Router;

