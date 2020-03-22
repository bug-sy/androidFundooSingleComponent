import * as React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Dialog from "react-native-dialog";
import DatePicker from 'react-native-datepicker'

export default class CompoReminder extends React.Component {
  state = {
    dialogVisible : false,
    date : "2016-05-15",
    time : " "
  };

  showDialog = () => {
    this.setState({ dialogVisible : true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible : false });
  };

  handleDelete = () => {
    this.setState({ dialogVisible : false });
  };

  render() {
    console.log("what date----->>>>", this.state.date)
    return (
        <View>

          <TouchableOpacity onPress = { this.showDialog }>
            <Image
              style = {{ height : 30, width : 30 }}
              source = { require('/root/Desktop/fun-fundooApp/image/reminderOutlined.png') }
            />
          </TouchableOpacity>
        <Dialog.Container visible = { this.state.dialogVisible }>

          <View>
            <DatePicker
              style = {{ width : 200 }}
              date = { this.state.date }
              mode = "date"
              placeholder = "select date"
              format = "YYYY-MM-DD"
              confirmBtnText = "Confirm"
              cancelBtnText = "Cancel"
              customStyles = {{
                dateIcon : {
                  position : 'absolute',
                  left : 0,
                  top : 4,
                  marginLeft : 0
                },
                dateInput : {
                  marginLeft : 36
                }
              }}
              onDateChange = { (date) => { this.setState({ date : date }) } }
            />
          </View>

          <View style = {{ marginTop : 6 }}>
            <DatePicker
              style = {{ width : 200 }}
              date = { this.state.date }
              mode = "time"
              placeholder = "select date"
              format = "h:mm a"
              confirmBtnText = "Confirm"
              cancelBtnText = "Cancel"
              customStyles = {{
                dateIcon : {
                  position : 'absolute',
                  left : 0,
                  top : 4,
                  marginLeft : 0
                },
                dateInput : {
                  marginLeft : 36
                }
              }}
              onDateChange = { (time) => { this.setState({ time: time }) } }
            />
          </View>
          <Dialog.Button label = "Save" onPress = { () => { this.props.handleDateTime(this.state.date, this.state.time), this.handleCancel() } }/>
        </Dialog.Container>

      </View>
    );
  }
}