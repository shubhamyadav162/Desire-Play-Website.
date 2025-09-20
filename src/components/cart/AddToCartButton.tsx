import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface AddToCartButtonProps {
  product: {
    id: string;
    title: string;
    price: number;
    originalPrice?: number;
    image: string;
    variant?: string;
    features?: string[];
    category?: string;
  };
  variant?: 'default' | 'icon' | 'outline' | 'accent';
  size?: 'default' | 'sm' | 'lg';
  showQuantity?: boolean;
  className?: string;
}

export default function AddToCartButton({
  product,
  variant = 'default',
  size = 'default',
  showQuantity = false,
  className = ''
}: AddToCartButtonProps) {
  const { addItem, isItemInCart, getItemQuantity, state } = useCart();
  const [localQuantity, setLocalQuantity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const inCart = isItemInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    setIsAnimating(true);
    addItem({
      ...product,
      quantity: localQuantity
    });

    // Reset animation
    setTimeout(() => setIsAnimating(false), 600);
  };

  const increaseQuantity = () => {
    setLocalQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setLocalQuantity(prev => Math.max(1, prev - 1));
  };

  const buttonVariants = {
    default: 'bg-gradient-hero text-white hover:shadow-lg',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    icon: 'p-2'
  };

  const sizeClasses = {
    sm: 'text-xs',
    default: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showQuantity && (
        <div className="flex items-center border border-input rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={decreaseQuantity}
            disabled={localQuantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className={`w-8 text-center font-medium ${sizeClasses[size]}`}>
            {localQuantity}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={increaseQuantity}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      )}

      <motion.div
        animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant={variant === 'icon' ? 'ghost' : variant === 'default' ? 'default' : variant}
          size={size}
          className={`
            ${buttonVariants[variant]}
            ${sizeClasses[size]}
            ${inCart ? 'opacity-90' : ''}
            ${variant === 'icon' ? 'relative' : ''}
            ${className}
          `}
          onClick={handleAddToCart}
          disabled={state.isAdding}
        >
          {variant === 'icon' ? (
            <>
              <ShoppingCart className="h-4 w-4" />
              {inCart && (
                <Badge
                  variant="secondary"
                  className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center"
                >
                  {cartQuantity}
                </Badge>
              )}
            </>
          ) : (
            <>
              {state.isAdding ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Adding...
                </div>
              ) : inCart ? (
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  {cartQuantity > 1 ? `${cartQuantity} in Cart` : 'In Cart'}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </div>
              )}
            </>
          )}
        </Button>
      </motion.div>

      {/* Success animation overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            className="absolute z-50 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium"
          >
            Added to cart!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}