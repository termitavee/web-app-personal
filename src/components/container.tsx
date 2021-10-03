import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

import { childrenType } from 'src/types/components';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flex: 1,
  },
});

interface ICardProps extends ViewProps {
  children: childrenType;
}

const Container = ({ style, children, ...props }: ICardProps) => {
  // const { themeContext, set } = useDefaultContext();
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

export default Container;
