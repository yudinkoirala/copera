import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

function ProductsSection() {
  const products = [
    {
      name: 'Premium Wheat Seeds',
      price: '$25.99',
      description: 'High-yield wheat seeds with excellent disease resistance',
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Organic Fertilizer',
      price: '$19.99',
      description: 'Natural organic fertilizer for sustainable farming',
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Farm Tractor',
      price: '$15,999',
      description: 'Reliable and efficient farm tractor for all your needs',
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Irrigation System',
      price: '$299.99',
      description: 'Advanced drip irrigation system for water conservation',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality agricultural products to boost your farm's productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-t-lg flex items-center justify-center">
                  <span className="text-green-700 font-medium">Product Image</span>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="mb-3">{product.description}</CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;