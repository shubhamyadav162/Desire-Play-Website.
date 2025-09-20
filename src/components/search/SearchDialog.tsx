import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Clock, 
  TrendingUp,
  ArrowRight,
  Star,
  IndianRupee
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoShowcase from '@/assets/download (10).jpg';
import visitingCardMockup from '@/assets/download (2).jpg';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const recentSearches = ['logo design', 'visiting cards', 'business branding', 'startup kit'];
  const trendingSearches = ['modern logo', 'minimalist design', 'tech startup', 'restaurant brand'];
  
  const searchResults = [
    {
      id: 1,
      title: 'Premium Logo Design Package',
      category: 'Logo Design',
      price: 199,
      rating: 4.9,
      image: logoShowcase,
      type: 'product'
    },
    {
      id: 2,
      title: 'Business Visiting Cards',
      category: 'Visiting Cards',
      price: 199,
      rating: 4.8,
      image: visitingCardMockup,
      type: 'product'
    },
    {
      id: 3,
      title: 'How to Choose Colors for Your Logo',
      category: 'Blog',
      readTime: '5 min read',
      type: 'content'
    }
  ];

  const filteredResults = searchQuery.length > 0 
    ? searchResults.filter(result =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      // In a real app, this would trigger an API call
      console.log('Searching for:', query);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Desireplay
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for logos, visiting cards, or services..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 py-6 text-lg"
              autoFocus
            />
          </div>
        </div>

        <div className="px-6 pb-6 space-y-6 overflow-y-auto max-h-96">
          {/* Search Results */}
          {searchQuery.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Results for "{searchQuery}" ({filteredResults.length})
              </h3>
              <div className="space-y-2">
                {filteredResults.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors"
                    onClick={() => onOpenChange(false)}
                  >
                    {result.type === 'product' && (
                      <img 
                        src={result.image} 
                        alt={result.title}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    )}
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{result.title}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {result.category}
                        </Badge>
                        {result.type === 'product' && (
                          <>
                            <div className="flex items-center">
                              <IndianRupee className="h-3 w-3" />
                              <span>{result.price.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-accent fill-current" />
                              <span>{result.rating}</span>
                            </div>
                          </>
                        )}
                        {result.type === 'content' && (
                          <span>{result.readTime}</span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Searches */}
          {searchQuery.length === 0 && (
            <>
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Recent Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearch(search)}
                      className="text-xs"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Trending Searches */}
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trending Now
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearch(search)}
                      className="text-xs"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Popular Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Logo Design', href: '/shop?category=logos' },
                    { name: 'Visiting Cards', href: '/shop?category=cards' },
                    { name: 'Brand Packages', href: '/shop?category=bundles' },
                    { name: 'Portfolio', href: '/portfolio' }
                  ].map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => onOpenChange(false)}
                      className="p-3 border rounded-lg hover:bg-muted/50 transition-colors text-center text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* No Results */}
          {searchQuery.length > 0 && filteredResults.length === 0 && (
            <div className="text-center py-8">
              <div className="text-muted-foreground mb-4">
                No results found for "{searchQuery}"
              </div>
              <Button variant="outline" asChild>
                <Link to="/contact" onClick={() => onOpenChange(false)}>
                  Request Custom Design
                </Link>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;