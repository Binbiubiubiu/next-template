module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    require('postcss-preset-env')({ stage: 1 }),
    process.env.NODE_ENV === 'production' ? require('cssnano') : undefined,
  ],
};
