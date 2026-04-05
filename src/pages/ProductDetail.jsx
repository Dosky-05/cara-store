import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { allProducts } from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];

  const thumbs = [product.image, ...allProducts.slice(1, 4).map(p => p.image)];
  const [mainImg, setMainImg] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState('');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main>
      <section className="prodetails section-p1">

        {/* Image Gallery */}
        <div className="single-pro-image">
          <img src={mainImg} alt={product.name} id="MainImg" />
          <div className="small-img-group">
            {thumbs.map((src, i) => (
              <div
                key={i}
                className={`small-img-col ${mainImg === src ? 'active-thumb' : ''}`}
                onClick={() => setMainImg(src)}
              >
                <img src={src} alt={`thumb-${i}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="single-pro-details">
          <h6>
            <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / T-Shirt
          </h6>
          <h4>{product.name}</h4>
          <h2>${product.price.toFixed(2)}</h2>

          <div className="pro-detail-stars">
            {Array.from({ length: product.stars }).map((_, i) => (
              <i key={i} className="fa fa-star" />
            ))}
            <span>(24 reviews)</span>
          </div>

          <p className="pro-detail-desc">
            Premium quality {product.name.toLowerCase()} by {product.brand}. Crafted with
            attention to detail for the modern fashion-forward individual.
          </p>

          <div className="pro-detail-size">
            <label>Select Size</label>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(s => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="pro-detail-qty">
            <label>Quantity</label>
            <div className="qty-control">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
          </div>

          <button
            className={`add-cart-btn ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            <i className="fa fa-shopping-cart" />
            {added ? '✓ Added to Cart!' : 'Add to Cart'}
          </button>

          <div className="pro-detail-meta">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> Clothing</p>
            <p><strong>Availability:</strong> <span className="in-stock">In Stock</span></p>
          </div>
        </div>
      </section>
    </main>
  );
}
