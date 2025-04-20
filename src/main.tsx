import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CartProvider from './contexts/CartProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <App />
  </CartProvider>,
);
