
import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';



export type BottomTabNavigatorType = {
  Home: undefined;
  Experience: undefined;
  Contact: undefined;
  Settings: undefined;
};

export type HomeScreenPropType = MaterialBottomTabScreenProps<BottomTabNavigatorType, 'Home'>;
export type ExpScreenPropType = MaterialBottomTabScreenProps<BottomTabNavigatorType, 'Experience'>;
export type ContactScreenPropType = MaterialBottomTabScreenProps<BottomTabNavigatorType, 'Contact'>;
export type SettingsScreenPropType = MaterialBottomTabScreenProps<BottomTabNavigatorType, 'Settings'>;
