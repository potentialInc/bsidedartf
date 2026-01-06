// Simple Client-Side Router
const Router = {
    routes: {
        'home': 'home.html',
        'artwork': 'Artwork view.html',
        'artist': 'Artist.html',
        'settings': 'setting.html'
    },

    navigate: function(route) {
        const fileName = this.routes[route];
        if (fileName) {
            window.location.href = fileName;
        } else {
            console.warn(`Route "${route}" not found`);
        }
    },

    // Helper function for onclick handlers
    go: function(route) {
        this.navigate(route);
    }
};

// Make Router globally available
window.Router = Router;

