import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Metrics from 'constants/Metrics';
import HomeScreen from 'screens/HomeScreen';
import COLORS from 'constants/Colors';
import AddExpenses from 'screens/AddExpenses';
import Statistics from 'screens/StatisticsScreen';
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

function AddExpensesTabBarElement({ focused }) {
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

function StatisticsTabBarElement({ focused }) {
  return (
    <TapbarComponent
      iconComponent={(
        <Feather
          name="pie-chart"
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
        name="AddExpenses"
        options={({ navigation }) => RouterOption({
          navigation,
          title: 'Add New Expenses',
          tabBarIcon: AddExpensesTabBarElement,
        })}
        component={AddExpenses}
      />

      {/* Statistics */}
      <BottomTab.Screen
        name="Statistics"
        options={({ navigation }) => RouterOption({
          navigation,
          title: 'Statistics',
          tabBarIcon: StatisticsTabBarElement,
        })}
        component={Statistics}
      />
    </BottomTab.Navigator>
  );
}
