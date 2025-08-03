import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ContactForm from "./ContactForm";
import { useTheme } from "@/contexts/ThemeContext";

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
  const { currentTheme } = useTheme();
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
    "Java Developer": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    ".NET Developer": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    "PHP Developer": {
      Junior: { zdalna: { uop: [7000, 11000], b2b: [8750, 13125], baseCost: 14000 }, hybrydowa: { uop: [6500, 10500], b2b: [7875, 12250], baseCost: 14000 }, stacjonarna: { uop: [6000, 10000], b2b: [7000, 11375], baseCost: 14000 } },
      Mid: { zdalna: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 19000 }, hybrydowa: { uop: [10500, 16000], b2b: [12250, 18375], baseCost: 19000 }, stacjonarna: { uop: [10000, 15000], b2b: [11375, 17500], baseCost: 19000 } },
      Senior: { zdalna: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 28000 }, hybrydowa: { uop: [16000, 24000], b2b: [18375, 29750], baseCost: 28000 }, stacjonarna: { uop: [15000, 22000], b2b: [17500, 28000], baseCost: 28000 } }
    },
    "Python Developer": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    "C++ Developer": {
      Junior: { zdalna: { uop: [9000, 13000], b2b: [11375, 14875], baseCost: 16000 }, hybrydowa: { uop: [8500, 12500], b2b: [10500, 14000], baseCost: 16000 }, stacjonarna: { uop: [8000, 12000], b2b: [9625, 13125], baseCost: 16000 } },
      Mid: { zdalna: { uop: [13000, 20000], b2b: [14875, 22750], baseCost: 22000 }, hybrydowa: { uop: [12500, 19000], b2b: [14000, 21875], baseCost: 22000 }, stacjonarna: { uop: [12000, 18000], b2b: [13125, 21000], baseCost: 22000 } },
      Senior: { zdalna: { uop: [20000, 32000], b2b: [22750, 38500], baseCost: 35000 }, hybrydowa: { uop: [19000, 30000], b2b: [21875, 36750], baseCost: 35000 }, stacjonarna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 35000 } }
    },
    "Node.js Developer": {
      Junior: { zdalna: { uop: [7500, 11000], b2b: [9625, 13125], baseCost: 14000 }, hybrydowa: { uop: [7000, 10500], b2b: [8750, 12250], baseCost: 14000 }, stacjonarna: { uop: [6500, 10000], b2b: [7875, 11375], baseCost: 14000 } },
      Mid: { zdalna: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 19000 }, hybrydowa: { uop: [10500, 16000], b2b: [12250, 18375], baseCost: 19000 }, stacjonarna: { uop: [10000, 15000], b2b: [11375, 17500], baseCost: 19000 } },
      Senior: { zdalna: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 28000 }, hybrydowa: { uop: [16000, 24000], b2b: [18375, 29750], baseCost: 28000 }, stacjonarna: { uop: [15000, 22000], b2b: [17500, 28000], baseCost: 28000 } }
    },
    "Golang Developer": {
      Junior: { zdalna: { uop: [9000, 13000], b2b: [11375, 14875], baseCost: 16000 }, hybrydowa: { uop: [8500, 12500], b2b: [10500, 14000], baseCost: 16000 }, stacjonarna: { uop: [8000, 12000], b2b: [9625, 13125], baseCost: 16000 } },
      Mid: { zdalna: { uop: [13000, 20000], b2b: [14875, 22750], baseCost: 22000 }, hybrydowa: { uop: [12500, 19000], b2b: [14000, 21875], baseCost: 22000 }, stacjonarna: { uop: [12000, 18000], b2b: [13125, 21000], baseCost: 22000 } },
      Senior: { zdalna: { uop: [20000, 32000], b2b: [22750, 38500], baseCost: 35000 }, hybrydowa: { uop: [19000, 30000], b2b: [21875, 36750], baseCost: 35000 }, stacjonarna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 35000 } }
    },
    "Full Stack Developer": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    "Frontend Developer": {
      Junior: { zdalna: { uop: [7500, 11000], b2b: [9625, 13125], baseCost: 14000 }, hybrydowa: { uop: [7000, 10500], b2b: [8750, 12250], baseCost: 14000 }, stacjonarna: { uop: [6500, 10000], b2b: [7875, 11375], baseCost: 14000 } },
      Mid: { zdalna: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 19000 }, hybrydowa: { uop: [10500, 16000], b2b: [12250, 18375], baseCost: 19000 }, stacjonarna: { uop: [10000, 15000], b2b: [11375, 17500], baseCost: 19000 } },
      Senior: { zdalna: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 28000 }, hybrydowa: { uop: [16000, 24000], b2b: [18375, 29750], baseCost: 28000 }, stacjonarna: { uop: [15000, 22000], b2b: [17500, 28000], baseCost: 28000 } }
    },
    "Mobile Developer": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    "Tester manualny": {
      Junior: { zdalna: { uop: [5000, 8000], b2b: [6125, 9625], baseCost: 10000 }, hybrydowa: { uop: [4500, 7500], b2b: [5250, 8750], baseCost: 10000 }, stacjonarna: { uop: [4000, 7000], b2b: [4375, 7875], baseCost: 10000 } },
      Mid: { zdalna: { uop: [8000, 12000], b2b: [9625, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [8750, 13125], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [7875, 12250], baseCost: 15000 } },
      Senior: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } }
    },
    "Tester automatyzujacy": {
      Junior: { zdalna: { uop: [7000, 11000], b2b: [8750, 13125], baseCost: 13000 }, hybrydowa: { uop: [6500, 10500], b2b: [7875, 12250], baseCost: 13000 }, stacjonarna: { uop: [6000, 10000], b2b: [7000, 11375], baseCost: 13000 } },
      Mid: { zdalna: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 18000 }, hybrydowa: { uop: [10500, 16000], b2b: [12250, 18375], baseCost: 18000 }, stacjonarna: { uop: [10000, 15000], b2b: [11375, 17500], baseCost: 18000 } },
      Senior: { zdalna: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 27000 }, hybrydowa: { uop: [16000, 24000], b2b: [18375, 29750], baseCost: 27000 }, stacjonarna: { uop: [15000, 22000], b2b: [17500, 28000], baseCost: 27000 } }
    },
    "IT Administrator": {
      Junior: { zdalna: { uop: [6000, 9000], b2b: [7000, 10500], baseCost: 12000 }, hybrydowa: { uop: [5500, 8500], b2b: [6125, 9625], baseCost: 12000 }, stacjonarna: { uop: [5000, 8000], b2b: [5250, 8750], baseCost: 12000 } },
      Mid: { zdalna: { uop: [9000, 14000], b2b: [10500, 16625], baseCost: 17000 }, hybrydowa: { uop: [8500, 13000], b2b: [9625, 15750], baseCost: 17000 }, stacjonarna: { uop: [8000, 12000], b2b: [8750, 14875], baseCost: 17000 } },
      Senior: { zdalna: { uop: [14000, 22000], b2b: [16625, 28000], baseCost: 25000 }, hybrydowa: { uop: [13000, 20000], b2b: [15750, 26250], baseCost: 25000 }, stacjonarna: { uop: [12000, 18000], b2b: [14875, 24500], baseCost: 25000 } }
    },
    "DevOps Engineer": {
      Junior: { zdalna: { uop: [9000, 13000], b2b: [11375, 14875], baseCost: 16000 }, hybrydowa: { uop: [8500, 12500], b2b: [10500, 14000], baseCost: 16000 }, stacjonarna: { uop: [8000, 12000], b2b: [9625, 13125], baseCost: 16000 } },
      Mid: { zdalna: { uop: [13000, 20000], b2b: [14875, 22750], baseCost: 22000 }, hybrydowa: { uop: [12500, 19000], b2b: [14000, 21875], baseCost: 22000 }, stacjonarna: { uop: [12000, 18000], b2b: [13125, 21000], baseCost: 22000 } },
      Senior: { zdalna: { uop: [20000, 32000], b2b: [22750, 38500], baseCost: 35000 }, hybrydowa: { uop: [19000, 30000], b2b: [21875, 36750], baseCost: 35000 }, stacjonarna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 35000 } }
    },
    "Security Engineer": {
      Junior: { zdalna: { uop: [9000, 13000], b2b: [11375, 14875], baseCost: 16000 }, hybrydowa: { uop: [8500, 12500], b2b: [10500, 14000], baseCost: 16000 }, stacjonarna: { uop: [8000, 12000], b2b: [9625, 13125], baseCost: 16000 } },
      Mid: { zdalna: { uop: [13000, 20000], b2b: [14875, 22750], baseCost: 22000 }, hybrydowa: { uop: [12500, 19000], b2b: [14000, 21875], baseCost: 22000 }, stacjonarna: { uop: [12000, 18000], b2b: [13125, 21000], baseCost: 22000 } },
      Senior: { zdalna: { uop: [20000, 32000], b2b: [22750, 38500], baseCost: 35000 }, hybrydowa: { uop: [19000, 30000], b2b: [21875, 36750], baseCost: 35000 }, stacjonarna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 35000 } }
    },
    "SAP Consultant": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    "ABAP Developer": {
      Junior: { zdalna: { uop: [7000, 11000], b2b: [8750, 13125], baseCost: 14000 }, hybrydowa: { uop: [6500, 10500], b2b: [7875, 12250], baseCost: 14000 }, stacjonarna: { uop: [6000, 10000], b2b: [7000, 11375], baseCost: 14000 } },
      Mid: { zdalna: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 19000 }, hybrydowa: { uop: [10500, 16000], b2b: [12250, 18375], baseCost: 19000 }, stacjonarna: { uop: [10000, 15000], b2b: [11375, 17500], baseCost: 19000 } },
      Senior: { zdalna: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 28000 }, hybrydowa: { uop: [16000, 24000], b2b: [18375, 29750], baseCost: 28000 }, stacjonarna: { uop: [15000, 22000], b2b: [17500, 28000], baseCost: 28000 } }
    },
    "Scrum Master": {
      Junior: { zdalna: { uop: [7000, 11000], b2b: [8750, 13125], baseCost: 14000 }, hybrydowa: { uop: [6500, 10500], b2b: [7875, 12250], baseCost: 14000 }, stacjonarna: { uop: [6000, 10000], b2b: [7000, 11375], baseCost: 14000 } },
      Mid: { zdalna: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 19000 }, hybrydowa: { uop: [10500, 16000], b2b: [12250, 18375], baseCost: 19000 }, stacjonarna: { uop: [10000, 15000], b2b: [11375, 17500], baseCost: 19000 } },
      Senior: { zdalna: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 28000 }, hybrydowa: { uop: [16000, 24000], b2b: [18375, 29750], baseCost: 28000 }, stacjonarna: { uop: [15000, 22000], b2b: [17500, 28000], baseCost: 28000 } }
    },
    "Product Owner": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    "Analityk Biznesowy": {
      Junior: { zdalna: { uop: [7000, 11000], b2b: [8750, 13125], baseCost: 14000 }, hybrydowa: { uop: [6500, 10500], b2b: [7875, 12250], baseCost: 14000 }, stacjonarna: { uop: [6000, 10000], b2b: [7000, 11375], baseCost: 14000 } },
      Mid: { zdalna: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 19000 }, hybrydowa: { uop: [10500, 16000], b2b: [12250, 18375], baseCost: 19000 }, stacjonarna: { uop: [10000, 15000], b2b: [11375, 17500], baseCost: 19000 } },
      Senior: { zdalna: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 28000 }, hybrydowa: { uop: [16000, 24000], b2b: [18375, 29750], baseCost: 28000 }, stacjonarna: { uop: [15000, 22000], b2b: [17500, 28000], baseCost: 28000 } }
    },
    "Analityk Systemowy": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    "Project Manager": {
      Junior: { zdalna: { uop: [8000, 12000], b2b: [10500, 14000], baseCost: 15000 }, hybrydowa: { uop: [7500, 11000], b2b: [9600, 13100], baseCost: 15000 }, stacjonarna: { uop: [7000, 10000], b2b: [8750, 12250], baseCost: 15000 } },
      Mid: { zdalna: { uop: [12000, 18000], b2b: [14000, 21000], baseCost: 20000 }, hybrydowa: { uop: [11000, 17000], b2b: [13125, 19250], baseCost: 20000 }, stacjonarna: { uop: [10000, 16000], b2b: [12250, 17500], baseCost: 20000 } },
      Senior: { zdalna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 30000 }, hybrydowa: { uop: [17000, 26000], b2b: [19250, 31500], baseCost: 30000 }, stacjonarna: { uop: [16000, 24000], b2b: [17500, 28000], baseCost: 30000 } }
    },
    "Data Engineer": {
      Junior: { zdalna: { uop: [9000, 13000], b2b: [11375, 14875], baseCost: 16000 }, hybrydowa: { uop: [8500, 12500], b2b: [10500, 14000], baseCost: 16000 }, stacjonarna: { uop: [8000, 12000], b2b: [9625, 13125], baseCost: 16000 } },
      Mid: { zdalna: { uop: [13000, 20000], b2b: [14875, 22750], baseCost: 22000 }, hybrydowa: { uop: [12500, 19000], b2b: [14000, 21875], baseCost: 22000 }, stacjonarna: { uop: [12000, 18000], b2b: [13125, 21000], baseCost: 22000 } },
      Senior: { zdalna: { uop: [20000, 32000], b2b: [22750, 38500], baseCost: 35000 }, hybrydowa: { uop: [19000, 30000], b2b: [21875, 36750], baseCost: 35000 }, stacjonarna: { uop: [18000, 28000], b2b: [21000, 35000], baseCost: 35000 } }
    },
    "Solution Architect": {
      Junior: { zdalna: { uop: [10000, 15000], b2b: [12250, 17500], baseCost: 18000 }, hybrydowa: { uop: [9500, 14000], b2b: [11375, 16625], baseCost: 18000 }, stacjonarna: { uop: [9000, 13000], b2b: [10500, 15750], baseCost: 18000 } },
      Mid: { zdalna: { uop: [15000, 22000], b2b: [17500, 26250], baseCost: 25000 }, hybrydowa: { uop: [14000, 20000], b2b: [16625, 24500], baseCost: 25000 }, stacjonarna: { uop: [13000, 18000], b2b: [15750, 22750], baseCost: 25000 } },
      Senior: { zdalna: { uop: [22000, 35000], b2b: [26250, 43750], baseCost: 40000 }, hybrydowa: { uop: [20000, 32000], b2b: [24500, 42000], baseCost: 40000 }, stacjonarna: { uop: [18000, 30000], b2b: [22750, 40250], baseCost: 40000 } }
    }
  };

  const calculateSalary = () => {
    if (!role || !experience || !workMode) {
      setResults(null);
      return;
    }
    
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

  useEffect(() => {
    calculateSalary();
  }, [role, experience, workMode]);

  if (showForm && results) {
    return <ContactForm calculatorData={results} onBack={() => setShowForm(false)} />;
  }

  return (
    <section 
      id="calculator" 
      className="py-16"
      style={{ backgroundColor: currentTheme.colors.bgSecondary }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            Kalkulator procesu rekrutacyjnego
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: currentTheme.colors.textSecondary }}>
            Sprawdź aktualne stawki dla specjalistów IT w Polsce oraz koszt rekrutacji. 
            Dane oparte na naszym doświadczeniu i obecnych trendach rynkowych.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card 
            className="shadow-lg"
            style={{ 
              boxShadow: `0 10px 30px -10px ${currentTheme.colors.primaryBlue}30`,
              border: `1px solid ${currentTheme.colors.borderLight}`
            }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-center" style={{ color: currentTheme.colors.textPrimary }}>
              Wybierz parametry stanowiska i oblicz koszt rekrutacji
            </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                    Rola
                  </label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz rolę" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Java Developer">Java Developer</SelectItem>
                      <SelectItem value=".NET Developer">.NET Developer</SelectItem>
                      <SelectItem value="PHP Developer">PHP Developer</SelectItem>
                      <SelectItem value="Python Developer">Python Developer</SelectItem>
                      <SelectItem value="C++ Developer">C++ Developer</SelectItem>
                      <SelectItem value="Node.js Developer">Node.js Developer</SelectItem>
                      <SelectItem value="Golang Developer">Golang Developer</SelectItem>
                      <SelectItem value="Full Stack Developer">Full Stack Developer</SelectItem>
                      <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                      <SelectItem value="Mobile Developer">Mobile Developer</SelectItem>
                      <SelectItem value="Tester manualny">Tester manualny</SelectItem>
                      <SelectItem value="Tester automatyzujacy">Tester automatyzujacy</SelectItem>
                      <SelectItem value="IT Administrator">IT Administrator</SelectItem>
                      <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                      <SelectItem value="Security Engineer">Security Engineer</SelectItem>
                      <SelectItem value="SAP Consultant">SAP Consultant</SelectItem>
                      <SelectItem value="ABAP Developer">ABAP Developer</SelectItem>
                      <SelectItem value="Scrum Master">Scrum Master</SelectItem>
                      <SelectItem value="Product Owner">Product Owner</SelectItem>
                      <SelectItem value="Analityk Biznesowy">Analityk Biznesowy</SelectItem>
                      <SelectItem value="Analityk Systemowy">Analityk Systemowy</SelectItem>
                      <SelectItem value="Project Manager">Project Manager</SelectItem>
                      <SelectItem value="Data Engineer">Data Engineer</SelectItem>
                      <SelectItem value="Solution Architect">Solution Architect</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                    Doświadczenie
                  </label>
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
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.colors.textPrimary }}>
                    Tryb pracy
                  </label>
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

              {results && (
                <div className="mt-8 animate-fade-in">
                  <div 
                    className="rounded-lg p-6 text-white"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.primaryBlueDark} 100%)`
                    }}
                  >
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                      Wyniki dla: {results.role} • {results.experience} • {results.workMode}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-lg font-semibold mb-3">Umowa o pracę (UoP)</h4>
                        <div className="text-2xl font-bold" style={{ color: currentTheme.colors.accentOrange }}>
                          {results.uopMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} - {results.uopMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} PLN
                        </div>
                        <div className="text-sm opacity-80">brutto miesięcznie</div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-lg font-semibold mb-3">Kontrakt B2B</h4>
                        <div className="text-2xl font-bold" style={{ color: currentTheme.colors.accentOrange }}>
                          {results.b2bMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} - {results.b2bMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} PLN
                        </div>
                        <div className="text-sm opacity-80">netto miesięcznie</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 mb-6">
                      <h4 className="text-lg font-semibold mb-2">Koszt procesu rekrutacji</h4>
                      <div className="text-xl font-bold" style={{ color: currentTheme.colors.accentOrange }}>
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
                        className="transition-all duration-300 hover:shadow-lg"
                        style={{ 
                          backgroundColor: currentTheme.colors.bgPrimary,
                          color: currentTheme.colors.primaryBlue,
                          border: 'none'
                        }}
                      >
                        Wyślij zapytanie
                      </Button>
                    </div>
                    
                    {/* Role Description Section */}
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3 text-center">Opis stanowiska</h4>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-sm leading-relaxed opacity-90">
                          {results.role === "Java Developer" && 
                            "Specjalizuje się w budowaniu zaawansowanego oprogramowania back-endowego i systemów rozproszonych w ekosystemie Java. Kluczowe technologie to Java SE/EE, Spring (Boot, MVC, Security, Data), Hibernate, JPA, Maven/Gradle, REST API, SOAP, Docker oraz bazy relacyjne (MySQL, PostgreSQL, Oracle). Java Developerzy często angażują się w projekty mikroserwisowe, integracje zewnętrzne, optymalizację wydajności oraz testy jednostkowe (JUnit, Mockito). Pracują w metodykach Agile/Scrum i często korzystają z narzędzi CI/CD (Jenkins, GitLab CI)."
                          }
                          {results.role === ".NET Developer" && 
                            "Tworzy aplikacje webowe, desktopowe lub mobilne wykorzystując platformę Microsoft .NET. Kluczowe technologie to C#, ASP.NET MVC/Core, Entity Framework, LINQ, Blazor, Razor, MS SQL Server, Azure DevOps, REST API. .NET Developerzy odpowiadają za rozwój oprogramowania w środowiskach chmurowych Microsoft Azure, migracje ze starszych wersji frameworka, integracje systemów, optymalizację wydajności oraz wsparcie techniczne. Ważna jest znajomość narzędzi do automatyzacji testów i wdrożeń oraz dobre praktyki pisania czytelnego, skalowalnego kodu."
                          }
                          {results.role === "PHP Developer" && 
                            "Programista aplikacji internetowych odpowiadający za rozwój serwisów, portali i systemów e-commerce bazujących na PHP. Wiodące technologie: PHP 7/8, frameworki Laravel, Symfony, Zend; systemy zarządzania treścią (WordPress, Drupal); bazy MySQL/MariaDB; narzędzia do testowania (PHPUnit), API Restful, Composer, Docker. PHP Developer integruje systemy zewnętrzne, zarządza wdrożeniami na serwery Linux i optymalizuje działanie aplikacji. Znajomość JavaScript i narzędzi frontendowych jest dużym atutem."
                          }
                          {results.role === "Python Developer" && 
                            "Specjalista od programowania i automatyzacji procesów biznesowych w Pythonie. Pracuje z frameworkami Django i Flask (aplikacje webowe), FastAPI/Aiohttp (REST API), wykorzystuje biblioteki do analityki danych (NumPy, Pandas, scikit-learn), a także do uczenia maszynowego (TensorFlow, PyTorch). Często wdraża rozwiązania chmurowe (AWS Lambda, Azure Functions), automatyzuje operacje (skrypty, web scraping) oraz dba o jakość kodu stosując testy jednostkowe i integracyjne (pytest). Kluczowa jest znajomość pracy z repozytoriami Git oraz systemami CI/CD."
                          }
                          {results.role === "C++ Developer" && 
                            "Programista pracujący na pograniczu software'u i hardware'u. Główne technologie to język C++11/17/20, biblioteki STL, Boost, framework Qt (aplikacje graficzne), narzędzia do programowania systemów embedded i mikrokontrolerów, programowanie wielowątkowe, optymalizacja algorytmów i zarządzanie pamięcią. C++ Developerzy często tworzą oprogramowanie dla branż automotive, telekomunikacyjnej, gier, fintech czy systemów IoT. Bardzo ważna znajomość wzorców projektowych i doświadczenie w debugowaniu złożonych systemów."
                          }
                          {results.role === "Node.js Developer" && 
                            "Specjalizuje się w budowie nowoczesnych i skalowalnych back-endów oraz API w JavaScript/TypeScript z użyciem Node.js, Express.js, Koa.js. Pracuje z bazami NoSQL (MongoDB, Redis) oraz SQL, implementuje autoryzację (JWT, OAuth2), cache'owanie i rozwiązania asynchroniczne. Node.js Developerzy stosują podejście serverless (AWS Lambda), piszą testy (Mocha, Jest), budują systemy realtime (WebSocket, Socket.io) oraz korzystają z Docker/Kubernetes przy wdrażaniu rozwiązań w chmurze."
                          }
                          {results.role === "Golang Developer" && 
                            "Tworzy wydajne, odporne i łatwe w utrzymaniu systemy w języku Go (Golang). Specjalizuje się w rozwiązaniach mikroserwisowych, systemach rozproszonych, narzędziach DevOps i platformach chmurowych (Kubernetes, Docker, AWS/GCP). Golang Developer często programuje API (gRPC, REST), korzysta z narzędzi testujących (Go test), dba o wysoką wydajność i bezpieczeństwo kodu. Atutem jest znajomość wzorców projektowych i architektur event-driven."
                          }
                          {results.role === "Full Stack Developer" && 
                            "Łączy kompetencje programisty backend i frontend. Technologie backendowe: Node.js, Java Spring, .NET, Python; frontendowe: JavaScript, TypeScript, React, Angular, Vue.js, HTML5, CSS3. Zna bazy danych (SQL i NoSQL), technologie chmurowe, narzędzia CI/CD. Full Stack Developer odpowiada za całość procesu wytwarzania aplikacji – od interfejsu użytkownika po wdrażanie mikroserwisów i integracje zewnętrzne. Ważna jest umiejętność pracy ze wzorcami projektowymi i szybka adaptacja do zmian technologicznych."
                          }
                          {results.role === "Frontend Developer" && 
                            "Tworzy nowoczesne i responsywne interfejsy użytkownika przy użyciu HTML5, CSS3, SASS/LESS, JavaScript/TypeScript, frameworków React, Angular lub Vue.js. Implementuje testy jednostkowe (Jest, Mocha), buduje aplikacje Progressive Web Apps, optymalizuje wydajność ładowania stron i zarządza stanem aplikacji (Redux, NgRx). Często pracuje z API REST/GraphQL oraz narzędziami deweloperskimi (Webpack, Git). Frontend Developer dba o UX/UI i dostępność cyfrową (WCAG)."
                          }
                          {results.role === "Mobile Developer" && 
                            "Odpowiada za projektowanie, budowę i wdrażanie aplikacji mobilnych na platformy Android (Kotlin, Java), iOS (Swift, Objective-C) oraz wieloplatformowe (Flutter, React Native). Zna architektury MVVM/MVC, biblioteki do zarządzania siecią i bazami mobilnymi (Room, CoreData), umie integrować aplikacje z API zewnętrznymi, wdrażać powiadomienia push oraz testować aplikacje (Espresso, XCTest)."
                          }
                          {results.role === "Tester manualny" && 
                            "Manual Tester odpowiada za przygotowanie, przeprowadzanie i dokumentowanie testów funkcjonalnych oraz użyteczności nowych rozwiązań IT. Współpracuje z zespołem developerskim, tworzy scenariusze i przypadki testowe, raportuje błędy (Jira, TestRail), analizuje wyniki testów i usprawnia proces zapewnienia jakości. Musi znać metodyki testowania, cykl życia projektu oraz dobrze rozumieć specyfikację produktu."
                          }
                          {results.role === "Tester automatyzujacy" && 
                            "Tester automatyzujący projektuje i implementuje testy automatyczne dla aplikacji webowych i mobilnych. Kluczowe technologie to Selenium, Cypress, Playwright, JUnit, TestNG, REST Assured, Postman. Buduje frameworki testowe, integruje testy z CI/CD, analizuje raporty testów i współpracuje z developerami. Dba o pokrycie testami krytycznych ścieżek biznesowych i utrzymanie wysokiej jakości kodu testowego."
                          }
                          {results.role === "IT Administrator" && 
                            "Zarządza infrastrukturą IT wewnątrz organizacji – serwerami (Linux/Windows Server), sieciami LAN/WAN, systemami wirtualizacji (VMware, Hyper-V), backupem i bezpieczeństwem. IT Administrator monitoruje systemy (Nagios, Zabbix), konfiguruje usługi (Active Directory, DHCP, DNS), wdraża polityki bezpieczeństwa oraz wspiera użytkowników (Helpdesk, ticketing). Kluczowa jest szybka diagnostyka usterek i umiejętność automatyzacji powtarzalnych zadań (Bash, PowerShell)."
                          }
                          {results.role === "DevOps Engineer" && 
                            "DevOps wspiera automatyzację procesów wdrożeniowych i rozwój infrastruktury. Kluczowe narzędzia to Docker, Kubernetes, Terraform, Ansible, Jenkins, GitLab CI/CD, AWS/Azure/GCP. Odpowiada za budowę środowisk testowych i produkcyjnych, monitorowanie (Prometheus, Grafana), bezpieczeństwo pipeline'ów, optymalizację kosztów i czasów wdrożeń oraz utrzymywanie wysokiej dostępności systemów."
                          }
                          {results.role === "Security Engineer" && 
                            "Specjalista ds. cyberbezpieczeństwa. Wdraża i monitoruje rozwiązania firewall, IDS/IPS, SIEM; przeprowadza testy penetracyjne, audyty bezpieczeństwa i szkolenia użytkowników. Pracuje z narzędziami do wykrywania zagrożeń, szyfrowania danych, wdrażania polityk bezpieczeństwa IT oraz reaguje na incydenty. Kluczowe są aktualna wiedza o zagrożeniach, praktyka w hardeningu systemów i znajomość norm bezpieczeństwa (ISO 27001)."
                          }
                          {results.role === "SAP Consultant" && 
                            "Konsultant wdrażający oraz optymalizujący systemy SAP w firmie. Specjalizuje się w modułach SAP (FI/CO, MM/SD, HR, PP), zna język ABAP oraz potrafi analizować i mapować procesy biznesowe pod wymagania korporacyjne. SAP Consultant odpowiada za konfigurację systemu, szkolenia użytkowników, wsparcie w migracjach oraz integrację z innymi systemami ERP."
                          }
                          {results.role === "ABAP Developer" && 
                            "Programista tworzący rozszerzenia, raporty i integracje na platformie SAP przy użyciu języka ABAP i narzędzi SAP NetWeaver, SAPUI5, OData, BAPI, BADI. Odpowiada za automatyzację procesów w środowisku SAP, implementację nowych funkcjonalności i wsparcie techniczne użytkowników biznesowych."
                          }
                          {results.role === "Scrum Master" && 
                            "Osoba dbająca o efektywne wdrażanie procesu Scrum oraz o właściwą współpracę zespołu deweloperskiego. Organizuje Sprinty, Daily Stand-up, Review i Retrospectives, usuwa przeszkody, wspiera przejrzystą komunikację oraz pilnuje realizacji celów Sprintu. Współpracuje z Product Ownerem i promuje kulturę ciągłego doskonalenia."
                          }
                          {results.role === "Product Owner" && 
                            "Właściciel produktu IT, definiujący wizję oprogramowania oraz zarządzający backlogiem. Współpracuje z zespołem developerskim, biznesem i interesariuszami. Odpowiada za priorytetyzację zadań, analizę wymagań, sprawdzenie efektów pracy i rozwój produktu zgodnie z potrzebami rynku."
                          }
                          {results.role === "Analityk Biznesowy" && 
                            "Łączy wiedzę biznesową i technologiczną, prowadzi analizy wymagań użytkowników, tworzy specyfikacje funkcjonalne, modeluje procesy (UML, BPMN), koordynuje komunikację między IT a biznesem, oraz wspiera wdrażanie nowych rozwiązań IT zapewniając ich zgodność z celami organizacyjnymi."
                          }
                          {results.role === "Analityk Systemowy" && 
                            "Odgrywa kluczową rolę w analizie systemów informatycznych – buduje diagramy ERD, analizuje wymagania techniczne i architekturę rozwiązań, dba o jakość dokumentacji. Często współpracuje bezpośrednio z developerami, architektami i klientem biznesowym."
                          }
                          {results.role === "Project Manager" && 
                            "Projektuje i prowadzi cykl życia projektów IT – planuje, koordynuje, monitoruje zadania, zarządza zespołem i komunikacją. Wykorzystuje metodyki project managementu (Agile, Scrum, PMI, Prince2), narzędzia do raportowania (Jira, MS Project, Asana), pilnuje budżetu, zakresu i terminów realizacji. Zarządza ryzykiem i motywuje zespół do osiągania wspólnych celów."
                          }
                          {results.role === "Data Engineer" && 
                            "Specjalista budujący i utrzymujący infrastrukturę danych: projektuje i realizuje procesy ETL, buduje hurtownie danych i systemy analityczne. Pracuje z dużymi zbiorami danych, dba o ich jakość i bezpieczeństwo. Kluczowe technologie: Python, SQL, Scala, Apache Spark, Hadoop, Kafka, Airflow, PostgreSQL, MongoDB, AWS (S3, Glue), Azure, GCP, Docker, Terraform."
                          }
                          {results.role === "Solution Architect" && 
                            "Projektuje kompleksowe rozwiązania IT zgodne z wymaganiami biznesowymi. Dobiera technologie, integruje systemy, nadzoruje wdrożenia i zapewnia skalowalność oraz bezpieczeństwo rozwiązań. Kluczowe technologie i kompetencje: TOGAF, UML, AWS, Azure, GCP, Docker, Kubernetes, REST/SOAP API, mikroserwisy, bazy relacyjne i NoSQL, bezpieczeństwo, dokumentacja techniczna i współpraca z zespołami."
                          }
                          {!results.role && 
                            "Wybierz rolę, aby zobaczyć szczegółowy opis stanowiska i wymagania."
                          }
                        </p>
                      </div>
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