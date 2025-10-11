/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-white-main': '#ffffff',
        'background-gray-main': '#f7f8fa',
        'fill-tsp-white-main': '#ffffffe6',
        'fill-tsp-white-light': '#ffffffb3',
        'fill-tsp-gray-main': '#e5e7eb',
        'text-primary': '#272728',
        'text-tertiary': '#6b7280',
        'text-disable': '#9ca3af',
        'border-main': '#e5e7eb',
        'border-light': '#f3f4f6',
        'function-error': '#ef4444',
        'function-error-tsp': '#fef2f2',
        'function-warning': '#f59e0b',
        'function-warning-tsp': '#fff7ed',
        'button-primary-black': '#1a202c',
      },
      backdropBlur: {
        '80': '80px',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};