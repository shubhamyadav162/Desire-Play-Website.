import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SearchDialog from '@/components/search/SearchDialog';
import FloatingCart from '@/components/cart/FloatingCart';
import AuthModal from '@/components/auth/AuthModal';
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  User,
  Heart,
  Mail,
  LogOut
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, showAuthModal, setShowAuthModal, logout } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>hello@desireplay.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              Trusted by 2,000+ customers
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card border-b shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary">
                Desireplay
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-accent ${
                    isActive(item.href) 
                      ? 'text-accent border-b-2 border-accent' 
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/wishlist">
                  <Heart className="h-4 w-4" />
                </Link>
              </Button>
              {isAuthenticated ? (
                <div className="relative group">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative"
                    onClick={() => navigate('/profile')}
                  >
                    <User className="h-4 w-4" />
                    {user?.membershipTier === 'Gold' && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
                    )}
                  </Button>
                  {/* User Dropdown */}
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-3 border-b">
                      <p className="font-medium text-sm">{user?.name}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                    <div className="p-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm h-8"
                        onClick={() => navigate('/profile')}
                      >
                        <User className="mr-2 h-3 w-3" />
                        Profile
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm h-8 text-red-600 hover:text-red-700"
                        onClick={logout}
                      >
                        <LogOut className="mr-2 h-3 w-3" />
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowAuthModal(true)}
                >
                  <User className="h-4 w-4" />
                </Button>
              )}
              <FloatingCart />
              
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`font-medium py-2 transition-colors hover:text-accent ${
                          isActive(item.href) ? 'text-accent' : 'text-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          // Auth success handled by AuthContext
        }}
      />
    </>
  );
};

export default Header;