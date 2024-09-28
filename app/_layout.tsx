import { Stack } from "expo-router";
import { Text, View, Image, StyleSheet } from "react-native";
import { Drawer } from 'expo-router/drawer';
import Entypo from '@expo/vector-icons/Entypo';
import CustomDrawerContent from '../components/customDrawerContent';


export default function RootLayout() {
  return  <Drawer
  screenOptions={{
    drawerLabelStyle: {
      marginLeft: -20,
    },
    drawerActiveBackgroundColor: '#7f8c8d',
    drawerActiveTintColor: 'white',
    drawerInactiveTintColor: '#2c3e50'
  }}
  drawerContent={CustomDrawerContent}

>

  <Drawer.Screen
    name="index"
    options={{
      drawerLabel: 'Inicio',
      title: 'Inicio',
      drawerIcon: ({ size, color }) => (
        <Entypo name='home' size={size} color={color} />
      )
    }}
  />

<Drawer.Screen
    name="laptop"
    options={{
      drawerLabel: 'Laptop',
      title: 'Laptop',
      drawerIcon: ({ size, color }) => (
        <Entypo name='laptop' size={size} color={color} />
      )
    }}
  />

<Drawer.Screen
    name="movil"
    options={{
      drawerLabel: 'Movil',
      title: 'Movil',
      drawerIcon: ({ size, color }) => (
        <Entypo name='mobile' size={size} color={color} />
      )
    }}
  />

<Drawer.Screen
    name="cocina"
    options={{
      drawerLabel: 'Cocina',
      title: 'Cocina',
      drawerIcon: ({ size, color }) => (
        <Entypo name='bowl' size={size} color={color} />
      )
    }}
  />

<Drawer.Screen
    name="deportes"
    options={{
      drawerLabel: 'Deportes',
      title: 'Deportes',
      drawerIcon: ({ size, color }) => (
        <Entypo name='sports-club' size={size} color={color} />
      )
    }}
  />


<Drawer.Screen
    name="relojes"
    options={{
      drawerLabel: 'Relojes',
      title: 'Relojes',
      drawerIcon: ({ size, color }) => (
        <Entypo name='stopwatch' size={size} color={color} />
      )
    }}
  />




  

</Drawer>




}
