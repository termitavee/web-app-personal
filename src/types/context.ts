export type themeType = 'light' | 'dark';

export interface IContext {
  themeContext: themeType;
  set: {
    theme: (newTheme: themeType) => void;
  };
}
