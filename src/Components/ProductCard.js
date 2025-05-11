'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import ProductDetailsModal from './ProductDetailsModal';

export default function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleCardClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <div className="product-image" style={{ position: 'relative', width: '100%', height: '400px' }}>
          {!isLoaded && <div className="image-loading-placeholder"></div>}
          <Image 
            src={product.image}
            alt={product.name}
            width={400}
            height={600}
            unoptimized
            priority={true}
            onLoad={() => setIsLoaded(true)}
            style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: '100%',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="category">{product.category}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <button 
            className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {isAdded ? 'Added to Cart!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <ProductDetailsModal product={product} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}