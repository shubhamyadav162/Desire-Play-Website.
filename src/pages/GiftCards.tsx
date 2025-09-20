import { useState } from 'react';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import GiftCard from '@/components/product/GiftCard';
import {
  Filter,
  Grid,
  List,
  Heart,
  ShoppingCart,
  Star,
  IndianRupee,
  Gift,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const GiftCards = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Gift Cards', count: 21 },
    { id: 'international', name: 'International', count: 1 },
    { id: 'ecommerce', name: 'E-commerce', count: 8 },
    { id: 'fashion', name: 'Fashion & Apparel', count: 4 },
    { id: 'food', name: 'Food & Dining', count: 4 },
    { id: 'entertainment', name: 'Entertainment', count: 4 },
  ];

  const giftCards = [
    {
      id: 'amazon-gc',
      title: 'Amazon Shopping Voucher',
      brand: 'Amazon',
      price: 199,
      rating: 4.9,
      reviews: 1245,
      image: 'https://images.unsplash.com/photo-1626594851595-109d07a2b68c?auto=format&fit=crop&w=600&q=80',
      badge: 'Bestseller',
      description: 'Redeemable across millions of products on Amazon.in',
      validity: '12 Months',
      category: 'international'
    },
    {
      id: 'flipkart-gc',
      title: 'Flipkart Gift Card',
      brand: 'Flipkart',
      price: 199,
      rating: 4.8,
      reviews: 987,
      image: 'https://images.unsplash.com/photo-1611926653458-1022b7141a73?auto=format&fit=crop&w=600&q=80',
      badge: 'Popular',
      description: 'Shop from the widest range of products on Flipkart',
      validity: '12 Months',
      category: 'ecommerce'
    },
    {
      id: 'myntra-gc',
      title: 'Myntra Fashion Gift Card',
      brand: 'Myntra',
      price: 199,
      rating: 4.7,
      reviews: 756,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
      description: 'Latest fashion trends at your fingertips',
      validity: '6 Months',
      category: 'fashion'
    },
    {
      id: 'ajio-gc',
      title: 'AJIO Style Gift Card',
      brand: 'AJIO',
      price: 199,
      rating: 4.6,
      reviews: 543,
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80',
      description: 'Curated fashion for the modern Indian',
      validity: '6 Months',
      category: 'fashion'
    },
    {
      id: 'zomato-gc',
      title: 'Zomato Food Gift Card',
      brand: 'Zomato',
      price: 199,
      rating: 4.8,
      reviews: 1123,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      badge: 'Trending',
      description: 'Dine at the best restaurants or order food online',
      validity: '6 Months',
      category: 'food'
    },
    {
      id: 'swiggy-gc',
      title: 'Swiggy Gift Card',
      brand: 'Swiggy',
      price: 199,
      rating: 4.7,
      reviews: 987,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80',
      description: 'Food delivery and dining out made easy',
      validity: '6 Months',
      category: 'food'
    },
    {
      id: 'bigbasket-gc',
      title: 'BigBasket Grocery Card',
      brand: 'BigBasket',
      price: 199,
      rating: 4.6,
      reviews: 654,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
      description: 'Fresh groceries delivered to your doorstep',
      validity: '6 Months',
      category: 'ecommerce'
    },
    {
      id: 'tatacliq-gc',
      title: 'Tata CliQ Gift Card',
      brand: 'Tata CliQ',
      price: 199,
      rating: 4.5,
      reviews: 532,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80',
      description: 'Authentic brands across fashion, electronics, and more',
      validity: '12 Months',
      category: 'ecommerce'
    },
    {
      id: 'nykaa-gc',
      title: 'Nykaa Beauty Gift Card',
      brand: 'Nykaa',
      price: 199,
      rating: 4.8,
      reviews: 876,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80',
      badge: 'Popular',
      description: 'Beauty and cosmetics from top brands',
      validity: '6 Months',
      category: 'fashion'
    },
    {
      id: 'purplle-gc',
      title: 'Purplle Beauty Card',
      brand: 'Purplle',
      price: 199,
      rating: 4.5,
      reviews: 432,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      description: 'Makeup and skincare for everyone',
      validity: '6 Months',
      category: 'fashion'
    },
    {
      id: 'bookmyshow-gc',
      title: 'BookMyShow Entertainment Card',
      brand: 'BookMyShow',
      price: 199,
      rating: 4.7,
      reviews: 765,
      image: 'https://images.unsplash.com/photo-1489599904447-b47de73b2377?auto=format&fit=crop&w=600&q=80',
      description: 'Movies, events, plays, and sports experiences',
      validity: '6 Months',
      category: 'entertainment'
    },
    {
      id: 'netflix-gc',
      title: 'Netflix Gift Card',
      brand: 'Netflix',
      price: 199,
      rating: 4.9,
      reviews: 1432,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
      badge: 'Bestseller',
      description: 'Unlimited movies, TV shows, and more',
      validity: '12 Months',
      category: 'entertainment'
    },
    {
      id: 'spotify-gc',
      title: 'Spotify Premium Card',
      brand: 'Spotify',
      price: 199,
      rating: 4.8,
      reviews: 987,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
      description: 'Music, podcasts, and more without ads',
      validity: '12 Months',
      category: 'entertainment'
    },
    {
      id: 'dominos-gc',
      title: 'Domino\'s Pizza Gift Card',
      brand: 'Domino\'s',
      price: 199,
      rating: 4.6,
      reviews: 654,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80',
      description: 'Delicious pizzas delivered to your door',
      validity: '6 Months',
      category: 'food'
    },
    {
      id: 'mcdonalds-gc',
      title: 'McDonald\'s Gift Card',
      brand: 'McDonald\'s',
      price: 199,
      rating: 4.7,
      reviews: 876,
      image: 'https://images.unsplash.com/photo-1546423665-7ef76d33452b?auto=format&fit=crop&w=600&q=80',
      description: 'Your favorite burgers and fries',
      validity: '6 Months',
      category: 'food'
    },
    {
      id: 'croma-gc',
      title: 'Croma Electronics Gift Card',
      brand: 'Croma',
      price: 199,
      rating: 4.5,
      reviews: 543,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80',
      description: 'Latest electronics and home appliances',
      validity: '12 Months',
      category: 'ecommerce'
    },
    {
      id: 'reliancedigital-gc',
      title: 'Reliance Digital Card',
      brand: 'Reliance Digital',
      price: 199,
      rating: 4.4,
      reviews: 432,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      description: 'Electronics and mobile phones',
      validity: '12 Months',
      category: 'ecommerce'
    },
    {
      id: 'lifestyle-gc',
      title: 'Lifestyle Gift Card',
      brand: 'Lifestyle',
      price: 199,
      rating: 4.6,
      reviews: 654,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
      description: 'Fashion, home decor, and beauty',
      validity: '6 Months',
      category: 'fashion'
    },
    {
      id: 'shoppersstop-gc',
      title: 'Shoppers Stop Gift Card',
      brand: 'Shoppers Stop',
      price: 199,
      rating: 4.5,
      reviews: 543,
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80',
      description: 'Fashion, beauty, and home essentials',
      validity: '12 Months',
      category: 'fashion'
    },
    {
      id: 'primevideo-gc',
      title: 'Amazon Prime Video Card',
      brand: 'Prime Video',
      price: 199,
      rating: 4.7,
      reviews: 765,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
      description: 'Exclusive movies, TV shows, and originals',
      validity: '12 Months',
      category: 'entertainment'
    },
    {
      id: 'hotstar-gc',
      title: 'Disney+ Hotstar Card',
      brand: 'Disney+ Hotstar',
      price: 199,
      rating: 4.6,
      reviews: 654,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
      description: 'Live sports, movies, and Disney content',
      validity: '12 Months',
      category: 'entertainment'
    },
    {
      id: 'grofers-gc',
      title: 'Blinkit Grocery Card',
      brand: 'Blinkit',
      price: 199,
      rating: 4.5,
      reviews: 543,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
      description: 'Instant grocery delivery in minutes',
      validity: '6 Months',
      category: 'ecommerce'
    }
  ];

  const filteredGiftCards = giftCards.filter(card => {
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
    const matchesSearch = card.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="h-6 w-6 text-accent" />
            <Badge className="border-accent text-accent" variant="outline">
              Gift Cards
            </Badge>
          </div>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-2">
            Gift Cards for Every Occasion
          </h1>
          <p className="text-muted-foreground">
            Choose from 21+ top brands. Perfect gift for your loved ones, all at just ₹199 each.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8 max-w-2xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">21+</div>
            <div className="text-sm text-muted-foreground">Brands</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">₹199</div>
            <div className="text-sm text-muted-foreground">Fixed Price</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">6-12</div>
            <div className="text-sm text-muted-foreground">Months Validity</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">Instant</div>
            <div className="text-sm text-muted-foreground">Delivery</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search Brands
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search gift cards..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-accent text-accent-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Gift Card Info */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">Why Gift Cards?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                      <span>Perfect for every occasion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                      <span>Let recipients choose what they want</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                      <span>Instant delivery via email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                      <span>Long validity period</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Gift Cards Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredGiftCards.length} gift cards
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex border border-input rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Gift Cards */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredGiftCards.map((giftCard, index) => (
                <GiftCard
                  key={giftCard.id}
                  giftCard={giftCard}
                  index={index}
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 text-center">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
                Can't Decide? Send a Multi-Brand Gift Card!
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Not sure which brand they'll love? Our multi-brand gift card lets recipients choose from 
                all our partner brands. The perfect solution when you want to give the gift of choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Gift className="mr-2 h-4 w-4" />
                  Buy Multi-Brand Card
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GiftCards;