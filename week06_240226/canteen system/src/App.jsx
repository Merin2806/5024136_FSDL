import { useState } from "react";
import "./App.css";

function App() {
  const menuItems = [
    { id: 1, name: "Burger", price: 50 },
    { id: 2, name: "Pizza", price: 120 },
    { id: 3, name: "Sandwich", price: 40 },
    { id: 4, name: "Cold Drink", price: 30 },
    { id: 5, name: "Samosa", price: 15 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    alert("Order Placed Successfully 🎉");
    setCart([]);
  };

  return (
    <div className="container">
      <h1>🍔 College Canteen System</h1>

      <div className="menu">
        {menuItems.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>

      <h2>🛒 Cart</h2>

      <div className="cart">
        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>
        <button className="order-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default App;