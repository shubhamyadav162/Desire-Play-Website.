import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { IndianRupee, ShoppingCart, X, Plus, Minus, Trash2, CheckCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

export default function FloatingCart() {
  const { state, removeItem, updateQuantity, clearCart, toggleCart, getTotalItems, getSubtotal, getTotal } = useCart();

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (state.isOpen) {
        const cartElement = document.querySelector('.floating-cart-container');
        if (cartElement && !cartElement.contains(event.target as Node)) {
          toggleCart();
        }
      }
    };

    if (state.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [state.isOpen, toggleCart]);

  const subtotal = getSubtotal();
  const total = getTotal();
  const gst = total - subtotal;

  return (
    <>
      {/* Cart Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={toggleCart}
      >
        <ShoppingCart className="h-4 w-4" />
        {getTotalItems() > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 h-5 w-5 text-xs p-0 flex items-center justify-center animate-pulse"
          >
            {getTotalItems()}
          </Badge>
        )}
        {state.isAdding && (
          <div className="absolute -top-1 -right-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          </div>
        )}
      </Button>

      {/* Floating Cart Panel */}
      <AnimatePresence>
        {state.isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={toggleCart}
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="floating-cart-container fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl z-50 flex flex-col"
            >
              {/* Cart Header */}
              <div className="flex items-center justify-between p-4 border-b bg-card">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  <h2 className="font-semibold text-lg">
                    Your Cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
                  </h2>
                </div>
                <Button variant="ghost" size="icon" onClick={toggleCart}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto">
                {state.items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-4">
                      Add some items to get started!
                    </p>
                    <Button variant="hero" asChild onClick={toggleCart}>
                      <Link to="/shop">Continue Shopping</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="p-4 space-y-4">
                    {/* Last Added Item Animation */}
                    <AnimatePresence>
                      {state.lastAddedItem && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2"
                        >
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm text-green-800">
                            Added {state.lastAddedItem.title} to cart!
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Cart Items */}
                    {state.items.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />

                            <div className="flex-1 space-y-2">
                              <div>
                                <h4 className="font-medium text-sm line-clamp-1">
                                  {item.title}
                                </h4>
                                {item.variant && (
                                  <p className="text-xs text-muted-foreground">
                                    {item.variant}
                                  </p>
                                )}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center text-foreground font-semibold">
                                    <IndianRupee className="h-3 w-3" />
                                    <span className="text-sm">{Math.round(item.price * 1.18)}</span>
                                  </div>
                                  {item.originalPrice && (
                                    <div className="flex items-center text-muted-foreground line-through">
                                      <IndianRupee className="h-2 w-2" />
                                      <span className="text-xs">{item.originalPrice.toLocaleString()}</span>
                                    </div>
                                  )}
                                </div>

                                <div className="flex items-center gap-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center text-sm font-medium">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center text-foreground font-bold">
                                  <IndianRupee className="h-4 w-4" />
                                  <span className="text-sm">
                                    {Math.round(item.price * item.quantity * 1.18).toLocaleString()}
                                  </span>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6 text-destructive hover:text-destructive"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {state.items.length > 0 && (
                <div className="border-t bg-card p-4 space-y-4">
                  {/* Order Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-3 w-3" />
                        <span>{subtotal.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-3 w-3" />
                        <span>{Math.round(gst).toLocaleString()}</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4" />
                        <span>{Math.round(total).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button variant="hero" className="w-full" asChild onClick={toggleCart}>
                      <Link to="/cart">
                        View Cart & Checkout
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" onClick={clearCart}>
                      Clear Cart
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}