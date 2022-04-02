import React, { useMemo } from 'react';
import { StyleSheet, ViewProps, ScrollView, ViewStyle, StyleProp } from 'react-native';

import { SafeAreaView, Edge } from 'src/hooks/use-safe-area';
import { ChildrenType } from 'src/types/components';
import { useBreakpoint, useTheme } from 'src/utils/themes';

import View from './native/view';

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: { flex: 1 },
  scroll: { flexGrow: 1 },
  scrollInner: {
    marginHorizontal: 10,
    flexGrow: 1,
  },
});

interface IContainerProps extends ViewProps {
  children: ChildrenType | ChildrenType[];
  noHeader?: boolean;
  edges?: Edge[];
  disableAutoWidthLimit?: boolean;
  innerStyle?: StyleProp<ViewStyle>;
}

const Container: React.FC<IContainerProps> = ({
  style,
  children,
  noHeader,
  disableAutoWidthLimit,
  edges = noHeader ? ['left', 'right', 'top'] : ['left', 'right'],
  ...props
}) => {
  const { colors } = useTheme();
  const { isPhone, breakpoint } = useBreakpoint();

  const calcStyles: StyleProp<ViewStyle> = useMemo(
    () => ({
      backgroundColor: colors.background,
      maxWidth: disableAutoWidthLimit || isPhone ? undefined : breakpoint.width,
    }),
    [breakpoint.width, colors.background, isPhone, disableAutoWidthLimit],
  );

  return (
    <View style={styles.cover}>
      <SafeAreaView edges={edges} style={[styles.safeArea, calcStyles, style]} {...props}>
        <ScrollView
          style={[styles.scroll, style]}
          contentContainerStyle={styles.scrollInner}
          showsVerticalScrollIndicator={false}
          {...props}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Container;
