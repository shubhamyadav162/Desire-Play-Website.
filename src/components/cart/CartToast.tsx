import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ShoppingCart, IndianRupee } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CartToast() {
  const { state } = useCart();

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (state.lastAddedItem) {
      const timer = setTimeout(() => {
        // This will be handled by the cart context
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.lastAddedItem]);

  return (
    <AnimatePresence>
      {state.lastAddedItem && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <Card className="shadow-lg border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-green-800">Added to Cart!</h4>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      {state.items.reduce((total, item) => total + item.quantity, 0)} items
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-700">
                      {state.lastAddedItem.title}
                    </span>
                    {state.lastAddedItem.quantity > 1 && (
                      <Badge variant="outline" className="text-xs">
                        ×{state.lastAddedItem.quantity}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-700 font-semibold">
                      <IndianRupee className="h-3 w-3" />
                      <span className="text-sm">
                        {(state.lastAddedItem.price * state.lastAddedItem.quantity).toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-green-600">
                      Total: {state.items.reduce((total, item) => total + item.quantity, 0)} items
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}