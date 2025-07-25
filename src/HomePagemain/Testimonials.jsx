
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // ✅ Correct position
import { FaQuoteLeft } from 'react-icons/fa';

//  Import Swiper core CSS
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Anjali Mehta",
    role: "Artist & Customer",
    review: "Absolutely beautiful artwork! Loved the packaging and quality. Highly recommend this store!",
    image: "/img/user1.jpg"
  },
  {
    name: "Rahul Sharma",
    role: "Regular Buyer",
    review: "Top-notch Indian art pieces. Fast delivery and amazing customer service.",
    image: "/img/user2.jpg"
  },
  {
    name: "Priya Nair",
    role: "Art Lover",
    review: "Fell in love with the handmade products! Truly reflects Indian tradition.",
    image: "/img/user3.jpg"
  },
   {
    name: "Arpit kumar",
    role: "Art Lover",
    review: "Fell in love with the handmade products! Truly reflects Indian tradition.",
    image: "/img/user3.jpg"
  },

   {
    name: "Harish kumar",
    role: "Art Lover",
    review: "Fell in love with the handmade products! Truly reflects Indian tradition.",
    image: "/img/user3.jpg"
  }

];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="testimonial-slider"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="review-text">"{t.review}"</p>
              <div className="reviewer">
                <img src={t.image} alt={t.name} className="reviewer-img" />
                <div>
                  <h4 className="reviewer-name">{t.name}</h4>
                  <p className="reviewer-role">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
