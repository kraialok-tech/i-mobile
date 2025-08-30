import React, { useState } from "react";
import "./App.css";

function App() {
  const [inventory, setInventory] = useState([]);
  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);

  const [newItem, setNewItem] = useState({ name: "", qty: "", price: "" });
  const [newBuyOrder, setNewBuyOrder] = useState({ name: "", qty: "" });
  const [newSellOrder, setNewSellOrder] = useState({ name: "", qty: "" });

  // Add item to inventory
  const addItem = () => {
    if (!newItem.name || !newItem.qty || !newItem.price) return;
    setInventory([...inventory, { ...newItem, qty: parseInt(newItem.qty), price: parseFloat(newItem.price) }]);
    setNewItem({ name: "", qty: "", price: "" });
  };

  // Add Buy Order
  const addBuyOrder = () => {
    if (!newBuyOrder.name || !newBuyOrder.qty) return;
    setBuyOrders([...buyOrders, { ...newBuyOrder, qty: parseInt(newBuyOrder.qty) }]);
    setNewBuyOrder({ name: "", qty: "" });
  };

  // Add Sell Order
  const addSellOrder = () => {
    if (!newSellOrder.name || !newSellOrder.qty) return;
    setSellOrders([...sellOrders, { ...newSellOrder, qty: parseInt(newSellOrder.qty) }]);
    setNewSellOrder({ name: "", qty: "" });
  };

  return (
    <div className="app">
      <h1>📱 Mobile Shop Manager</h1>

      {/* Inventory Section */}
      <div className="section">
        <h2>Inventory</h2>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.qty}
          onChange={(e) => setNewItem({ ...newItem, qty: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button onClick={addItem}>Add to Inventory</button>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buy Orders Section */}
      <div className="section">
        <h2>Buy Orders</h2>
        <input
          type="text"
          placeholder="Item Name"
          value={newBuyOrder.name}
          onChange={(e) => setNewBuyOrder({ ...newBuyOrder, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newBuyOrder.qty}
          onChange={(e) => setNewBuyOrder({ ...newBuyOrder, qty: e.target.value })}
        />
        <button onClick={addBuyOrder}>Add Buy Order</button>

        <ul>
          {buyOrders.map((order, index) => (
            <li key={index}>{order.name} - {order.qty} units</li>
          ))}
        </ul>
      </div>

      {/* Sell Orders Section */}
      <div className="section">
        <h2>Sell Orders</h2>
        <input
          type="text"
          placeholder="Item Name"
          value={newSellOrder.name}
          onChange={(e) => setNewSellOrder({ ...newSellOrder, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newSellOrder.qty}
          onChange={(e) => setNewSellOrder({ ...newSellOrder, qty: e.target.value })}
        />
        <button onClick={addSellOrder}>Add Sell Order</button>

        <ul>
          {sellOrders.map((order, index) => (
            <li key={index}>{order.name} - {order.qty} units</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
