import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from 'src/screens/home';
import Experience from 'src/screens/experience';
import Contact from 'src/screens/contact';
import Settings from 'src/screens/settings';
import Colors from 'src/assets/colors';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor={Colors.white}
        inactiveColor={Colors.disable}
        barStyle={{ backgroundColor: Colors.mainLight }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <Ionicons name="home" color={focused ? Colors.white : Colors.disable} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Experience"
          component={Experience}
          options={{
            tabBarLabel: 'Experience',
            tabBarIcon: ({ focused }) => (
              <Ionicons name="school" color={focused ? Colors.white : Colors.disable} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ focused }) => (
              <Ionicons name="mail" color={focused ? Colors.white : Colors.disable} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ focused }) => (
              <Ionicons name="settings-sharp" color={focused ? Colors.white : Colors.disable} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
