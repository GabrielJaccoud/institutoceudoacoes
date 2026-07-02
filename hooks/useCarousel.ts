import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselProps {
  totalSlides: number;
  autoAdvanceInterval?: number;
}

export function useCarousel({ totalSlides, autoAdvanceInterval = 5000 }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      goNext();
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [isPaused, goNext, autoAdvanceInterval]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  }, [goNext, goPrev]);

  return {
    currentIndex,
    goTo,
    goNext,
    goPrev,
    setIsPaused,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
