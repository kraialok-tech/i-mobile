import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
<Route path="/i-mobile/" element={<Home />} />
<Route path="/i-mobile/inventory/" element={<Inventory />} />
<Route path="/i-mobile/buy/" element={<Buy />} />
<Route path="/i-mobile/sell/" element={<Sell />} />
</Routes>
</Router>
);
}

export default App;
