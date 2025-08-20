import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 350;
  const shipping = 0;
  const total = subtotal - discount + shipping;

  const handleBuyNow = () => {
    if (cart.length > 0) {
      navigate("/checkout", { state: { cartItems: cart } });
    }
  };

  return (
    <div className="bg-container py-10">
      <div className="max-w-6xl mx-auto">
        
        {/* ✅ Cart Header OUTSIDE */}
        <div className="cart-header ">
          <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <p className="wishlist-subtext text-gray-600">
              Your added items are here. You can easily buy the product.
            </p>
          )}
        </div>

        <div className="cart-page-container flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items Section */}
          <div className="flex-1">
            {cart.length > 0 && (
              <div className="cart-items flex flex-col gap-4">
                {/* Header Row */}
                <div className="grid grid-cols-5 font-semibold text-gray-700 px-4">
                  <p>Image</p>
                  <p>Title</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Action</p>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="cart-item flex items-center justify-between py-3 border border-amber-400/50 rounded-lg shadow bg-white mb-3"
                  >
                    {/* Image */}
                    <div className="flex-1 flex">
                      <img
                        src={item.image}
                        alt={item.name || item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-800 m-0">
                        {item.name || item.title}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="flex-1">
                      <p className="text-base font-bold text-amber-600 m-0">
                        {item.price}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex-1 flex items-center gap-2">
                      <button
                        className="px-2 py-1 border border-amber-400/50 rounded-lg bg-white cursor-pointer"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="text-base font-medium">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2 py-1 border border-amber-400/50 rounded-lg bg-white cursor-pointer"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex-1 flex items-center gap-3">
                      <button
                        onClick={handleBuyNow}
                        className="px-2 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-md"
                      >
                        Buy Now
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ✅ Summary Box only when cart has items */}
          {cart.length > 0 && (
            <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 border border-amber-400/50 h-fit">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Discount</span>
                <span className="text-green-600">-₹{discount}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-bold text-lg text-gray-800 mb-4">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button
                onClick={handleBuyNow}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-md"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
