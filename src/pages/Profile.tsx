import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewHeader from '@/components/layout/NewHeader';
import { useAuth } from '@/contexts/AuthContext';
import logoShowcase from '@/assets/Durai Raj_ Sushe\'s Jewel Legacy.jpg';
import visitingCardMockup from '@/assets/Elegant Turquoise Floral Lotus Flower Mandala Classic Round Sticker _ Zazzle.jpg';
import premiumCard from '@/assets/Firefly.jpg';
import techLogo from '@/assets/Flower Boutique Logo - Nasiba Abdullayeva.jpg';
import modernLogo from '@/assets/HELALA ~ Elegant Feminine Moon Logo.jpg';
import creativeCard from '@/assets/Lisavideointro_ I will do 3 modern minimalist logo design for your business for $45 on fiverr_com.jpg';
import modernCard from '@/assets/Logotipo loja de romas.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  User,
  Mail,
  MapPin,
  Edit,
  Download,
  Heart,
  ShoppingBag,
  Star,
  Award,
  Calendar,
  IndianRupee,
  Eye
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, showAuthModal, setShowAuthModal } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      navigate('/');
    }
  }, [isAuthenticated, navigate, setShowAuthModal]);

  const [userProfile, setUserProfile] = useState({
    name: user?.name || 'User',
    email: user?.email || 'user@example.com',
    location: 'Mumbai, Maharashtra',
    businessName: user?.businessName || '',
    joinDate: user?.joinDate || new Date().toISOString().split('T')[0],
    totalOrders: user?.totalOrders || 0,
    totalSpent: user?.totalSpent || 0,
    membershipTier: user?.membershipTier || 'Bronze'
  });

  useEffect(() => {
    if (user) {
      setUserProfile({
        name: user.name || 'User',
        email: user.email || 'user@example.com',
        location: 'Mumbai, Maharashtra',
        businessName: user.businessName || '',
        joinDate: user.joinDate || new Date().toISOString().split('T')[0],
        totalOrders: user.totalOrders || 0,
        totalSpent: user.totalSpent || 0,
        membershipTier: user.membershipTier || 'Bronze'
      });
    }
  }, [user]);

  const recentOrders = [
    {
      id: 'ORD-2024-001',
      title: 'Premium Logo Design',
      date: '2024-01-15',
      status: 'Completed',
      amount: 199,
      image: logoShowcase
    },
    {
      id: 'ORD-2024-002',
      title: 'Business Cards Set',
      date: '2024-01-10',
      status: 'In Progress',
      amount: 199,
      image: premiumCard
    },
    {
      id: 'ORD-2023-045',
      title: 'Brand Identity Package',
      date: '2023-12-22',
      status: 'Delivered',
      amount: 199,
      image: techLogo
    },
    {
      id: 'ORD-2023-044',
      title: 'Modern Logo Design',
      date: '2023-12-15',
      status: 'Completed',
      amount: 199,
      image: modernLogo
    },
    {
      id: 'ORD-2023-043',
      title: 'Creative Business Cards',
      date: '2023-12-08',
      status: 'Delivered',
      amount: 199,
      image: creativeCard
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      title: 'Corporate Branding Kit',
      price: 199,
      image: modernCard
    },
    {
      id: 2,
      title: 'Premium Card Design',
      price: 199,
      image: premiumCard
    },
    {
      id: 3,
      title: 'Tech Logo Design',
      price: 199,
      image: techLogo
    },
    {
      id: 4,
      title: 'Creative Logo Design',
      price: 199,
      image: modernLogo
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'Delivered': return 'success';
      case 'In Progress': return 'default';
      case 'Pending': return 'destructive';
      default: return 'outline';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Gold': return 'bg-yellow-500';
      case 'Silver': return 'bg-gray-400';
      case 'Bronze': return 'bg-amber-600';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 ${getTierColor(userProfile.membershipTier)} rounded-full flex items-center justify-center`}>
                    <Award className="h-3 w-3 text-white" />
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {userProfile.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{userProfile.businessName}</p>
                <Badge className={`mb-4`}>
                  {userProfile.membershipTier} Member
                </Badge>
                
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {new Date(userProfile.joinDate).toLocaleDateString('en-IN')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ShoppingBag className="h-4 w-4" />
                    <span>{userProfile.totalOrders} Orders</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <IndianRupee className="h-4 w-4" />
                    <span>${userProfile.totalSpent} Total Spent</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6 space-y-6">
                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-accent mb-1">
                        {userProfile.totalOrders}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Orders</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-success mb-1">8</div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">4.9</div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.slice(0, 3).map((order) => {
                        return (
                          <div key={order.id} className="flex items-center gap-4 p-3 border rounded-lg">
                            <img
                              src={order.image}
                              alt={order.title}
                              className="w-12 h-12 object-cover rounded"
                            />
                          <div className="flex-1">
                            <div className="font-medium text-foreground">{order.title}</div>
                            <div className="text-sm text-muted-foreground">{order.id}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">${order.amount}</div>
                            <Badge variant={getStatusColor(order.status) as any} className="text-xs">
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => {
                        return (
                          <div key={order.id} className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-sm transition-shadow">
                            <img
                              src={order.image}
                              alt={order.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          <div className="flex-1 space-y-1">
                            <div className="font-semibold text-foreground">{order.title}</div>
                            <div className="text-sm text-muted-foreground">Order ID: {order.id}</div>
                            <div className="text-sm text-muted-foreground">Date: {order.date}</div>
                          </div>
                          <div className="text-right space-y-2">
                            <div className="font-bold">${order.amount}</div>
                            <Badge variant={getStatusColor(order.status) as any}>
                              {order.status}
                            </Badge>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="wishlist" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      My Wishlist
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {wishlistItems.map((item) => {
                        return (
                          <div key={item.id} className="flex items-center gap-4 p-3 border rounded-lg">
                            <img
                              src={item.image}
                              alt={item.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-foreground">{item.title}</div>
                            <div className="font-semibold text-accent">${item.price}</div>
                          </div>
                          <Button size="sm" variant="accent">
                            <ShoppingBag className="h-3 w-3" />
                          </Button>
                        </div>
                      );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            value={userProfile.name}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            value={userProfile.email}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="business">Business Name</Label>
                          <Input 
                            id="business" 
                            value={userProfile.businessName}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input 
                            id="location" 
                            value={userProfile.location}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {isEditing && (
                      <div className="flex gap-3">
                        <Button variant="hero">Save Changes</Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;