// eslint-disable-next-line import/no-extraneous-dependencies
// import { useNavigationState } from '@react-navigation/core';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { StyleSheet, ViewProps, ScrollView, ViewStyle, StyleProp } from 'react-native';

import { getSafeArea } from 'src/hooks/use-safe-area';
import { childrenType } from 'src/types/components';

const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },
  scrollInner: {
    marginHorizontal: 10,
    flexGrow: 1,
  },
});

interface IContainerProps extends ViewProps {
  children: childrenType | childrenType[];
  noHeader?: boolean;
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

  ...props
}) => {
  // const { themeContext, set } = useDefaultContext();
  const {
    padding: { paddingTop },
  } = getSafeArea();
  // const { t } = useTranslation();
  // const defTitle = useNavigationState(({ routeNames, index }) => t(`${routeNames[index].toLowerCase()}.title`));

  /* {!noHeader && (
    <Appbar.Header>
      {leftHeaderContent}
      <Appbar.Content title={title || defTitle} subtitle={subtitle} />
      {tightHeaderContent}
    </Appbar.Header>
  )} */

  return (
    <ScrollView
      style={[styles.scroll, style]}
      contentContainerStyle={[styles.scrollInner, { paddingTop: noHeader ? paddingTop : 10 }]}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default Container;
