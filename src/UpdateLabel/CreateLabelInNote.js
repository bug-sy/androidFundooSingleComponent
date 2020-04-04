import React, { Component } from 'react'
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { createLabelNoteInNotes, deleteLabelNoteInNotes } from '../SignUpDataLayer'

export default class ArchivePage extends Component {
    constructor(props) {
        super(props)
        this.state = 
        { 
        
            editLabel : '',
            toggleForEdit : false,
            label : false
        }
    }

    changeLabel = (text) => {
         if(text !== null){
             this.setState({
                 editLabel : text
            })
    }
    }

    deleteNewLabel =  (labelNameToBeDeleted) => {
        console.log("**************************************************************************************");
        console.log("not deletzRRRRR",this.props.labeInNotel);
        console.log("*******************************************************************************") ; 
        if(this.props.label ){
              Object.getOwnPropertyNames(this.props.label).map((keyOfLabel) => (
                    this.props.label[keyOfLabel].labelName === labelNameToBeDeleted
                    ?
                    deleteLabelNoteInNotes(this.props.noteId, keyOfLabel)
                    :
                    null  
              ))
        }
        else{
            console.log("**************************************************************************************")
            console.log("not delet",this.props.label)
            console.log("*******************************************************************************")
        }
    }

    labelInNote = (noteKey) => {
        const noteLabel = {
            labelName : this.props.labelName,
            labelId : this.props.labelKey
        }
        if (noteLabel.labelName) {
            createLabelNoteInNotes(noteKey, noteLabel)
        }
    }

    render(){
        return(
                    <View style={styles.createLabel}>
                    <TouchableOpacity                
                    >
                        <Image
                            style={{ height: 40, width: 32 }}
                            source={require('/root/Desktop/fun-fundooApp/image/outline_label_black_48dp.png')}
                        />
                    </TouchableOpacity>

                    <Text
                        style={styles.textLabel}
                    >{this.props.labelName }</Text>

                    {
                        this.state.label 
                        ?
                        <TouchableOpacity
                        onPress = { () => {this.deleteNewLabel(this.props.labelName), this.setState({label : !this.state.label}) } }       
                           >
                               <Image
                                   style = {{ height: 40, width: 28 }}
                                   source = {require('/root/Desktop/fun-fundooApp/image/outline_check_box_black_48dp.png')}
                               />
                           </TouchableOpacity>
                        :
                        <TouchableOpacity
                        onPress = { () => {this.labelInNote(this.props.noteId), this.setState({label : !this.state.label})} }    
                    >
                        <Image
                            style = {{ height: 40, width: 28 }}
                            source = {require('/root/Desktop/fun-fundooApp/image/outline_check_box.png')}
                        />
                        </TouchableOpacity>
                    }
                    </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'flex-start',
        backgroundColor: 'grey',
    },
    topBar: {
        width: '100%',
        height: 45,
        padding: 4,
        elevation: 8
    },
    createLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    },
    createLabelToggled : {
        flexDirection: 'row',
        padding: 8,
    },
    editFullLabel: {
        flexDirection: 'row',
        padding: 8,
    },
    section: {
        flexDirection: 'column',
        width: '100%'
    },
    sectionTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '32%'
    },
    reminder: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textLabel: {
        fontSize: 20,
        height: '80%',
        width: '70%',
        alignSelf : 'flex-end',
        justifyContent : 'center'
    },
    editLabel: {
        fontSize: 35,
        height: '100%',
        width: '70%',
        alignItems: 'center'
    },
    divideLine: {
        color: 'red'
    }
});

