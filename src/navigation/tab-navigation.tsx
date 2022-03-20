import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from 'src/assets/themes';
import Contact from 'src/screens/contact';
import Experience from 'src/screens/experience';
import Home from 'src/screens/home';
import Settings from 'src/screens/settings';
import { BottomTabNavigatorType } from 'src/types/navigation';

const Tab = createMaterialBottomTabNavigator<BottomTabNavigatorType>();

const BottomTabs: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const title = (text: string) => Platform.select({ web: `jr | ${text}`, default: text });

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

  return (
    <Tab.Navigator
    // activeColor={Colors.white}
    // inactiveColor={Colors.disable}
    // barStyle={{ backgroundColor: Colors.mainLight }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: title(t('home.title')),
          tabBarLabel: t('home.title'),
          tabBarIcon: tabBarIconHome,
        }}
      />
      <Tab.Screen
        name="Experience"
        component={Experience}
        options={{
          title: title(t('experience.title')),
          tabBarLabel: t('experience.title'),
          tabBarIcon: tabBarIconExperience,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          title: title(t('contact.title')),
          tabBarLabel: t('contact.title'),
          tabBarIcon: tabBarIconContact,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: title(t('settings.title')),
          tabBarLabel: t('settings.title'),
          tabBarIcon: tabBarIconSettings,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
