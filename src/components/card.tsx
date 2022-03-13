import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';

import View from 'src/components/native/view';
import { childrenType } from 'src/types/components';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
  },
});

interface ICardProps extends ViewProps {
  children: childrenType;
}

const Card: React.FC<ICardProps> = ({ style, children, ...props }) => (
  <View backgroundColor="card" style={[styles.card, style]} {...props}>
    {children}
  </View>
);
export default Card;
