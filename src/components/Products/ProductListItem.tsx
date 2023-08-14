import { Button, Card, CardContent } from "@mui/material";
import "./ProductListItem.scss";
import { useState } from "react";
import Quantity from "components/Quantity/Quantity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
type Props = {
  id: number;
  title: string;
  description: string;
  type: string;
  capacity: string;
  price: number;
  image: string;
  addProductToCart: (id: number, count: number) => void;
  isLiked: true;
};

const ProductListItem = ({
  id,
  title,
  description,
  type,
  capacity,
  price,
  image,
  isLiked,
  addProductToCart,
}: Props) => {
  const [count, setCount] = useState<number>(1);
  const onIncrementClick = () => {
    setCount((prevState) => prevState + 1);
  };
  const onDecrementClick = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Button variant="outlined">
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="product-features">Type: {type}</div>
        <div className="product-capacity">Capacity: {capacity} Gb</div>
        <div className="product-price">
          Price: <span>${price}</span>
        </div>

        <Quantity
          count={count}
          onIncrementClick={onIncrementClick}
          onDecrementClick={onDecrementClick}
          minCount={1}
        />

        <Button variant="outlined" onClick={() => addProductToCart(id, count)}>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductListItem;
