import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { TestTube, MapPin, Calendar, Download, CheckCircle } from 'lucide-react';

interface SoilTestInterpretation {
  parameter: string;
  value: number;
  unit: string;
  status: 'low' | 'medium' | 'high' | 'optimal';
  recommendation: string;
}

function SoilTestingGuide() {
  const [testResults, setTestResults] = React.useState({
    ph: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    organicMatter: '',
    ec: '', // Electrical conductivity
    calcium: '',
    magnesium: '',
    sulfur: ''
  });

  const [interpretations, setInterpretations] = React.useState<SoilTestInterpretation[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setTestResults(prev => ({ ...prev, [field]: value }));
  };

  const interpretSoilTest = () => {
    const results: SoilTestInterpretation[] = [];

    // pH interpretation
    if (testResults.ph) {
      const ph = parseFloat(testResults.ph);
      let status: 'low' | 'medium' | 'high' | 'optimal';
      let recommendation = '';

      if (ph < 6.0) {
        status = 'low';
        recommendation = 'Soil is acidic. Consider lime application to raise pH.';
      } else if (ph >= 6.0 && ph <= 7.0) {
        status = 'optimal';
        recommendation = 'pH is in optimal range for most crops.';
      } else if (ph > 7.0 && ph <= 8.0) {
        status = 'medium';
        recommendation = 'Slightly alkaline. Monitor for nutrient deficiencies.';
      } else {
        status = 'high';
        recommendation = 'Highly alkaline. Consider sulfur application to lower pH.';
      }

      results.push({
        parameter: 'Soil pH',
        value: ph,
        unit: '',
        status,
        recommendation
      });
    }

    // Nitrogen interpretation
    if (testResults.nitrogen) {
      const n = parseFloat(testResults.nitrogen);
      let status: 'low' | 'medium' | 'high' | 'optimal';
      let recommendation = '';

      if (n < 20) {
        status = 'low';
        recommendation = 'Low nitrogen. Increase nitrogen fertilization.';
      } else if (n >= 20 && n <= 40) {
        status = 'medium';
        recommendation = 'Moderate nitrogen. Standard fertilization recommended.';
      } else if (n > 40 && n <= 60) {
        status = 'optimal';
        recommendation = 'Good nitrogen levels. Maintain current practices.';
      } else {
        status = 'high';
        recommendation = 'High nitrogen. Reduce nitrogen inputs to prevent loss.';
      }

      results.push({
        parameter: 'Nitrogen (N)',
        value: n,
        unit: 'ppm',
        status,
        recommendation
      });
    }

    // Phosphorus interpretation
    if (testResults.phosphorus) {
      const p = parseFloat(testResults.phosphorus);
      let status: 'low' | 'medium' | 'high' | 'optimal';
      let recommendation = '';

      if (p < 15) {
        status = 'low';
        recommendation = 'Low phosphorus. Apply phosphorus fertilizer.';
      } else if (p >= 15 && p <= 30) {
        status = 'medium';
        recommendation = 'Adequate phosphorus. Maintain current levels.';
      } else if (p > 30 && p <= 50) {
        status = 'optimal';
        recommendation = 'Good phosphorus levels. Continue current practices.';
      } else {
        status = 'high';
        recommendation = 'High phosphorus. Reduce phosphorus applications.';
      }

      results.push({
        parameter: 'Phosphorus (P)',
        value: p,
        unit: 'ppm',
        status,
        recommendation
      });
    }

    // Potassium interpretation
    if (testResults.potassium) {
      const k = parseFloat(testResults.potassium);
      let status: 'low' | 'medium' | 'high' | 'optimal';
      let recommendation = '';

      if (k < 100) {
        status = 'low';
        recommendation = 'Low potassium. Apply potassium fertilizer.';
      } else if (k >= 100 && k <= 200) {
        status = 'medium';
        recommendation = 'Moderate potassium. Standard fertilization.';
      } else if (k > 200 && k <= 300) {
        status = 'optimal';
        recommendation = 'Good potassium levels. Maintain current practices.';
      } else {
        status = 'high';
        recommendation = 'High potassium. Reduce potassium inputs.';
      }

      results.push({
        parameter: 'Potassium (K)',
        value: k,
        unit: 'ppm',
        status,
        recommendation
      });
    }

    // Organic Matter interpretation
    if (testResults.organicMatter) {
      const om = parseFloat(testResults.organicMatter);
      let status: 'low' | 'medium' | 'high' | 'optimal';
      let recommendation = '';

      if (om < 2) {
        status = 'low';
        recommendation = 'Low organic matter. Add compost or organic amendments.';
      } else if (om >= 2 && om <= 4) {
        status = 'medium';
        recommendation = 'Moderate organic matter. Continue organic additions.';
      } else if (om > 4 && om <= 6) {
        status = 'optimal';
        recommendation = 'Good organic matter levels. Excellent soil health.';
      } else {
        status = 'high';
        recommendation = 'Very high organic matter. Excellent soil condition.';
      }

      results.push({
        parameter: 'Organic Matter',
        value: om,
        unit: '%',
        status,
        recommendation
      });
    }

    setInterpretations(results);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'low': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'optimal': return 'bg-green-500';
      case 'high': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'low': return 'Low';
      case 'medium': return 'Medium';
      case 'optimal': return 'Optimal';
      case 'high': return 'High';
      default: return 'Unknown';
    }
  };

  const soilTestingSteps = [
    {
      step: 1,
      title: 'Sample Collection',
      description: 'Collect soil samples from multiple locations in your field',
      details: [
        'Take samples from 10-15 random spots',
        'Remove surface debris and vegetation',
        'Collect from 0-6 inches depth for most crops',
        'Mix all samples in a clean bucket'
      ]
    },
    {
      step: 2,
      title: 'Sample Preparation',
      description: 'Prepare the mixed sample for testing',
      details: [
        'Air dry the mixed soil sample',
        'Remove stones, roots, and debris',
        'Break up clods to pass through 2mm sieve',
        'Take about 500g representative sample'
      ]
    },
    {
      step: 3,
      title: 'Laboratory Testing',
      description: 'Send sample to certified laboratory',
      details: [
        'Use reputable soil testing laboratory',
        'Request complete nutrient analysis',
        'Include pH, organic matter, and micronutrients',
        'Specify your crop for targeted recommendations'
      ]
    },
    {
      step: 4,
      title: 'Result Interpretation',
      description: 'Understand and apply test results',
      details: [
        'Review nutrient levels and pH',
        'Compare with crop requirements',
        'Develop fertilization plan',
        'Plan soil amendments if needed'
      ]
    }
  ];

  const testingTips = [
    {
      title: 'Best Time to Test',
      tips: [
        'Test soil in fall after harvest',
        'Avoid testing immediately after fertilization',
        'Test at least 2-3 months before planting',
        'Retest every 2-3 years'
      ]
    },
    {
      title: 'Sampling Guidelines',
      tips: [
        'Avoid areas near roads or buildings',
        'Sample when soil is not too wet or dry',
        'Use clean, non-metallic tools',
        'Label samples clearly with field information'
      ]
    },
    {
      title: 'Common Mistakes',
      tips: [
        'Taking samples from only one location',
        'Sampling too close to fertilizer bands',
        'Using dirty or contaminated tools',
        'Not providing enough sample quantity'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Soil Testing Process */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Soil Testing Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {soilTestingSteps.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-1">
                      <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Soil Test Interpreter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TestTube className="h-6 w-6 mr-2 text-green-600" />
            Soil Test Result Interpreter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Enter your soil test results below to get interpretations and recommendations:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ph">Soil pH</Label>
              <Input
                id="ph"
                type="number"
                step="0.1"
                placeholder="6.5"
                value={testResults.ph}
                onChange={(e) => handleInputChange('ph', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nitrogen">Nitrogen (ppm)</Label>
              <Input
                id="nitrogen"
                type="number"
                placeholder="25"
                value={testResults.nitrogen}
                onChange={(e) => handleInputChange('nitrogen', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phosphorus">Phosphorus (ppm)</Label>
              <Input
                id="phosphorus"
                type="number"
                placeholder="15"
                value={testResults.phosphorus}
                onChange={(e) => handleInputChange('phosphorus', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="potassium">Potassium (ppm)</Label>
              <Input
                id="potassium"
                type="number"
                placeholder="120"
                value={testResults.potassium}
                onChange={(e) => handleInputChange('potassium', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organicMatter">Organic Matter (%)</Label>
              <Input
                id="organicMatter"
                type="number"
                step="0.1"
                placeholder="3.5"
                value={testResults.organicMatter}
                onChange={(e) => handleInputChange('organicMatter', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ec">EC (dS/m)</Label>
              <Input
                id="ec"
                type="number"
                step="0.1"
                placeholder="1.2"
                value={testResults.ec}
                onChange={(e) => handleInputChange('ec', e.target.value)}
              />
            </div>
          </div>

          <Button onClick={interpretSoilTest} className="bg-green-600 hover:bg-green-700">
            <TestTube className="h-4 w-4 mr-2" />
            Interpret Results
          </Button>

          {interpretations.length > 0 && (
            <div className="space-y-4 mt-6">
              <h4 className="text-lg font-semibold">Test Result Interpretations</h4>
              <div className="space-y-3">
                {interpretations.map((result, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold">{result.parameter}</h5>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold">
                            {result.value} {result.unit}
                          </span>
                          <Badge className={getStatusColor(result.status)}>
                            {getStatusText(result.status)}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{result.recommendation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Testing Tips */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Soil Testing Tips & Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testingTips.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Laboratory Directory */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Soil Testing Laboratories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Nepal</h4>
              <div className="space-y-2 text-sm">
                <div className="border rounded p-3">
                  <div className="font-medium">Soil Science Division, NARC</div>
                  <div className="text-muted-foreground">Khumaltar, Lalitpur</div>
                  <div className="text-muted-foreground">Phone: +977-1-5521346</div>
                </div>
                <div className="border rounded p-3">
                  <div className="font-medium">Central Department of Environmental Science</div>
                  <div className="text-muted-foreground">Tribhuvan University, Kathmandu</div>
                  <div className="text-muted-foreground">Phone: +977-1-4330433</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">International</h4>
              <div className="space-y-2 text-sm">
                <div className="border rounded p-3">
                  <div className="font-medium">A&L Agricultural Laboratories</div>
                  <div className="text-muted-foreground">USA, Canada</div>
                  <div className="text-muted-foreground">www.allagservices.com</div>
                </div>
                <div className="border rounded p-3">
                  <div className="font-medium">Eurofins Agro</div>
                  <div className="text-muted-foreground">Europe, Global</div>
                  <div className="text-muted-foreground">www.eurofins.com</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Cost Information:</h4>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Basic NPK test: $15-25</li>
              <li>• Complete nutrient analysis: $35-50</li>
              <li>• pH and organic matter: $10-15</li>
              <li>• Micronutrient panel: $25-40</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SoilTestingGuide;
