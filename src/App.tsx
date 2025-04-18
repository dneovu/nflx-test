import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './routes/Home';
import Cart from './routes/Cart';
import Favorites from './routes/Favorites';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
