const STORAGE_KEY = 'favCats';

export function getFavorites() {
    try {
        const favorites = localStorage.getItem(STORAGE_KEY);

        if (!favorites) return [];

        return JSON.parse(favorites);
    } catch (error) {
        console.log('Error getting Favorites from Local Storage: ', error);
        return [];
    }
};

function setFavorites(favorites) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
        console.log('Error setting Favorites in Local Storage: ', error)
    }
};


export function addFavorites (id, url) {
    const favorites = getFavorites();
    if (!favorites.some(f => f.id === id)) {
        favorites.push({ id, url })
        setFavorites(favorites);
    }
}

export function removeFavorite(id) {
    let favorites = getFavorites();
    favorites = favorites.filter(f => f.id !== id);
    setFavorites(favorites);
}

export function isFavorite(id) {
    const favorites = getFavorites();
    return favorites.some(f => f.id === id);
}