# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
Lab Overview
In this lab, you will create an interactive character counter application that demonstrates state management and event handling in React. The application will allow users to input text and see real-time statistics about their input, including character count, word count, and reading time. This lab focuses on state management, event handling, and component interaction using React hooks.

Workplace Context
Imagine you are a frontend developer working on a content management system. Your team needs a component that helps content writers track their progress while writing articles. The component should provide immediate feedback about the content length and estimated reading time, helping writers meet specific content requirements.

This lab will help you practice building interactive features that respond to user input in real-time, a common requirement in modern web applications.

Objectives
By the end of this lab, you will:

Implement state management using the useState hook.
Create and handle user events effectively.
Build components that update their UI based on state changes.
Implement the callback pattern for component communication.
Create a responsive and user-friendly interface.

Activity Tasks
Component Implementation:

Implement each component according to its interface requirements.
Use useState to manage text input and statistics.
Implement event handlers for text changes.
Calculate statistics in real-time.
State Management:

Track the current text input.
Calculate and update statistics when text changes.
Handle edge cases (empty input, very long text).
User Interface:

Create a responsive layout.
Show visual feedback for statistics.
Implement progress indicators for word count goals.
Component Communication:

Use callbacks to pass data between components.
Ensure proper prop typing.
Handle optional props appropriately.

Reflection Questions
How did you handle state updates when the text changed?
What considerations did you make when calculating reading time?
How did you ensure the UI remained responsive during rapid text input?
What challenges did you face when implementing the statistics calculations?