import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Chatting,
  Doctor,
  GetStarted,
  Hospitals,
  Login,
  Messages,
  Register,
  Splash,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UploadPhoto from '../pages/UploadPhoto';
import {BottomNavigator} from '../components';
import ChooseDoctor from '../pages/ChooseDoctor';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Doctor"
        component={Doctor}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Hospitals"
        component={Hospitals}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseDoctor"
        component={ChooseDoctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
