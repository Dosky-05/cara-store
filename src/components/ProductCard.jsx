import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="pro-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="pro-des">
        <span>{product.brand}</span>
        <h5>{product.name}</h5>
        <div className="pro-stars">
          {Array.from({ length: product.stars }).map((_, i) => (
            <i key={i} className="fa fa-star" />
          ))}
        </div>
        <h4>${product.price}</h4>
      </div>
      <button className="pro-cart-btn" onClick={() => addToCart(product)} title="Add to cart">
        <i className="fa fa-shopping-cart" />
      </button>
    </div>
  );
}
