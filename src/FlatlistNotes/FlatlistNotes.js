import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { getNotes} from '../SignUpDataLayer/'
import { Chip } from 'react-native-paper';

export default class FlatListNotesPinned extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes : '',
      columnCount : [],
      pinned : 'pinned',
      columnCountAnother : [],
    }
  }

  componentDidMount() {
    getNotes((notes) => {
      this.setState({
        notes : notes
      }, () => {
      })
    })
  }

  header = (headerName) => {
    return (
      <View >
  <Text style = {{ fontSize: 30 }}>{headerName}</Text>
      </View>);
  }

  render() {
    var moment = require('moment');
    var pinnedNote = [];
    if(this.props.propName == 'Pin'){
    Object.keys(this.state.notes).map((item) => {
      if (this.state.notes[item].pinStatus == true && this.state.notes[item].trashStatus == false
      ) {
        this.state.notes[item].noteId = item
        pinnedNote.push(this.state.notes[item])
      }
    })
  }
  else if(this.props.propName == 'Archive'){
    
    Object.keys(this.state.notes).map((item) => {
      if (this.state.notes[item].archiveStatus == true
        &&
        this.state.notes[item].pinStatus == false
        &&
        this.state.notes[item].trashStatus == false
      ) {
        this.state.notes[item].noteId = item
        pinnedNote.push(this.state.notes[item])
      }
    })
  }
  else if(this.props.propName == 'Reminder'){
    
    Object.keys(this.state.notes).map((item) => {
      if (this.state.notes[item].reminderDate 
        &&
        this.state.notes[item].trashStatus == false
      ) {
        this.state.notes[item].noteId = item
        pinnedNote.push(this.state.notes[item])
        console.log('*****************')
        console.log('*****************')
        console.log('*****************')
        console.log('*****************',pinnedNote)
      
      }
    })
  }
  else{
    Object.keys(this.state.notes).map((item) => {
    
      if (this.state.notes[item].trashStatus == true
      ) {
        this.state.notes[item].noteId = item
        pinnedNote.push(this.state.notes[item])
        console.log('*****************')
        console.log('*****************')
        console.log('*****************')
        console.log('*****************',pinnedNote)
      }
    })
  }

    {
      this.props.toggleGridOrList == false
        ?
        this.state.columnCount[0] = 2
        :
        this.state.columnCount[0] = 1
    }

    {
      this.props.toggleGridOrList == false
        ?
        this.state.columnCountAnother[0] = 2
        :
        this.state.columnCountAnother[0] = 1
    }

    const Item = ({label, bgColor, List, pinStatus, trashStatus, archiveStatus, noteId, title, textNote, reminderDate, reminderTime,  activityProp }) => {
      return (
        <View style = {List == false
          ?
            {

            backgroundColor : bgColor?bgColor:'grey',
            padding : 2,
            marginVertical : 4,
            marginHorizontal : 4,
            width : '48%',
            borderRadius : 6,
            elevation : 4,
            borderWidth : 0.25

            }
            :
            {

            backgroundColor :  bgColor ? bgColor : 'grey',
            padding : 2,
            marginVertical : 4,
            marginHorizontal : 4,
            width : '95%',
            borderRadius : 6,
            elevation : 4,
            borderWidth : 0.25

            }
        }>
          <TouchableOpacity onPress = { () =>
            this.props.navigation.navigate('VerticalIconOfEdit',
              {
                "pin" : pinStatus, "trash" : trashStatus,
                "archive" : archiveStatus, "noteId" : noteId,
                "titleOfCurrentNote" : title, "note" : textNote,
                "label" : label, "bgColor" : bgColor,
                "activityProp" : activityProp
              })}>
            <Text style = { styles.title }>{ title }</Text>
            <Text style = { styles.title }>{ textNote }</Text>
            {
              reminderDate 
                ?
                <Chip icon = { require('/root/Desktop/fun-fundooApp/image/alarm.png') } 
                  style = {{ width : 160 }} onPress = { () => console.log('Pressed') }>
                  { moment(reminderDate).format("MMM Do")},{ reminderTime }
                </Chip>
                :
                null
            }
            
            {
              label 
                ?
              Object.getOwnPropertyNames(label).map((keyOfLabelName) => (
                <Chip  style = {{ width : 100,marginTop : 4 }} >            
                {label[keyOfLabelName].labelName}
                </Chip>             
              ))
                :
              null   
            }
             
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <SafeAreaView style = { styles.container }>

        <FlatList
          data = { pinnedNote }
          renderItem = {({ item }) => (console.log("Pinned items are ------------->>>>>> :", item)
            ,
            <Item List = { this.props.toggleGridOrList }
              title = { item.title } textNote = { item.textNote }
              noteId = { item.noteId } pinStatus = { item.pinStatus }
              trashStatus = { item.trashStatus } archiveStatus = { item.archiveStatus }
              reminderDate = { item.reminderDate } reminderTime = { item.reminderTime }
              label = { item.noteLabel  ? item.noteLabel  : null }
              bgColor = { item.bgColor  ? item.bgColor  : null }
              activityProp = {this.props.propName}
            />)
          }
          key = { this.state.columnCount[0] }
          numColumns = { this.state.columnCount[0] }
          ListHeaderComponent = { this.header(this.props.propName) }
          stickyHeaderIndices = { [0] }
        />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 2,
    marginTop : Constants.statusBarHeight,
    padding : 2,
  },
  gridItem : {
    backgroundColor : 'grey',
    padding : 2,
    marginVertical : 4,
    marginHorizontal : 4,
    width : '48%',
    borderRadius : 6,
    elevation : 4,
    borderWidth : 0.25
  },
  listItem : {
    backgroundColor : 'grey',
    padding : 2,
    marginVertical : 4,
    marginHorizontal : 4,
    width : '95%',
    borderRadius : 6,
    elevation : 4,
    borderWidth : 0.25
  },
  title : {
    fontSize : 18,
  },
});