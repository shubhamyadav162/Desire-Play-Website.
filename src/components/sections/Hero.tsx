import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Shield, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from '@/assets/100+ Editable Templates _ KDP 2026 Graphic by Interior Creative · Creative Fabrica.jpg';
import logoShowcase from '@/assets/Butterfly Flying Logo.jpg';
import visitingCardMockup from '@/assets/Elegant Hand-Drawn Flower Logo – Neutral Aesthetic.jpg';

const Hero = () => {
  const trustIndicators = [
    { icon: Users, text: "2,000+ Happy Clients" },
    { icon: Star, text: "4.9/5 Rating" },
    { icon: Shield, text: "100% Secure" },
    { icon: Zap, text: "24h Delivery" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-success/10 text-success border-success/20" variant="outline">
                🎉 India's #1 Design Platform
              </Badge>
              
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground leading-tight">
                Create Stunning
                <span className="text-transparent bg-gradient-hero bg-clip-text block">
                  Logos & Cards
                </span>
                for Your Business
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Professional logo design and premium visiting cards that make your business stand out.
                Trusted by over 2,000 Indian businesses nationwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                asChild
                className="animate-scale-in"
              >
                <Link to="/builder?template=featured">
                  Create Your Logo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                asChild
                className="hover:shadow-md"
              >
                <Link to="/shop?filter=portfolio">
                  See Portfolio
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center gap-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Micro-trust Line */}
            <p className="text-xs text-muted-foreground pt-4">
              🔐 Secure payments • Professional quality assured
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative animate-float">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={heroBanner}
                  alt="Professional logo design workspace"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Card Mockup */}
              <div className="absolute -bottom-6 -left-6 w-48 animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-card rounded-xl shadow-accent p-4 border">
                  <img
                    src={visitingCardMockup}
                    alt="Premium visiting card design"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs font-medium text-muted-foreground">Premium Cards</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-3 w-3 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card p-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10K+</div>
                  <div className="text-xs text-muted-foreground">Designs Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;