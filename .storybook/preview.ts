export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  designToken: {
    defaultTab: 'Colors',
    styleInjection:
      '@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");'
  }
}
