import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomTabs from './src/navigation/tab-navigation';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <BottomTabs />
      </View>
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
