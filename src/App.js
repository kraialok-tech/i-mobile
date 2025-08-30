import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Load from localStorage on first render
  const [inventory, setInventory] = useState(() => {
    const savedInventory = localStorage.getItem("inventory");
    return savedInventory ? JSON.parse(savedInventory) : [];
  });

  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  // Save to localStorage whenever inventory changes
  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const addItem = () => {
    if (!itemName || !itemQty || !itemPrice) {
      alert("Please fill all fields!");
      return;
    }
    const newItem = {
      id: Date.now(),
      name: itemName,
      quantity: parseInt(itemQty),
      price: parseFloat(itemPrice),
    };
    setInventory([...inventory, newItem]);
    setItemName("");
    setItemQty("");
    setItemPrice("");
  };

  const deleteItem = (id) => {
    const updated = inventory.filter((item) => item.id !== id);
    setInventory(updated);
  };

  return (
    <div className="app">
      <h1>i-Mobile : Inventory List</h1>
      
      <div className="form">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQty}
          onChange={(e) => setItemQty(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <h2>Inventory List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price (₹)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button className="delete" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
