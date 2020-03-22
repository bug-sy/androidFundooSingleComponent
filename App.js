import React, { Component } from 'react';
import 'react-native-gesture-handler';
import HomeScreen from './src/components/HomeScreen';
import CompoRemind from './src/Reminder/CompoRemind'
import PickTheDate from './src/Reminder/PickTheDate';
import Selection from './src/PopOverOptions/SelectionPopOver'
import VerticalIcon from './src/VerticalIconAddingNotes/VertialIcon'
import CreateLabel from './src/NavigationPages/CreateLabel'
import Search from './src/components/Search'
import { Provider } from 'react-redux';

export default class FundooApp extends Component {
  render() {
    return (    
      
    <HomeScreen/> 
    
      //<Flatlist/
      //<TodoList/>
     // <Selection/>
 //<CompoRemind/>
 //<VerticalIcon/>
 //<CreateLabel/>
 //<Search/>

 

      
     
   
    );
  }
}