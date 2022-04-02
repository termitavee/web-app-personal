import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';

export const enum Routes {
  Home = 'Home',
  Experience = 'Experience',
  Contact = 'Contact',
  Settings = 'Settings',
}

export type RoutesTypes = typeof Routes[keyof typeof Routes];

export type BottomTabNavigatorType = {
  Home: undefined;
  Experience: undefined;
  Contact: undefined;
  Settings: undefined;
};

export type LinkingType = {
  [Routes.Home]: 'Home';
  [Routes.Experience]: 'Experience';
  [Routes.Contact]: 'Contact';
  [Routes.Settings]: 'Settings';
};

export type HomeScreenPropType = MaterialBottomTabScreenProps<BottomTabNavigatorType, 'Home'>;
export type ExpScreenPropType = MaterialBottomTabScreenProps<BottomTabNavigatorType, 'Experience'>;
export type ContactScreenPropType = MaterialBottomTabScreenProps<BottomTabNavigatorType, 'Contact'>;
export type SettingsScreenPropType = MaterialBottomTabScreenProps<BottomTabNavigatorType, 'Settings'>;
