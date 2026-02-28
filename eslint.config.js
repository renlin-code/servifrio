import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'
import vuePlugin from 'eslint-plugin-vue'

const isProduction = process.env.NODE_ENV === 'production'

const sharedRules = {
  'no-console': isProduction ? 'error' : 'warn',
  'no-debugger': isProduction ? 'error' : 'warn',
  'no-unused-vars': 'warn',
  '@typescript-eslint/no-unused-vars': 'warn',
  'indent': ['warn', 2]
}

export default [
  {
    ignores: ['.nuxt', 'dist', 'node_modules', '.git', '*.d.ts']
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'vue': vuePlugin
    },
    rules: {
      ...sharedRules,
      'indent': 'off',
      'vue/html-indent': ['warn', 2],
      'vue/script-indent': ['warn', 2, { baseIndent: 0 }]
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: sharedRules
  }
]


