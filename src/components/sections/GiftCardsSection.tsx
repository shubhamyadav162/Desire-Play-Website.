import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Star, ArrowRight } from 'lucide-react';

const GiftCardsSection = () => {
  const giftCards = [
    {
      id: 'amazon-gc',
      title: 'Amazon Shopping Voucher',
      brand: 'Amazon',
      price: 199,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1626594851595-109d07a2b68c?auto=format&fit=crop&w=600&q=80',
      badge: 'Bestseller'
    },
    {
      id: 'flipkart-gc',
      title: 'Flipkart Gift Card',
      brand: 'Flipkart',
      price: 199,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1611926653458-1022b7141a73?auto=format&fit=crop&w=600&q=80',
      badge: 'Popular'
    },
    {
      id: 'zomato-gc',
      title: 'Zomato Food Gift Card',
      brand: 'Zomato',
      price: 199,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      badge: 'Trending'
    },
    {
      id: 'netflix-gc',
      title: 'Netflix Gift Card',
      brand: 'Netflix',
      price: 199,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
      badge: 'Bestseller'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 to-purple-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="h-6 w-6 text-accent" />
            <Badge className="border-accent text-accent" variant="outline">
              New
            </Badge>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Gift Cards for Every Occasion
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from 21+ top brands. Perfect gift for your loved ones, all at just ₹199 each.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {giftCards.map((giftCard, index) => (
            <Card
              key={giftCard.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="relative aspect-square">
                    <img
                      src={giftCard.image}
                      alt={`${giftCard.brand} Gift Card`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 space-y-2 z-10">
                      {giftCard.badge && (
                        <Badge variant="secondary" className="bg-white/90 text-gray-900 shadow-lg">
                          {giftCard.badge}
                        </Badge>
                      )}
                      <Badge variant="outline" className="bg-white/90 text-gray-700 border-gray-300 shadow-lg text-xs">
                        Gift Card
                      </Badge>
                    </div>

                    {/* Gift Icon Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-white/90 text-red-500 shadow-lg">
                        <Gift className="h-3 w-3 mr-1" />
                        Gift
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{giftCard.brand}</h3>
                    <h4 className="font-medium text-muted-foreground text-sm">
                      {giftCard.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{giftCard.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-foreground font-bold">
                      <span>₹{giftCard.price}</span>
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      33% OFF
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to={`/gift-card/${giftCard.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
            <Link to="/gift-cards">
              Explore All Gift Cards
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GiftCardsSection;