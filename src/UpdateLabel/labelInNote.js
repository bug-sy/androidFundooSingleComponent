
import React, { Component } from 'react'
import { Text, Image, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { Divider, } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { createLabelNote, getLabels } from '../SignUpDataLayer'
import CreateLabelInNote from '../UpdateLabel/CreateLabelInNote'

export default class LabelInNote extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            addLabel : false,
            displayLabel : null,
            editLabel : ''
        }
    }

    componentDidMount() {
        
        this.setState({
            noteId : this.props.navigation.state.params.noteId,
            pinStatus : this.props.navigation.state.params.pin,
            title : this.props.navigation.state.params.titleOfCurrentNote,
            textNote : this.props.navigation.state.params.note,
            archiveStatus : this.props.navigation.state.params.archive,
        })
    }


    createNewLabel = (labelName) => {
        const noteLabel = {
            labelName : labelName
        }
        if (noteLabel.labelName) {
            createLabelNote(noteLabel)
        }
        this.state.label = ''
    }

    changeLabel = (text) => {
        if (text !== null) {
            this.setState({
                editLabel : text
            })
        }
    }

    componentDidMount() {
        getLabels((displayLabel) => {
            this.setState({
                displayLabel : displayLabel
            }, () => {

            })
        })
    }

    render() {
        const { navigation } = this.props
        const noteId = navigation.getParam('noteId','no value')
        const label = navigation.getParam('label','no value')
        console.log("--------------------------------------------------------------------------------------------------now",noteId)
        return (
            <ScrollView>
                <View style = { styles.container }>
             
                    <Divider/>
                    
                                <View style = { styles.createLabel }>
                                    <TouchableOpacity
                                        onPress={ () => {this.props.navigation.navigate('Dashboard'),console.log("---------------------------------------------------",this.state.noteId)} }
                                        style={{ width: '15%' }}
                                    >
                                    <Image
                                    style = {{ height: 50, width: 32 }}
                                    source = { require('/root/Desktop/fun-fundooApp/image/outline_arrow_bac.png') }
                                    />
                                    </TouchableOpacity>

                                    <TextInput
                                         style = {{ height: 50, width: 332, }}
                                        placeholder = "Enter Label Name"
                                        multiline = { true }
                                        value = { this.state.label }
                                        onChangeText = { label => this.setState({ label: label }) }
                                    />                                
                                </View>

                    
                    <Divider />
                    { this.state.displayLabel !== null &&
                        Object.getOwnPropertyNames(this.state.displayLabel).map((key) => (
                           // label !== null &&
                           // Object.getOwnPropertyNames(label).map((keyOfEnteredLabel) => (
                               // this.state.displayLabel[key] == label[keyOfEnteredLabel].labelId &&
                                <CreateLabelInNote
                                    labelName = { this.state.displayLabel[key].labelName }
                                    labelKey = { key }
                                    navigation = { this.props.navigation }
                                    noteId = { noteId }
                                    label ={ label }
                                    //labelInNote = { label[keyOfEnteredLabel].labelName   }
                                />
                          //  )
                        
                        // ) 
                         )
                         )
                    }        
                    <Divider />
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        position : 'relative',
        justifyContent : 'flex-start',
        flex:1
    },
    topBar : {
        width : '100%',
        height : 45,
        padding : 4,
        elevation : 8
    },
    createLabel : {
        flexDirection : 'row',
        //justifyContent : 'space-betw',
        padding : 8,
    },
    createLabelToggled : {
        flexDirection : 'row',
        padding : 8,
    },
    editFullLabel : {
        flexDirection : 'row',
        padding : 8,
        backgroundColor : 'grey'
    },
    section : {
        flexDirection : 'column',
        width : '100%'
    },
    sectionTwo : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '32%'
    },
    reminder : {
        display : 'flex',
        width : '100%',
        flexDirection : 'column',
        justifyContent : 'space-around'
    },
    textLabel : {
        fontSize : 20,
        height : '20%',
        width : '70%',
        backgroundColor : 'blue'
    },
    editLabel : {
        fontSize : 25,
        height : '100%',
        width : '70%',
        alignItems : 'center'
    },
    divideLine : {
        color : 'red'
    }
});

