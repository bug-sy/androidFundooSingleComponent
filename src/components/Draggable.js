// import React, { Component } from 'react'
// import { View, TouchableOpacity, Text } from 'react-native'
// import DraggableFlatList from 'react-native-draggable-dynamic-flatlist'
// import { getNotes} from '../SignUpDataLayer/'

// var pinnedNote = [];

// getNotes((notes) => {
  
//   Object.keys(notes).map((item,index) => {
//     console.log("this.state.notes",notes)
//     if (notes[item].pinStatus == true && notes[item].trashStatus == false
//     ) {
//       notes[item].noteId = item
//       pinnedNote.push(notes[item])
//     }
//   })

// },() => {
// }) 

 
// class Example extends Component {
//   state = {
//         data: pinnedNote
//      };

 
//   renderItem = ({ item, index = 0, move, moveEnd, isActive }) => {
//     return (
//       <TouchableOpacity
//         style={{ 
//           height: 100, 
//           backgroundColor: isActive ? 'blue' : item.bgColor,
//          // backgroundColor : bgColor?bgColor:'grey',
//           padding : 2,
//           marginVertical : 4,
//           marginHorizontal : 4,
//           width : '100%',
//           borderRadius : 6,
//           elevation : 4,
//           borderWidth : 0.25

//         }}
//         onLongPress={move}
//         onPressOut={moveEnd}>
//         <Text style={{ 
//           fontWeight: 'bold', 
//           color: 'white',
//           fontSize: 32,
//         }}>{item.title}</Text>
//       </TouchableOpacity>
//     )
//   }
 
//   render() {
//     var numCount = 2
//     return (
//       <View style={{ flex: 1 }}>
//         <DraggableFlatList
//           data={this.state.data}
//           renderItem={this.renderItem}
//           keyExtractor={(item, index) => `draggable-item-${item.key}`}
//           scrollPercent={2}
//           //key = { numCount }
//           numColumns = { numCount }
//           onMoveEnd={({ data }) => this.setState({ data })}
//           //horizontal = false 
//         />
//       </View>
//     )
//   }
// }
 
// export default Example

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Meta = [
  {
    id: 'bd7cbea-c11-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c65-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-41f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


function Item2({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class FlatListNotesPinned extends React.Component {
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
        <FlatList
        data={DATA}
        renderItem={({ item }) => <Item2 title={item.title} />}
        keyExtractor={item => item.id}
      />
        <FlatList
        data={Meta}
        renderItem={({ item }) => <Item2 title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

