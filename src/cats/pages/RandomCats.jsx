import { useFetchCats } from "../hooks";
import { Card, InfiniteScroll, Modal } from "../components";
import useCats from "../hooks/useCats";

const RandomCats = () => {
    const { data: cats, loading, error, loadMore, hasMore } = useFetchCats("random", null, 10);
    const { addFav, isFav, modalOpen, modalBreedInfo, openBreedInfo, closeModal } = useCats();

    return (
        <>
            {loading && <p>Loading cats...</p>}
            {error && <p>Error: {error}</p>}
            
            <InfiniteScroll
                items={cats}
                loading={loading}
                onLoadMore={loadMore}
                hasMore={hasMore}
            >
                {cats.map((cat) => (
                    <Card
                        key={cat.id}
                        cat={cat}
                        onFav={() => addFav(cat.id, cat.url)}
                        onInfo={() => openBreedInfo(cat)}
                        isFavorite={isFav(cat.id)}
                    />
                ))}
            </InfiniteScroll>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                breed={modalBreedInfo}
            />
        </>
    );
};

export default RandomCats;
