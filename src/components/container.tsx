// eslint-disable-next-line import/no-extraneous-dependencies
// import { useNavigationState } from '@react-navigation/core';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { StyleSheet, ViewProps, ScrollView, ViewStyle, StyleProp } from 'react-native';

import { useTheme } from 'src/assets/themes';
import { SafeAreaView, Edge } from 'src/hooks/use-safe-area';
import { childrenType } from 'src/types/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: { flexGrow: 1 },
  scrollInner: {
    marginHorizontal: 10,
    flexGrow: 1,
  },
});

interface IContainerProps extends ViewProps {
  children: childrenType | childrenType[];
  noHeader?: boolean;
  edges?: Edge[];

  // leftHeaderContent?: childrenType;
  // tightHeaderContent?: childrenType;
  // title?: string;
  // subtitle?: string;
  innerStyle?: StyleProp<ViewStyle>;
}

const Container: React.FC<IContainerProps> = ({
  style,
  children,
  noHeader,
  edges = noHeader ? ['left', 'right', 'top'] : ['left', 'right'],
  ...props
}) => {
  // const { themeContext, set } = useDefaultContext();

  const { colors } = useTheme();

  // const defTitle = useNavigationState(({ routeNames, index }) => t(`${routeNames[index].toLowerCase()}.title`));

  /* {!noHeader && (
    <Appbar.Header>
      {leftHeaderContent}
      <Appbar.Content title={title || defTitle} subtitle={subtitle} />
      {tightHeaderContent}
    </Appbar.Header>
  )} */
  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
        style,
      ]}
      {...props}
    >
      <ScrollView
        style={[styles.scroll, style]}
        contentContainerStyle={styles.scrollInner}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;
