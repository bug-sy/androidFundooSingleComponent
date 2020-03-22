import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './Drawer'
import Login from '../components/Login'
import SignUp from '../Signup'
import VerticalIconOfEdit from '../EditNotes/VerticalIconOfEdit'
import VerticalIcon from '../VerticalIconAddingNotes/VertialIcon'
import SplashScreen from './SplashScreen'
import SearchNotes from '../FlatlistNotes/SearchNotes'
import LabelInNote from '../UpdateLabel/labelInNote'

const AppNavigator = createStackNavigator({
  Login : {
    screen : Login, navigationOptions: { header: null }
  },

  LabelInNote : {
    screen : LabelInNote, navigationOptions: { header: null }
  },
  SplashScreen:{
    screen : SplashScreen, navigationOptions: { header: null }
  },
  Drawer : {
    screen : Drawer, navigationOptions: { header: null }
  },
  SearchNotes : {
    screen : SearchNotes, navigationOptions: { header: null }
  },
  Login : {
    screen: Login, navigationOptions: { header: null }
  },
  SignUp : {
    screen: SignUp, navigationOptions: { header: null }
  },
  VerticalIcon : {
    screen : VerticalIcon, navigationOptions: { header: null }
  },
  VerticalIconOfEdit : {
    screen : VerticalIconOfEdit, navigationOptions : { header: null }
  },

}, {
  initialRouteName : 'SplashScreen'
});

export default createAppContainer(AppNavigator);
