import React from 'react';
import { colors } from '../lib/colors';

interface ColorSwatchProps {
  name: string;
  color: string;
  hexCode: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, color, hexCode }) => (
  <div className="flex items-center space-x-3 p-3 border rounded-lg">
    <div 
      className="w-12 h-12 rounded-lg border-2 border-gray-200"
      style={{ backgroundColor: color }}
    />
    <div>
      <div className="font-medium text-sm">{name}</div>
      <div className="text-xs text-gray-500 font-mono">{hexCode}</div>
    </div>
  </div>
);

const ColorPalette: React.FC = () => {
  const colorGroups = [
    {
      title: 'Primary Brand Colors',
      colors: [
        { name: 'Primary Blue', color: colors.primaryBlue, hexCode: colors.primaryBlue },
        { name: 'Primary Blue Dark', color: colors.primaryBlueDark, hexCode: colors.primaryBlueDark },
        { name: 'Primary Blue Light', color: colors.primaryBlueLight, hexCode: colors.primaryBlueLight },
      ]
    },
    {
      title: 'Secondary Colors',
      colors: [
        { name: 'Secondary Gray', color: colors.secondaryGray, hexCode: colors.secondaryGray },
        { name: 'Secondary Gray Light', color: colors.secondaryGrayLight, hexCode: colors.secondaryGrayLight },
        { name: 'Secondary Gray Dark', color: colors.secondaryGrayDark, hexCode: colors.secondaryGrayDark },
      ]
    },
    {
      title: 'Neutral Grays',
      colors: [
        { name: 'Gray 50', color: colors.gray50, hexCode: colors.gray50 },
        { name: 'Gray 100', color: colors.gray100, hexCode: colors.gray100 },
        { name: 'Gray 200', color: colors.gray200, hexCode: colors.gray200 },
        { name: 'Gray 300', color: colors.gray300, hexCode: colors.gray300 },
        { name: 'Gray 400', color: colors.gray400, hexCode: colors.gray400 },
        { name: 'Gray 500', color: colors.gray500, hexCode: colors.gray500 },
        { name: 'Gray 600', color: colors.gray600, hexCode: colors.gray600 },
        { name: 'Gray 700', color: colors.gray700, hexCode: colors.gray700 },
        { name: 'Gray 800', color: colors.gray800, hexCode: colors.gray800 },
        { name: 'Gray 900', color: colors.gray900, hexCode: colors.gray900 },
      ]
    },
    {
      title: 'Accent Colors',
      colors: [
        { name: 'Accent Green', color: colors.accentGreen, hexCode: colors.accentGreen },
        { name: 'Accent Green Light', color: colors.accentGreenLight, hexCode: colors.accentGreenLight },
        { name: 'Accent Orange', color: colors.accentOrange, hexCode: colors.accentOrange },
        { name: 'Accent Orange Light', color: colors.accentOrangeLight, hexCode: colors.accentOrangeLight },
        { name: 'Accent Red', color: colors.accentRed, hexCode: colors.accentRed },
        { name: 'Accent Red Light', color: colors.accentRedLight, hexCode: colors.accentRedLight },
      ]
    },
    {
      title: 'Status Colors',
      colors: [
        { name: 'Success', color: colors.success, hexCode: colors.success },
        { name: 'Warning', color: colors.warning, hexCode: colors.warning },
        { name: 'Error', color: colors.error, hexCode: colors.error },
        { name: 'Info', color: colors.info, hexCode: colors.info },
      ]
    },
    {
      title: 'Text Colors',
      colors: [
        { name: 'Text Primary', color: colors.textPrimary, hexCode: colors.textPrimary },
        { name: 'Text Secondary', color: colors.textSecondary, hexCode: colors.textSecondary },
        { name: 'Text Tertiary', color: colors.textTertiary, hexCode: colors.textTertiary },
        { name: 'Text Light', color: colors.textLight, hexCode: colors.textLight },
        { name: 'Text Muted', color: colors.textMuted, hexCode: colors.textMuted },
      ]
    }
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.textPrimary }}>
        Color Palette
      </h1>
      
      <div className="space-y-8">
        {colorGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xl font-semibold mb-4" style={{ color: colors.textSecondary }}>
              {group.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.colors.map((colorItem) => (
                <ColorSwatch
                  key={colorItem.name}
                  name={colorItem.name}
                  color={colorItem.color}
                  hexCode={colorItem.hexCode}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Usage Examples:</h3>
        <div className="space-y-2 text-sm">
          <p><code>import {`{ colors }`} from '../lib/colors';</code></p>
          <p><code>style={{`{ backgroundColor: colors.primaryBlue }`}}</code></p>
          <p><code>className="text-primary"</code> (using CSS variables)</p>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette; 