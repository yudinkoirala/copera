import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ShoppingCart, Heart, Star, Minus, Plus, ArrowLeft, Share2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

const productDetails = {
  '1': {
    id: '1',
    name: 'Premium Wheat Seeds - High Yield Variety',
    price: 25.99,
    originalPrice: 29.99,
    images: [
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600',
      'https://images.unsplash.com/photo-1551515210-6de4cbaa3ad9?w=600',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600'
    ],
    category: 'Seeds',
    inStock: true,
    stockCount: 156,
    rating: 4.8,
    totalReviews: 124,
    discount: 13,
    description: 'High-quality premium wheat seeds engineered for maximum yield and disease resistance. These seeds are carefully selected and tested to ensure optimal germination rates and superior crop quality.',
    features: [
      'High germination rate (95%+)',
      'Disease resistant variety',
      'Suitable for various soil types',
      'Excellent yield potential',
      'Non-GMO certified'
    ],
    specifications: {
      'Variety': 'Premium Hybrid',
      'Germination Rate': '95%+',
      'Maturity': '120-130 days',
      'Plant Height': '80-100 cm',
      'Yield Potential': '45-50 quintal/hectare'
    }
  }
};

const reviews = [
  {
    id: 1,
    user: 'John Smith',
    rating: 5,
    date: '2024-12-15',
    comment: 'Excellent seeds! Got amazing germination rate and the crop quality is outstanding.',
    verified: true
  },
  {
    id: 2,
    user: 'Maria Garcia',
    rating: 4,
    date: '2024-12-10',
    comment: 'Good quality seeds. Delivery was fast and packaging was secure.',
    verified: true
  },
  {
    id: 3,
    user: 'David Chen',
    rating: 5,
    date: '2024-12-08',
    comment: 'Best wheat seeds I have used. Highly recommend for commercial farming.',
    verified: true
  }
];

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedImage, setSelectedImage] = React.useState(0);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const product = productDetails[id as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        category: product.category,
        inStock: product.inStock
      });
    }
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        category: product.category,
        inStock: product.inStock
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const ratingDistribution = [
    { stars: 5, count: 78, percentage: 63 },
    { stars: 4, count: 32, percentage: 26 },
    { stars: 3, count: 10, percentage: 8 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 1, percentage: 1 }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/shop" className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-green-600' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {renderStars(Math.floor(product.rating))}
                <span className="text-sm text-muted-foreground ml-2">
                  {product.rating} ({product.totalReviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-green-600">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge className="bg-red-500 hover:bg-red-600">
                    -{product.discount}% OFF
                  </Badge>
                </>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-medium">Stock:</span>
                <span className="text-green-600">{product.stockCount} units available</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleWishlistToggle}
              >
                <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({product.totalReviews})</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{product.description}</p>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc ml-6 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{product.rating}</div>
                      <div className="flex justify-center mb-2">
                        {renderStars(Math.floor(product.rating))}
                      </div>
                      <div className="text-muted-foreground">
                        Based on {product.totalReviews} reviews
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center space-x-2">
                        <span className="text-sm w-8">{item.stars}★</span>
                        <Progress value={item.percentage} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-8">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {review.user.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium">{review.user}</span>
                          {review.verified && (
                            <Badge variant="outline" className="text-xs">Verified Purchase</Badge>
                          )}
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="shipping" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Shipping Options:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Standard Shipping (5-7 business days) - $9.99</li>
                    <li>• Express Shipping (2-3 business days) - $19.99</li>
                    <li>• Overnight Shipping (1 business day) - $39.99</li>
                    <li>• Free shipping on orders over $100</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Return Policy:</h4>
                  <p className="text-muted-foreground">
                    30-day return policy. Items must be in original condition and packaging.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProductDetail;
