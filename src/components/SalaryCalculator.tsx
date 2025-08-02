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
    baseCost: number;
  }>>> = {
    "Backend Developer": {
      Junior: {
        zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 },
        hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 },
        stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 }
      },
      Mid: {
        zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 },
        hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 },
        stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 }
      },
      Senior: {
        zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 },
        hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 },
        stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 }
      }
    },
    "Frontend Developer": {
      Junior: {
        zdalna: { uop: [7500, 11000], b2b: [9625, 13125], baseCost: 14000 },
        hybrydowa: { uop: [7000, 10500], b2b: [8750, 12250], baseCost: 14000 },
        stacjonarna: { uop: [6500, 10000], b2b: [7875, 11375], baseCost: 14000 }
      },
      Mid: {
        zdalna: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 19000 },
        hybrydowa: { uop: [10500, 16000], b2b: [12250, 18375], baseCost: 19000 },
        stacjonarna: { uop: [10000, 15000], b2b: [11375, 17500], baseCost: 19000 }
      },
      Senior: {
        zdalna: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 28000 },
        hybrydowa: { uop: [16000, 24000], b2b: [18375, 29750], baseCost: 28000 },
        stacjonarna: { uop: [15000, 22000], b2b: [17500, 28000], baseCost: 28000 }
      }
    },
    "DevOps Engineer": {
      Junior: { 
        zdalna: { uop: [9000, 13000], b2b: [11375, 14875], baseCost: 16000 },
        hybrydowa: { uop: [8500, 12500], b2b: [10500, 14000], baseCost: 16000 },
        stacjonarna: { uop: [8000, 12000], b2b: [9625, 13125], baseCost: 16000 }
      },
      Mid: {
        zdalna: { uop: [13000, 20000], b2b: [14875, 22750], baseCost: 22000 },
        hybrydowa: { uop: [12500, 19000], b2b: [14000, 21875], baseCost: 22000 },
        stacjonarna: { uop: [12000, 18000], b2b: [13125, 21000], baseCost: 22000 }
      },
      Senior: {
        zdalna: { uop: [20000, 32000], b2b: [22750, 38500], baseCost: 35000 },
        hybrydowa: { uop: [19000, 30000], b2b: [21875, 36750], baseCost: 35000 },
        stacjonarna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 35000 }
      }
    },
    "QA Engineer": {
      Junior: {
        zdalna: { uop: [6500, 9500], b2b: [7875, 11375], baseCost: 12000 },
        hybrydowa: { uop: [6000, 9000], b2b: [7000, 10500], baseCost: 12000 },
        stacjonarna: { uop: [5500, 8500], b2b: [6125, 9625], baseCost: 12000 }
      },
      Mid: {
        zdalna: { uop: [9500, 15000], b2b: [11375, 17500], baseCost: 17000 },
        hybrydowa: { uop: [9000, 14000], b2b: [10500, 16625], baseCost: 17000 },
        stacjonarna: { uop: [8500, 13000], b2b: [9625, 15750], baseCost: 17000 }
      },
      Senior: {
        zdalna: { uop: [15000, 24000], b2b: [17500, 29750], baseCost: 26000 },
        hybrydowa: { uop: [14000, 22000], b2b: [16625, 28000], baseCost: 26000 },
        stacjonarna: { uop: [13000, 20000], b2b: [15750, 26250], baseCost: 26000 }
      }
    }
  };

  const calculateSalary = () => {
    if (!role || !experience || !workMode) return;
    
    const data = salaryData[role]?.[experience]?.[workMode];
    if (!data) return;

    // Calculate recruitment cost based on work mode
    let recruitmentCost = data.baseCost;
    if (workMode === "hybrydowa") {
      recruitmentCost = Math.round(data.baseCost * 1.05);
    } else if (workMode === "stacjonarna") {
      recruitmentCost = Math.round(data.baseCost * 1.10);
    }

    const calculatorData: CalculatorData = {
      role,
      experience,
      workMode,
      uopMin: data.uop[0],
      uopMax: data.uop[1],
      b2bMin: data.b2b[0],
      b2bMax: data.b2b[1],
      recruitmentCost
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
                        <div className="text-sm opacity-80">netto miesięcznie</div>
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