import { useState } from "react";
import { Card, InfiniteScroll, Modal } from "../components";
import { useFetchCats } from "../hooks";
import useCats from "../hooks/useCats";
import SelectorList from "../../shared/components/list/SelectorList";

const CatsByCategory = () => {
    const { data: categories, loading: loadingCategories, error: errorCategories } = useFetchCats("categories");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { data: cats, loading: loadingCats, error: errorCats, hasMore, loadMore  } = useFetchCats("category", selectedCategory, 10);
    const { addFav, isFav, openBreedInfo, modalOpen, modalBreedInfo, closeModal } = useCats();

    const uniqueCategories = Array.from(
        new Map(categories.map(item => [item.id, item])).values()
    );

    const uniqueCats = Array.from(
        new Map(cats.map(item => [item.id, item])).values()
    );

    return (
        <>
            {loadingCategories && <p>Loading categories...</p>}
            {errorCategories && <p>Error loading categories: {errorCategories}</p>}

            {categories.length > 0 && (
                <SelectorList 
                    items={uniqueCategories} 
                    selected={selectedCategory} 
                    onSelect={setSelectedCategory}
                    className="categories"
                />
            )}

            {selectedCategory && loadingCats && <p>Loading cats...</p>}
            {errorCats && <p>Error loading cats: {errorCats}</p>}

            {selectedCategory && (
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

export default CatsByCategory;