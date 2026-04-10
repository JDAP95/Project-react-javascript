import { useState } from "react";
import { Card, InfiniteScroll, Modal } from "../components";
import { useFetchCats } from "../hooks";
import useCats from "../hooks/useCats";
import SelectorList from "../../shared/components/list/SelectorList";

const CatsByBreed = () => {
    const { data: breeds, loading: loadingBreeds, error: errorBreeds } = useFetchCats("breeds");
    const [selectedBreed, setSelectedBreed] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const { data: cats, loading: loadingCats, error: errorCats, hasMore, loadMore } = useFetchCats("breed", selectedBreed, 10);
    const { addFav, isFav, openBreedInfo, modalOpen, modalBreedInfo, closeModal } = useCats();

    const uniqueBreeds = Array.from(
        new Map(breeds.map(item => [item.id, item])).values()
    );

    const uniqueCats = Array.from(
        new Map(cats.map(item => [item.id, item])).values()
    );

    const handleSelect = (id) => {
        setSelectedBreed(id);
        setIsVisible(false);
    };

    return (
        <>
            {loadingBreeds && <p>Loading breeds...</p>}
            {errorBreeds && <p>Error loading breeds: {errorBreeds}</p>}

            {breeds.length > 0 && isVisible && (
                <SelectorList
                    items={uniqueBreeds} 
                    selected={selectedBreed} 
                    onSelect={handleSelect}
                    className="breeds"
                />                
            )}

            {selectedBreed && loadingCats && <p>Loading cats...</p>}
            {errorCats && <p>Error loading cats: {errorCats}</p>}

            {selectedBreed && (
                <InfiniteScroll
                    items={uniqueCats}
                    loading={loadingCats}
                    onLoadMore={loadMore}
                    hasMore={hasMore}
                >
                    {uniqueCats.map((cat) => (
                        <Card
                            key={cat.id}
                            cat={cat}
                            onFav={() => addFav(cat.id, cat.url)}
                            onInfo={() => openBreedInfo(cat)}
                            isFavorite={isFav(cat.id)} />
                    ))}
                </InfiniteScroll>
            )}

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                breed={modalBreedInfo}
            />
        </>
    );
}

export default CatsByBreed;