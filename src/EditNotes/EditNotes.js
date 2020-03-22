import React, { Component } from 'react'
import { Image, TextInput } from 'react-native';
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import CompoRemind from '../Reminder/CompoRemind'

export default class EditNotesPinned extends Component {
    constructor(props) {
        super(props)

        this.state = {
            archiveStatus : false,
            trashStatus : false,
            title : '',
            textNote : '',
            togglePinOrUnpin : false,
            toggleAlertion : false,
            toggleArchive : false,
        }
    }

    render() {
        return (
            <View style = { styles.topAndBottomBar }>

                <View style = { styles.topBar }>
                    <TouchableOpacity style = {{ width : '30%' }} onPress = { () => {
                        this.props.handleNoteStatus(this.props.activityProp), this.props.navigation.navigate('Dashboard')
                    }}>
                        <Image
                            style = {{ height : 30, width : 40 }}
                            source = { require('/root/Desktop/fun-fundooApp/image/goBack.png') }
                        />
                    </TouchableOpacity>
                    <View style = { styles.innerIcons }>
                        {
                          this.props.pinStatus 
                                ?
                                <TouchableOpacity 
                                onPress = {  () => this.props.globalChangePin(!this.props.pinStatus) }
                                
                                >
                                    <Image
                                        style = {{ height : 30, width : 32 }}
                                        source = { require('/root/Desktop/fun-fundooApp/image/pinned.png') } 
                                    />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress = { () => this.props.globalChangePin(!this.props.pinStatus) }>
                                    <Image
                                        style = {{ height : 26, width : 32 }}
                                        source = { require('/root/Desktop/fun-fundooApp/image/pin.png') }
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
                                <TouchableOpacity onPress = { () => this.props.globalChangeArchive(!this.props.archive) }>
                                    <Image
                                        style = {{ height : 33, width : 24 }}
                                        source = { require('/root/Desktop/fun-fundooApp/image/unArchive.png') }
                                    />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress = { () => this.props.globalChangeArchive(!this.props.archive) }>
                                    <Image
                                        style = {{ height : 33, width : 30  }}
                                        source = { require('/root/Desktop/fun-fundooApp/image/archive.png') }
                                    />
                                </TouchableOpacity>
                        }
                    </View>
                </View>

                <View style =   {{
                        flexDirection : 'column',
                        width : '100%',
                        backgroundColor : this.props.bgColor
                        }} >
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
        padding : 9,
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
        height : '6%',
        padding : 9,
        alignItems : 'flex-end',
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
        height : '40%',
        fontSize : 30,
        textAlignVertical : "top"
    }
})