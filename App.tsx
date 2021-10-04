import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { darkTheme, lightTheme } from 'src/assets/themes';
import { ContextProvider } from 'src/hooks/use-context';
import Navigation from 'src/navigation/tab-navigation';
import { themeType } from 'src/types/context';
import TranslationUtils from 'src/utils/translations';

export default function App() {
  const [themeContext, setTheme] = useState<themeType>('light');
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [loaded, setLoaded] = useState(false);

  const theme = (newTheme: themeType) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme === 'light' ? lightTheme : darkTheme);
  };
  useEffect(() => {
    if (TranslationUtils.i18n.isInitialized) setLoaded(true);
  }, [TranslationUtils.i18n.isInitialized]);

  return (
    <PaperProvider theme={currentTheme}>
      <ContextProvider value={{ themeContext, set: { theme } }}>
        <View style={styles.container}>
          {console.log('i18n', TranslationUtils.i18n)}

          {loaded && <Navigation />}
        </View>
      </ContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 500,
    height: '100%',
  },
});
