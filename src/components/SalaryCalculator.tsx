import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ContactForm from './ContactForm';
import { useTheme } from '@/contexts/ThemeContext';

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
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [workMode, setWorkMode] = useState('');
  const [results, setResults] = useState<CalculatorData | null>(null);
  const [showForm, setShowForm] = useState(false);

  const salaryData: Record<
    string,
    Record<
      string,
      Record<
        string,
        {
          uop: [number, number];
          b2b: [number, number];
          baseCost: number;
        }
      >
    >
  > = {
    'Java Developer': {
      Junior: {
        zdalna: { uop: [7000, 10800], b2b: [8000, 13600], baseCost: 7000 },
        hybrydowa: { uop: [7000, 10800], b2b: [8000, 13600], baseCost: 7350 },
        stacjonarna: { uop: [7000, 10800], b2b: [8000, 13600], baseCost: 7700 },
      },
      Mid: {
        zdalna: { uop: [11000, 17200], b2b: [16000, 21000], baseCost: 11410 },
        hybrydowa: {
          uop: [11000, 17200],
          b2b: [16000, 21000],
          baseCost: 11981,
        },
        stacjonarna: {
          uop: [11000, 17200],
          b2b: [16000, 21000],
          baseCost: 12551,
        },
      },
      Senior: {
        zdalna: { uop: [18950, 24600], b2b: [21300, 27500], baseCost: 16161 },
        hybrydowa: {
          uop: [18950, 24600],
          b2b: [21300, 27500],
          baseCost: 16969,
        },
        stacjonarna: {
          uop: [18950, 24600],
          b2b: [21300, 27500],
          baseCost: 17777,
        },
      },
    },
    '.NET Developer': {
      Junior: {
        zdalna: { uop: [6200, 11800], b2b: [6600, 12500], baseCost: 7000 },
        hybrydowa: { uop: [6200, 11800], b2b: [6600, 12500], baseCost: 7350 },
        stacjonarna: { uop: [6200, 11800], b2b: [6600, 12500], baseCost: 7700 },
      },
      Mid: {
        zdalna: { uop: [12400, 19500], b2b: [14800, 20400], baseCost: 11743 },
        hybrydowa: {
          uop: [12400, 19500],
          b2b: [14800, 20400],
          baseCost: 12330,
        },
        stacjonarna: {
          uop: [12400, 19500],
          b2b: [14800, 20400],
          baseCost: 12917,
        },
      },
      Senior: {
        zdalna: { uop: [18750, 22710], b2b: [19700, 26900], baseCost: 16511 },
        hybrydowa: {
          uop: [18750, 22710],
          b2b: [19700, 26900],
          baseCost: 17337,
        },
        stacjonarna: {
          uop: [18750, 22710],
          b2b: [19700, 26900],
          baseCost: 18162,
        },
      },
    },
    'PHP Developer': {
      Junior: {
        zdalna: { uop: [6000, 10000], b2b: [6200, 11530], baseCost: 6500 },
        hybrydowa: { uop: [6000, 10000], b2b: [6200, 11530], baseCost: 6825 },
        stacjonarna: { uop: [6000, 10000], b2b: [6200, 11530], baseCost: 7150 },
      },
      Mid: {
        zdalna: { uop: [12500, 18500], b2b: [13000, 18400], baseCost: 10920 },
        hybrydowa: {
          uop: [12500, 18500],
          b2b: [13000, 18400],
          baseCost: 11466,
        },
        stacjonarna: {
          uop: [12500, 18500],
          b2b: [13000, 18400],
          baseCost: 12012,
        },
      },
      Senior: {
        zdalna: { uop: [14060, 20800], b2b: [17800, 24300], baseCost: 13468 },
        hybrydowa: {
          uop: [14060, 20800],
          b2b: [17800, 24300],
          baseCost: 14141,
        },
        stacjonarna: {
          uop: [14060, 20800],
          b2b: [17800, 24300],
          baseCost: 14815,
        },
      },
    },
    'Python Developer': {
      Junior: {
        zdalna: { uop: [7500, 12100], b2b: [8000, 13900], baseCost: 7000 },
        hybrydowa: { uop: [7500, 12100], b2b: [8000, 13900], baseCost: 7350 },
        stacjonarna: { uop: [7500, 12100], b2b: [8000, 13900], baseCost: 7700 },
      },
      Mid: {
        zdalna: { uop: [12800, 17980], b2b: [16400, 21780], baseCost: 12068 },
        hybrydowa: {
          uop: [12800, 17980],
          b2b: [16400, 21780],
          baseCost: 12671,
        },
        stacjonarna: {
          uop: [12800, 17980],
          b2b: [16400, 21780],
          baseCost: 13275,
        },
      },
      Senior: {
        zdalna: { uop: [19000, 24800], b2b: [21100, 27000], baseCost: 16083 },
        hybrydowa: {
          uop: [19000, 24800],
          b2b: [21100, 27000],
          baseCost: 16887,
        },
        stacjonarna: {
          uop: [19000, 24800],
          b2b: [21100, 27000],
          baseCost: 17691,
        },
      },
    },
    'C++ Developer': {
      Junior: {
        zdalna: { uop: [7400, 9000], b2b: [8500, 12300], baseCost: 7000 },
        hybrydowa: { uop: [7400, 9000], b2b: [8500, 12300], baseCost: 7350 },
        stacjonarna: { uop: [7400, 9000], b2b: [8500, 12300], baseCost: 7700 },
      },
      Mid: {
        zdalna: { uop: [13700, 20000], b2b: [14900, 21750], baseCost: 12311 },
        hybrydowa: {
          uop: [13700, 20000],
          b2b: [14900, 21750],
          baseCost: 12927,
        },
        stacjonarna: {
          uop: [13700, 20000],
          b2b: [14900, 21750],
          baseCost: 13542,
        },
      },
      Senior: {
        zdalna: { uop: [17650, 23450], b2b: [21400, 27100], baseCost: 15680 },
        hybrydowa: {
          uop: [17650, 23450],
          b2b: [21400, 27100],
          baseCost: 16464,
        },
        stacjonarna: {
          uop: [17650, 23450],
          b2b: [21400, 27100],
          baseCost: 17248,
        },
      },
    },
    'Node.js Developer': {
      Junior: {
        zdalna: { uop: [7500, 9000], b2b: [9600, 13700], baseCost: 7000 },
        hybrydowa: { uop: [7500, 9000], b2b: [9600, 13700], baseCost: 7350 },
        stacjonarna: { uop: [7500, 9000], b2b: [9600, 13700], baseCost: 7700 },
      },
      Mid: {
        zdalna: { uop: [15600, 22900], b2b: [15880, 24200], baseCost: 13752 },
        hybrydowa: {
          uop: [15600, 22900],
          b2b: [15880, 24200],
          baseCost: 14439,
        },
        stacjonarna: {
          uop: [15600, 22900],
          b2b: [15880, 24200],
          baseCost: 15127,
        },
      },
      Senior: {
        zdalna: { uop: [17150, 25300], b2b: [22750, 26750], baseCost: 16091 },
        hybrydowa: {
          uop: [17150, 25300],
          b2b: [22750, 26750],
          baseCost: 16896,
        },
        stacjonarna: {
          uop: [17150, 25300],
          b2b: [22750, 26750],
          baseCost: 17700,
        },
      },
    },
    'Golang Developer': {
      Junior: {
        zdalna: { uop: [8700, 14300], b2b: [9300, 14800], baseCost: 8243 },
        hybrydowa: { uop: [8700, 14300], b2b: [9300, 14800], baseCost: 8655 },
        stacjonarna: { uop: [8700, 14300], b2b: [9300, 14800], baseCost: 9067 },
      },
      Mid: {
        zdalna: { uop: [16650, 22700], b2b: [16800, 25600], baseCost: 15328 },
        hybrydowa: {
          uop: [16650, 22700],
          b2b: [16800, 25600],
          baseCost: 16095,
        },
        stacjonarna: {
          uop: [16650, 22700],
          b2b: [16800, 25600],
          baseCost: 16861,
        },
      },
      Senior: {
        zdalna: { uop: [23660, 30000], b2b: [26800, 32980], baseCost: 19852 },
        hybrydowa: {
          uop: [23660, 30000],
          b2b: [26800, 32980],
          baseCost: 20845,
        },
        stacjonarna: {
          uop: [23660, 30000],
          b2b: [26800, 32980],
          baseCost: 21837,
        },
      },
    },
    'Full Stack Developer': {
      Junior: {
        zdalna: { uop: [8350, 12400], b2b: [10400, 14100], baseCost: 8484 },
        hybrydowa: { uop: [8350, 12400], b2b: [10400, 14100], baseCost: 8909 },
        stacjonarna: {
          uop: [8350, 12400],
          b2b: [10400, 14100],
          baseCost: 9333,
        },
      },
      Mid: {
        zdalna: { uop: [12493, 18560], b2b: [16172, 24800], baseCost: 14405 },
        hybrydowa: {
          uop: [12493, 18560],
          b2b: [16172, 24800],
          baseCost: 15125,
        },
        stacjonarna: {
          uop: [12493, 18560],
          b2b: [16172, 24800],
          baseCost: 15846,
        },
      },
      Senior: {
        zdalna: { uop: [16950, 21800], b2b: [23450, 29773], baseCost: 18395 },
        hybrydowa: {
          uop: [16950, 21800],
          b2b: [23450, 29773],
          baseCost: 19314,
        },
        stacjonarna: {
          uop: [16950, 21800],
          b2b: [23450, 29773],
          baseCost: 20234,
        },
      },
    },
    'Frontend Developer': {
      Junior: {
        zdalna: { uop: [7886, 10100], b2b: [7448, 11250], baseCost: 6500 },
        hybrydowa: { uop: [7886, 10100], b2b: [7448, 11250], baseCost: 6825 },
        stacjonarna: { uop: [7886, 10100], b2b: [7448, 11250], baseCost: 7150 },
      },
      Mid: {
        zdalna: { uop: [10815, 15830], b2b: [12885, 21950], baseCost: 10759 },
        hybrydowa: {
          uop: [10815, 15830],
          b2b: [12885, 21950],
          baseCost: 11297,
        },
        stacjonarna: {
          uop: [10815, 15830],
          b2b: [12885, 21950],
          baseCost: 11835,
        },
      },
      Senior: {
        zdalna: { uop: [14982, 19996], b2b: [19800, 24560], baseCost: 14876 },
        hybrydowa: {
          uop: [14982, 19996],
          b2b: [19800, 24560],
          baseCost: 15620,
        },
        stacjonarna: {
          uop: [14982, 19996],
          b2b: [19800, 24560],
          baseCost: 16363,
        },
      },
    },
    'Mobile Developer': {
      Junior: {
        zdalna: { uop: [7000, 9800], b2b: [7830, 12275], baseCost: 7000 },
        hybrydowa: { uop: [7000, 9800], b2b: [7830, 12275], baseCost: 7350 },
        stacjonarna: { uop: [7000, 9800], b2b: [7830, 12275], baseCost: 7700 },
      },
      Mid: {
        zdalna: { uop: [12658, 18615], b2b: [15178, 20247], baseCost: 12506 },
        hybrydowa: {
          uop: [12658, 18615],
          b2b: [15178, 20247],
          baseCost: 13131,
        },
        stacjonarna: {
          uop: [12658, 18615],
          b2b: [15178, 20247],
          baseCost: 13756,
        },
      },
      Senior: {
        zdalna: { uop: [16083, 20740], b2b: [20315, 24984], baseCost: 14371 },
        hybrydowa: {
          uop: [16083, 20740],
          b2b: [20315, 24984],
          baseCost: 15090,
        },
        stacjonarna: {
          uop: [16083, 20740],
          b2b: [20315, 24984],
          baseCost: 15808,
        },
      },
    },
    'Tester manualny': {
      Junior: {
        zdalna: { uop: [5500, 7675], b2b: [6200, 8950], baseCost: 6500 },
        hybrydowa: { uop: [5500, 7675], b2b: [6200, 8950], baseCost: 6825 },
        stacjonarna: { uop: [5500, 7675], b2b: [6200, 8950], baseCost: 7150 },
      },
      Mid: {
        zdalna: { uop: [9040, 12686], b2b: [9345, 14985], baseCost: 9211 },
        hybrydowa: { uop: [9040, 12686], b2b: [9345, 14985], baseCost: 9672 },
        stacjonarna: {
          uop: [9040, 12686],
          b2b: [9345, 14985],
          baseCost: 10132,
        },
      },
      Senior: {
        zdalna: { uop: [12230, 17452], b2b: [15796, 18650], baseCost: 11222 },
        hybrydowa: {
          uop: [12230, 17452],
          b2b: [15796, 18650],
          baseCost: 11784,
        },
        stacjonarna: {
          uop: [12230, 17452],
          b2b: [15796, 18650],
          baseCost: 12345,
        },
      },
    },
    'Tester automatyzujacy': {
      Junior: {
        zdalna: { uop: [9705, 11955], b2b: [10345, 14215], baseCost: 8089 },
        hybrydowa: { uop: [9705, 11955], b2b: [10345, 14215], baseCost: 8493 },
        stacjonarna: {
          uop: [9705, 11955],
          b2b: [10345, 14215],
          baseCost: 8897,
        },
      },
      Mid: {
        zdalna: { uop: [13645, 18356], b2b: [14641, 20720], baseCost: 12630 },
        hybrydowa: {
          uop: [13645, 18356],
          b2b: [14641, 20720],
          baseCost: 13262,
        },
        stacjonarna: {
          uop: [13645, 18356],
          b2b: [14641, 20720],
          baseCost: 13893,
        },
      },
      Senior: {
        zdalna: { uop: [16518, 21740], b2b: [19575, 24381], baseCost: 15415 },
        hybrydowa: {
          uop: [16518, 21740],
          b2b: [19575, 24381],
          baseCost: 16186,
        },
        stacjonarna: {
          uop: [16518, 21740],
          b2b: [19575, 24381],
          baseCost: 16957,
        },
      },
    },
    'IT Administrator': {
      Junior: {
        zdalna: { uop: [6000, 9120], b2b: [9600, 12200], baseCost: 7000 },
        hybrydowa: { uop: [6000, 9120], b2b: [9600, 12200], baseCost: 7350 },
        stacjonarna: { uop: [6000, 9120], b2b: [9600, 12200], baseCost: 7700 },
      },
      Mid: {
        zdalna: { uop: [12200, 17680], b2b: [14980, 21350], baseCost: 11587 },
        hybrydowa: {
          uop: [12200, 17680],
          b2b: [14980, 21350],
          baseCost: 12166,
        },
        stacjonarna: {
          uop: [12200, 17680],
          b2b: [14980, 21350],
          baseCost: 12745,
        },
      },
      Senior: {
        zdalna: { uop: [15940, 21000], b2b: [19960, 26800], baseCost: 15694 },
        hybrydowa: {
          uop: [15940, 21000],
          b2b: [19960, 26800],
          baseCost: 16478,
        },
        stacjonarna: {
          uop: [15940, 21000],
          b2b: [19960, 26800],
          baseCost: 17263,
        },
      },
    },
    'DevOps Engineer': {
      Junior: {
        zdalna: { uop: [10825, 14625], b2b: [11850, 16542], baseCost: 9422 },
        hybrydowa: { uop: [10825, 14625], b2b: [11850, 16542], baseCost: 9893 },
        stacjonarna: {
          uop: [10825, 14625],
          b2b: [11850, 16542],
          baseCost: 10365,
        },
      },
      Mid: {
        zdalna: { uop: [13697, 19000], b2b: [19045, 25764], baseCost: 15501 },
        hybrydowa: {
          uop: [13697, 19000],
          b2b: [19045, 25764],
          baseCost: 16276,
        },
        stacjonarna: {
          uop: [13697, 19000],
          b2b: [19045, 25764],
          baseCost: 17051,
        },
      },
      Senior: {
        zdalna: { uop: [18280, 24700], b2b: [23265, 34585], baseCost: 20166 },
        hybrydowa: {
          uop: [18280, 24700],
          b2b: [23265, 34585],
          baseCost: 21174,
        },
        stacjonarna: {
          uop: [18280, 24700],
          b2b: [23265, 34585],
          baseCost: 22183,
        },
      },
    },
    'Security Engineer': {
      Junior: {
        zdalna: { uop: [10760, 12600], b2b: [11800, 17460], baseCost: 9209 },
        hybrydowa: { uop: [10760, 12600], b2b: [11800, 17460], baseCost: 9669 },
        stacjonarna: {
          uop: [10760, 12600],
          b2b: [11800, 17460],
          baseCost: 10129,
        },
      },
      Mid: {
        zdalna: { uop: [15430, 23220], b2b: [18976, 26100], baseCost: 14652 },
        hybrydowa: {
          uop: [15430, 23220],
          b2b: [18976, 26100],
          baseCost: 15385,
        },
        stacjonarna: {
          uop: [15430, 23220],
          b2b: [18976, 26100],
          baseCost: 16117,
        },
      },
      Senior: {
        zdalna: { uop: [19980, 28850], b2b: [24800, 35120], baseCost: 20391 },
        hybrydowa: {
          uop: [19980, 28850],
          b2b: [24800, 35120],
          baseCost: 21410,
        },
        stacjonarna: {
          uop: [19980, 28850],
          b2b: [24800, 35120],
          baseCost: 22430,
        },
      },
    },
    'SAP Consultant': {
      Junior: {
        zdalna: { uop: [9850, 14300], b2b: [13600, 17800], baseCost: 9721 },
        hybrydowa: { uop: [9850, 14300], b2b: [13600, 17800], baseCost: 10207 },
        stacjonarna: {
          uop: [9850, 14300],
          b2b: [13600, 17800],
          baseCost: 10693,
        },
      },
      Mid: {
        zdalna: { uop: [14630, 24480], b2b: [20420, 28925], baseCost: 15480 },
        hybrydowa: {
          uop: [14630, 24480],
          b2b: [20420, 28925],
          baseCost: 16254,
        },
        stacjonarna: {
          uop: [14630, 24480],
          b2b: [20420, 28925],
          baseCost: 17028,
        },
      },
      Senior: {
        zdalna: { uop: [19195, 30830], b2b: [27130, 36400], baseCost: 19872 },
        hybrydowa: {
          uop: [19195, 30830],
          b2b: [27130, 36400],
          baseCost: 20866,
        },
        stacjonarna: {
          uop: [19195, 30830],
          b2b: [27130, 36400],
          baseCost: 21859,
        },
      },
    },
    'ABAP Developer': {
      Junior: {
        zdalna: { uop: [11570, 14900], b2b: [13600, 18200], baseCost: 10197 },
        hybrydowa: {
          uop: [11570, 14900],
          b2b: [13600, 18200],
          baseCost: 10707,
        },
        stacjonarna: {
          uop: [11570, 14900],
          b2b: [13600, 18200],
          baseCost: 11217,
        },
      },
      Mid: {
        zdalna: { uop: [16840, 23770], b2b: [19100, 26750], baseCost: 15131 },
        hybrydowa: {
          uop: [16840, 23770],
          b2b: [19100, 26750],
          baseCost: 15887,
        },
        stacjonarna: {
          uop: [16840, 23770],
          b2b: [19100, 26750],
          baseCost: 16644,
        },
      },
      Senior: {
        zdalna: { uop: [21310, 26160], b2b: [24970, 29455], baseCost: 17832 },
        hybrydowa: {
          uop: [21310, 26160],
          b2b: [24970, 29455],
          baseCost: 18723,
        },
        stacjonarna: {
          uop: [21310, 26160],
          b2b: [24970, 29455],
          baseCost: 19615,
        },
      },
    },
    'Scrum Master': {
      Junior: {
        zdalna: { uop: [7000, 10500], b2b: [8000, 12600], baseCost: 7000 },
        hybrydowa: { uop: [7000, 10500], b2b: [8000, 12600], baseCost: 7350 },
        stacjonarna: { uop: [7000, 10500], b2b: [8000, 12600], baseCost: 7700 },
      },
      Mid: {
        zdalna: { uop: [13170, 16200], b2b: [16090, 20000], baseCost: 11456 },
        hybrydowa: {
          uop: [13170, 16200],
          b2b: [16090, 20000],
          baseCost: 12028,
        },
        stacjonarna: {
          uop: [13170, 16200],
          b2b: [16090, 20000],
          baseCost: 12601,
        },
      },
      Senior: {
        zdalna: { uop: [15970, 19110], b2b: [17360, 23740], baseCost: 14284 },
        hybrydowa: {
          uop: [15970, 19110],
          b2b: [17360, 23740],
          baseCost: 14998,
        },
        stacjonarna: {
          uop: [15970, 19110],
          b2b: [17360, 23740],
          baseCost: 15712,
        },
      },
    },
    'Product Owner': {
      Junior: {
        zdalna: { uop: [9500, 14130], b2b: [10400, 15680], baseCost: 8699 },
        hybrydowa: { uop: [9500, 14130], b2b: [10400, 15680], baseCost: 9134 },
        stacjonarna: {
          uop: [9500, 14130],
          b2b: [10400, 15680],
          baseCost: 9569,
        },
      },
      Mid: {
        zdalna: { uop: [13800, 17165], b2b: [17600, 22400], baseCost: 12419 },
        hybrydowa: {
          uop: [13800, 17165],
          b2b: [17600, 22400],
          baseCost: 13040,
        },
        stacjonarna: {
          uop: [13800, 17165],
          b2b: [17600, 22400],
          baseCost: 13661,
        },
      },
      Senior: {
        zdalna: { uop: [16750, 24300], b2b: [20800, 26400], baseCost: 16547 },
        hybrydowa: {
          uop: [16750, 24300],
          b2b: [20800, 26400],
          baseCost: 17374,
        },
        stacjonarna: {
          uop: [16750, 24300],
          b2b: [20800, 26400],
          baseCost: 18202,
        },
      },
    },
    'Analityk Biznesowy': {
      Junior: {
        zdalna: { uop: [7660, 10350], b2b: [9300, 13200], baseCost: 7089 },
        hybrydowa: { uop: [7660, 10350], b2b: [9300, 13200], baseCost: 7444 },
        stacjonarna: { uop: [7660, 10350], b2b: [9300, 13200], baseCost: 7798 },
      },
      Mid: {
        zdalna: { uop: [13770, 18380], b2b: [15800, 21600], baseCost: 12171 },
        hybrydowa: {
          uop: [13770, 18380],
          b2b: [15800, 21600],
          baseCost: 12780,
        },
        stacjonarna: {
          uop: [13770, 18380],
          b2b: [15800, 21600],
          baseCost: 13388,
        },
      },
      Senior: {
        zdalna: { uop: [17990, 21550], b2b: [21600, 25800], baseCost: 15215 },
        hybrydowa: {
          uop: [17990, 21550],
          b2b: [21600, 25800],
          baseCost: 15975,
        },
        stacjonarna: {
          uop: [17990, 21550],
          b2b: [21600, 25800],
          baseCost: 16736,
        },
      },
    },
    'Analityk Systemowy': {
      Junior: {
        zdalna: { uop: [8680, 11480], b2b: [9600, 13600], baseCost: 7588 },
        hybrydowa: { uop: [8680, 11480], b2b: [9600, 13600], baseCost: 7967 },
        stacjonarna: { uop: [8680, 11480], b2b: [9600, 13600], baseCost: 8347 },
      },
      Mid: {
        zdalna: { uop: [14870, 19580], b2b: [16800, 21900], baseCost: 12801 },
        hybrydowa: {
          uop: [14870, 19580],
          b2b: [16800, 21900],
          baseCost: 13441,
        },
        stacjonarna: {
          uop: [14870, 19580],
          b2b: [16800, 21900],
          baseCost: 14081,
        },
      },
      Senior: {
        zdalna: { uop: [19140, 25550], b2b: [22400, 26400], baseCost: 16361 },
        hybrydowa: {
          uop: [19140, 25550],
          b2b: [22400, 26400],
          baseCost: 17179,
        },
        stacjonarna: {
          uop: [19140, 25550],
          b2b: [22400, 26400],
          baseCost: 17997,
        },
      },
    },
    'Project Manager': {
      Junior: {
        zdalna: { uop: [7700, 10815], b2b: [9500, 13000], baseCost: 7178 },
        hybrydowa: { uop: [7700, 10815], b2b: [9500, 13000], baseCost: 7537 },
        stacjonarna: { uop: [7700, 10815], b2b: [9500, 13000], baseCost: 7895 },
      },
      Mid: {
        zdalna: { uop: [11650, 15630], b2b: [14640, 19250], baseCost: 10705 },
        hybrydowa: {
          uop: [11650, 15630],
          b2b: [14640, 19250],
          baseCost: 11240,
        },
        stacjonarna: {
          uop: [11650, 15630],
          b2b: [14640, 19250],
          baseCost: 11775,
        },
      },
      Senior: {
        zdalna: { uop: [16680, 22470], b2b: [19605, 24800], baseCost: 14622 },
        hybrydowa: {
          uop: [16680, 22470],
          b2b: [19605, 24800],
          baseCost: 15353,
        },
        stacjonarna: {
          uop: [16680, 22470],
          b2b: [19605, 24800],
          baseCost: 16084,
        },
      },
    },
    'Data Engineer': {
      Junior: {
        zdalna: { uop: [11650, 15100], b2b: [12800, 15200], baseCost: 9581 },
        hybrydowa: {
          uop: [11650, 15100],
          b2b: [12800, 15200],
          baseCost: 10060,
        },
        stacjonarna: {
          uop: [11650, 15100],
          b2b: [12800, 15200],
          baseCost: 10539,
        },
      },
      Mid: {
        zdalna: { uop: [18950, 25740], b2b: [24000, 30400], baseCost: 17341 },
        hybrydowa: {
          uop: [18950, 25740],
          b2b: [24000, 30400],
          baseCost: 18208,
        },
        stacjonarna: {
          uop: [18950, 25740],
          b2b: [24000, 30400],
          baseCost: 19075,
        },
      },
      Senior: {
        zdalna: { uop: [24850, 30770], b2b: [29600, 37600], baseCost: 21494 },
        hybrydowa: {
          uop: [24850, 30770],
          b2b: [29600, 37600],
          baseCost: 22568,
        },
        stacjonarna: {
          uop: [24850, 30770],
          b2b: [29600, 37600],
          baseCost: 23643,
        },
      },
    },
    'Solution Architect': {
      Junior: {
        zdalna: { uop: [18300, 22450], b2b: [19130, 23700], baseCost: 14627 },
        hybrydowa: {
          uop: [18300, 22450],
          b2b: [19130, 23700],
          baseCost: 15358,
        },
        stacjonarna: {
          uop: [18300, 22450],
          b2b: [19130, 23700],
          baseCost: 16089,
        },
      },
      Mid: {
        zdalna: { uop: [25700, 30850], b2b: [26800, 31650], baseCost: 20125 },
        hybrydowa: {
          uop: [25700, 30850],
          b2b: [26800, 31650],
          baseCost: 21131,
        },
        stacjonarna: {
          uop: [25700, 30850],
          b2b: [26800, 31650],
          baseCost: 22138,
        },
      },
      Senior: {
        zdalna: { uop: [28625, 35500], b2b: [29760, 39650], baseCost: 25038 },
        hybrydowa: {
          uop: [28625, 35500],
          b2b: [29760, 39650],
          baseCost: 26290,
        },
        stacjonarna: {
          uop: [28625, 35500],
          b2b: [29760, 39650],
          baseCost: 27542,
        },
      },
    },
  };

  const calculateSalary = useCallback(() => {
    if (!role || !experience || !workMode) {
      setResults(null);
      return;
    }

    const data = salaryData[role]?.[experience]?.[workMode];
    if (!data) return;

    // Use the baseCost directly as it already contains the correct recruitment cost for each work mode
    const recruitmentCost = data.baseCost;

    const calculatorData: CalculatorData = {
      role,
      experience,
      workMode,
      uopMin: data.uop[0],
      uopMax: data.uop[1],
      b2bMin: data.b2b[0],
      b2bMax: data.b2b[1],
      recruitmentCost,
    };

    setResults(calculatorData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, experience, workMode]);

  const handleSendInquiry = () => {
    setShowForm(true);
  };

  useEffect(() => {
    calculateSalary();
  }, [role, experience, workMode, calculateSalary]);

  if (showForm && results) {
    return (
      <section
        id="calculator"
        className="py-16"
        style={{ backgroundColor: '#f9fafb' }}
      >
        <ContactForm
          calculatorData={results}
          onBack={() => setShowForm(false)}
        />
      </section>
    );
  }

  return (
    <section
      id="calculator"
      className="py-16"
      style={{
        backgroundColor:
          currentTheme.name === 'Theme Master 1.1' ? '#F2E9E4' : '#f9fafb',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card
            className="shadow-lg"
            style={{
              boxShadow: `0 10px 30px -10px ${currentTheme.colors.primaryBlue}30`,
              border: `1px solid ${currentTheme.colors.borderLight}`,
            }}
          >
            <CardHeader>
              <CardTitle
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
                style={{
                  color:
                    currentTheme.name === 'Theme Master 1.1'
                      ? '#2D3142'
                      : currentTheme.colors.textPrimary,
                }}
              >
                Kalkulator procesu rekrutacyjnego
              </CardTitle>
              <p
                className="text-center text-base sm:text-lg lg:text-xl mt-2"
                style={{
                  color:
                    currentTheme.name === 'Theme Master 1.1'
                      ? '#4F5D75'
                      : currentTheme.colors.textSecondary,
                }}
              >
                Sprawdź aktualne stawki dla specjalistów IT w Polsce oraz koszt
                rekrutacji.
                <br />
                Dane oparte na naszym doświadczeniu i obecnych trendach
                rynkowych.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label
                    className="block text-base font-medium mb-2"
                    style={{
                      color:
                        currentTheme.name === 'Theme Master 1.1'
                          ? '#2D3142'
                          : currentTheme.colors.textPrimary,
                    }}
                  >
                    Rola
                  </label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz rolę" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Java Developer">
                        Java Developer
                      </SelectItem>
                      <SelectItem value=".NET Developer">
                        .NET Developer
                      </SelectItem>
                      <SelectItem value="PHP Developer">
                        PHP Developer
                      </SelectItem>
                      <SelectItem value="Python Developer">
                        Python Developer
                      </SelectItem>
                      <SelectItem value="C++ Developer">
                        C++ Developer
                      </SelectItem>
                      <SelectItem value="Node.js Developer">
                        Node.js Developer
                      </SelectItem>
                      <SelectItem value="Golang Developer">
                        Golang Developer
                      </SelectItem>
                      <SelectItem value="Full Stack Developer">
                        Full Stack Developer
                      </SelectItem>
                      <SelectItem value="Frontend Developer">
                        Frontend Developer
                      </SelectItem>
                      <SelectItem value="Mobile Developer">
                        Mobile Developer
                      </SelectItem>
                      <SelectItem value="Tester manualny">
                        Tester manualny
                      </SelectItem>
                      <SelectItem value="Tester automatyzujacy">
                        Tester automatyzujacy
                      </SelectItem>
                      <SelectItem value="IT Administrator">
                        IT Administrator
                      </SelectItem>
                      <SelectItem value="DevOps Engineer">
                        DevOps Engineer
                      </SelectItem>
                      <SelectItem value="Security Engineer">
                        Security Engineer
                      </SelectItem>
                      <SelectItem value="SAP Consultant">
                        SAP Consultant
                      </SelectItem>
                      <SelectItem value="ABAP Developer">
                        ABAP Developer
                      </SelectItem>
                      <SelectItem value="Scrum Master">Scrum Master</SelectItem>
                      <SelectItem value="Product Owner">
                        Product Owner
                      </SelectItem>
                      <SelectItem value="Analityk Biznesowy">
                        Analityk Biznesowy
                      </SelectItem>
                      <SelectItem value="Analityk Systemowy">
                        Analityk Systemowy
                      </SelectItem>
                      <SelectItem value="Project Manager">
                        Project Manager
                      </SelectItem>
                      <SelectItem value="Data Engineer">
                        Data Engineer
                      </SelectItem>
                      <SelectItem value="Solution Architect">
                        Solution Architect
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    className="block text-base font-medium mb-2"
                    style={{
                      color:
                        currentTheme.name === 'Theme Master 1.1'
                          ? '#2D3142'
                          : currentTheme.colors.textPrimary,
                    }}
                  >
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
                  <label
                    className="block text-base font-medium mb-2"
                    style={{
                      color:
                        currentTheme.name === 'Theme Master 1.1'
                          ? '#2D3142'
                          : currentTheme.colors.textPrimary,
                    }}
                  >
                    Tryb pracy
                  </label>
                  <Select value={workMode} onValueChange={setWorkMode}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz tryb" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zdalna">Praca zdalna</SelectItem>
                      <SelectItem value="hybrydowa">Praca hybrydowa</SelectItem>
                      <SelectItem value="stacjonarna">
                        Praca stacjonarna
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {results && (
                <div className="mt-8 animate-fade-in">
                  <div
                    className="rounded-lg p-6 text-white"
                    style={{
                      background:
                        currentTheme.name === 'Theme Master 1.1'
                          ? 'linear-gradient(135deg, #2D3142 0%, #1a1a2e 100%)'
                          : `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.primaryBlueDark} 100%)`,
                    }}
                  >
                    <h3
                      className="text-2xl font-semibold mb-6 text-center"
                      style={{
                        color:
                          currentTheme.name === 'Theme Master 1.1'
                            ? '#FFFFFF'
                            : 'inherit',
                      }}
                    >
                      Wyniki dla: {results.role} • {results.experience} •{' '}
                      {results.workMode}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4
                          className="text-lg font-semibold mb-3"
                          style={{
                            color:
                              currentTheme.name === 'Theme Master 1.1'
                                ? '#FFFFFF'
                                : 'inherit',
                          }}
                        >
                          Umowa o pracę (UoP)
                        </h4>
                        <div
                          className="text-2xl font-bold"
                          style={{
                            color:
                              currentTheme.name === 'Theme Master 1.1'
                                ? '#3C6E71'
                                : currentTheme.colors.accentOrange,
                          }}
                        >
                          {results.uopMin
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                          -{' '}
                          {results.uopMax
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                          PLN
                        </div>
                        <div className="text-sm opacity-80">
                          brutto miesięcznie
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <h4
                          className="text-lg font-semibold mb-3"
                          style={{
                            color:
                              currentTheme.name === 'Theme Master 1.1'
                                ? '#FFFFFF'
                                : 'inherit',
                          }}
                        >
                          Kontrakt B2B
                        </h4>
                        <div
                          className="text-2xl font-bold"
                          style={{
                            color:
                              currentTheme.name === 'Theme Master 1.1'
                                ? '#3C6E71'
                                : currentTheme.colors.accentOrange,
                          }}
                        >
                          {results.b2bMin
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                          -{' '}
                          {results.b2bMax
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                          PLN
                        </div>
                        <div className="text-sm opacity-80">
                          netto miesięcznie
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 mb-6">
                      <h4
                        className="text-lg font-semibold mb-3"
                        style={{
                          color:
                            currentTheme.name === 'Theme Master 1.1'
                              ? '#FFFFFF'
                              : 'inherit',
                        }}
                      >
                        Koszt procesu rekrutacji
                      </h4>
                      <div
                        className="text-2xl font-bold"
                        style={{
                          color:
                            currentTheme.name === 'Theme Master 1.1'
                              ? '#3C6E71'
                              : currentTheme.colors.accentOrange,
                        }}
                      >
                        {results.recruitmentCost.toLocaleString()} PLN
                      </div>
                      <div className="text-sm opacity-80">
                        Obejmuje całość procesu: sourcing, weryfikację, wywiad,
                        referencje, gwarancję
                      </div>
                    </div>

                    <div className="text-center">
                      <Button
                        onClick={handleSendInquiry}
                        size="lg"
                        className="shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base hover:scale-105 text-white"
                        style={{
                          backgroundColor:
                            currentTheme.name === 'Theme Master 1.1'
                              ? '#3C6E71'
                              : currentTheme.colors.accentOrange,
                          border: 'none',
                        }}
                      >
                        Wyślij zapytanie
                      </Button>
                    </div>

                    {/* Role Description Section */}
                    <div className="mt-6">
                      <h4
                        className="text-lg font-semibold mb-3 text-center"
                        style={{
                          color:
                            currentTheme.name === 'Theme Master 1.1'
                              ? '#9A8C98'
                              : 'inherit',
                        }}
                      >
                        Opis stanowiska
                      </h4>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p
                          className="text-sm leading-relaxed opacity-90"
                          style={{
                            color:
                              currentTheme.name === 'Theme Master 1.1'
                                ? '#9A8C98'
                                : 'inherit',
                          }}
                        >
                          {results.role === 'Java Developer' &&
                            'Specjalizuje się w budowaniu zaawansowanego oprogramowania back-endowego i systemów rozproszonych w ekosystemie Java. Kluczowe technologie to Java SE/EE, Spring (Boot, MVC, Security, Data), Hibernate, JPA, Maven/Gradle, REST API, SOAP, Docker oraz bazy relacyjne (MySQL, PostgreSQL, Oracle). Java Developerzy często angażują się w projekty mikroserwisowe, integracje zewnętrzne, optymalizację wydajności oraz testy jednostkowe (JUnit, Mockito). Pracują w metodykach Agile/Scrum i często korzystają z narzędzi CI/CD (Jenkins, GitLab CI).'}
                          {results.role === '.NET Developer' &&
                            'Tworzy aplikacje webowe, desktopowe lub mobilne wykorzystując platformę Microsoft .NET. Kluczowe technologie to C#, ASP.NET MVC/Core, Entity Framework, LINQ, Blazor, Razor, MS SQL Server, Azure DevOps, REST API. .NET Developerzy odpowiadają za rozwój oprogramowania w środowiskach chmurowych Microsoft Azure, migracje ze starszych wersji frameworka, integracje systemów, optymalizację wydajności oraz wsparcie techniczne. Ważna jest znajomość narzędzi do automatyzacji testów i wdrożeń oraz dobre praktyki pisania czytelnego, skalowalnego kodu.'}
                          {results.role === 'PHP Developer' &&
                            'Programista aplikacji internetowych odpowiadający za rozwój serwisów, portali i systemów e-commerce bazujących na PHP. Wiodące technologie: PHP 7/8, frameworki Laravel, Symfony, Zend; systemy zarządzania treścią (WordPress, Drupal); bazy MySQL/MariaDB; narzędzia do testowania (PHPUnit), API Restful, Composer, Docker. PHP Developer integruje systemy zewnętrzne, zarządza wdrożeniami na serwery Linux i optymalizuje działanie aplikacji. Znajomość JavaScript i narzędzi frontendowych jest dużym atutem.'}
                          {results.role === 'Python Developer' &&
                            'Specjalista od programowania i automatyzacji procesów biznesowych w Pythonie. Pracuje z frameworkami Django i Flask (aplikacje webowe), FastAPI/Aiohttp (REST API), wykorzystuje biblioteki do analityki danych (NumPy, Pandas, scikit-learn), a także do uczenia maszynowego (TensorFlow, PyTorch). Często wdraża rozwiązania chmurowe (AWS Lambda, Azure Functions), automatyzuje operacje (skrypty, web scraping) oraz dba o jakość kodu stosując testy jednostkowe i integracyjne (pytest). Kluczowa jest znajomość pracy z repozytoriami Git oraz systemami CI/CD.'}
                          {results.role === 'C++ Developer' &&
                            "Programista pracujący na pograniczu software'u i hardware'u. Główne technologie to język C++11/17/20, biblioteki STL, Boost, framework Qt (aplikacje graficzne), narzędzia do programowania systemów embedded i mikrokontrolerów, programowanie wielowątkowe, optymalizacja algorytmów i zarządzanie pamięcią. C++ Developerzy często tworzą oprogramowanie dla branż automotive, telekomunikacyjnej, gier, fintech czy systemów IoT. Bardzo ważna znajomość wzorców projektowych i doświadczenie w debugowaniu złożonych systemów."}
                          {results.role === 'Node.js Developer' &&
                            "Specjalizuje się w budowie nowoczesnych i skalowalnych back-endów oraz API w JavaScript/TypeScript z użyciem Node.js, Express.js, Koa.js. Pracuje z bazami NoSQL (MongoDB, Redis) oraz SQL, implementuje autoryzację (JWT, OAuth2), cache'owanie i rozwiązania asynchroniczne. Node.js Developerzy stosują podejście serverless (AWS Lambda), piszą testy (Mocha, Jest), budują systemy realtime (WebSocket, Socket.io) oraz korzystają z Docker/Kubernetes przy wdrażaniu rozwiązań w chmurze."}
                          {results.role === 'Golang Developer' &&
                            'Tworzy wydajne, odporne i łatwe w utrzymaniu systemy w języku Go (Golang). Specjalizuje się w rozwiązaniach mikroserwisowych, systemach rozproszonych, narzędziach DevOps i platformach chmurowych (Kubernetes, Docker, AWS/GCP). Golang Developer często programuje API (gRPC, REST), korzysta z narzędzi testujących (Go test), dba o wysoką wydajność i bezpieczeństwo kodu. Atutem jest znajomość wzorców projektowych i architektur event-driven.'}
                          {results.role === 'Full Stack Developer' &&
                            'Łączy kompetencje programisty backend i frontend. Technologie backendowe: Node.js, Java Spring, .NET, Python; frontendowe: JavaScript, TypeScript, React, Angular, Vue.js, HTML5, CSS3. Zna bazy danych (SQL i NoSQL), technologie chmurowe, narzędzia CI/CD. Full Stack Developer odpowiada za całość procesu wytwarzania aplikacji – od interfejsu użytkownika po wdrażanie mikroserwisów i integracje zewnętrzne. Ważna jest umiejętność pracy ze wzorcami projektowymi i szybka adaptacja do zmian technologicznych.'}
                          {results.role === 'Frontend Developer' &&
                            'Tworzy nowoczesne i responsywne interfejsy użytkownika przy użyciu HTML5, CSS3, SASS/LESS, JavaScript/TypeScript, frameworków React, Angular lub Vue.js. Implementuje testy jednostkowe (Jest, Mocha), buduje aplikacje Progressive Web Apps, optymalizuje wydajność ładowania stron i zarządza stanem aplikacji (Redux, NgRx). Często pracuje z API REST/GraphQL oraz narzędziami deweloperskimi (Webpack, Git). Frontend Developer dba o UX/UI i dostępność cyfrową (WCAG).'}
                          {results.role === 'Mobile Developer' &&
                            'Odpowiada za projektowanie, budowę i wdrażanie aplikacji mobilnych na platformy Android (Kotlin, Java), iOS (Swift, Objective-C) oraz wieloplatformowe (Flutter, React Native). Zna architektury MVVM/MVC, biblioteki do zarządzania siecią i bazami mobilnymi (Room, CoreData), umie integrować aplikacje z API zewnętrznymi, wdrażać powiadomienia push oraz testować aplikacje (Espresso, XCTest).'}
                          {results.role === 'Tester manualny' &&
                            'Manual Tester odpowiada za przygotowanie, przeprowadzanie i dokumentowanie testów funkcjonalnych oraz użyteczności nowych rozwiązań IT. Współpracuje z zespołem developerskim, tworzy scenariusze i przypadki testowe, raportuje błędy (Jira, TestRail), analizuje wyniki testów i usprawnia proces zapewnienia jakości. Musi znać metodyki testowania, cykl życia projektu oraz dobrze rozumieć specyfikację produktu.'}
                          {results.role === 'Tester automatyzujacy' &&
                            'Tester automatyzujący projektuje i implementuje testy automatyczne dla aplikacji webowych i mobilnych. Kluczowe technologie to Selenium, Cypress, Playwright, JUnit, TestNG, REST Assured, Postman. Buduje frameworki testowe, integruje testy z CI/CD, analizuje raporty testów i współpracuje z developerami. Dba o pokrycie testami krytycznych ścieżek biznesowych i utrzymanie wysokiej jakości kodu testowego.'}
                          {results.role === 'IT Administrator' &&
                            'Zarządza infrastrukturą IT wewnątrz organizacji – serwerami (Linux/Windows Server), sieciami LAN/WAN, systemami wirtualizacji (VMware, Hyper-V), backupem i bezpieczeństwem. IT Administrator monitoruje systemy (Nagios, Zabbix), konfiguruje usługi (Active Directory, DHCP, DNS), wdraża polityki bezpieczeństwa oraz wspiera użytkowników (Helpdesk, ticketing). Kluczowa jest szybka diagnostyka usterek i umiejętność automatyzacji powtarzalnych zadań (Bash, PowerShell).'}
                          {results.role === 'DevOps Engineer' &&
                            "DevOps wspiera automatyzację procesów wdrożeniowych i rozwój infrastruktury. Kluczowe narzędzia to Docker, Kubernetes, Terraform, Ansible, Jenkins, GitLab CI/CD, AWS/Azure/GCP. Odpowiada za budowę środowisk testowych i produkcyjnych, monitorowanie (Prometheus, Grafana), bezpieczeństwo pipeline'ów, optymalizację kosztów i czasów wdrożeń oraz utrzymywanie wysokiej dostępności systemów."}
                          {results.role === 'Security Engineer' &&
                            'Specjalista ds. cyberbezpieczeństwa. Wdraża i monitoruje rozwiązania firewall, IDS/IPS, SIEM; przeprowadza testy penetracyjne, audyty bezpieczeństwa i szkolenia użytkowników. Pracuje z narzędziami do wykrywania zagrożeń, szyfrowania danych, wdrażania polityk bezpieczeństwa IT oraz reaguje na incydenty. Kluczowe są aktualna wiedza o zagrożeniach, praktyka w hardeningu systemów i znajomość norm bezpieczeństwa (ISO 27001).'}
                          {results.role === 'SAP Consultant' &&
                            'Konsultant wdrażający oraz optymalizujący systemy SAP w firmie. Specjalizuje się w modułach SAP (FI/CO, MM/SD, HR, PP), zna język ABAP oraz potrafi analizować i mapować procesy biznesowe pod wymagania korporacyjne. SAP Consultant odpowiada za konfigurację systemu, szkolenia użytkowników, wsparcie w migracjach oraz integrację z innymi systemami ERP.'}
                          {results.role === 'ABAP Developer' &&
                            'Programista tworzący rozszerzenia, raporty i integracje na platformie SAP przy użyciu języka ABAP i narzędzi SAP NetWeaver, SAPUI5, OData, BAPI, BADI. Odpowiada za automatyzację procesów w środowisku SAP, implementację nowych funkcjonalności i wsparcie techniczne użytkowników biznesowych.'}
                          {results.role === 'Scrum Master' &&
                            'Osoba dbająca o efektywne wdrażanie procesu Scrum oraz o właściwą współpracę zespołu deweloperskiego. Organizuje Sprinty, Daily Stand-up, Review i Retrospectives, usuwa przeszkody, wspiera przejrzystą komunikację oraz pilnuje realizacji celów Sprintu. Współpracuje z Product Ownerem i promuje kulturę ciągłego doskonalenia.'}
                          {results.role === 'Product Owner' &&
                            'Właściciel produktu IT, definiujący wizję oprogramowania oraz zarządzający backlogiem. Współpracuje z zespołem developerskim, biznesem i interesariuszami. Odpowiada za priorytetyzację zadań, analizę wymagań, sprawdzenie efektów pracy i rozwój produktu zgodnie z potrzebami rynku.'}
                          {results.role === 'Analityk Biznesowy' &&
                            'Łączy wiedzę biznesową i technologiczną, prowadzi analizy wymagań użytkowników, tworzy specyfikacje funkcjonalne, modeluje procesy (UML, BPMN), koordynuje komunikację między IT a biznesem, oraz wspiera wdrażanie nowych rozwiązań IT zapewniając ich zgodność z celami organizacyjnymi.'}
                          {results.role === 'Analityk Systemowy' &&
                            'Odgrywa kluczową rolę w analizie systemów informatycznych – buduje diagramy ERD, analizuje wymagania techniczne i architekturę rozwiązań, dba o jakość dokumentacji. Często współpracuje bezpośrednio z developerami, architektami i klientem biznesowym.'}
                          {results.role === 'Project Manager' &&
                            'Projektuje i prowadzi cykl życia projektów IT – planuje, koordynuje, monitoruje zadania, zarządza zespołem i komunikacją. Wykorzystuje metodyki project managementu (Agile, Scrum, PMI, Prince2), narzędzia do raportowania (Jira, MS Project, Asana), pilnuje budżetu, zakresu i terminów realizacji. Zarządza ryzykiem i motywuje zespół do osiągania wspólnych celów.'}
                          {results.role === 'Data Engineer' &&
                            'Specjalista budujący i utrzymujący infrastrukturę danych: projektuje i realizuje procesy ETL, buduje hurtownie danych i systemy analityczne. Pracuje z dużymi zbiorami danych, dba o ich jakość i bezpieczeństwo. Kluczowe technologie: Python, SQL, Scala, Apache Spark, Hadoop, Kafka, Airflow, PostgreSQL, MongoDB, AWS (S3, Glue), Azure, GCP, Docker, Terraform.'}
                          {results.role === 'Solution Architect' &&
                            'Projektuje kompleksowe rozwiązania IT zgodne z wymaganiami biznesowymi. Dobiera technologie, integruje systemy, nadzoruje wdrożenia i zapewnia skalowalność oraz bezpieczeństwo rozwiązań. Kluczowe technologie i kompetencje: TOGAF, UML, AWS, Azure, GCP, Docker, Kubernetes, REST/SOAP API, mikroserwisy, bazy relacyjne i NoSQL, bezpieczeństwo, dokumentacja techniczna i współpraca z zespołami.'}
                          {!results.role &&
                            'Wybierz rolę, aby zobaczyć szczegółowy opis stanowiska i wymagania.'}
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
