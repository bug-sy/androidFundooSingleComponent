import React, { Component } from 'react'
import { createUserNote } from '../SignUpDataLayer/'
import { Image, TextInput } from 'react-native';
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import CompoRemind from '../Reminder/CompoRemind'

export default class AddingNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pinStatus : false,
            archiveStatus : false,
            trashStatus : false,
            textNote : '',
            togglePinOrUnpin : false,
            toggleAlertion : false,
            toggleArchive : false,
            reminderDate : '',
            reminderTime : '',
        }
    }

    handleDateTime = (date, time) => {
        console.log("jhjhjh->", date, time)
        this.setState({ reminderDate: date, reminderTime: time }, () => {
            console.log("what time this time ------->>>>", this.state.reminderDate, this.state.reminderTime)
        })
    }

    handleUserNote = () => {
        const note = {
            pinStatus : this.state.pinStatus,
            archiveStatus : this.state.archiveStatus,
            trashStatus : this.state.trashStatus,
            title : this.state.title,
            textNote : this.state.textNote,
            reminderDate : this.state.reminderDate,
            reminderTime : this.state.reminderTime
        }
        if (note.title && note.textNote) {
            createUserNote(note)
        }
    }

    render() {
    console.log('cccccccccccccc--------->',this.props.bgColor) 
        return (
            <View style = { styles.topAndBottomBar }>

                <View style = { styles.topBar }>
                    <TouchableOpacity style = {{ width : '30%' }} onPress = {() => {
                        this.props.navigation.navigate('Dashboard'), this.props.handleUserNote()
                    }}>
                        <Image
                            style = {{ height : 30, width : 40 }}
                            source = { require('/root/Desktop/fun-fundooApp/image/goBack.png' )}
                        />
                    </TouchableOpacity>
                    <View style = { styles.innerIcons }>
                        {
                            this.props.pin
                                ?
                                <TouchableOpacity onPress = { (e) => this.props.globalChangePin(!this.props.pin)}>
                                    <Image
                                        style = {{ height : 30, width : 30 }}
                                        source = { require('/root/Desktop/fun-fundooApp/image/pinned.png' )}  
                                    />
                                </TouchableOpacity>
                                :

                                <TouchableOpacity onPress = { (e) => this.props.globalChangePin(!this.props.pin)}>
                                    <Image
                                        style = {{ height : 30, width : 30 }}
                                        source = { require('/root/Desktop/fun-fundooApp/image/pin.png' )}
                                    />
                                </TouchableOpacity>
                        }

                        {
                            <CompoRemind
                                handleDateTime = { this.props.handleDateTime  }
                            />
                        }

                        {
                            this.props.archive 
                                ?
                                <TouchableOpacity onPress ={(e) => this.props.globalChangeArchive(!this.props.archive)}>
                                <Image
                                    style = {{ height : 30, width : 30 }}
                                    source = { require('/root/Desktop/fun-fundooApp/image/unArchive.png') }
                                />
                            </TouchableOpacity>
  
                                :
                            

                            <TouchableOpacity onPress = { (e) => this.props.globalChangeArchive(!this.props.archive)}>
                            <Image
                                style = {{ height : 30, width : 24 }}
                                source = { require('/root/Desktop/fun-fundooApp/image/archive.png' )}
                            />
                            </TouchableOpacity>
                        }
                    </View>
                </View>

                <View style = {{    flexDirection : 'column',
                                    width : '100%',
                                    height : '100%',
                                    backgroundColor : this.props.bgColor }} >
                    <TextInput
                        style = {{ fontSize: 40 }}
                        placeholder = "Title"
                        multiline = { true }
                        value = { this.props.title }
                        onChangeText = { (title) => this.props.globalChangeTitle(title)}
                    />
                    <TextInput
                        style = { styles.note }
                        placeholder = "Note"
                        multiline = { true }
                        value = { this.props.textNote }
                        onChangeText = { (textNote) => this.props.globalChangeTextNote(textNote) }
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    topBar : {
        flexDirection : 'row',
        backgroundColor : 'transparent',
        justifyContent : 'space-between',
        borderBottomWidth : 0.5,
        padding : 9
    },
    innerIcons : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '40%'
    },
    bottomBar : {
        flexDirection : 'row',
        position : 'absolute',
        backgroundColor : 'transparent',
        bottom : 0,
        width : '100%',
        justifyContent : 'space-between',
        alignItems : 'flex-end',
        borderTopWidth : 0.2,
        height : '6%',
        padding : 6
    },
    topAndBottomBar : {
        flexDirection : 'column',
        flex : 1,
        position : "relative",
    },
    titleAndNote : {
        flexDirection : 'column',
        width : '100%',
    },
    note : {
        height : '60%',
        fontSize : 30,
        textAlignVertical : "top"
    }
})