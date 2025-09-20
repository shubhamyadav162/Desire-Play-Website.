import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  IdCard, 
  Gift, 
  Star,
  ArrowRight,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: "Logo Design",
      description: "Professional logos that capture your brand essence and make you stand out from the competition.",
      features: ["3 Unique Concepts", "Unlimited Revisions", "Source Files Included", "24h Delivery"],
      price: "₹199",
      originalPrice: "₹2,999",
      badge: "Most Popular",
      link: "/shop?category=logos"
    },
    {
      icon: IdCard,
      title: "Visiting Cards",
      description: "Premium visiting cards that leave a lasting impression on your clients and partners.",
      features: ["Double-Sided Design", "Print-Ready Files", "Multiple Formats", "QR Code Integration"],
      price: "₹199",
      originalPrice: "₹1,999",
      badge: "Best Value",
      link: "/shop?category=cards"
    },
    {
      icon: Gift,
      title: "Gift Cards",
      description: "Beautiful gift cards for special occasions and corporate gifting needs.",
      features: ["Customizable Designs", "Personalized Messages", "Bulk Ordering", "Digital & Physical"],
      price: "₹199",
      originalPrice: "₹1,499",
      badge: "New",
      link: "/shop?category=gift-cards"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 border-[#7C3AED] text-[#7C3AED]" variant="outline">
            Our Services
          </Badge>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-[#1A202C] mb-6">
            Professional Design Services for
            <span className="text-[#7C3AED] block">Every Business Need</span>
          </h2>
          <p className="text-lg text-[#718096] max-w-3xl mx-auto">
            From startups to established businesses, we offer design solutions that help you 
            make a lasting impression in the Indian market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-200 relative overflow-hidden"
            >
              {service.badge && (
                <div className="absolute top-6 right-0 z-10">
                  <div className="bg-[#7C3AED] text-white text-xs font-bold px-3 py-1 rounded-l-full">
                    {service.badge}
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-[#1A202C] mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#718096] mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#7C3AED]" />
                      <span className="text-sm text-[#4A5568]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-[#1A202C]">{service.price}</span>
                    <span className="text-sm text-[#A0AEC0] line-through">{service.originalPrice}</span>
                    <Badge className="bg-red-100 text-red-600 hover:bg-red-100" variant="outline">
                      50% OFF
                    </Badge>
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white group-hover:shadow-lg transition-all duration-300"
                >
                  <Link to={service.link}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white"
          >
            <Link to="/shop">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;