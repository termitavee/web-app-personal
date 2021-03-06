import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from 'src/screens/home';
import Experience from 'src/screens/experience';
import Contact from 'src/screens/contact';
import Settings from 'src/screens/settings';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const title = text => Platform.select({ web: `jr | ${text}`, default: text });

  const getColor = (isFocus: boolean) => (isFocus ? theme.colors.surface : theme.colors.disabled);

  return (
    <NavigationContainer theme={theme}>
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
    </NavigationContainer>
  );
};

export default BottomTabs;
