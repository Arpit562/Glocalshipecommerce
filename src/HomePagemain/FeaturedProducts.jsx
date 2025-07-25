import React from 'react';
import { FaHeart, FaShoppingCart , FaArrowRight} from 'react-icons/fa';

const products = [
  {
    id: 1,
    title: 'Smart Watch',
    price: '₹2,499',
    image: 'https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg',
  },
  {
    id: 2,
    title: 'Wireless Earbuds',
    price: '₹1,299',
    image: 'https://cdn.pixabay.com/photo/2024/12/23/07/48/heavenly-bamboo-9286035_1280.jpg',
  },
  {
    id: 3,
    title: 'Casual Shoes',
    price: '₹999',
    image: 'https://cdn.pixabay.com/photo/2013/01/05/21/02/art-74050_1280.jpg',
  },
  {
    id: 4,
    title: 'Fitness Band',
    price: '₹1,599',
    image: 'https://cdn.pixabay.com/photo/2017/07/26/22/35/wooden-mask-2543403_1280.jpg',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-section">
      <h2 className="featured-heading">Best Sellers</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-hover-actions">
                <button className="icon-btn"><FaShoppingCart style={{ marginTop: '4px' }} /></button>
                <button className="icon-btn"><FaHeart style={{ marginTop: '4px' }} /></button>
              </div>
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
        <button className="view-all-btn">View All <FaArrowRight style={{ marginLeft: '4px', paddingTop: '2px' }} /></button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
