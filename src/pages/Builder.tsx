import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import NewHeader from '@/components/layout/NewHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Download, 
  Palette, 
  Type, 
  Image, 
  Save, 
  Undo, 
  Redo,
  Share2,
  ArrowLeft,
  Zap,
  IndianRupee
} from 'lucide-react';
import LogoBuilder from '@/components/builder/LogoBuilder';

const Builder = () => {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get('template');
  const [currentStep, setCurrentStep] = useState(1);
  const [logoData, setLogoData] = useState({
    text: 'Your Business',
    font: 'Poppins',
    color: '#0F4C81',
    secondaryColor: '#FF6B35',
    icon: 'circle',
    layout: 'horizontal',
    iconOnly: false,
    textOnly: false
  });

  const templates = [
    { id: 'featured', name: 'Modern Tech', category: 'Technology', preview: 'MT' },
    { id: 'minimal', name: 'Minimal Clean', category: 'General', preview: 'MC' },
    { id: 'creative', name: 'Creative Bold', category: 'Creative', preview: 'CB' },
    { id: 'professional', name: 'Corporate Pro', category: 'Business', preview: 'CP' },
    { id: 'startup', name: 'Startup Fresh', category: 'Startup', preview: 'SF' },
    { id: 'elegant', name: 'Elegant Style', category: 'Luxury', preview: 'ES' }
  ];

  const fonts = ['Poppins', 'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat'];
  const colors = ['#0F4C81', '#FF6B35', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];
  const secondaryColors = ['#FF6B35', '#0F4C81', '#8B5CF6', '#10B981', '#EF4444', '#F59E0B'];
  const icons = ['circle', 'square', 'triangle', 'hexagon', 'diamond', 'star'];

  const steps = [
    { id: 1, title: 'Choose Template', description: 'Select a design template' },
    { id: 2, title: 'Customize Text', description: 'Add your business name' },
    { id: 3, title: 'Style & Colors', description: 'Pick colors and fonts' },
    { id: 4, title: 'Finalize', description: 'Review and download' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NewHeader />

      {/* Development Status Bar - Minimal */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">🔧 BETA • Advanced features coming soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Builder Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/shop">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Shop
                </Link>
              </Button>
              <div>
                <h1 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
                  Logo Builder
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                    <Zap className="h-3 w-3 mr-1" />
                    Beta
                  </Badge>
                </h1>
                <p className="text-sm text-muted-foreground">Create your professional logo • Advanced features coming soon</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4" />
                Save Draft
              </Button>
              <Button variant="accent" size="sm">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-4 mt-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                  currentStep >= step.id 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <span className="font-medium">{step.id}</span>
                  <span className="hidden sm:inline">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${
                    currentStep > step.id ? 'bg-accent' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Builder Controls */}
          <div className="lg:col-span-1 space-y-6">
            <Tabs defaultValue="template" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="template">
                  <Image className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="text">
                  <Type className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="style">
                  <Palette className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="export">
                  <Download className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="template" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Choose Template</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {templates.map((template) => (
                        <Card 
                          key={template.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            templateId === template.id ? 'ring-2 ring-accent' : ''
                          }`}
                        >
                          <CardContent className="p-4 text-center">
                            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-white font-bold">{template.preview}</span>
                            </div>
                            <div className="text-sm font-medium">{template.name}</div>
                            <Badge variant="outline" className="text-xs mt-1">
                              {template.category}
                            </Badge>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="text" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="business-name">Business Name</Label>
                    <Input
                      id="business-name"
                      value={logoData.text}
                      onChange={(e) => setLogoData({...logoData, text: e.target.value})}
                      placeholder="Enter your business name"
                    />
                  </div>
                  
                  <div>
                    <Label>Font Family</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {fonts.map((font) => (
                        <Button
                          key={font}
                          variant={logoData.font === font ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setLogoData({...logoData, font})}
                          className="text-xs"
                        >
                          {font}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="style" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <Label>Primary Color</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setLogoData({...logoData, color})}
                          className={`w-full h-10 rounded-md border-2 ${
                            logoData.color === color ? 'border-foreground' : 'border-border'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Secondary Color</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {secondaryColors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setLogoData({...logoData, secondaryColor: color})}
                          className={`w-full h-10 rounded-md border-2 ${
                            logoData.secondaryColor === color ? 'border-foreground' : 'border-border'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Icon Style</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {icons.map((icon) => (
                        <Button
                          key={icon}
                          variant={logoData.icon === icon ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setLogoData({...logoData, icon})}
                          className="text-xs capitalize"
                        >
                          {icon}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Layout Options</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {['horizontal', 'vertical', 'stacked'].map((layout) => (
                        <Button
                          key={layout}
                          variant={logoData.layout === layout ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setLogoData({...logoData, layout})}
                          className="text-xs capitalize"
                        >
                          {layout}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Display Options</Label>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="iconOnly"
                          checked={logoData.iconOnly}
                          onChange={(e) => setLogoData({...logoData, iconOnly: e.target.checked})}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor="iconOnly" className="text-sm">Icon Only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="textOnly"
                          checked={logoData.textOnly}
                          onChange={(e) => setLogoData({...logoData, textOnly: e.target.checked})}
                          className="rounded border-gray-300"
                        />
                        <Label htmlFor="textOnly" className="text-sm">Text Only</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="export" className="mt-6">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="h-5 w-5 text-accent" />
                        Export Your Logo
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">PNG (High Quality)</span>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">SVG (Vector)</span>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">PDF (Print Ready)</span>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Business Card (AI)</span>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-semibold">₹199</span>
                        </div>
                        <Button variant="hero" className="w-full">
                          Purchase & Download All Formats
                        </Button>
                        <div className="text-xs text-muted-foreground mt-2">
                          Includes high-quality files + instant download
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <IndianRupee className="h-4 w-4" />
                          <span className="font-semibold">Starter Package - ₹199</span>
                        </div>
                        <Button variant="accent" className="w-full">
                          Download Basic Package
                        </Button>
                        <div className="text-xs text-muted-foreground mt-2">
                          PNG, SVG, and PDF formats
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Share Your Design</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full">
                        Copy Share Link
                      </Button>
                      <Button variant="outline" className="w-full">
                        Email to Client
                      </Button>
                      <Button variant="outline" className="w-full">
                        Save to Gallery
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Logo Preview */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Live Preview</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Undo className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Redo className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                <LogoBuilder logoData={logoData} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;