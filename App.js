import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeExample from './scr/home';
import ProfilScreen from './scr/profil';
import LoginExample from './scr/login';
import UserRegistration from './scr/user';
import CollectorRegistration from './scr/pengepul';
import DashboardScreen from './scr/utama';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
       name="EditData"
       component={EditDataScreen}
      />
      <Stack.Screen
      name="Pengaturan"
      component={PengaturanScreen}
      />
      <Stack.Screen
       name="PusatBantuan"
      component={PusatBantuanScreen}
      />
      <Stack.Screen
       name="Ulasan"
      component={UlasanScreen}
      />
       <Stack.Screen
        name="Profil"
        component={ProfilScreen}
        options={{ title: 'Profil' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeExample}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginExample}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="UserRegistration"
          component={UserRegistration}
          options={{ title: 'Registrasi User' }}
        />
        <Stack.Screen
          name="CollectorRegistration"
          component={CollectorRegistration}
          options={{ title: 'Registrasi Pengepul' }}
        />
        <Stack.Screen
          name="Halaman Utama"
          component={DashboardScreen}
          options={{ title: 'Utama' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
