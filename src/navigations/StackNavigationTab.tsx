import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../blocks/splashScreen/SplashScreen';
import LandingPage from '../blocks/landingPage/LandingPage';
import CreateAccount from '../blocks/createAccount/CreateAccount';
import VerificationPage from '../blocks/verficationPage/VerificationPage';

const Stack = createNativeStackNavigator();
export class StackNavigationTab extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="VerificationPage" component={VerificationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigationTab;
