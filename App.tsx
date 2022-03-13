import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Appearance, ColorSchemeName } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';

import { darkTheme, lightTheme } from 'src/assets/themes';
import { ContextProvider } from 'src/hooks/use-context';
import { initialWindowMetrics, SafeAreaProvider } from 'src/hooks/use-safe-area';
import Navigation from 'src/navigation/tab-navigation';
import { useIsInit } from 'src/utils/translations';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 500,
    height: '100%',
  },
});

const App = () => {
  const [themeContext, setTheme] = useState<ColorSchemeName>(Appearance.getColorScheme());
  const [currentTheme, setCurrentTheme] = useState(Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme);
  const [loaded, setLoaded] = useState(false);
  const isI19nInitialized = useIsInit();
  const theme = (newTheme: ColorSchemeName) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme === 'light' ? lightTheme : darkTheme);
  };
  useEffect(() => {
    if (isI19nInitialized) setLoaded(true);
  }, [isI19nInitialized]);
  // linking={linking} ref={navigationRef}
  return (
    <ThemeProvider theme={currentTheme}>
      <ContextProvider value={{ themeContext, set: { theme } }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <ToastProvider>
            <NavigationContainer theme={currentTheme}>
              <View style={styles.container}>{loaded && <Navigation />}</View>
            </NavigationContainer>
          </ToastProvider>
        </SafeAreaProvider>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
