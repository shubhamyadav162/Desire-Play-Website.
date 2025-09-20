import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, IndianRupee, Heart, Eye, Expand } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddToCartButton from '@/components/cart/AddToCartButton';
import ImageLightbox from '@/components/ui/ImageLightbox';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    category: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
    features?: string[];
  };
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLightboxOpen(true);
  };

  return (
    <>
      <Card className="group overflow-hidden">
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.1))'
                }}
              />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex flex-col gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                    onClick={handleImageClick}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Quick View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/90 hover:bg-white text-gray-900 border-gray-300 shadow-lg"
                    asChild
                  >
                    <Link to={`/product/${product.id}`}>
                      <Expand className="h-4 w-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Top Badges */}
              <div className="absolute top-3 left-3 space-y-2 z-10">
                {product.badge && (
                  <Badge variant="secondary" className="bg-white/90 text-gray-900 shadow-lg">
                    {product.badge}
                  </Badge>
                )}
                <Badge variant="outline" className="bg-white/90 text-gray-700 border-gray-300 shadow-lg text-xs">
                  {product.category}
                </Badge>
              </div>

              {/* Wishlist Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-3 right-3 z-10 bg-white/90 hover:bg-white shadow-lg transition-colors ${
                  isWishlisted ? 'text-red-500' : 'text-gray-700'
                }`}
                onClick={handleWishlist}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </Button>

              {/* Quick Add to Cart */}
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: isHovered ? 0 : 100 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-3 left-3 right-3 z-10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AddToCartButton
                  product={product}
                  variant="default"
                  size="sm"
                  className="w-full bg-white/90 hover:bg-white text-gray-900 shadow-lg border-0"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-3">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {product.title}
            </h3>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 2).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {product.features.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{product.features.length - 2}
                  </Badge>
                )}
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-2">
              <div className="flex items-center text-foreground font-bold">
                <span>199</span>
              </div>
              {product.originalPrice && (
                <div className="flex items-center text-muted-foreground text-sm line-through">
                  <IndianRupee className="h-3 w-3" />
                  <span>{product.originalPrice.toLocaleString()}</span>
                </div>
              )}
              <Badge variant="destructive" className="text-xs">
                {Math.round((1 - 199 / (product.originalPrice || 299)) * 100)}% OFF
              </Badge>
              </div>

            {/* View Details Button */}
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              asChild
            >
              <Link to={`/product/${product.id}`}>
                View Full Details
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Image Lightbox */}
      <ImageLightbox
        images={[product.image]}
        currentIndex={0}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title={product.title}
      />
    </>
  );
}