import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Metrics from 'constants/Metrics';
import HomeScreen from 'screens/HomeScreen';
import CoursesScreen from 'screens/CoursesScreen';
import ProfileScreen from 'screens/ProfileScreen';
import COLORS from 'constants/Colors';
import RouterOption from '../header-options/RouterOption';
import TapbarComponent from '../header-options/TapbarComponent';

const TABWIDTH = Metrics.screenWidth / 3;

function HomeTabBarElement({ focused }) {
  return (
    <TapbarComponent
      iconComponent={(
        <AntDesign
          name="home"
          size={22}
          color={focused ? COLORS.primary : COLORS.dark}
        />
      )}
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

function ProfileTabBarElement({ focused }) {
  return (
    <TapbarComponent
      iconComponent={(
        <MaterialCommunityIcons
          name="plus-circle-multiple-outline"
          size={22}
          color={focused ? COLORS.primary : COLORS.dark}
        />
      )}
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

function CoursesTabBarElement({ focused }) {
  return (
    <TapbarComponent
      iconComponent={(
        <AntDesign
          name="calendar"
          size={22}
          color={focused ? COLORS.primary : COLORS.dark}
        />
      )}
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Metrics.bottomTabsHeight,
          elevation: 0,
        },
      })}
    >
      {/* Home  */}
      <BottomTab.Screen
        name="Home"
        options={({ navigation }) => RouterOption({
          navigation,
          title: 'Home',
          tabBarIcon: HomeTabBarElement,
        })}
        component={HomeScreen}
      />

      {/* Profile  */}
      <BottomTab.Screen
        name="Profile"
        options={({ navigation }) => RouterOption({
          navigation,
          title: 'Profile',
          tabBarIcon: ProfileTabBarElement,
        })}
        component={ProfileScreen}
      />

      {/* Courses */}
      <BottomTab.Screen
        name="Courses"
        options={({ navigation }) => RouterOption({
          navigation,
          title: 'Courses',
          tabBarIcon: CoursesTabBarElement,
        })}
        component={CoursesScreen}
      />
    </BottomTab.Navigator>
  );
}
