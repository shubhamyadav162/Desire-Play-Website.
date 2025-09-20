import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AddToCartButton from '@/components/cart/AddToCartButton';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import {
  Heart,
  ShoppingCart,
  Star,
  IndianRupee,
  Check,
  Download,
  Palette,
  Clock,
  Shield,
  Share2,
  Minus,
  Plus
} from 'lucide-react';
import logoShowcase from '@/assets/Check out afleurdepeau11\'s new logo design from 99designs.jpg';
import visitingCardMockup from '@/assets/Check out tino_huelsbusch\'s new logo design from 99designs.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('premium');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Mock product data for different product IDs
  const productsData = {
    '1': {
      id: '1',
      title: 'Premium Logo Design Package',
      category: 'Logo Design',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 234,
      images: [logoShowcase],
      badge: 'Bestseller',
      description: 'Get a professional logo design that perfectly represents your brand. Our expert designers create unique, memorable logos that help your business stand out in the Indian market.',
      features: [
        'Professional logo design',
        'Multiple design options',
        'High-resolution files',
        'Quick delivery',
        '24/7 support',
        'Commercial usage rights',
        'Professional quality'
      ],
      variants: [
        {
          id: 'standard',
          name: 'Standard',
          price: 199,
          features: ['Professional design', 'High quality files']
        }
      ],
      deliverables: [
        'High-resolution PNG (300 DPI)',
        'Scalable SVG format',
        'Print-ready PDF',
        'Adobe Illustrator source file',
        'Brand color palette',
        'Typography guidelines',
        'Logo usage guidelines'
      ],
      process: [
        'Share your business details and preferences',
        'Our designers create initial concepts',
        'Review and provide feedback',
        'Receive final files and brand guidelines'
      ]
    },
    '2': {
      id: '2',
      title: 'Business Visiting Cards',
      category: 'Visiting Cards',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      images: [visitingCardMockup],
      badge: 'Popular',
      description: 'Professional business visiting cards that make a lasting impression. Premium quality cards with modern designs that represent your brand effectively.',
      features: [
        'Premium quality paper stock',
        'Double-sided printing',
        'Multiple design options',
        'Fast delivery service',
        'Custom shapes available',
        'QR code integration',
        'Spot UV finishing',
        'Bulk order discounts'
      ],
      variants: [
        {
          id: 'standard',
          name: 'Standard',
          price: 199,
          features: ['Professional quality', 'Fast delivery']
        }
      ],
      deliverables: [
        'Professional business cards',
        'Digital proof approval',
        'Design consultation',
        'Multiple file formats',
        'Print-ready files',
        'Brand consistency check'
      ],
      process: [
        'Consultation for requirements',
        'Design concept creation',
        'Review and revisions',
        'Printing and delivery'
      ]
    },
    '3': {
      id: '3',
      title: 'Startup Brand Identity Kit',
      category: 'Brand Identity',
      price: 199,
      originalPrice: 299,
      rating: 5.0,
      reviews: 89,
      images: [logoShowcase],
      badge: 'Complete Kit',
      description: 'Complete brand identity package for startups and small businesses. Everything you need to establish a professional brand presence.',
      features: [
        'Custom logo design',
        'Business card design',
        'Brand guidelines document',
        'Social media kit',
        'Letterhead design',
        'Email signature',
        'Brand color palette',
        'Typography guidelines'
      ],
      variants: [
        {
          id: 'standard',
          name: 'Complete Kit',
          price: 199,
          features: ['Full brand identity', 'All brand assets']
        }
      ],
      deliverables: [
        'Primary logo design',
        'Business card designs',
        'Brand guidelines document',
        'Social media profile pictures',
        'Email signature template',
        'Letterhead template',
        'Color palette specification',
        'Typography guidelines'
      ],
      process: [
        'Brand strategy consultation',
        'Logo design concepts',
        'Brand identity development',
        'Asset creation and delivery'
      ]
    }
  };

  const product = productsData[id as keyof typeof productsData] || productsData['1'];

  const selectedVariantData = product.variants.find(v => v.id === selectedVariant) || product.variants[0];

  // Prepare product for cart with selected variant
  const cartProduct = {
    ...product,
    price: selectedVariantData.price,
    variant: selectedVariantData.name,
    features: selectedVariantData.features
  };

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductImageGallery
              images={product.images}
              title={product.title}
              badge={product.badge}
              onWishlist={handleWishlist}
              onShare={handleShare}
              isWishlisted={isWishlisted}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-current" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="font-heading font-bold text-3xl text-foreground mb-4">
                {product.title}
              </h1>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Choose Option</h3>
              <div className="grid gap-3">
                {product.variants.map((variant) => (
                  <div
                    key={variant.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedVariant === variant.id
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50'
                    }`}
                    onClick={() => setSelectedVariant(variant.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-foreground">{variant.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {variant.features.join(' • ')}
                        </div>
                      </div>
                      <div className="flex items-center text-foreground font-bold">
                        <span>₹199</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Actions */}
            <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-2xl font-bold text-foreground">
                      <span>199</span>
                    </div>
                    <div className="flex items-center text-muted-foreground line-through">
                      <span>₹{product.originalPrice}</span>
                    </div>
                    </div>
                  <Badge variant="destructive" className="mt-1">
                    {Math.round((1 - 199 / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-3">
                <AddToCartButton
                  product={cartProduct}
                  variant="default"
                  size="lg"
                  showQuantity={true}
                  className="flex-1"
                />
                <Button variant="accent" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center text-sm pt-4 border-t">
                <div className="flex flex-col items-center gap-1">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>24h Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Shield className="h-4 w-4 text-success" />
                  <span>Secure Service</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Download className="h-4 w-4 text-primary" />
                  <span>All Formats</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="deliverables" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {product.deliverables.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Download className="h-5 w-5 text-accent" />
                        <span>{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="mt-8">
              <div className="space-y-6">
                {product.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Step {index + 1}</h4>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <Card key={review}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold">
                          U
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">User {review}</span>
                            <div className="flex">
                              {[1,2,3,4,5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-accent fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">
                            Excellent service! The logo design exceeded my expectations. 
                            Professional quality and quick turnaround time.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;