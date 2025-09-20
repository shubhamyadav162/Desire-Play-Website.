import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  title
}: ImageLightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset position and scale when image changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [currentImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigateImage(-1);
          break;
        case 'ArrowRight':
          navigateImage(1);
          break;
        case '+':
        case '=':
          handleZoom(0.25);
          break;
        case '-':
        case '_':
          handleZoom(-0.25);
          break;
        case '0':
          resetZoom();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex]);

  const navigateImage = useCallback((direction: number) => {
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentImageIndex(newIndex);
    }
  }, [currentImageIndex, images.length]);

  const handleZoom = useCallback((delta: number) => {
    setScale(prev => Math.max(0.5, Math.min(3, prev + delta)));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  }, [scale, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, dragStart, scale]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = images[currentImageIndex];
    link.download = `${title || 'design'}-${currentImageIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [images, currentImageIndex, title]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={onClose}
          >
            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-black/50">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {currentImageIndex + 1} / {images.length}
                  </Badge>
                  {title && (
                    <h3 className="text-white font-medium text-lg">
                      {title}
                    </h3>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={handleDownload}
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={onClose}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-black">
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                      onClick={() => navigateImage(-1)}
                      disabled={currentImageIndex === 0}
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                      onClick={() => navigateImage(1)}
                      disabled={currentImageIndex === images.length - 1}
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </>
                )}

                {/* Image with Zoom and Pan */}
                <div
                  className="relative cursor-move"
                  style={{
                    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                    transition: isDragging ? 'none' : 'transform 0.2s ease',
                    maxWidth: '90vw',
                    maxHeight: '70vh'
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={`${title || 'Design'} ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      pointerEvents: scale > 1 ? 'none' : 'auto',
                      userSelect: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Footer Controls */}
              <div className="flex items-center justify-between p-4 bg-black/50">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => handleZoom(-0.25)}
                    disabled={scale <= 0.5}
                  >
                    <ZoomOut className="h-5 w-5" />
                  </Button>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {Math.round(scale * 100)}%
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => handleZoom(0.25)}
                    disabled={scale >= 3}
                  >
                    <ZoomIn className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={resetZoom}
                  >
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 overflow-x-auto max-w-md">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          className={`relative flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                            index === currentImageIndex
                              ? 'border-white scale-110'
                              : 'border-transparent hover:border-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {index === currentImageIndex && (
                            <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Keyboard Shortcuts Hint */}
                <div className="text-xs text-white/60 hidden sm:block">
                  ESC • ← → • +/- • 0
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}