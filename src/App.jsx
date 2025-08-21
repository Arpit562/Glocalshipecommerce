import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import { AuthProvider } from './Context/AuthContext';
import { ProductProvider } from './Context/ProductContext';
import Homepage from './HomePagemain/Homepage';
import CetegoriesPagelayout from './Pages/CetegoriesPagelayout';
import ContactUs from './Pages/Contact';
import Wishlist from './user/Wishlist';
import AddtoCart from './user/AddtoCart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import User from './user/User';
import Checkout from './HomePagemain/CheckOut';
import About from './Pages/About';
import SignUpPage from './auth/SignUpPage';
import LogInPage from './auth/LogInPage';
import QuickViewPage from './user/QuickView';
import ProductDetails from './Pages/Product';
import AdminDashboard from './admin/adminPage';
import AdminLogin from './admin/adminlogin';
import PageNotFound1 from './HomePagemain/PageNotFound';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import { WishlistProvider } from './Context/WishlistContext';
import { CartProvider } from "./Context/CartContext";
import BlogTimeline from './Pages/Blog';


function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <Router>
                <div className="app">
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/cart" element={<ProtectedRoute><AddtoCart /></ProtectedRoute>} />
                    <Route path="/checkout/:id" element={<Checkout />} />
                    <Route path="/account" element={<ProtectedRoute><User /></ProtectedRoute>} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/quick-view/:id" element={<QuickViewPage />} />
                    <Route path="/product/:id" element={<ProductDetails />} />

                    {/* blogs */}
                    <Route path="/blogs" element={<BlogTimeline />} />

                    {/* admin  */}
                    <Route path="/adminlogin" element={<AdminLogin />} />

                    {/* Category paths */}
                    <Route path="/all-categories" element={<CetegoriesPagelayout />} />
                    <Route path="/all-categories/:mainCategory" element={<CetegoriesPagelayout />} />
                    <Route path="/all-categories/:mainCategory/:subCategory" element={<CetegoriesPagelayout />} />

                    {/* 404 fallback */}
                    <Route path="*" element={<PageNotFound1 />} />
                  </Routes>
                  <Footer />
                </div>
              </Router>
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
