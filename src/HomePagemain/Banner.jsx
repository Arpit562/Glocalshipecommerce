import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaQuoteLeft, FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiIndiaGate, GiHand, GiJewelCrown, GiSparkles } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Custom arrow components defined before settings
  const CustomNextArrow = ({ onClick }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-lg sm:text-xl" />
    </motion.div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-lg sm:text-xl" />
    </motion.div>
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    fade: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    afterChange: (currentIndex) => setCurrentSlide(currentIndex),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-amber-400 transition-all duration-300 cursor-pointer"></div>
    ),
    appendDots: dots => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <ul className="flex space-x-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">{dots}</ul>
      </div>
    ),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // Auto-resume autoplay after user interaction
  useEffect(() => {
    if (!isPlaying) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
      }, 10000); // Resume after 10 seconds of inactivity
      
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  // Auto-advance slides with keyboard support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        // Next slide
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 2000);
      } else if (e.key === 'ArrowLeft') {
        // Previous slide
        setIsPlaying(false);
        setTimeout(() => setIsPlaying(true), 2000);
      } else if (e.key === ' ') {
        // Spacebar to pause/play
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1609444074870-2860a9a613e3?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "शाही हस्तशिल्प | Royal Artisan Legacy",
      subtitle: "Museum-grade collectibles handcrafted by 5th-generation master artisans from Jaipur, Varanasi & Mysore",
      highlight: "Certified Heritage • Limited Editions",
      buttonText: "Explore Masterpieces",
      icon: <GiHand className="text-amber-500 text-4xl" />,
      badge: "Premium Collection",
      testimonial: {
        text: "These pieces belong in the collections of connoisseurs and royalty alike.",
        author: "— Dr. Vikram Rathore, Curator, National Museum"
      },
      stats: {
        artisans: "50+",
        generations: "5th Gen",
        rating: "4.9★"
      }
    },
    {
      img: "https://images.unsplash.com/photo-1539077982779-d62f6cd9e23a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhbmN0aWZpZWQlMjBDb2xsZWN0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "दिव्य प्राणप्रतिष्ठा | Sanctified Collections",
      subtitle: "Temple-quality idols & puja essentials blessed by Vedic priests in Varanasi and Ujjain",
      highlight: "Ritually Consecrated • Panchdhatu Crafted",
      buttonText: "Discover Sacred Art",
      icon: <GiIndiaGate className="text-white text-4xl" />,
      badge: "Sacred Collection",
      testimonial: {
        text: "The spiritual energy in these pieces rivals that of ancient temple artifacts.",
        author: "— Shankaracharya Jyotishpeeth"
      },
      stats: {
        temples: "108+",
        priests: "Vedic",
        rating: "5.0★"
      }
    },
    {
      img: "https://images.unsplash.com/photo-1554583797-69a28298654c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "कोहिनूर वस्त्र | Regal Textiles",
      subtitle: "Heirloom-quality Banarasi silks & gold-zari brocades once woven exclusively for Maharajas",
      highlight: "22K Gold Zari • Patron's Collection",
      buttonText: "View Royal Fabrics",
      icon: <GiJewelCrown className="text-amber-500 text-4xl" />,
      badge: "Royal Collection",
      testimonial: {
        text: "Each thread tells the story of India's textile aristocracy.",
        author: "— Lakshmi Kumari, Former Princess of Jaipur"
      },
      stats: {
        gold: "22K Zari",
        heritage: "500+ Years",
        rating: "4.8★"
      }
    },
  ];

  return (
    <section className="relative w-full max-w-[2000px] mx-auto mt-2 pb-8 h-[85vh] sm:h-[90vh] md:h-[85vh] lg:h-[80vh] xl:h-[80vh] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-10 -right-10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-10 -left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Control panel */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-40 flex items-center gap-2 sm:gap-3 md:gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
        >
          {isPlaying ? <FaPause className="text-white text-sm sm:text-base" /> : <FaPlay className="text-white text-sm sm:text-base" />}
        </motion.button>
        
        <div className="bg-black/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border border-white/30">
          <span className="text-white text-xs sm:text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[80vh] w-full relative overflow-hidden">
              {/* Background image with overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
                  {/* Left content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-3 sm:space-y-4 md:space-y-6"
                  >
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
                    >
                      <GiSparkles className="text-white text-sm sm:text-base" />
                      {slide.badge}
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight"
                    >
                      {slide.title}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="flex flex-wrap gap-2 sm:gap-3 md:gap-4"
                    >
                      {Object.entries(slide.stats).map(([key, value]) => (
                        <div key={key} className="bg-white/10 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg border border-white/20">
                          <div className="text-amber-400 font-bold text-sm sm:text-base md:text-lg">{value}</div>
                          <div className="text-white/70 text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 shadow-2xl transition-all duration-300 transform hover:shadow-amber-500/25"
                    >
                      {slide.buttonText}
                      <FaArrowRight className="text-sm sm:text-base md:text-lg" />
                    </motion.button>
                  </motion.div>

                  {/* Right content - Hidden on mobile, shown on larger screens */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden lg:flex flex-col items-end justify-center space-y-4 md:space-y-6"
                  >
                    {/* Icon with glow effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(245, 158, 11, 0.3)",
                          "0 0 40px rgba(245, 158, 11, 0.6)",
                          "0 0 20px rgba(245, 158, 11, 0.3)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="p-4 md:p-6 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl md:rounded-2xl border border-amber-500/30"
                    >
                      {slide.icon}
                    </motion.div>

                    {/* Testimonial */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/20 max-w-sm"
                    >
                      <FaQuoteLeft className="text-amber-400 text-xl md:text-2xl mb-2 md:mb-3" />
                      <p className="text-white/90 text-xs md:text-sm italic mb-2 md:mb-3 leading-relaxed">
                        {slide.testimonial.text}
                      </p>
                      <div className="text-amber-300 font-medium text-xs md:text-sm">
                        {slide.testimonial.author}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </section>
  );
};

export default Banner;
