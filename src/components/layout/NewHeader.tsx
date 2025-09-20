import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NewHeader = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact-grievance' },
  ];

  // Handle start design click with notification
  const handleStartDesignClick = () => {
    toast({
      title: "🔧 Logo Builder Beta",
      description: "Advanced features coming in 2-3 weeks. Testing available now!",
      duration: 4000,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-xl" style={{ color: isScrolled ? '#1A202C' : '#1A202C' }}>
              Desireplay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-[#7C3AED] ${
                  isActive(item.href) 
                    ? 'text-[#7C3AED]' 
                    : 'text-[#1A202C]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={handleStartDesignClick}
            asChild
            className="hidden md:block rounded-full px-6 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/builder">
              Start Your Design
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default NewHeader;