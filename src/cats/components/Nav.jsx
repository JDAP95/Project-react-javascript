import Button from '../../shared/components/Button';

const Nav = ({ view, setView, setTitle }) => {
    const handleClick = (newView, newTitle) => {
        setView(newView);
        setTitle(newTitle);
    };

    return (
        <nav className="nav">
            <Button
                className={view === "random" ? "active" : ""}
                onClick={() => handleClick("random", "Random Cats")}
            >
                Random Cats
            </Button>
            <Button
                className={view === "breed" ? "active" : ""}
                onClick={() => handleClick("breed", "Cats By Breed")}
            >
                Cats by breed
            </Button>
            <Button
                className={view === "category" ? "active" : ""}
                onClick={() => handleClick("category", "Cats By Category")}
            >
                Cats by category
            </Button>
            <Button
                className={view === "extension" ? "active" : ""}
                onClick={() => handleClick("extension", "Cats By Extension")}
            >
                Cats by extension
            </Button>
            <Button
                className={view === "favorites" ? "active" : ""}
                onClick={() => handleClick("favorites", "Favourites Cats")}
            >
                Favorites cats
            </Button>
        </nav>
    )
};

export default Nav;