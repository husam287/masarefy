import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigator from 'routes/tab-navigator/BottomTabNavigator';
import RouterOption from '../header-options/RouterOption';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      {/* MAIN SCREENS */}
      <Stack.Screen
        name="HomeStack"
        component={BottomNavigator}
        options={({ navigation }) => RouterOption({ navigation })}
      />
    </Stack.Navigator>
  );
}
