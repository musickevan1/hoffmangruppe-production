import { useState, useEffect, useCallback } from 'react';
import infographic1 from '../assets/infographics/infographic-1.jpg';
import infographic2 from '../assets/infographics/infographic-2.jpg';
import infographic3 from '../assets/infographics/infographic-3.jpg';
import infographic4 from '../assets/infographics/infographic-4.jpg';
import infographic5 from '../assets/infographics/infographic-5.jpg';
import infographic6 from '../assets/infographics/infographic-6.jpg';
import infographic7 from '../assets/infographics/infographic-7.jpg';
import infographic8 from '../assets/infographics/infographic-8.jpg';
import infographic9 from '../assets/infographics/infographic-9.jpg';

const infographics = [
  infographic1,
  infographic2,
  infographic3,
  infographic4,
  infographic5,
  infographic6,
  infographic7,
  infographic8,
  infographic9
];

interface CarouselProps {
  autoScrollInterval?: number;
}

const InfographicCarousel = ({ autoScrollInterval = 5000 }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const totalImages = 9;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalImages);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Auto-scroll with cleanup on unmount
  useEffect(() => {
    const interval = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoScrollInterval]);

  // Touch handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  // Log the imported images for debugging
  console.log('Infographics array:', infographics);

  return (
      <section
        className="relative w-full max-w-6xl mx-auto my-16 overflow-hidden min-h-[600px] bg-gray-100 p-8 border border-gray-200 rounded-lg shadow-lg"
        aria-label="Promotional infographics carousel"
        onKeyDown={handleKeyDown}
        role="region"
      >
      <h2 className="text-center text-2xl font-bold mb-4">Infographics</h2>
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="group"
      >
        {[...Array(totalImages)].map((_, index) => (
          <div 
            key={index}
            className="min-w-full relative flex items-center justify-center"
            aria-hidden={index !== activeIndex}
            role="group"
          >
            <img
              src={infographics[index]}
              alt={`Promotional infographic ${index + 1}`}
              className="w-full h-full max-h-[500px] object-contain"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                console.error(`Error loading image ${index + 1}:`, e);
                e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors md:left-4"
        aria-label="Previous infographic"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors md:right-4"
        aria-label="Next infographic"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Mobile Indicators */}
      <div className="flex justify-center space-x-2 mt-4 md:hidden">
        {[...Array(totalImages)].map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
            aria-label={`Go to infographic ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>

    
  );
};

export default InfographicCarousel;
