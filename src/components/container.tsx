import React from 'react';
import { StyleSheet, ViewProps, ScrollView } from 'react-native';

import { childrenType } from 'src/types/components';

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  scroll: {
    marginHorizontal: 10,
  },
});

interface ICardProps extends ViewProps {
  children: childrenType | childrenType[];
}

const Container = ({ style, children, ...props }: ICardProps) => {
  // const { themeContext, set } = useDefaultContext();
  return (
    <ScrollView style={[styles.scroll]} {...props}>
      {children}
    </ScrollView>
  );
};

export default Container;
