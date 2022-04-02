import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';

import { ContextProvider } from 'src/hooks/use-context';
import { initialWindowMetrics, SafeAreaProvider } from 'src/hooks/use-safe-area';
import { LinkingType, Routes } from 'src/types/navigation';
import { darkTheme, lightTheme } from 'src/utils/themes';
import { UseIsInit } from 'src/utils/translations';

import MainNavigation from './main-navigation';

const App: React.FC = () => {
  const [themeContext, setTheme] = React.useState<ColorSchemeName>(Appearance.getColorScheme());
  const [currentTheme, setCurrentTheme] = React.useState(
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );
  const [loaded, setLoaded] = React.useState(false);
  const isI19nInitialized = UseIsInit();
  const theme = (newTheme: ColorSchemeName) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme === 'light' ? lightTheme : darkTheme);
  };

  React.useEffect(() => {
    if (isI19nInitialized) setLoaded(true);
  }, [isI19nInitialized]);

  const linking: LinkingOptions<LinkingType> = {
    prefixes: ['https://jrdominguez.dev/'],
    config: {
      screens: {
        [Routes.Home]: 'Home',
        [Routes.Experience]: 'Experience',
        [Routes.Contact]: 'Contact',
        [Routes.Settings]: 'Settings',
      },
    },
  };

  // linking={linking} ref={navigationRef}
  return (
    <ThemeProvider theme={currentTheme}>
      <ContextProvider value={{ themeContext, set: { theme } }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ToastProvider>
            {loaded && (
              <NavigationContainer linking={linking} theme={currentTheme}>
                <MainNavigation />
              </NavigationContainer>
            )}
          </ToastProvider>
        </SafeAreaProvider>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
