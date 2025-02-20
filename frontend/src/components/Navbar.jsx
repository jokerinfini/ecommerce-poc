import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Simulate fetching user data from local storage or an API
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        {/* Brand on the left */}
        <Navbar.Brand as={Link} to="/" className="me-auto">E-Commerce POC</Navbar.Brand>
        {/* Navigation links on the right */}
        <Nav>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          {!user && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
          {!user && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          {user && user.role === 'vendor' && (
            <Nav.Link as={Link} to="/create-product">Create Product</Nav.Link>
          )}
          {user && (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}