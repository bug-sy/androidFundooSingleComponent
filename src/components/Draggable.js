// import React, { Component } from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import DraggableFlatList from "react-native-draggable-flatlist";
// import { getNotes} from '../SignUpDataLayer/'
 
// var pinnedNote = [];

// // getNotes((notes) => {
  
// //   Object.keys(notes).map((item,index) => {
// //     console.log("this.state.notes",notes)
// //     if (notes[item].pinStatus == true && notes[item].trashStatus == false
// //     ) {
// //       notes[item].noteId = item
// //       pinnedNote.push(notes[item])
// //     }
// //   })

// // },() => {
// // }) 

// class Example extends Component {


//   componentWillMount() {
//     getNotes((notes) => {
//       this.setState({
//         notes : notes
//       }, () => {
//         Object.keys(this.state.notes).map((item) => {
//           console.log("this.state.notes",this.state.notes)
//           if (this.state.notes[item].pinStatus == true && this.state.notes[item].trashStatus == false
//           ) {
//             this.state.notes[item].noteId = item
//             pinnedNote.push(this.state.notes[item])
//           }
//         })
//       })
//     })
//   }
  

//     state = {
//       notes : pinnedNote,
//     }
  

 
//   renderItem = ({ item, index, drag, isActive }) => {
//     return (
//       <TouchableOpacity
//         style={{
//           height: 100,
//           backgroundColor: isActive ? "blue" : item.bgColor,
//           alignItems: "center",
//           justifyContent: "center"
//         }}
//         onLongPress={drag}
//       >
//         <Text
//           style={{
//             fontWeight: "bold",
//             color: "white",
//             fontSize: 32
//           }}
//         >
//           {item.title}
//         </Text>
//         <Text
//           style={{
//             fontWeight: "bold",
//             color: "white",
//             fontSize: 32
//           }}
//         >
//           {item.textNote}
//         </Text>
//       </TouchableOpacity>
//     );
//   };
 
//   render() {
   
// console.log("this.state.notes", this.state.notes)
   
  

//     return (
//       <View style={{ flex: 1 }}>
//         <DraggableFlatList
//           data={pinnedNote}
//           renderItem={this.renderItem}
//           keyExtractor={(item) => `draggable-item-${item.noteId}`}
//           onDragEnd={({ notes }) => this.setState({ notes })}
//         />
//       </View>
//     );
//   }
// }
 
// export default Example;


// import React, { Component } from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import DraggableFlatList from "react-native-draggable-flatlist";
 
// const exampleData = [...Array(20)].map((d, index) => ({
//   key: `item-${index}`, // For example only -- don't use index as your key!
//   label: index,
//   backgroundColor : 'grey'
//   // backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
//   //   5}, ${132})`
// }));
 
// class Example extends Component {
//   state = {
//     data: exampleData
//   };
 
//   renderItem = ({ item, index, drag, isActive }) => {
//     return (
//       <TouchableOpacity
//         style={{
//           height: 100,
//           backgroundColor: isActive ? "blue" : item.backgroundColor,
//           alignItems: "center",
//           justifyContent: "center",
//           //width : '50%'
//         }}
//         onLongPress={drag}
//       >
//         <Text
//           style={{
//             fontWeight: "bold",
//             color: "white",
//             fontSize: 32
//           }}
//         >
//           {item.label}
//         </Text>
//       </TouchableOpacity>
//     );
//   };
 
//   render() {
//     console.log("exampleData",exampleData)

//     return (
//       <View style={{ flex: 1 }}>
//         <DraggableFlatList
//           data={this.state.data}
//           renderItem={this.renderItem}
//           keyExtractor={(item, index) => `draggable-item-${item.label}`}
//           //key = { 2  }
//           //horizontal={false}
//           //numColumns = { 2 }
//           onDragEnd={({ data }) => this.setState({ data })}
//         />
//       </View>
//     );
//   }
// }
 
// export default Example;

import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist'
import { getNotes} from '../SignUpDataLayer/'

var pinnedNote = [];

getNotes((notes) => {
  
  Object.keys(notes).map((item,index) => {
    console.log("this.state.notes",notes)
    if (notes[item].pinStatus == true && notes[item].trashStatus == false
    ) {
      notes[item].noteId = item
      pinnedNote.push(notes[item])
    }
  })

},() => {
}) 

 
class Example extends Component {
  state = {
        data: pinnedNote
     };

 
  renderItem = ({ item, index = 0, move, moveEnd, isActive }) => {
    return (
      <TouchableOpacity
        style={{ 
          height: 100, 
          backgroundColor: isActive ? 'blue' : item.bgColor,
         // backgroundColor : bgColor?bgColor:'grey',
          padding : 2,
          marginVertical : 4,
          marginHorizontal : 4,
          width : '100%',
          borderRadius : 6,
          elevation : 4,
          borderWidth : 0.25

        }}
        onLongPress={move}
        onPressOut={moveEnd}>
        <Text style={{ 
          fontWeight: 'bold', 
          color: 'white',
          fontSize: 32,
        }}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
 
  render() {
    var numCount = 2
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={2}
          //key = { numCount }
          numColumns = { numCount }
          onMoveEnd={({ data }) => this.setState({ data })}
          //horizontal = false 
        />
      </View>
    )
  }
}
 
export default Example
