import { Theme } from '@radix-ui/themes';
import type { Config } from 'tailwindcss'
import { radixThemePreset } from 'radix-themes-tw';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontWeight:{
        thin:"100"
      }
    },
  },
  plugins: [],
  presets: [radixThemePreset],
}
export default config
