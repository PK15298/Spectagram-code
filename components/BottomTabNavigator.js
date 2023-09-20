import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default class BottomTabNaviagtor extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator screenOptions={({route})=>{
                    tabBarIcon:({focused,color,size})=>{
                         let iconName;
                         if (route.name === 'Feed') {
                            iconName = 'focused'?
                            'book-sharp':'book-sharp-outline'
                         } else if (route.name ==='CreatePost'){
                            iconName = 'focused'?
                            'create':'create-outline'
                         }
                        
                         return(
                            <Ionicons name={iconName} size={size} color={color}/>
                         )
                    }
                }}
                tabBarOptions={{
                    activeTintColor:'tomato', inactiveTintColor:'grey'
                }} 
                >
                    <Tab.Screen name='Feed' component={Feed} options={{headerShown:false}}/>
                    <Tab.Screen name='CreatePost' component={CreatePost} options={{headerShown:false}}/>
                </Tab.Navigator>
            </NavigationContainer>
        )

    }
}