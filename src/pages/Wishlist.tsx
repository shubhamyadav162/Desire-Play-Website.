import { useState } from 'react';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  ShoppingCart,
  Star,
  IndianRupee,
  X,
  Share2,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoShowcase from '@/assets/Check out vedank\'s new logo design from 99designs.jpg';
import visitingCardMockup from '@/assets/Create a Unique & Professional Logo Online with Our Easy Logo Maker_ KAQ05U.jpg';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: 'Premium Logo Design Package',
      category: 'Logo Design',
      price: 199,
      originalPrice: 299,
      rating: 4.9,
      reviews: 234,
      image: logoShowcase,
      badge: 'Bestseller',
      inStock: true,
      addedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Business Visiting Cards',
      category: 'Visiting Cards',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      reviews: 156,
      image: visitingCardMockup,
      badge: 'Popular',
      inStock: true,
      addedDate: '2024-01-10'
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const moveToCart = (id: number) => {
    // In a real app, this would add to cart and remove from wishlist
    removeFromWishlist(id);
  };

  const categories = [...new Set(wishlistItems.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? wishlistItems 
    : wishlistItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-2">
            My Wishlist
          </h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Save your favorite designs to keep track of them
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">
                Explore Designs
              </Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Filters & Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select 
                  className="border border-input rounded-md px-3 py-2 text-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                  Share Wishlist
                </Button>
                <Button variant="accent" size="sm">
                  Add All to Cart
                </Button>
              </div>
            </div>

            {/* Wishlist Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-hover transition-all duration-normal">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      
                      {/* Remove from wishlist */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white text-destructive"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 space-y-2">
                        <Badge variant="secondary">
                          {item.badge}
                        </Badge>
                        {!item.inStock && (
                          <Badge variant="destructive" className="block">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <div>
                        <Badge variant="outline" className="text-xs mb-2">
                          {item.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-accent fill-current" />
                            <span className="text-sm font-medium ml-1">{item.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({item.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-foreground font-bold">
                          <IndianRupee className="h-4 w-4" />
                          <span>{item.price.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm line-through">
                          <IndianRupee className="h-3 w-3" />
                          <span>{item.originalPrice.toLocaleString()}</span>
                        </div>
                        <Badge variant="destructive" className="text-xs">
                          {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        Added on {new Date(item.addedDate).toLocaleDateString('en-IN')}
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button 
                          asChild 
                          className="flex-1" 
                          size="sm"
                          disabled={!item.inStock}
                        >
                          <Link to={`/product/${item.id}`}>
                            View Details
                          </Link>
                        </Button>
                        <Button 
                          variant="accent" 
                          size="sm"
                          onClick={() => moveToCart(item.id)}
                          disabled={!item.inStock}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {!item.inStock && (
                        <div className="pt-2">
                          <Button variant="outline" size="sm" className="w-full">
                            Notify When Available
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recommended Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
                  You Might Also Like
                </h2>
                <p className="text-muted-foreground">
                  Similar designs based on your wishlist
                </p>
              </div>
              
              <div className="text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/shop">
                    View More Designs
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Wishlist;