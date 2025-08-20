
import { useState, useEffect, useRef } from "react";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";

const FeaturedProducts = () => {

  const [visibleCards, setVisibleCards] = useState(4);
  const [activeDot, setActiveDot] = useState(0);
  const sliderRef = useRef(null);


  const navigate = useNavigate();

  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Handmade Pot",
      description: "Handcrafted by Indian artisans",
      price: "$969.97",
      image:
        "https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg",
    },
    {
      id: 2,
      title: "Deluxe Item",
      description: "Premium quality product",
      price: "$969.97",
      image: "https://via.placeholder.com/300x300?text=Deluxe",
    },
    {
      id: 3,
      title: "Standard Model",
      description: "Affordable and durable",
      price: "$99.97",

      image: "https://via.placeholder.com/300x300?text=Standard",

    },
    {
      id: 4,
      title: "Basic Version",

      description: "Best for starters",
      price: "$49.97",
      image: "https://via.placeholder.com/300x300?text=Basic",

    },
    {
      id: 5,
      title: "Limited Edition",

      description: "Exclusive collection",

      price: "$1299.97",
      image: "https://via.placeholder.com/300x300?text=Limited",
    },
    {
      id: 6,
      title: "Economy Choice",

      description: "Budget friendly option",

      price: "$79.97",
      image: "https://via.placeholder.com/300x300?text=Economy",
    },
  ];


  // Slick settings from HEAD branch
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Resize logic from other branch

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

  // Scroll tracking
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


  // Swipe handling

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {

      scrollToSlide(
        Math.min(activeDot + 1, Math.ceil(products.length / visibleCards) - 1)
      );

    }
    if (touchStart - touchEnd < -50) {
      scrollToSlide(Math.max(activeDot - 1, 0));
    }
  };

  return (

    <div className="slider-section bg-gray-50">
      <div className="text-center mb-9">

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 font-serif">
          Best Seller
        </h2>

        <div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full shadow-lg" />

      </div>

      <div className="max-w-7xl mx-auto">
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-5 no-scrollbar scroll-hidden"
        >

          {products.map((item) => (

            <div
              key={item.id}
              className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33%-14px)] lg:w-[calc(25%-15px)] snap-start bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative group border-2 border-transparent hover:border-amber-400"
            >

              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors duration-300">
                  <span className="font-bold text-gray-900 group-hover:text-amber-600">
                    {item.price}
                  </span>
                </div>

                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button
                    onClick={() => {
                      addToCart(item);
                      navigate("/cart");
                    }}
                    className="bg-white p-2 cursor-pointer rounded-full shadow-md hover:bg-amber-50 hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-amber-50 hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <FiEye className="w-5 h-5" />
                  </button>
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
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* Dots */}

        <div className="flex justify-center gap-2 mt-5">
          {Array.from({
            length: Math.ceil(products.length / visibleCards),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-3 h-1 rounded-full transition-all duration-300 ${
                index === activeDot ? "bg-amber-600 w-6" : "bg-gray-300"
              }`}

              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-5">
          <Link to="">
            <button className="group inline-flex items-center cursor-pointer justify-center px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-md shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              View all
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6 flex flex-col md:flex-row gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
            >
              ✕
            </button>

            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-72 object-cover rounded-md"
              />
            </div>

            {/* Content */}
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

              {/* Buttons */}
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    navigate("/cart");
                    setSelectedProduct(null);
                  }}
                  className="w-full px-5 py-3 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold hover:bg-amber-600 transition-all"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
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
    </div>
  );
};

export default FeaturedProducts;
