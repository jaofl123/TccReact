import React, {useState} from 'react';

import { SafeAreaView, ScrollView,StatusBar, StyleSheet, Text, TextInput, useColorScheme, View, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OnboardingScreen from './screens/OnboardingScreen';
import Onboarding from 'react-native-onboarding-swiper';
import Tela1 from './screens/Tela1';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>

        <Stack.Screen name="Tela1" component={Tela1}/>

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




 



