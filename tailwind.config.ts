// Tailwind <https://tailwindcss.com>

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
      'mono': ['Jetbrains Mono', 'Noto Sans TC', 'monospace'],
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'Sarasa Gothic TC', 'Noto Sans TC', 'sans-serif', 'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
