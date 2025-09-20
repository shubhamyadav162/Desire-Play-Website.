import { useState } from 'react';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  IndianRupee,
  CreditCard,
  Shield,
  Clock,
  Truck,
  MapPin,
  Mail,
  User,
  Building,
  CheckCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { getProductImage } from '@/utils/productImages';

const Checkout = () => {
  const navigate = useNavigate();
  const { state, getSubtotal, getTotal, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });

  const [billingInfo, setBillingInfo] = useState({
    sameAsShipping: true,
    fullName: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });

  const subtotal = getSubtotal();
  const total = getTotal();
  const gst = total - subtotal;

  const handleCheckout = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <NewHeader />
        <main className="container mx-auto px-4 pt-24 pb-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Add some items to your cart to proceed with checkout
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />

      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-2">
            Checkout
          </h1>
          <p className="text-muted-foreground">
            Review your order and complete your purchase
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={shippingInfo.fullName}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input
                      id="pincode"
                      value={shippingInfo.pincode}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, pincode: e.target.value }))}
                      placeholder="400001"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter your complete address"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, city: e.target.value }))}
                      placeholder="Mumbai"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo(prev => ({ ...prev, state: e.target.value }))}
                      placeholder="Maharashtra"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => {
                  const correctImage = getProductImage(item.id, item.image);
                  return (
                    <div key={item.id} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <img
                          src={correctImage}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.variant}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Qty: {item.quantity}
                        </Badge>
                        <div className="flex items-center text-foreground font-semibold">
                          <IndianRupee className="h-3 w-3" />
                          <span>{Math.round(item.price * item.quantity * 1.18)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                })}
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
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={handleCheckout}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay Now
                  </Button>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/cart">
                      Back to Cart
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>24h Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Free Shipping</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Payment Gateway Not Connected Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Information
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Alert>
              <AlertDescription className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>
                  <strong>Payment Gateway Status:</strong> Currently, our payment gateway is not connected.
                  We are working on integrating secure payment options and will notify you once it's available.
                </span>
              </AlertDescription>
            </Alert>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="h-8 w-8 text-amber-600" />
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Payment Gateway Coming Soon!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for your patience! We're working hard to bring you secure and convenient payment options.
                  You will receive a notification once our payment gateway is connected and ready to use.
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="outline"
                  onClick={handlePaymentModalClose}
                >
                  I Understand
                </Button>

                <Button
                  variant="ghost"
                  asChild
                  className="text-sm"
                >
                  <Link to="/shop">
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;