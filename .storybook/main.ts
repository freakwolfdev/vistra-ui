import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Ensure Tailwind CSS is processed
    if (config.css) {
      config.css.postcss = {
        plugins: [],
      };
    }
    return config;
  },
};
export default config;
