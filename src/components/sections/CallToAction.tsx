import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Gift, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30" variant="outline">
            <Sparkles className="mr-2 h-4 w-4" />
            Limited Time Offer
          </Badge>
          
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-6">
            Ready to Transform Your
            <span className="block">Brand Identity?</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Indian businesses who have elevated their brand with our 
            professional design services. Get started today with an exclusive 50% discount!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50% OFF</div>
                <div className="text-white/80 text-sm">On All Design Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24h Delivery</div>
                <div className="text-white/80 text-sm">Express Service Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">FREE</div>
                <div className="text-white/80 text-sm">Source Files Included</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                asChild
                className="bg-white text-[#7C3AED] hover:bg-gray-100 font-bold py-4 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/shop">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-[#7C3AED] font-bold py-4 px-8 text-lg transition-all duration-300"
              >
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
          
          <div className="mt-8 text-white/60 text-sm">
            <p>Offer valid for first 100 customers only • Use code: LAUNCH50</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;