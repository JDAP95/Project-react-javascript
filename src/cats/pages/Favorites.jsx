import { Card, Modal } from "../components";
import useCats from "../hooks/useCats";

const Favorites = () => {
    const { favorites, removeFav, openBreedInfo, modalOpen, modalBreedInfo, closeModal } = useCats();

    return (
        <>
            {favorites.length === 0 && <p>There aren't favorite cats.</p>}

            <div className="container-cats">
                {favorites.map((cat) => (
                    <div key={cat.id} className="favorite-item">
                        <Card
                            cat={cat}
                            onFav={() => removeFav(cat.id)}
                            onInfo={() => openBreedInfo(cat)}
                            isFavorite={true}
                        />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                breed={modalBreedInfo}
            />
        </>
    );
};

export default Favorites;
