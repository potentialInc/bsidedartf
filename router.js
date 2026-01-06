// Simple Client-Side Router
const Router = {
    currentDraft: 2, // Default draft
    
    // Routes for Draft 2
    routes: {
        'home': 'Draft2-home.html',
        'artwork': 'Draft2-Artwork view.html',
        'artist': 'Draft2-Artist.html',
        'settings': 'Draft2-setting.html'
    },

    // Set current draft (stored in sessionStorage)
    setDraft: function(draftNumber) {
        this.currentDraft = draftNumber;
        sessionStorage.setItem('currentDraft', draftNumber);
    },

    // Get current draft
    getDraft: function() {
        const stored = sessionStorage.getItem('currentDraft');
        return stored ? parseInt(stored) : 2;
    },

    // Navigate within current draft
    navigate: function(route) {
        if (this.routes[route]) {
            window.location.href = this.routes[route];
        } else {
            console.warn(`Route "${route}" not found`);
            console.warn(`Available routes:`, Object.keys(this.routes));
        }
    },

    // Helper function for onclick handlers
    go: function(route) {
        this.navigate(route);
    }
};

// Make Router globally available
window.Router = Router;

