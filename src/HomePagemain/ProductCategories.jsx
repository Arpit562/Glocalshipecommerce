// src/components/ProductCategories.jsx
import React from 'react';


const categories = [
  {
    name: 'Marble Statues',
    image:' https://cdn.pixabay.com/photo/2020/02/24/07/06/viet-nam-4875404_1280.jpg',
    link: '',
  },
  {
    name: 'Bronze Sculptures',
    image: 'https://cdn.pixabay.com/photo/2013/10/22/19/54/buddha-199462_1280.jpg',
    link: '',
  },
  {
    name: 'Traditional Paintings',
    image: 'https://cdn.pixabay.com/photo/2017/12/09/15/19/artist-3008031_1280.jpg',
    link: '',
  },
  {
    name: 'Handmade Jewelry',
    image: 'https://cdn.pixabay.com/photo/2018/10/08/07/52/accessories-3732140_1280.jpghttps://cdn.pixabay.com/photo/2018/10/08/07/52/accessories-3732141_1280.jpg',
    link: '',
  },
  {
    name: 'Spiritual Decor',
    image: 'https://cdn.pixabay.com/photo/2019/03/19/09/58/dreamcatcher-4065288_1280.jpg',
    link: '',
  },
  {
    name: 'Home & Living',
    image: 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
    link: '',
  },
];

const ProductCategories = () => {
  return (
    <section className="category-section">
      <h2 className="category-heading">Shop by Category</h2>

      <div className="category-grid">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={cat.link}
            className="category-card"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="category-image"
            />
            <div className="category-overlay">
              <div>
                <h3 className="category-title">{cat.name}</h3>
                <span className="category-explore">Explore</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
