import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import Inventory from './components/Inventory';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Contact from './components/Contact';
import Shopping from './components/Shopping';
import Billing from './components/Billing';

function App() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/inventory" element={<Inventory />} />
<Route path="/buy" element={<Buy />} />
<Route path="/sell" element={<Sell />} />
<Route path="/billing" element={<Billing />} />
<Route path="/contact" element={<Contact />} />

<Route path="/shopping" element={<Shopping />} />

</Routes>
</Router>
);
}

export default App;
