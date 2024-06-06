module.exports = ({ env }) => ({
  plugins: {
    autoprefixer: {},
    "@unocss/postcss": {},
    "cssnano": env === "production" ? {} : false,
  },
});