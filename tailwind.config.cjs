/** @type { import('tailwindcss').Config } */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    fontFamily: {
      'mono': ['DM Mono', 'Jetbrains Mono', 'Noto Sans TC', 'monospace'],
      'sans': ['Open Sans', 'Helvetica', 'Noto Sans TC', 'sans-serif'],
      'serif': ['Times New Roman', 'Source Han Serif', 'Noto Serif TC', 'serif'],
      // Custom
      'courier': ['Courier Prime', 'Courier New', 'Courier', 'monospace']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
