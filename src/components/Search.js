
import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native';

class SampleApp extends Component {

    constructor(props) {
      super(props)
      this.state = { text: ''}
    }
  
    onChangeDo(text) {
      this.setState({ text })
      if (text === 'Hello') {
          return this.setState({ hello: true })
      }
      this.setState({ hello: false })
    }
  
    render() {
      return (
        <View style = { styles.container }>
          <TextInput
              placeholder = "Type Hello"
            style = { styles.inputText }
            onChangeText = { (text) => this.onChangeDo(text) }
              />
          { this.state.hello && <Text style = { styles.hello }>Hello World</Text> }
        </View>
      );
    }
  }
  
export default SampleApp

  var styles = StyleSheet.create({
    container : {
      flex : 1,
      marginTop : 60
    },
    inputText : {
      height : 60,
      backgroundColor : '#ededed'
    },
    hello : {
      fontSize : 22
    }
  })