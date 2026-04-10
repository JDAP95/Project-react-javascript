import Li from "./Li";

const SelectorList = ({ items = [], selected, onSelect, className }) => {
    return (
        <ul className={`selector-list-${className}`}>
            {items.map(item => (
                <Li
                    key={item.id || item}
                    id={item.id || item}
                    name={item.name || item}
                    selected={selected}
                    onClick={onSelect}
                />
            ))}
        </ul>
    );
}

export default SelectorList;