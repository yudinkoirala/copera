import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ShopListing from '../components/shop/ShopListing';
import ProductDetail from '../components/shop/ProductDetail';
import ShoppingCart from '../components/shop/ShoppingCart';
import Wishlist from '../components/shop/Wishlist';
import Checkout from '../components/shop/Checkout';

function ShopPage() {
  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<ShopListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default ShopPage;
