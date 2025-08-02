import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ContactForm from "./ContactForm";

export interface CalculatorData {
  role: string;
  experience: string;
  workMode: string;
  uopMin: number;
  uopMax: number;
  b2bMin: number;
  b2bMax: number;
  recruitmentCost: number;
}

const SalaryCalculator = () => {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [results, setResults] = useState<CalculatorData | null>(null);
  const [showForm, setShowForm] = useState(false);

  const salaryData: Record<string, Record<string, Record<string, {
    uop: [number, number];
    b2b: [number, number];
    cost: number;
  }>>> = {
    "Backend Developer": {
      Junior: {
        zdalna: { uop: [8000, 12000], b2b: [60, 80], cost: 15000 },
        hybrydowa: { uop: [7500, 11000], b2b: [55, 75], cost: 14000 },
        stacjonarna: { uop: [7000, 10000], b2b: [50, 70], cost: 13000 }
      },
      Mid: {
        zdalna: { uop: [12000, 18000], b2b: [80, 120], cost: 20000 },
        hybrydowa: { uop: [11000, 17000], b2b: [75, 110], cost: 19000 },
        stacjonarna: { uop: [10000, 16000], b2b: [70, 100], cost: 18000 }
      },
      Senior: {
        zdalna: { uop: [18000, 28000], b2b: [120, 200], cost: 30000 },
        hybrydowa: { uop: [17000, 26000], b2b: [110, 180], cost: 28000 },
        stacjonarna: { uop: [16000, 24000], b2b: [100, 160], cost: 26000 }
      }
    },
    "Frontend Developer": {
      Junior: {
        zdalna: { uop: [7500, 11000], b2b: [55, 75], cost: 14000 },
        hybrydowa: { uop: [7000, 10500], b2b: [50, 70], cost: 13000 },
        stacjonarna: { uop: [6500, 10000], b2b: [45, 65], cost: 12000 }
      },
      Mid: {
        zdalna: { uop: [11000, 17000], b2b: [75, 110], cost: 19000 },
        hybrydowa: { uop: [10500, 16000], b2b: [70, 105], cost: 18000 },
        stacjonarna: { uop: [10000, 15000], b2b: [65, 100], cost: 17000 }
      },
      Senior: {
        zdalna: { uop: [17000, 26000], b2b: [110, 180], cost: 28000 },
        hybrydowa: { uop: [16000, 24000], b2b: [105, 170], cost: 26000 },
        stacjonarna: { uop: [15000, 22000], b2b: [100, 160], cost: 24000 }
      }
    },
    "DevOps Engineer": {
      Junior: { 
        zdalna: { uop: [9000, 13000], b2b: [65, 85], cost: 16000 },
        hybrydowa: { uop: [8500, 12500], b2b: [60, 80], cost: 15000 },
        stacjonarna: { uop: [8000, 12000], b2b: [55, 75], cost: 14000 }
      },
      Mid: {
        zdalna: { uop: [13000, 20000], b2b: [85, 130], cost: 22000 },
        hybrydowa: { uop: [12500, 19000], b2b: [80, 125], cost: 21000 },
        stacjonarna: { uop: [12000, 18000], b2b: [75, 120], cost: 20000 }
      },
      Senior: {
        zdalna: { uop: [20000, 32000], b2b: [130, 220], cost: 35000 },
        hybrydowa: { uop: [19000, 30000], b2b: [125, 210], cost: 33000 },
        stacjonarna: { uop: [18000, 28000], b2b: [120, 200], cost: 31000 }
      }
    },
    "QA Engineer": {
      Junior: {
        zdalna: { uop: [6500, 9500], b2b: [45, 65], cost: 12000 },
        hybrydowa: { uop: [6000, 9000], b2b: [40, 60], cost: 11000 },
        stacjonarna: { uop: [5500, 8500], b2b: [35, 55], cost: 10000 }
      },
      Mid: {
        zdalna: { uop: [9500, 15000], b2b: [65, 100], cost: 17000 },
        hybrydowa: { uop: [9000, 14000], b2b: [60, 95], cost: 16000 },
        stacjonarna: { uop: [8500, 13000], b2b: [55, 90], cost: 15000 }
      },
      Senior: {
        zdalna: { uop: [15000, 24000], b2b: [100, 170], cost: 26000 },
        hybrydowa: { uop: [14000, 22000], b2b: [95, 160], cost: 24000 },
        stacjonarna: { uop: [13000, 20000], b2b: [90, 150], cost: 22000 }
      }
    }
  };

  const calculateSalary = () => {
    if (!role || !experience || !workMode) return;
    
    const data = salaryData[role]?.[experience]?.[workMode];
    if (!data) return;

    const calculatorData: CalculatorData = {
      role,
      experience,
      workMode,
      uopMin: data.uop[0],
      uopMax: data.uop[1],
      b2bMin: data.b2b[0],
      b2bMax: data.b2b[1],
      recruitmentCost: data.cost
    };

    setResults(calculatorData);
  };

  const handleSendInquiry = () => {
    setShowForm(true);
  };

  if (showForm && results) {
    return <ContactForm calculatorData={results} onBack={() => setShowForm(false)} />;
  }

  return (
    <section id="calculator" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Kalkulator Widełek Płacowych</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sprawdź aktualne stawki dla specjalistów IT w Polsce. 
            Dane oparte na naszym doświadczeniu i obecnych trendach rynkowych.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Wybierz parametry stanowiska
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Rola</label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz rolę" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                      <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                      <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                      <SelectItem value="QA Engineer">QA Engineer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Doświadczenie</label>
                  <Select value={experience} onValueChange={setExperience}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz poziom" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Junior">Junior (0-2 lata)</SelectItem>
                      <SelectItem value="Mid">Mid (3-5 lat)</SelectItem>
                      <SelectItem value="Senior">Senior (5+ lat)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tryb pracy</label>
                  <Select value={workMode} onValueChange={setWorkMode}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz tryb" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zdalna">Praca zdalna</SelectItem>
                      <SelectItem value="hybrydowa">Praca hybrydowa</SelectItem>
                      <SelectItem value="stacjonarna">Praca stacjonarna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={calculateSalary}
                  disabled={!role || !experience || !workMode}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
                >
                  Oblicz widełki płacowe
                </Button>
              </div>

              {results && (
                <div className="mt-8 animate-fade-in">
                  <div className="bg-gradient-primary rounded-lg p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                      Wyniki dla: {results.role} • {results.experience} • {results.workMode}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-lg font-semibold mb-3">Umowa o pracę (UoP)</h4>
                        <div className="text-2xl font-bold text-accent">
                          {results.uopMin.toLocaleString()} - {results.uopMax.toLocaleString()} PLN
                        </div>
                        <div className="text-sm opacity-80">brutto miesięcznie</div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-lg font-semibold mb-3">Kontrakt B2B</h4>
                        <div className="text-2xl font-bold text-accent">
                          {results.b2bMin} - {results.b2bMax} PLN
                        </div>
                        <div className="text-sm opacity-80">netto za godzinę</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 mb-6">
                      <h4 className="text-lg font-semibold mb-2">Koszt procesu rekrutacji</h4>
                      <div className="text-xl font-bold text-accent">
                        {results.recruitmentCost.toLocaleString()} PLN
                      </div>
                      <div className="text-sm opacity-80">
                        Obejmuje całość procesu: sourcing, weryfikację, wywiad, referencje
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        onClick={handleSendInquiry}
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90"
                      >
                        Wyślij zapytanie
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SalaryCalculator;