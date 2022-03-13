import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
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

  const getColor = (isFocus: boolean) => (isFocus ? theme.colors.card : theme.colors.disabled);
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
          tabBarIcon: ({ focused }) => <Ionicons name="home" color={getColor(focused)} size={26} />,
        }}
      />
      <Tab.Screen
        name="Experience"
        component={Experience}
        options={{
          title: title(t('experience.title')),
          tabBarLabel: t('experience.title'),
          tabBarIcon: ({ focused }) => <Ionicons name="school" color={getColor(focused)} size={26} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          title: title(t('contact.title')),
          tabBarLabel: t('contact.title'),
          tabBarIcon: ({ focused }) => <Ionicons name="mail" color={getColor(focused)} size={26} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: title(t('settings.title')),
          tabBarLabel: t('settings.title'),
          tabBarIcon: ({ focused }) => <Ionicons name="settings-sharp" color={getColor(focused)} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
