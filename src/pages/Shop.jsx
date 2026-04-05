import ProductCard from '../components/ProductCard';
import { shopProducts } from '../data/products';
import './Shop.css';

export default function Shop() {
  return (
    <main>
      <section className="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons &amp; up to 70% off!</p>
      </section>

      <section className="products section-p1">
        <div className="pro-container">
          {shopProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="pagination section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i className="fa fa-long-arrow-alt-right" /></a>
      </section>
    </main>
  );
}
