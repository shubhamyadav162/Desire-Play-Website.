import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Expand, Heart, Share2, Eye } from 'lucide-react';
import ImageLightbox from '@/components/ui/ImageLightbox';

interface ProductImageGalleryProps {
  images: any[];
  title: string;
  badge?: string;
  onWishlist?: () => void;
  onShare?: () => void;
  isWishlisted?: boolean;
}

export default function ProductImageGallery({
  images,
  title,
  badge,
  onWishlist,
  onShare,
  isWishlisted = false
}: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div
        className="relative group cursor-zoom-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <img
            src={images[selectedImageIndex]}
            alt={`${title} - View ${selectedImageIndex + 1}`}
            className="w-full h-auto max-h-[600px] object-contain"
            onClick={() => handleImageClick(selectedImageIndex)}
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
            }}
          />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
          >
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
              onClick={() => handleImageClick(selectedImageIndex)}
            >
              <Eye className="h-5 w-5 mr-2" />
              View Full Screen
            </Button>
          </motion.div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 space-y-2 z-10">
            {badge && (
              <Badge variant="secondary" className="bg-white/90 text-gray-900 shadow-lg">
                {badge}
              </Badge>
            )}
            <Badge variant="outline" className="bg-white/90 text-gray-700 border-gray-300 shadow-lg">
              High Resolution
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            {onWishlist && (
              <Button
                variant="ghost"
                size="icon"
                className={`bg-white/90 hover:bg-white shadow-lg transition-colors ${
                  isWishlisted ? 'text-red-500' : 'text-gray-700'
                }`}
                onClick={onWishlist}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </Button>
            )}
            {onShare && (
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/90 hover:bg-white shadow-lg text-gray-700"
                onClick={onShare}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white shadow-lg text-gray-700"
              onClick={() => handleImageClick(selectedImageIndex)}
            >
              <Expand className="h-4 w-4" />
            </Button>
          </div>

          {/* Image Navigation Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedImageIndex
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg border-2 transition-all hover:scale-105 ${
                index === selectedImageIndex
                  ? 'border-blue-500 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={images[index]}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-20 object-cover"
              />
              {index === selectedImageIndex && (
                <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      )}

      {/* Image Info */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <span>Image {selectedImageIndex + 1} of {images.length}</span>
          <Badge variant="outline" className="text-xs">
            Click to zoom
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs">Press ESC to exit</span>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        currentIndex={selectedImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title={title}
      />
    </div>
  );
}