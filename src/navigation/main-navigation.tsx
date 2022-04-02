import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Contact from 'src/screens/contact';
import Experience from 'src/screens/experience';
import Home from 'src/screens/home';
import Settings from 'src/screens/settings';
import { BottomTabNavigatorType, Routes } from 'src/types/navigation';
import DeviceUtils from 'src/utils/device';
import { useBreakpoint, useTheme } from 'src/utils/themes';

const Tab = createMaterialBottomTabNavigator<BottomTabNavigatorType>();
const Drawer = createDrawerNavigator<BottomTabNavigatorType>();

const MainNavigation: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const title = (text: string) => Platform.select({ web: `jr | ${text}`, default: text });

  const { isPhone } = useBreakpoint();

  type TabProps = { focused: boolean; color: string };

  const genIcon = useCallback(
    (name: string, focused: boolean) => (
      <Ionicons name={name} color={focused ? theme.colors.card : theme.colors.disabled} size={26} />
    ),
    [theme.colors.card, theme.colors.disabled],
  );

  const tabBarIconHome = useCallback(({ focused }: TabProps) => genIcon('home', focused), [genIcon]);
  const tabBarIconExperience = useCallback(({ focused }: TabProps) => genIcon('school', focused), [genIcon]);
  const tabBarIconContact = useCallback(({ focused }: TabProps) => genIcon('mail', focused), [genIcon]);
  const tabBarIconSettings = useCallback(({ focused }: TabProps) => genIcon('settings-sharp', focused), [genIcon]);

  const drawerOPtions: DrawerNavigationOptions = useMemo(() => {
    const drawerType = isPhone ? (DeviceUtils.isIos ? 'slide' : 'front') : 'permanent';

    return isPhone ? { drawerType } : { drawerType, headerLeft: () => undefined };
  }, [isPhone]);

  if (DeviceUtils.isIos) {
    return (
      <Tab.Navigator
      // activeColor={Colors.white}
      // inactiveColor={Colors.disable}
      // barStyle={{ backgroundColor: Colors.mainLight }}
      >
        <Tab.Screen
          name={Routes.Home}
          component={Home}
          options={{
            title: title(t('home.title')),
            tabBarLabel: t('home.title'),
            tabBarIcon: tabBarIconHome,
          }}
        />
        <Tab.Screen
          name={Routes.Experience}
          component={Experience}
          options={{
            title: title(t('experience.title')),
            tabBarLabel: t('experience.title'),
            tabBarIcon: tabBarIconExperience,
          }}
        />
        <Tab.Screen
          name={Routes.Contact}
          component={Contact}
          options={{
            title: title(t('contact.title')),
            tabBarLabel: t('contact.title'),
            tabBarIcon: tabBarIconContact,
          }}
        />
        <Tab.Screen
          name={Routes.Settings}
          component={Settings}
          options={{
            title: title(t('settings.title')),
            tabBarLabel: t('settings.title'),
            tabBarIcon: tabBarIconSettings,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Drawer.Navigator screenOptions={drawerOPtions}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: t('home.title'),
          headerTitle: t('home.title'),
          title: title(t('home.title')),
        }}
      />
      <Drawer.Screen
        name="Experience"
        component={Experience}
        options={{
          drawerLabel: t('experience.title'),
          headerTitle: t('experience.title'),
          title: title(t('experience.title')),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerLabel: t('contact.title'),
          headerTitle: t('contact.title'),
          title: title(t('contact.title')),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: t('settings.title'),
          headerTitle: t('settings.title'),
          title: title(t('settings.title')),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
