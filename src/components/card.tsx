import React from 'react';
import { StyleSheet } from 'react-native';

import View, { ViewProps } from 'src/components/native/view';
import { ChildrenType } from 'src/types/components';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
  },
});

interface ICardProps extends ViewProps {
  children: ChildrenType;
}

const Card: React.FC<ICardProps> = ({ style, children, ...props }) => (
  <View backgroundColor="card" style={[styles.card, style]} {...props}>
    {children}
  </View>
);
export default Card;
