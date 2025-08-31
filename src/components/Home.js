import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

 function Home() {
  const featuredMobiles = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      price: '₹40,000'
    },
    {
      id: 2,
      name: 'Accessories',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      price: '₹2500'
    },
    {
      id: 3,
      name: 'Google Pixel 8',
      img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      price: '₹30,000'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-light text-white text-center py-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1510557880182-3d4d3c0e8eb8?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ backgroundColor: 'rgba(24, 36, 212, 0.6)', padding: '60px 20px' }}>
          <h1 className="display-4 fw-bold">Welcome to i-mobile </h1>
          <p className="lead">Your one-stop destination for the latest smartphones</p>
          <Button variant="warning" size="lg" className="mt-3">Shop Now</Button>
        </div>
      </div>

      {/* Featured Mobiles */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Mobiles</h2>
        <Row>
          {featuredMobiles.map(mobile => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={mobile.id}>
              <div className="card shadow border-0">
                <img src={mobile.img} className="card-img-top" alt={mobile.name} style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body text-center">
                  <h5 className="card-title">{mobile.name}</h5>
                  <p className="card-text">{mobile.price}</p>
                  <Button variant="primary">Buy Now</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="bg-primary text-white text-center py-5">
        <h3>Looking for best deals on mobiles?</h3>
        <Button variant="light" size="lg" className="mt-3">Contact Us</Button>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p>© 2025 i-Mobile Shop. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;