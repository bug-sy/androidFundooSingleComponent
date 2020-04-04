import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import Dashboard from '../Dashboard/Dashboard'
import CreateLabel from '../NavigationPages/CreateLabel'
import Piechart from './Piechart.js'
import SideMenu from './SideMenu';
import React from 'react';
import Drag from './Draggable'

const MyDrawerNavigator = createDrawerNavigator({
    Dashboard : {
        screen: (props) => <Dashboard { ...props } propName = { 'Pin' } />
    },
    CreateLabel : {
        screen : CreateLabel,
    },
    Drag : {
        screen : Drag,
    },
    Archive : {
        screen: (props) => <Dashboard { ...props } propName = { 'Archive' } />
    },
    ReminderPage : {
        screen: (props) => <Dashboard { ...props } propName = { 'Reminder' } />
     },
    TrashNotes : {
        screen: (props) => <Dashboard { ...props } propName = { 'Trash' } />
    },
    Piechart : {
        screen : Piechart,
    }, 
}, {
    initialRouteName : 'Dashboard',
    contentComponent : SideMenu,
    contentOptions : {
      activeTintColor : '#000000',
      activeBackgroundColor : '#e6e6e6',
    }
});

const Drawer = createAppContainer(MyDrawerNavigator);

export default Drawer