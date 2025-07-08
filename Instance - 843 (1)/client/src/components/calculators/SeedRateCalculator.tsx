import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Download, Save } from 'lucide-react';

interface SeedRateResult {
  seedRate: number;
  totalSeeds: number;
  seedWeight: number;
  plantPopulation: number;
  recommendations: string[];
  cost: number;
}

function SeedRateCalculator() {
  const [formData, setFormData] = React.useState({
    crop: '',
    variety: '',
    area: '',
    plantingMethod: '',
    rowSpacing: '',
    plantSpacing: '',
    germination: '',
    fieldEfficiency: '',
    targetPopulation: '',
    thousandSeedWeight: ''
  });
  
  const [result, setResult] = React.useState<SeedRateResult | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const crops = [
    { 
      value: 'wheat', 
      label: 'Wheat',
      varieties: ['Hard Red Winter', 'Soft Red Winter', 'Hard Red Spring', 'Durum'],
      tsw: 35, // thousand seed weight in grams
      targetPop: 400, // plants per m²
      rowSpacing: 15,
      plantSpacing: 2
    },
    { 
      value: 'rice', 
      label: 'Rice',
      varieties: ['Indica', 'Japonica', 'Basmati', 'Jasmine'],
      tsw: 22,
      targetPop: 250,
      rowSpacing: 20,
      plantSpacing: 10
    },
    { 
      value: 'corn', 
      label: 'Corn/Maize',
      varieties: ['Dent Corn', 'Sweet Corn', 'Flint Corn', 'Popcorn'],
      tsw: 300,
      targetPop: 7,
      rowSpacing: 75,
      plantSpacing: 20
    },
    { 
      value: 'soybean', 
      label: 'Soybean',
      varieties: ['Determinate', 'Indeterminate', 'Early Maturity', 'Late Maturity'],
      tsw: 150,
      targetPop: 35,
      rowSpacing: 40,
      plantSpacing: 8
    },
    { 
      value: 'cotton', 
      label: 'Cotton',
      varieties: ['Upland Cotton', 'Pima Cotton', 'Organic Cotton'],
      tsw: 100,
      targetPop: 12,
      rowSpacing: 90,
      plantSpacing: 10
    },
    { 
      value: 'sunflower', 
      label: 'Sunflower',
      varieties: ['Oil Type', 'Confection Type', 'Ornamental'],
      tsw: 50,
      targetPop: 6,
      rowSpacing: 60,
      plantSpacing: 25
    }
  ];

  const plantingMethods = [
    { value: 'broadcast', label: 'Broadcasting', efficiency: 0.8 },
    { value: 'drill', label: 'Drill Seeding', efficiency: 0.9 },
    { value: 'precision', label: 'Precision Planting', efficiency: 0.95 },
    { value: 'transplant', label: 'Transplanting', efficiency: 0.98 },
    { value: 'dibbling', label: 'Dibbling', efficiency: 0.85 }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-populate default values when crop is selected
    if (field === 'crop') {
      const selectedCrop = crops.find(c => c.value === value);
      if (selectedCrop) {
        setFormData(prev => ({
          ...prev,
          [field]: value,
          thousandSeedWeight: selectedCrop.tsw.toString(),
          targetPopulation: selectedCrop.targetPop.toString(),
          rowSpacing: selectedCrop.rowSpacing.toString(),
          plantSpacing: selectedCrop.plantSpacing.toString(),
          germination: '85',
          fieldEfficiency: '90'
        }));
      }
    }
  };

  const calculateSeedRate = async () => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const selectedCrop = crops.find(c => c.value === formData.crop);
      if (!selectedCrop) return;

      const area = parseFloat(formData.area) || 1;
      const targetPop = parseFloat(formData.targetPopulation) || selectedCrop.targetPop;
      const tsw = parseFloat(formData.thousandSeedWeight) || selectedCrop.tsw;
      const germination = parseFloat(formData.germination) || 85;
      const fieldEff = parseFloat(formData.fieldEfficiency) || 90;
      const rowSpacing = parseFloat(formData.rowSpacing) || selectedCrop.rowSpacing;
      const plantSpacing = parseFloat(formData.plantSpacing) || selectedCrop.plantSpacing;

      // Calculate seed rate
      let seedsPerM2;
      
      if (formData.plantingMethod === 'precision') {
        // For precision planting, calculate based on spacing
        const plantsPerRow = 100 / plantSpacing; // plants per meter of row
        const rowsPerM2 = 100 / rowSpacing; // rows per m²
        seedsPerM2 = plantsPerRow * rowsPerM2;
      } else {
        // For other methods, use target population
        seedsPerM2 = targetPop;
      }

      // Adjust for germination and field efficiency
      const adjustedSeedsPerM2 = (seedsPerM2 * 100) / (germination * fieldEff / 100);
      
      // Calculate total seeds needed
      const totalSeeds = adjustedSeedsPerM2 * area * 10000; // Convert hectares to m²
      
      // Calculate seed weight
      const seedWeight = (totalSeeds * tsw) / 1000000; // Convert to kg
      
      // Calculate actual plant population
      const actualPopulation = adjustedSeedsPerM2 * (germination / 100) * (fieldEff / 100);
      
      // Estimated cost (varies by crop)
      const seedCostPerKg = formData.crop === 'corn' ? 8 : formData.crop === 'cotton' ? 12 : 4;
      const cost = seedWeight * seedCostPerKg;

      const recommendations = [
        `Use ${seedWeight.toFixed(2)} kg of seeds for ${area} hectare(s)`,
        `Plant spacing: ${plantSpacing} cm between plants, ${rowSpacing} cm between rows`,
        `Expected plant population: ${Math.round(actualPopulation)} plants per m²`,
        formData.plantingMethod === 'broadcast' ? 'Consider seed treatment for better establishment' : '',
        germination < 80 ? 'Low germination rate - consider seed testing before planting' : '',
        formData.plantingMethod === 'precision' ? 'Calibrate planter for accurate seed placement' : '',
        'Plant seeds at optimal depth: 2-3 times the seed diameter',
        'Ensure adequate soil moisture for germination',
        formData.crop === 'corn' ? 'Consider hybrid vigor and maturity group for your region' : ''
      ].filter(Boolean);

      setResult({
        seedRate: adjustedSeedsPerM2,
        totalSeeds: totalSeeds,
        seedWeight: seedWeight,
        plantPopulation: actualPopulation,
        recommendations,
        cost
      });
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadReport = () => {
    if (!result) return;
    
    const reportContent = `
Seed Rate Calculation Report
===========================

Crop: ${crops.find(c => c.value === formData.crop)?.label}
Variety: ${formData.variety}
Area: ${formData.area} hectares
Planting Method: ${plantingMethods.find(m => m.value === formData.plantingMethod)?.label}

Planting Parameters:
- Row Spacing: ${formData.rowSpacing} cm
- Plant Spacing: ${formData.plantSpacing} cm
- Target Population: ${formData.targetPopulation} plants/m²
- Germination Rate: ${formData.germination}%
- Field Efficiency: ${formData.fieldEfficiency}%

Calculated Results:
- Seed Rate: ${result.seedRate.toFixed(1)} seeds/m²
- Total Seeds Needed: ${result.totalSeeds.toLocaleString()} seeds
- Seed Weight: ${result.seedWeight.toFixed(2)} kg
- Expected Plant Population: ${Math.round(result.plantPopulation)} plants/m²
- Estimated Cost: $${result.cost.toFixed(2)}

Recommendations:
${result.recommendations.map(rec => `- ${rec}`).join('\n')}

Generated by Cropora Seed Rate Calculator
Date: ${new Date().toLocaleDateString()}
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SeedRate_Report_${formData.crop}_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const selectedCrop = crops.find(c => c.value === formData.crop);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Crop & Planting Information</h3>
          
          <div className="space-y-2">
            <Label htmlFor="crop">Crop Type</Label>
            <Select value={formData.crop} onValueChange={(value) => handleInputChange('crop', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select crop" />
              </SelectTrigger>
              <SelectContent>
                {crops.map(crop => (
                  <SelectItem key={crop.value} value={crop.value}>
                    {crop.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedCrop && (
            <div className="space-y-2">
              <Label htmlFor="variety">Variety</Label>
              <Select value={formData.variety} onValueChange={(value) => handleInputChange('variety', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select variety" />
                </SelectTrigger>
                <SelectContent>
                  {selectedCrop.varieties.map(variety => (
                    <SelectItem key={variety} value={variety}>
                      {variety}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="area">Area (hectares)</Label>
            <Input
              id="area"
              type="number"
              placeholder="1.0"
              value={formData.area}
              onChange={(e) => handleInputChange('area', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plantingMethod">Planting Method</Label>
            <Select value={formData.plantingMethod} onValueChange={(value) => handleInputChange('plantingMethod', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select planting method" />
              </SelectTrigger>
              <SelectContent>
                {plantingMethods.map(method => (
                  <SelectItem key={method.value} value={method.value}>
                    {method.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rowSpacing">Row Spacing (cm)</Label>
              <Input
                id="rowSpacing"
                type="number"
                placeholder="20"
                value={formData.rowSpacing}
                onChange={(e) => handleInputChange('rowSpacing', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plantSpacing">Plant Spacing (cm)</Label>
              <Input
                id="plantSpacing"
                type="number"
                placeholder="10"
                value={formData.plantSpacing}
                onChange={(e) => handleInputChange('plantSpacing', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Seed & Field Parameters</h3>
          
          <div className="space-y-2">
            <Label htmlFor="targetPopulation">Target Population (plants/m²)</Label>
            <Input
              id="targetPopulation"
              type="number"
              placeholder="250"
              value={formData.targetPopulation}
              onChange={(e) => handleInputChange('targetPopulation', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="thousandSeedWeight">1000 Seed Weight (grams)</Label>
            <Input
              id="thousandSeedWeight"
              type="number"
              placeholder="25"
              value={formData.thousandSeedWeight}
              onChange={(e) => handleInputChange('thousandSeedWeight', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="germination">Germination Rate (%)</Label>
              <Input
                id="germination"
                type="number"
                placeholder="85"
                value={formData.germination}
                onChange={(e) => handleInputChange('germination', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fieldEfficiency">Field Efficiency (%)</Label>
              <Input
                id="fieldEfficiency"
                type="number"
                placeholder="90"
                value={formData.fieldEfficiency}
                onChange={(e) => handleInputChange('fieldEfficiency', e.target.value)}
              />
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Tips for Accurate Calculation:</h4>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Use recent seed germination test results</li>
              <li>• Consider field conditions and planting equipment</li>
              <li>• Adjust for local climate and soil conditions</li>
              <li>• Account for seed treatment effects</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          onClick={calculateSeedRate} 
          disabled={!formData.crop || !formData.area || isLoading}
          size="lg"
          className="bg-green-600 hover:bg-green-700"
        >
          <Sprout className="h-4 w-4 mr-2" />
          {isLoading ? 'Calculating...' : 'Calculate Seed Rate'}
        </Button>
      </div>

      {result && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Seed Rate Calculation Results
              <div className="space-x-2">
                <Button variant="outline" size="sm" onClick={downloadReport}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  Save Calculation
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{result.seedWeight.toFixed(2)} kg</div>
                  <div className="text-sm text-muted-foreground">Total Seed Weight</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{result.seedRate.toFixed(1)}</div>
                  <div className="text-sm text-muted-foreground">Seeds per m²</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{Math.round(result.plantPopulation)}</div>
                  <div className="text-sm text-muted-foreground">Plants per m²</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">${result.cost.toFixed(2)}</div>
                  <div className="text-sm text-muted-foreground">Estimated Cost</div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Recommendations</h4>
              <div className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Notes:</h4>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• These calculations are estimates based on standard formulas</li>
                <li>• Actual seed rates may vary based on local conditions</li>
                <li>• Always test germination before large-scale planting</li>
                <li>• Consider purchasing 10-15% extra seeds as buffer</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default SeedRateCalculator;
