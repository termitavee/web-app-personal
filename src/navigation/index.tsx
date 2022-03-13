import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { StyleSheet, View, Appearance, ColorSchemeName } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';

import { darkTheme, lightTheme } from 'src/assets/themes';
import { ContextProvider } from 'src/hooks/use-context';
import { initialWindowMetrics, SafeAreaProvider } from 'src/hooks/use-safe-area';
import { UseIsInit } from 'src/utils/translations';

import Navigation from './tab-navigation';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 500,
    height: '100%',
  },
});

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
  // linking={linking} ref={navigationRef}
  return (
    <ThemeProvider theme={currentTheme}>
      <ContextProvider value={{ themeContext, set: { theme } }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ToastProvider>
            {loaded && (
              <NavigationContainer theme={currentTheme}>
                <Navigation />
              </NavigationContainer>
            )}
          </ToastProvider>
        </SafeAreaProvider>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
