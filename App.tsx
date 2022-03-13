import React, { Suspense } from 'react';
import { Text } from 'react-native';

import Navigation from 'src/navigation/index';

const App: React.FC = () => (
  <Suspense fallback={<Text>Loading... </Text>}>
    <Navigation />
  </Suspense>
);

export default App;
