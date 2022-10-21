import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import Shoppingcart from './views/Shoppingcart';
import ProductDetailsView from './views/ProductDetailsView';






function App() {
  return (
    
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/categories" element={<CategoriesView />} />
      <Route path="/products" element={<ProductsView />} />
      <Route path="/products/:id" element={<ProductDetailsView />} />
      <Route path="/contacts" element={<ContactsView />} />
      <Route path="/search" element={<SearchView />} />
      <Route path="/compare" element={<CompareView />} />
      <Route path="/wishlist" element={<WishlistView />} />
      <Route path="/shoppingcart" element={<Shoppingcart />} />
      
      <Route path="*" element={<NotFoundView />} />
     </Routes>
     </BrowserRouter>
     
     
     
     
     
    
  );
}

export default App;
