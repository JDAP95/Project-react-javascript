import { useState } from "react";
import { Card, InfiniteScroll, Modal } from "../components";
import { useFetchCats } from "../hooks";
import useCats from "../hooks/useCats";
import SelectorList from "../../shared/components/list/SelectorList";

const CatsByExtension = () => {
    const extensions = ['jpg', 'png', 'gif'];
    const [selectedExt, setSelectedExt] = useState(null);
    const { data: cats, loading, error, hasMore, loadMore } = useFetchCats("extension", selectedExt, 10);
    const { addFav, isFav, openBreedInfo, modalOpen, modalBreedInfo, closeModal } = useCats();

    const uniqueCats = Array.from(
        new Map(cats.map(item => [item.id, item])).values()
    );

    return (
        <>
            <SelectorList
                items={extensions} 
                selected={selectedExt} 
                onSelect={setSelectedExt}
                className="extension" 
            />

            {selectedExt && loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}

            {selectedExt && (
                <InfiniteScroll
                    items={uniqueCats}
                    loading={loading}
                    onLoadMore={loadMore}
                    hasMore={hasMore}
                >
                    {uniqueCats.map((cat) => (
                        <Card
                            key={cat.id}
                            cat={cat}
                            onFav={() => addFav(cat.id, cat.url)}
                            onInfo={() => openBreedInfo(cat)}
                            isFavorite={isFav(cat.id)}
                        />
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

export default CatsByExtension;