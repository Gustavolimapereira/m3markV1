import { Roboto } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customColor: '#102129',
        customColorCircle: '#703619',
        customColorGreen: '#69E6A6',
        customColorCard: '#3b4950',
        customColorRed: '#FC5B00',
        customColorYellow: '#ECAA00',
        customColorDarkGreen: '#009D10',
        customColorBlue: '#0DBBFC',
        customColorWaterBlue: '#8FB6D5',
        customColorGray: '#95ABBC',
        CustomColorOrange: '#FF5500',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      width: {
        '1293': '1493px',
      },
      height: {
        '1293': '1493px',
      },
    },
  },
  plugins: [],
}
export default config
