import { createContext, useState } from "react";
import useFavCats from "../hooks/useFavCats";

const CatContext = createContext();

export const CatProvider = ({ children }) => {
    const { favorites, addFav, removeFav, isFav } = useFavCats();

    // Modal global (para raza)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalBreedInfo, setModalBreedInfo] = useState(null);

    // ---------------- MODAL ----------------

    const openBreedInfo = (cat) => {
        const breed = cat.breeds?.[0];
        if (!breed) return;

        setModalBreedInfo(breed);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <CatContext.Provider
            value={{ favorites, addFav, removeFav, isFav, modalOpen, modalBreedInfo, openBreedInfo, closeModal }}
        >
            {children}
        </CatContext.Provider>
    );
};

export default CatContext;
