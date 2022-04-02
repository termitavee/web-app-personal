import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';

import View from '../native/view';

const DrawerItemList = () => <View />;
// https://reactnavigation.org/docs/drawer-navigator/
const MainNavigationDrawer = props => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

export default MainNavigationDrawer;
