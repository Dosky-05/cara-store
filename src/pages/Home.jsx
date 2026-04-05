import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { featuredProducts, newArrivals } from '../data/products';
import './Home.css';

const features = [
  { img: '/images/Ship09.png', label: 'Free Shipping' },
  { img: '/images/order-online-icon-14.jpg', label: 'Online Order' },
  { img: '/images/savemoney.png', label: 'Save Money' },
  { img: '/images/promo.png', label: 'Promotions' },
  { img: '/images/discount.jpg', label: 'Discount' },
  { img: '/images/247.png', label: '24/7 Support' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons &amp; up to 70% off!</p>
        <Link to="/shop"><button>Shop Now</button></Link>
      </section>

      {/* Features */}
      <section className="features section-p1">
        {features.map((f, i) => (
          <div key={i} className="fe-box">
            <img src={f.img} alt={f.label} />
            <h6>{f.label}</h6>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="products section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Mid Banner */}
      <section className="mid-banner section-m1">
        <h4>Repair services</h4>
        <h2>Up to <span>70% Off</span> — All T‑Shirts &amp; Accessories</h2>
        <Link to="/shop"><button className="normal">Explore More</button></Link>
      </section>

      {/* New Arrivals */}
      <section className="products section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Small Banners */}
      <section className="sm-banner section-p1">
        <div className="banner-box bb1">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box bb2">
          <h4>Spring/summer</h4>
          <h2>Upcoming season</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>

      {/* Banner 3 */}
      <section className="banner3">
        <div className="banner-box bb3a">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box bb3b">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring/Summer 2025</h3>
        </div>
        <div className="banner-box bb3c">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>
    </main>
  );
}
