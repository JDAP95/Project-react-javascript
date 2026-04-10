import { Heart, Plus } from "lucide-react";
import Button from "../../shared/components/Button";

const Card = ({ cat, onFav, onInfo, isFavorite = false }) => {
  const hasBreedInfo = cat?.breeds?.length > 0;

  return (
    <div className="card">
        <div className="card-img">
          <img src={cat.url} alt="Cat" className="card-img" />
        </div>
        <div className="card-btns">
          <Button className="card-fav-btn" onClick={onFav}>
            <Heart color={isFavorite ? "red" : "white"}/>
          </Button>
          <Button className="card-info-btn" onClick={onInfo} disabled={!hasBreedInfo}>
            <Plus />
          </Button>
        </div>
    </div>
  );
}

export default Card;