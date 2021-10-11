import { ColorSchemeName } from 'react-native';

export type languageType = 'es' | 'en';

export interface IContext {
  themeContext: ColorSchemeName;
  set: {
    theme: (newTheme: ColorSchemeName) => void;
  };
}
