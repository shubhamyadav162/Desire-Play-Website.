import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "CEO, TechStart Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      content: "Desireplay created an amazing logo for our startup. The design process was smooth, and they delivered exactly what we envisioned. The team understood our brand values perfectly.",
      project: "Logo Design",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Marketing Director, Fashion Hub",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      content: "The visiting cards designed by Desireplay have received so many compliments! They captured our brand's elegance perfectly. Highly recommend their services.",
      project: "Visiting Card Design",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Founder, Spice Garden",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      rating: 4.5,
      content: "Outstanding service and quality! The gift cards for our restaurant's loyalty program look fantastic. Our customers love them. Great value for money.",
      project: "Gift Card Design",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Owner, Beauty Bliss",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      content: "I'm impressed with the professionalism and creativity of the Desireplay team. They transformed our brand identity completely. Worth every penny!",
      project: "Complete Branding",
      date: "1 month ago"
    }
  ];

  const stats = [
    { value: "2,000+", label: "Happy Clients" },
    { value: "25,000+", label: "Designs Created" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "24h", label: "Average Delivery" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 border-[#7C3AED] text-[#7C3AED]" variant="outline">
            Client Testimonials
          </Badge>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-[#1A202C] mb-6">
            What Our Clients
            <span className="text-[#7C3AED] block">Have to Say</span>
          </h2>
          <p className="text-lg text-[#718096] max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses across India who have transformed 
            their brand identity with our design services.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white border-gray-200">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-[#7C3AED] mb-2">{stat.value}</div>
                <div className="text-sm text-[#718096]">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`p-8 bg-white border-gray-200 hover:shadow-lg transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-[#7C3AED]' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#1A202C]">{testimonial.name}</h3>
                    <p className="text-sm text-[#718096] mb-2">{testimonial.role}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(testimonial.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-[#718096] ml-2">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-[#7C3AED] opacity-20" />
                </div>
                
                <p className="text-[#4A5568] mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <Badge variant="outline" className="border-[#7C3AED] text-[#7C3AED]">
                    {testimonial.project}
                  </Badge>
                  <span className="text-[#A0AEC0]">{testimonial.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="font-bold text-xl text-[#1A202C] mb-2">Trusted by Leading Brands</h3>
            <p className="text-[#718096]">Join thousands of satisfied customers across India</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechStart", "Fashion Hub", "Spice Garden", "Beauty Bliss", "Urban Cafe", "Digital Pro"].map((brand, index) => (
              <div key={index} className="text-lg font-semibold text-[#4A5568]">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;