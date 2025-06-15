import { useState, useEffect } from "react";

const FAVORITES_KEY = "favorites";

export function useFavorites() {
    const [favorites, setFavorites] = useState<number[]>(() => {
        const stored = localStorage.getItem(FAVORITES_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (id: number) => {
        if (!favorites.includes(id)) setFavorites([...favorites, id]);
    };

    const removeFavorite = (id: number) => {
        setFavorites(favorites.filter(favId => favId !== id));
    };

    const toggleFavorite = (id: number) => {
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id);
    };

    const isFavorite = (id: number) => favorites.includes(id);

    return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}
