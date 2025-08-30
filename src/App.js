import React, { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("inventory"); // inventory | buy | sell
  const [inventory, setInventory] = useState([
    { id: 1, name: "iPhone 15", qty: 10 },
    { id: 2, name: "Samsung S24", qty: 7 },
  ]);
  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);

  const [newItem, setNewItem] = useState("");
  const [newQty, setNewQty] = useState("");

  const handleAddInventory = () => {
    if (!newItem || !newQty) return;
    const nextId = inventory.length ? inventory[inventory.length - 1].id + 1 : 1;
    setInventory([...inventory, { id: nextId, name: newItem, qty: parseInt(newQty) }]);
    setNewItem("");
    setNewQty("");
  };

  const handleBuy = (id, qty) => {
    const item = inventory.find((i) => i.id === id);
    if (!item || !qty) return;
    setInventory(
      inventory.map((i) =>
        i.id === id ? { ...i, qty: i.qty + parseInt(qty) } : i
      )
    );
    setBuyOrders([...buyOrders, { item: item.name, qty: parseInt(qty), date: new Date().toLocaleString() }]);
  };

  const handleSell = (id, qty) => {
    const item = inventory.find((i) => i.id === id);
    if (!item || !qty || qty > item.qty) return;
    setInventory(
      inventory.map((i) =>
        i.id === id ? { ...i, qty: i.qty - parseInt(qty) } : i
      )
    );
    setSellOrders([...sellOrders, { item: item.name, qty: parseInt(qty), date: new Date().toLocaleString() }]);
  };

  return (
    <div className="app">
      <h1>i-Mobile Shop Management</h1>
      <div className="navbar">
        <button onClick={() => setView("inventory")}>Inventory</button>
        <button onClick={() => setView("buy")}>Buy Orders</button>
        <button onClick={() => setView("sell")}>Sell Orders</button>
      </div>

      {view === "inventory" && (
        <div className="section">
          <h2>Inventory List</h2>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Add New Item</h3>
          <input
            type="text"
            placeholder="Model Name"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newQty}
            onChange={(e) => setNewQty(e.target.value)}
          />
          <button onClick={handleAddInventory}>Add</button>
        </div>
      )}

      {view === "buy" && (
        <div className="section">
          <h2>Buy Orders</h2>
          <div className="form-row">
            <select id="buyItem">
              {inventory.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input type="number" id="buyQty" placeholder="Quantity" />
            <button
              onClick={() =>
                handleBuy(
                  parseInt(document.getElementById("buyItem").value),
                  parseInt(document.getElementById("buyQty").value)
                )
              }
            >
              Add Buy Order
            </button>
          </div>
          <ul>
            {buyOrders.map((order, idx) => (
              <li key={idx}>
                {order.date} - Bought {order.qty} of {order.item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === "sell" && (
        <div className="section">
          <h2>Sell Orders</h2>
          <div className="form-row">
            <select id="sellItem">
              {inventory.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input type="number" id="sellQty" placeholder="Quantity" />
            <button
              onClick={() =>
                handleSell(
                  parseInt(document.getElementById("sellItem").value),
                  parseInt(document.getElementById("sellQty").value)
                )
              }
            >
              Add Sell Order
            </button>
          </div>
          <ul>
            {sellOrders.map((order, idx) => (
              <li key={idx}>
                {order.date} - Sold {order.qty} of {order.item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
