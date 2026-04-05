import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (!cart.length) return (
    <main className="cart-empty section-p1">
      <div className="empty-box">
        <i className="fa fa-shopping-cart empty-icon" />
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/shop"><button>Shop Now</button></Link>
      </div>
    </main>
  );

  return (
    <main className="cart-page section-p1">
      <h2>Your Cart</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.name} className="cart-img" /></td>
              <td>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-brand">{item.brand}</div>
              </td>
              <td>${item.price}</td>
              <td>{item.qty}</td>
              <td><strong>${(item.price * item.qty).toFixed(2)}</strong></td>
              <td>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </main>
  );
}
