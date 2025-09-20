import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Star,
  IndianRupee,
  Heart,
  Share2,
  Gift,
  Clock,
  Shield,
  Smartphone,
  Mail,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import AddToCartButton from '@/components/cart/AddToCartButton';
import ImageLightbox from '@/components/ui/ImageLightbox';

const GiftCardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Mock data - in a real app, this would come from an API
  const giftCardData: Record<string, any> = {
    'amazon-gc': {
      id: 'amazon-gc',
      title: 'Amazon Shopping Voucher',
      brand: 'Amazon',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 1245,
      image: 'https://images.unsplash.com/photo-1626594851595-109d07a2b68c?auto=format&fit=crop&w=1200&q=80',
      badge: 'Bestseller',
      description: 'Redeemable across millions of products on Amazon.in',
      validity: '12 Months',
      category: 'international',
      details: [
        'Valid on all products except Amazon Gift Cards',
        'No expiration date or fees',
        'Redeemable on Amazon.in website and mobile app',
        'Can be combined with other payment methods'
      ],
      howToRedeem: [
        'Visit Amazon.in and select your products',
        'Proceed to checkout',
        'Enter the gift card code in the "Gift Cards & Promotional Codes" field',
        'The gift card amount will be applied to your order'
      ],
      terms: [
        'This gift card is redeemable on Amazon.in only',
        'Gift cards cannot be used to purchase other gift cards',
        'No returns or refunds on gift cards',
        'Amazon is not responsible if a gift card is lost, stolen, destroyed or used without permission'
      ]
    },
    'flipkart-gc': {
      id: 'flipkart-gc',
      title: 'Flipkart Gift Card',
      brand: 'Flipkart',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 987,
      image: 'https://images.unsplash.com/photo-1611926653458-1022b7141a73?auto=format&fit=crop&w=1200&q=80',
      badge: 'Popular',
      description: 'Shop from the widest range of products on Flipkart',
      validity: '12 Months',
      category: 'ecommerce',
      details: [
        'Valid on all products except Flipkart Gift Cards',
        'No expiration date or fees',
        'Redeemable on Flipkart website and mobile app',
        'Can be combined with other payment methods'
      ],
      howToRedeem: [
        'Visit Flipkart.com and select your products',
        'Proceed to checkout',
        'Enter the gift card code in the "Gift Cards" section',
        'The gift card amount will be applied to your order'
      ],
      terms: [
        'This gift card is redeemable on Flipkart.com only',
        'Gift cards cannot be used to purchase other gift cards',
        'No returns or refunds on gift cards',
        'Flipkart is not responsible if a gift card is lost, stolen, destroyed or used without permission'
      ]
    },
    // Add more gift cards as needed
  };

  const giftCard = giftCardData[id || ''] || giftCardData['amazon-gc'];

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleImageClick = () => {
    setIsLightboxOpen(true);
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link to="/gift-cards" className="text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Gift Cards
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{giftCard.brand}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
              <img
                src={giftCard.image}
                alt={`${giftCard.brand} Gift Card`}
                className="w-full h-auto object-cover cursor-pointer"
                onClick={handleImageClick}
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {giftCard.badge && (
                  <Badge variant="secondary" className="bg-white/90 text-gray-900 shadow-lg">
                    {giftCard.badge}
                  </Badge>
                )}
                <Badge variant="outline" className="bg-white/90 text-gray-700 border-gray-300 shadow-lg">
                  Gift Card
                </Badge>
              </div>

              {/* Gift Icon Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-red-500 shadow-lg">
                  <Gift className="h-3 w-3 mr-1" />
                  Gift
                </Badge>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className="aspect-square rounded-md overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer border-2 border-transparent hover:border-accent"
                  onClick={handleImageClick}
                >
                  <img
                    src={giftCard.image}
                    alt={`${giftCard.brand} Gift Card ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="font-heading font-bold text-3xl text-foreground">
                  {giftCard.brand} Gift Card
                </h1>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`text-muted-foreground hover:text-foreground ${isWishlisted ? 'text-red-500' : ''}`}
                  onClick={handleWishlist}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              <h2 className="text-lg text-muted-foreground mb-4">
                {giftCard.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium ml-1">{giftCard.rating}</span>
                  <span className="text-muted-foreground ml-1">({giftCard.reviews} reviews)</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {giftCard.validity} Validity
                </Badge>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <div className="flex items-center text-foreground font-bold text-3xl">
                  <IndianRupee className="h-5 w-5" />
                  <span>{giftCard.price}</span>
                </div>
                <div className="flex items-center text-muted-foreground text-lg line-through">
                  <IndianRupee className="h-4 w-4" />
                  <span>{giftCard.originalPrice}</span>
                </div>
                <Badge variant="destructive" className="text-sm">
                  {Math.round((1 - giftCard.price / giftCard.originalPrice) * 100)}% OFF
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground">
              {giftCard.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <div className="w-16 text-center">{quantity}</div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3">
                <AddToCartButton
                  product={{
                    ...giftCard,
                    category: 'gift-card',
                    features: [`Valid for ${giftCard.validity}`, 'Instant Delivery']
                  }}
                  variant="default"
                  size="lg"
                  className="flex-1"
                />
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Delivery Info */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3">Delivery Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent/10 p-2 rounded-full">
                      <Smartphone className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Instant Delivery</p>
                      <p className="text-xs text-muted-foreground">Via SMS & Email</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-accent/10 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Secure</p>
                      <p className="text-xs text-muted-foreground">Encrypted Delivery</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-accent/10 p-2 rounded-full">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Gift Message</p>
                      <p className="text-xs text-muted-foreground">Personalize It</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="redeem">How to Redeem</TabsTrigger>
              <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-4">Product Details</h3>
                  <ul className="space-y-2">
                    {giftCard.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="redeem" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-4">How to Redeem</h3>
                  <ol className="space-y-4">
                    {giftCard.howToRedeem.map((step: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="terms" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-4">Terms & Conditions</h3>
                  <ul className="space-y-2">
                    {giftCard.terms.map((term: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{term}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Gift Cards */}
        <div className="mt-16">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
            You May Also Like
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would be populated with related gift cards */}
            <div className="text-center text-muted-foreground py-8">
              Related gift cards will appear here
            </div>
          </div>
        </div>
      </main>

      {/* Image Lightbox */}
      <ImageLightbox
        images={[giftCard.image]}
        currentIndex={0}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title={`${giftCard.brand} Gift Card`}
      />
    </div>
  );
};

export default GiftCardDetail;