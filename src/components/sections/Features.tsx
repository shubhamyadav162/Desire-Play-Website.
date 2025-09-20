import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Download, 
  Clock, 
  Smartphone, 
  Award, 
  Headphones,
  Zap,
  Shield
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "AI-Powered Design",
      description: "Smart algorithms create unique designs tailored to your business needs and industry.",
      badge: "New"
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Get your designs in SVG, PNG (300 DPI), PDF, and source files ready for any use case.",
      badge: "Premium"
    },
    {
      icon: Clock,
      title: "24-Hour Delivery",
      description: "Fast turnaround time with immediate download access for standard designs.",
      badge: "Fast"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "All designs are optimized for digital use across social media and mobile platforms.",
      badge: "Responsive"
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Designed by experts following Indian business standards and global design trends.",
      badge: "Quality"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer support in English and Hindi for all your design needs.",
      badge: "Support"
    },
    {
      icon: Zap,
      title: "Instant Previews",
      description: "See your changes in real-time with our interactive design builder.",
      badge: "Live"
    },
    {
      icon: Shield,
      title: "Secure Service",
      description: "All your design projects and payments are protected with enterprise-grade security.",
      badge: "Secure"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'new': return 'default';
      case 'premium': return 'secondary';
      case 'fast': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 border-[#7C3AED] text-[#7C3AED]" variant="outline">
            Why Choose Desireplay?
          </Badge>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-[#1A202C] mb-6">
            Everything You Need to Build Your
            <span className="text-[#7C3AED] block">Brand Identity</span>
          </h2>
          <p className="text-lg text-[#718096] max-w-3xl mx-auto">
            From logo creation to visiting cards, we provide all the tools and resources
            Indian businesses need to establish a strong professional presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in bg-white border-gray-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge
                    className="absolute -top-2 -right-2 text-xs bg-[#7C3AED] text-white"
                    variant={getBadgeVariant(feature.badge)}
                  >
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-[#1A202C] mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-[#718096] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;