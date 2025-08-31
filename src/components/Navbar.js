import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
<nav className="navbar navbar-expand navbar-dark bg-dark">
<div className="container">
<Link className="navbar-brand" to="/i-mobile">i-mobile</Link>
<div className="navbar-nav">
<Link className="nav-link" to="/i-mobile/inventory">Inventory</Link>
<Link className="nav-link" to="/i-mobile/buy">Buy</Link>
<Link className="nav-link" to="/i-mobile/sell">Sell</Link>
</div>
</div>
</nav>
);
}

export default Navbar;