import React, { useState, useEffect, useRef } from "react";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../Context/ProducatContext";
import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext"; // ✅ import cart context

const TrendingProducts = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [activeDot, setActiveDot] = useState(0);
  const sliderRef = useRef(null);

  const { getTrendingProducts, loading } = useProducts();
  const trendingItems = getTrendingProducts();
  const navigate = useNavigate();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart(); // ✅ add to cart

  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ modal state
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setVisibleCards(1);
      else if (window.innerWidth < 768) setVisibleCards(2);
      else if (window.innerWidth < 1024) setVisibleCards(3);
      else setVisibleCards(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cardWidth = slider.firstChild?.offsetWidth + 20;
      const scrollPosition = slider.scrollLeft;
      const newActiveDot = Math.round(
        scrollPosition / (visibleCards * cardWidth)
      );
      setActiveDot(newActiveDot);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [visibleCards]);

  const scrollToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.firstChild?.offsetWidth + 20;
    slider.scrollTo({
      left: index * visibleCards * cardWidth,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <section className="py-10 px-5 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 font-serif">
            Trending Products
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto"></div>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
        </div>
      </section>
    );
  }

  if (!trendingItems || trendingItems.length === 0) {
    return (
      <section className="py-10 px-5 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 font-serif">
            Trending Products
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto"></div>
        </div>
        <div className="text-center text-gray-500">
          <p>No trending products available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-5 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 font-serif">
          Trending Products
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full shadow-lg" />

      </div>

      <div className="max-w-7xl mx-auto">
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-5 no-scrollbar scroll-hidden"
        >
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33%-14px)] lg:w-[calc(25%-15px)] snap-start bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative group border-2 border-transparent hover:border-amber-400"
            >
              <div className="relative overflow-hidden">
                {item.images && item.images.length > 0 ? (
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}

                <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                  <span className="font-bold text-gray-900">₹{item.price}</span>
                </div>

                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {/* Cart button */}
                  <button
                    onClick={() => {
                      addToCart(item);
                      navigate("/cart");
                    }}
                    className="bg-white p-2 cursor-pointer rounded-full shadow-md hover:bg-amber-50 hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                  </button>

                  {/* Eye button -> open modal */}
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-amber-50 hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FiEye className="w-5 h-5" />
                  </button>

                  {/* Wishlist */}
                  <button
                    onClick={() => {
                      addToWishlist(item);
                      navigate("/wishlist");
                    }}
                    className="bg-white cursor-pointer p-2 rounded-full shadow-md hover:bg-amber-50 hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FiHeart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-4 text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({
            length: Math.ceil(trendingItems.length / visibleCards),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-3 h-1 rounded-full transition-all duration-300 ${
                index === activeDot ? "bg-amber-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 🔹 Popup Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setSelectedProduct(null)} // 🔹 Click outside closes modal
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6 flex flex-col md:flex-row gap-6"
            onClick={(e) => e.stopPropagation()} // 🔹 Prevent close when clicking inside
          >
            {/* Close Button (Top Right) */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold  w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
            >
              ✕
            </button>

            {/* Product Image (Left side) */}
            <div className="md:w-1/2 w-full">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-72 object-cover rounded-md"
              />
            </div>

            {/* Product Content (Right side) */}
            <div className="md:w-1/2 w-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {selectedProduct.title}
              </h2>
              <p className="text-gray-500 mb-3">
                {selectedProduct.description}
              </p>
              <p className="font-bold text-amber-600 text-lg mb-5">
                {selectedProduct.price}
              </p>

              {/* Full-width stacked buttons */}
              {/* Full-width stacked buttons */}
              {/* Full-width stacked buttons */}
              <div className="flex flex-col gap-4 w-full">
                {/* Add to Cart Button */}
                <button
                  onClick={() => {
                    addToCart({ ...selectedProduct, quantity }); // ✅ pass selected quantity
                    navigate("/cart");
                    setSelectedProduct(null);
                  }}
                  className="w-full px-5 py-3 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold hover:bg-amber-600 transition-all"
                >
                  Add to Cart
                </button>

                {/* Buy Now Button */}
                <button
                  onClick={() => {
                    addToCart({ ...selectedProduct, quantity }); // ✅ pass selected quantity
                    navigate("/checkout");
                    setSelectedProduct(null);
                  }}
                  className="w-full px-5 py-3 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold hover:bg-green-600 transition-all"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrendingProducts;
