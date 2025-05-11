import React, { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '../Components/ProductCard';
import LoadingSpinner from '../Components/LoadingSpinner';
import ErrorBoundary from '../Components/ErrorBoundary';
import { categoryImages, featuredImages, dummyProducts } from '../utils/staticData';

// Memoized components for better performance
const CategoryCard = memo(({ category, isActive, onClick }) => (
  <div 
    className={`category-card ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <Link href={`/products?category=${category.toLowerCase().replace(' ', '-')}`}>
      {category}
    </Link>
  </div>
));

const CategoryImage = memo(({ category, isActive }) => (
  <div className={`category-image ${isActive ? 'active' : ''}`}>
    <div className="category-image-wrapper">
      <Image 
      src={categoryImages[category] || 'https://via.placeholder.com/500'}
      alt={category}
        width={600}
        height={800}
        unoptimized
        priority={true}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
    </div>
  </div>
));

const FeaturedCarousel = memo(({ images, currentIndex }) => (
  <section className="featured-carousel">
    <div className="featured-images-container">
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isPrev = index === (currentIndex - 1 + images.length) % images.length;
        const isNext = index === (currentIndex + 1) % images.length;
        return (
        <div 
          key={index} 
          className={`featured-image 
              ${isActive ? 'active' : ''}
              ${isPrev ? 'prev' : ''}
              ${isNext ? 'next' : ''}`}
          >
            <div className="featured-image-wrapper">
              <Image 
                src={image.url}
                alt="Featured fashion item"
                width={1920}
                height={650}
                unoptimized
                priority={true}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
            </div>
          </div>
        );
      })}
    </div>
  </section>
));

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoized handlers
  const handleCategoryClick = useCallback((index) => {
    setActiveCategoryIndex(index);
  }, []);

  // Carousel Effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % featuredImages.length
      );
    }, 5000); // Increased to 5 seconds for better UX

    return () => clearInterval(intervalId);
  }, []);

  // Category rotation effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCategoryIndex((prevIndex) => 
        (prevIndex + 1) % categories.length
      );
    }, 3000); // Increased to 3 seconds for better UX

    return () => clearInterval(intervalId);
  }, [categories.length]);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const uniqueCategories = [...new Set(dummyProducts.map(product => product.category))];
        const newArrivalProducts = dummyProducts.filter(product => product.isNewArrival);
        const trendingProducts = dummyProducts.filter(product => product.isTrending);

        setProducts(dummyProducts);
        setCategories(uniqueCategories);
        setNewArrivals(newArrivalProducts);
        setTrendingItems(trendingProducts);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error loading data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>{error}</h2>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="home-page">
        <FeaturedCarousel 
          images={featuredImages} 
          currentIndex={currentImageIndex} 
        />

        {/* Featured Products */}
        <section className="container">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Shop by Category with Animated Showcase */}
        <section className="container category-section">
          <h2>Shop by Category</h2>
          <div className="category-showcase">
            <div className="category-grid">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category}
                  category={category}
                  isActive={index === activeCategoryIndex}
                  onClick={() => handleCategoryClick(index)}
                />
              ))}
            </div>
            <div className="category-image-showcase">
              {categories.map((category, index) => (
                <CategoryImage
                  key={category}
                  category={category}
                  isActive={index === activeCategoryIndex}
                />
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="container new-arrivals-section">
          <h2>New Arrivals</h2>
          <div className="product-grid">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link href="/products?filter=new-arrivals" className="featured-cta">
              View All New Arrivals
            </Link>
          </div>
        </section>

        {/* Trending Items Section */}
        <section className="container trending-section">
          <h2>Trending Items</h2>
          <div className="product-grid">
            {trendingItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link href="/products?filter=trending" className="featured-cta">
              View All Trending
            </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section className="container about-section">
          <h2>About SAVITHA</h2>
          <p>
            SAVITHA is more than just a fashion brand. We're a celebration of individual style, 
            crafting pieces that empower and inspire. From timeless classics to trendsetting designs, 
            our collection is curated to help you express your unique personality.
          </p>
          <Link href="/about" className="featured-cta">Learn More</Link>
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default HomePage;