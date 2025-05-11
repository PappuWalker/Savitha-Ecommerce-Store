import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductDetailsModal({ product, open, onClose }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  if (!open || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-image" style={{ position: 'relative', width: '100%', height: '100%' }}>
          {!isLoaded && <div className="image-loading-placeholder"></div>}
          <Image 
            src={product.image} 
            alt={product.name} 
            width={500}
            height={700}
            unoptimized
            priority={true}
            onLoad={() => setIsLoaded(true)}
            style={{ 
              objectFit: 'contain', 
              width: '100%', 
              height: '100%',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>
        <div className="modal-details">
          <h1>{product.name}</h1>
          <p className="category">{product.category}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <div className="product-description">
            <h2>Product Description</h2>
            <p>{product.description || 'A beautiful piece from our collection. Made with high-quality materials and attention to detail.'}</p>
          </div>
          <button className="close-modal-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
} 