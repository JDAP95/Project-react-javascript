import { useState } from "react";
import { addFavorites, getFavorites, isFavorite, removeFavorite } from "../services/catsFavService";

function useFavCats() {
    const [favorites, setFavorites] = useState(() => getFavorites());

    const addFav = (id, url) => {
        addFavorites(id, url);
        setFavorites(getFavorites());
    };

    const removeFav = (id) => {
        removeFavorite(id);
        setFavorites(getFavorites());
    };

    const isFav = (id) => isFavorite(id);

    return { favorites, addFav, removeFav, isFav };
}

export default useFavCats;