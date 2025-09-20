import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate particle positions based on mouse position
  const calculateParticlePosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2;
    const distance = 100 + Math.sin(Date.now() / 2000 + index) * 20;
    const x = mousePosition.x + Math.cos(angle) * distance;
    const y = mousePosition.y + Math.sin(angle) * distance;
    return { x, y };
  };

  // Handle build logo click with notification
  const handleBuildLogoClick = () => {
    toast({
      title: "🔧 Logo Builder Beta",
      description: "Advanced features coming in 2-3 weeks. You can test current features now!",
      duration: 4000,
    });
  };

  // Create particles for the background
  const particles = Array.from({ length: 20 }, (_, i) => {
    const pos = calculateParticlePosition(i, 20);
    return (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: pos.x,
          top: pos.y,
          width: Math.random() * 10 + 5,
          height: Math.random() * 10 + 5,
          background: `radial-gradient(circle, ${i % 2 === 0 ? '#7C3AED' : '#EC4899'} 0%, transparent 70%)`,
          opacity: 0.6,
        }}
        animate={{
          x: [0, (Math.random() - 0.5) * 20],
          y: [0, (Math.random() - 0.5) * 20],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    );
  });

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* Interactive particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Headline with staggered animation */}
          <motion.h1 
            className="font-bold text-5xl md:text-7xl text-[#1A202C] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Design That
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Defines You.
            </motion.span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-[#718096] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Create exquisite logos, premium visiting cards, and unforgettable gift cards in minutes.
          </motion.p>

          {/* Search/Input Bar */}
          <motion.div 
            className="relative w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative">
              <Input 
                type="text" 
                placeholder="What are you creating today?" 
                className="w-full py-4 px-6 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-[#1A202C]"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#718096]" />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              onClick={handleBuildLogoClick}
              asChild
              className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:from-[#6D28D9] hover:to-[#DB2777] text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-0 shadow-md"
            >
              <Link to="/builder">
                🎨 Build Your Logo
              </Link>
            </Button>

            <Button
              asChild
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Link to="/shop">
                Browse All Designs
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="bg-transparent border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;