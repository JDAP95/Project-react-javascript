import { useContext } from "react";
import CatContext from "../context/CatContext";


const useCats = () => {
    const context = useContext(CatContext);

    if (context === undefined) {
        throw new Error('useCats debe usarse dentro de un CatProvider');
    }

    return context
};

export default useCats;