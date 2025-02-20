import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Container, Alert, Spinner } from 'react-bootstrap';
import { getProducts } from '../services/product';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any previous errors when the component mounts
    setError('');

    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        const response = await getProducts(token);
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load products. Please try again.');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  if (loading) {
    return (
      <Container className="d-flex vh-100 justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Products</h1>
      
      {error && <Alert variant="danger">{error}</Alert>}
      
      {products.length === 0 ? (
        <Alert variant="info">No products found</Alert>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.ID}>
                <td>{product.Name}</td>
                <td>{product.Description || '-'}</td>
                <td>${product.Price?.toFixed(2)}</td>
                <td>{product.Stock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}