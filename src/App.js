import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import Inventory from './components/Inventory';
import Buy from './components/Buy';
import Sell from './components/Sell';

function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/inventory" element={<Inventory />} />
<Route path="/buy" element={<Buy />} />
<Route path="/sell" element={<Sell />} />
</Routes>
</Router>
);
}

export default App;
