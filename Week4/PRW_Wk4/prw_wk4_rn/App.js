import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, ListView, Button, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import OverviewScreen from './screens/OverviewScreen'
import TodoScreen from './screens/TodoScreen'
import GroceriesScreen from './screens/GroceriesScreen'

const tabNavigation = createBottomTabNavigator(
    {
        Overview:{
            path:'/',
            screen: OverviewScreen,
        },
        Todo:{
            path:'sent',
            screen: TodoScreen,
        },
        Groceries:{
            path:'sent',
            screen: GroceriesScreen
        },
    },
    {
    initialRoute: 'Overview',
        tabBarOptions:{
        activeTintColor:'#36648B',
        },
},


);

export default createAppContainer(tabNavigation)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
