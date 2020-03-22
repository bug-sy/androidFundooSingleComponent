import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { View, Image, TouchableOpacity } from 'react-native';

export default class PickTheDate extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "2016-05-15" }
  }

  render() {
    console.log("I am the new date----->>>>", this.state.date)
    return (
      <View>
        
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="datetime"
          placeholder="select date"
          format="YYYY-MM-DD h:mm a"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => { this.setState({ date: date }) }}
        />

      </View>
    )
  }
}