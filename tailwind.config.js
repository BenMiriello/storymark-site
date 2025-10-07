/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-warm-white',
    'bg-warm-slate',
    'bg-warm-gray',
    'bg-slate-blue',
    'bg-coral',
    'text-warm-white',
    'text-warm-gray',
    'text-brown-black',
    'border-coral',
    'border-warm-slate',
    'hover:bg-coral',
    'hover:brightness-110',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#faf8f5',
        'warm-slate': '#e7e4df',
        'warm-gray': '#3d3d3a',
        'brown-black': '#2d2b28',
        'slate-blue': '#2d3e50',
        'coral': '#e07856',
      },
      maxWidth: {
        'text': '800px',
        'code': '1200px',
      },
    },
  },
  plugins: [],
}
