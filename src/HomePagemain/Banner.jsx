import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const BannerSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="banner-area">
      <div className="banner-slider-container">
        <Slider {...settings}>
          <div className="banner-slide">
            <img
              src="https://media.istockphoto.com/id/1200452868/photo/religious-paintings-on-the-wall-of-sri-dalada-maligawa-or-the-temple-of-the-sacred-tooth.jpg?s=1024x1024&w=is&k=20&c=R5OAkMW_Xj8vg_HolMisHKzxQrNrwPBqCtgW17mfNgQ="
              alt="Religious Wall Painting"
            />
          </div>
          <div className="banner-slide">
            <img
              src="https://media.istockphoto.com/id/177129641/photo/chinese-new-year-ornaments-traditional-dancing-dragon.jpg?s=1024x1024&w=is&k=20&c=W-Rqlsy0ifdsEKlW8ttNGHi7qibwDPWH2JPqB6xgVC8="
              alt="Chinese New Year Dragon"
            />
          </div>
          <div className="banner-slide">
            <img
              src="https://media.istockphoto.com/id/483613330/photo/buddha-statue-candle-holder-for-fragrant-oils-beads.jpg?s=1024x1024&w=is&k=20&c=_7qIEDdmD7rPQRMNAeP1i8pCol31Aqvw0lK-d-bWgig="
              alt="Buddha Statue and Candle"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BannerSlider;
