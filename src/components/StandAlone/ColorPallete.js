import * as React from 'react';
import { Button } from 'react-native-elements';
import { Paragraph, Headline } from 'react-native-paper';
import { View, Image, ScrollView } from 'react-native';
import { TextField } from 'material-bread';
import { SignIn } from '../SignUpDataLayer'
import { AsyncStorage } from 'react-native';
import ColorPalette from 'react-native-color-palette'
import { Icon } from 'react-native-vector-icons' 

export default class Login extends React.Component {


   controlledColorPicker = () => {
     
    let selectedColor = '#C0392B';
    return (
      <ColorPalette
        onChange={color => selectedColor = color}
        value={selectedColor}
        colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
        title={"Controlled Color Palette:"}
        icon={
          <Icon name={'check-circle-o'} size={25} color={'black'} />
        // React-Native-Vector-Icons Example
      }
    />)
  }

    


    render(){
        return(
            <View></View>
        )
    }
}
