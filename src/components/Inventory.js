import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import '../App.css';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' });
  
  // Fetch inventory on load
  useEffect(() => {
    fetchInventory();
  }, []);

  async function fetchInventory() {
    const { data, error } = await supabase.from('inventory').select('*');
    if (error) {
      console.error('Error fetching inventory:', error);
    } else {
      setInventory(data);
    }
  }

  async function addItem() {
    if (!newItem.name || newItem.quantity <= 0 || newItem.price <=0) {
      alert('Enter valid item details');
      return;
    }

    const { data, error } = await supabase.from('inventory').insert([newItem]).select();
    if (error) {
      console.error('Error adding item:', error);
    } else {
      setInventory([...inventory, ...data]);
      setNewItem({ name: '', quantity: '', price: '' });
       
       alert('Data inserted');
    }
  }

  async function updateQuantity(id, change) {
    const item = inventory.find(i => i.id === id);
    if (!item){ 
      alert ('data not found')
      return;
    }

    const newQty = item.quantity + change;
    if (newQty < 0) {
      alert('No item left, Cant sell');
    return;}

    const { data, error } = await supabase
      .from('inventory')
      .update({ quantity: newQty })
      .eq('id', id);

    if (error) {
      console.error('Error updating quantity:', error);
    } else {
      setInventory(inventory.map(i => i.id === id ? { ...i, quantity: newQty } : i));
    }
  }

  return (
    <div className="container mt-3">
      <h1>i-Mobile : Inventory List</h1>

      <div className="add-item">
        <input 
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input 
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 0 })}
        />
        <input 
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })}
        />
        <button className = "btn btn-primary mb-3" onClick ={addItem}>Add Item</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td><button onClick={() => updateQuantity(item.id, 1)}>+</button></td>
              <td><button onClick={() => updateQuantity(item.id, -1)}>-</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
