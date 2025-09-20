import { useState, useMemo } from 'react';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Trash2,
  Plus,
  Minus,
  IndianRupee,
  ShoppingBag,
  Gift,
  CreditCard,
  Shield,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { getProductImage } from '@/utils/productImages';

const Cart = () => {
  const { state, updateQuantity, removeItem, clearCart, getSubtotal, getTotal } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const subtotal = getSubtotal();
  const total = getTotal();
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const gst = total - subtotal - discount;

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'first10') {
      setAppliedPromo({ code: 'FIRST10', discount: 0.1 });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-2">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground">
            {state.items.length} {state.items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any items to your cart yet
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => {
                const correctImage = getProductImage(item.id, item.image);
                return (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <img
                            src={correctImage}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.variant}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.features.map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center text-foreground font-semibold">
                              <span>₹{Math.round(item.price * item.quantity * 1.18)}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
              })}
              
              {/* Promo Code */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <Input
                        placeholder="Enter promo code (try: FIRST10)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" onClick={applyPromoCode}>
                      Apply
                    </Button>
                  </div>
                  {appliedPromo && (
                    <div className="mt-3 flex items-center gap-2 text-success">
                      <Gift className="h-4 w-4" />
                      <span className="text-sm">Promo code {appliedPromo.code} applied!</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4" />
                        <span>{subtotal.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-success">
                        <span>Discount ({appliedPromo.code})</span>
                        <div className="flex items-center">
                          <span>-</span>
                          <IndianRupee className="h-4 w-4" />
                          <span>{discount.toLocaleString()}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4" />
                        <span>{Math.round(gst).toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-5 w-5" />
                        <span>{Math.round(total).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/checkout">
                        Proceed to Checkout
                      </Link>
                    </Button>

                    <Button variant="outline" className="w-full" onClick={clearCart}>
                      Clear Cart
                    </Button>

                    <Button variant="ghost" className="w-full" asChild>
                      <Link to="/shop">
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-success" />
                      <span>Secure Checkout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>24h Delivery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;