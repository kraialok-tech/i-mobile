import React, { useState, useEffect } from "react";
import { openDB } from "idb";
import "./App.css";

const DB_NAME = "mobile-shop-db";
const STORE_NAME = "inventory";

async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    },
  });
}

function App() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const db = await initDB();
      const allItems = await db.getAll(STORE_NAME);
      setItems(allItems);
    })();
  }, []);

  const addItem = async () => {
    if (!itemName || !quantity) return;
    const db = await initDB();
    const newItem = { name: itemName, quantity: parseInt(quantity), date: new Date().toISOString() };
    const id = await db.add(STORE_NAME, newItem);
    setItems([...items, { ...newItem, id }]);
    setItemName("");
    setQuantity("");
  };

  const deleteItem = async (id) => {
    const db = await initDB();
    await db.delete(STORE_NAME, id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <h1>📱 Mobile Shop Inventory</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <h2>Inventory List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Qty: {item.quantity} <small>({new Date(item.date).toLocaleString()})</small>
            <button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
