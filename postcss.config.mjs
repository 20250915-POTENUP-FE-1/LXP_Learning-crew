// postcss.config.mjs

export default {
  plugins: {
    // ⚠️ 'tailwindcss' 대신 '@tailwindcss/postcss'로 변경합니다.
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
};