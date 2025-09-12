export default {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // kosong dulu aja, nanti bisa ditambah
  },
}
