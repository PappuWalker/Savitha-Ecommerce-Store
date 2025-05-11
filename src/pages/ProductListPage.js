import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      // ... (same as in HomePage)
      { 
        id: 7, 
        name: 'Flowy Beach Dress', 
        price: 69.99, 
        image: 'https://i.pinimg.com/736x/3d/e2/41/3de2417e797d13560141bda42a803df5.jpg',
        category: 'Dresses'
      },
      { 
        id: 8, 
        name: 'Leather Biker Jacket', 
        price: 129.99, 
        image: 'https://i.pinimg.com/originals/dc/a0/88/dca088ba215aea53828ce9bbde3b9031.png',
        category: 'Outerwear'
      }
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="product-list-page container">
      <h1>Our Complete Collection</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;