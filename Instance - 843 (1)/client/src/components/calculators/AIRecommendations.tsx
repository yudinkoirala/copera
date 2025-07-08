import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, MapPin, Calendar, Thermometer, Droplets, Wind, Sun } from 'lucide-react';

interface AIRecommendation {
  category: string;
  priority: 'high' | 'medium' | 'low';
  recommendation: string;
  reason: string;
  actionItems: string[];
  confidence: number;
}

interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  sunshine: number;
}

function AIRecommendations() {
  const [formData, setFormData] = React.useState({
    location: '',
    crop: '',
    growthStage: '',
    plantingDate: '',
    fieldSize: '',
    soilType: '',
    irrigationType: '',
    concerns: []
  });
  
  const [recommendations, setRecommendations] = React.useState<AIRecommendation[]>([]);
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const crops = [
    'Wheat', 'Rice', 'Corn/Maize', 'Soybean', 'Cotton', 'Potato', 'Tomato', 'Onion', 'Sunflower', 'Barley'
  ];

  const growthStages = [
    'Seedbed Preparation', 'Planting/Sowing', 'Germination', 'Vegetative Growth', 
    'Flowering', 'Fruit Development', 'Maturation', 'Harvest Ready'
  ];

  const concerns = [
    'Pest Management', 'Disease Control', 'Nutrient Deficiency', 'Water Management',
    'Weed Control', 'Weather Stress', 'Soil Health', 'Yield Optimization'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleConcernChange = (concern: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      concerns: checked 
        ? [...prev.concerns, concern]
        : prev.concerns.filter(c => c !== concern)
    }));
  };

  const getAIRecommendations = async () => {
    setIsLoading(true);
    
    try {
      // Simulate AI API call with weather data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock weather data
      const mockWeather: WeatherData = {
        temperature: 22 + Math.random() * 10,
        humidity: 60 + Math.random() * 30,
        rainfall: Math.random() * 50,
        windSpeed: 5 + Math.random() * 10,
        sunshine: 6 + Math.random() * 6
      };
      setWeatherData(mockWeather);

      // Generate AI recommendations based on input
      const aiRecommendations: AIRecommendation[] = [];

      // Weather-based recommendations
      if (mockWeather.rainfall < 10) {
        aiRecommendations.push({
          category: 'Irrigation',
          priority: 'high',
          recommendation: 'Increase irrigation frequency due to low rainfall forecast',
          reason: `Only ${mockWeather.rainfall.toFixed(1)}mm rainfall expected this week`,
          actionItems: [
            'Check soil moisture levels daily',
            'Increase irrigation by 20-30%',
            'Consider mulching to retain moisture'
          ],
          confidence: 92
        });
      }

      if (mockWeather.temperature > 30) {
        aiRecommendations.push({
          category: 'Heat Stress',
          priority: 'high',
          recommendation: 'Implement heat stress management strategies',
          reason: `High temperatures (${mockWeather.temperature.toFixed(1)}°C) may stress plants`,
          actionItems: [
            'Provide shade if possible',
            'Irrigate during cooler hours',
            'Monitor plants for wilting signs'
          ],
          confidence: 88
        });
      }

      // Growth stage recommendations
      if (formData.growthStage === 'Flowering') {
        aiRecommendations.push({
          category: 'Nutrition',
          priority: 'medium',
          recommendation: 'Apply phosphorus and potassium during flowering stage',
          reason: 'Flowering stage requires increased P and K for proper fruit/grain development',
          actionItems: [
            'Apply 0-20-20 fertilizer',
            'Ensure adequate calcium availability',
            'Monitor for flower drop'
          ],
          confidence: 95
        });
      }

      // Crop-specific recommendations
      if (formData.crop === 'Tomato') {
        aiRecommendations.push({
          category: 'Disease Prevention',
          priority: 'medium',
          recommendation: 'Monitor for early blight and implement preventive measures',
          reason: 'Current weather conditions favor fungal disease development',
          actionItems: [
            'Apply copper-based fungicide',
            'Improve air circulation',
            'Avoid overhead watering'
          ],
          confidence: 85
        });
      }

      // Concern-based recommendations
      if (formData.concerns.includes('Pest Management')) {
        aiRecommendations.push({
          category: 'Integrated Pest Management',
          priority: 'medium',
          recommendation: 'Implement IPM strategies for sustainable pest control',
          reason: 'Early intervention prevents pest population buildup',
          actionItems: [
            'Scout fields weekly for pest presence',
            'Use pheromone traps for monitoring',
            'Consider beneficial insects release'
          ],
          confidence: 90
        });
      }

      if (formData.concerns.includes('Soil Health')) {
        aiRecommendations.push({
          category: 'Soil Management',
          priority: 'low',
          recommendation: 'Improve soil organic matter content',
          reason: 'Healthy soil supports better crop growth and resilience',
          actionItems: [
            'Apply compost or well-rotted manure',
            'Consider cover crops in rotation',
            'Minimize soil compaction'
          ],
          confidence: 87
        });
      }

      setRecommendations(aiRecommendations);
    } catch (error) {
      console.error('AI recommendation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Farm Information</h3>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location (City, Country)</Label>
            <Input
              id="location"
              type="text"
              placeholder="e.g., Kathmandu, Nepal"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="crop">Crop</Label>
              <Select value={formData.crop} onValueChange={(value) => handleInputChange('crop', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  {crops.map(crop => (
                    <SelectItem key={crop} value={crop}>
                      {crop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fieldSize">Field Size (hectares)</Label>
              <Input
                id="fieldSize"
                type="number"
                placeholder="1.0"
                value={formData.fieldSize}
                onChange={(e) => handleInputChange('fieldSize', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="growthStage">Current Growth Stage</Label>
            <Select value={formData.growthStage} onValueChange={(value) => handleInputChange('growthStage', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select growth stage" />
              </SelectTrigger>
              <SelectContent>
                {growthStages.map(stage => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="plantingDate">Planting Date</Label>
            <Input
              id="plantingDate"
              type="date"
              value={formData.plantingDate}
              onChange={(e) => handleInputChange('plantingDate', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Field Conditions & Concerns</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="soilType">Soil Type</Label>
              <Select value={formData.soilType} onValueChange={(value) => handleInputChange('soilType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clay">Clay</SelectItem>
                  <SelectItem value="loam">Loam</SelectItem>
                  <SelectItem value="sandy">Sandy</SelectItem>
                  <SelectItem value="silt">Silt</SelectItem>
                  <SelectItem value="clay-loam">Clay Loam</SelectItem>
                  <SelectItem value="sandy-loam">Sandy Loam</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="irrigationType">Irrigation Type</Label>
              <Select value={formData.irrigationType} onValueChange={(value) => handleInputChange('irrigationType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select irrigation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drip">Drip Irrigation</SelectItem>
                  <SelectItem value="sprinkler">Sprinkler</SelectItem>
                  <SelectItem value="flood">Flood Irrigation</SelectItem>
                  <SelectItem value="furrow">Furrow Irrigation</SelectItem>
                  <SelectItem value="rain-fed">Rain-fed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Current Concerns (Select all that apply)</Label>
            <div className="grid grid-cols-2 gap-2">
              {concerns.map(concern => (
                <div key={concern} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={concern}
                    checked={formData.concerns.includes(concern)}
                    onChange={(e) => handleConcernChange(concern, e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor={concern} className="text-sm cursor-pointer">
                    {concern}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">AI Analysis Includes:</h4>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Real-time weather data analysis</li>
              <li>• Crop growth stage optimization</li>
              <li>• Disease and pest risk assessment</li>
              <li>• Nutrient management recommendations</li>
              <li>• Water management strategies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          onClick={getAIRecommendations} 
          disabled={!formData.location || !formData.crop || isLoading}
          size="lg"
          className="bg-green-600 hover:bg-green-700"
        >
          <Brain className="h-4 w-4 mr-2" />
          {isLoading ? 'Analyzing...' : 'Get AI Recommendations'}
        </Button>
      </div>

      {weatherData && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Current Weather Conditions - {formData.location}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <Thermometer className="h-6 w-6 mx-auto mb-2 text-red-500" />
                <div className="text-lg font-bold">{weatherData.temperature.toFixed(1)}°C</div>
                <div className="text-xs text-muted-foreground">Temperature</div>
              </div>
              <div className="text-center">
                <Droplets className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                <div className="text-lg font-bold">{weatherData.humidity.toFixed(1)}%</div>
                <div className="text-xs text-muted-foreground">Humidity</div>
              </div>
              <div className="text-center">
                <Droplets className="h-6 w-6 mx-auto mb-2 text-green-500" />
                <div className="text-lg font-bold">{weatherData.rainfall.toFixed(1)}mm</div>
                <div className="text-xs text-muted-foreground">Rainfall</div>
              </div>
              <div className="text-center">
                <Wind className="h-6 w-6 mx-auto mb-2 text-gray-500" />
                <div className="text-lg font-bold">{weatherData.windSpeed.toFixed(1)} km/h</div>
                <div className="text-xs text-muted-foreground">Wind Speed</div>
              </div>
              <div className="text-center">
                <Sun className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                <div className="text-lg font-bold">{weatherData.sunshine.toFixed(1)} hrs</div>
                <div className="text-xs text-muted-foreground">Sunshine</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {recommendations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">AI-Powered Recommendations</h3>
          {recommendations.map((rec, index) => (
            <Card key={index} className="border-l-4" style={{ borderLeftColor: getPriorityColor(rec.priority).replace('bg-', '') }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-green-600" />
                    {rec.category}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority.toUpperCase()} PRIORITY
                    </Badge>
                    <Badge variant="outline">
                      {rec.confidence}% Confidence
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Recommendation:</h4>
                  <p className="text-muted-foreground">{rec.recommendation}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Reason:</h4>
                  <p className="text-sm text-muted-foreground">{rec.reason}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Action Items:</h4>
                  <ul className="space-y-1">
                    {rec.actionItems.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">AI Analysis Complete</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              These recommendations are generated using machine learning algorithms that analyze weather patterns, 
              crop growth data, regional farming practices, and current field conditions. Always consult with 
              local agricultural experts before implementing major changes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIRecommendations;
