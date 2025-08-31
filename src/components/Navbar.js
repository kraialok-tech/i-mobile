import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
<nav className="navbar navbar-expand navbar-dark bg-secondary">
<div className="container">
<Link className="navbar-brand" to="/">Home</Link>
<div className="navbar-nav">
<Link className="nav-link" to="/inventory">Inventory</Link>
<Link className="nav-link" to="/buy">Buy</Link>
<Link className="nav-link" to="/sell">Sell</Link>
<Link className="nav-link" to="/contact">Contact</Link>
</div>
</div>
</nav>
);
}

export default Navbar;