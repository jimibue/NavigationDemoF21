import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './screens/HomeStack';
import SettingsScreen from './screens/Settings';
import FeatureScreen from './screens/Feature';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Feature" component={FeatureScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
