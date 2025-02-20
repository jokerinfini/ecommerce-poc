// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import CreateProduct from './pages/CreateProduct';

// Add "export default" before the component
export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
        // Add these routes
        <Route path="/register" element={<Register />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}