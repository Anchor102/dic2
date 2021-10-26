import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from "react-navigation/drawer";
import {NavigationContainer} from "react-navigation/native"
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';

const Drawer = createDrawerNavigator();
export default class DrawerNavigator extends Component {
    render()
    {
        return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName = "Home">
                    <Drawer.Screen name = "Home" component = {HomeScreen}/>
                    <Drawer.Screen name = "Profile" component = {Profile}/>
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}