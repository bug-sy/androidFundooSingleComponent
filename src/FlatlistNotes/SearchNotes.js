
import React, { Component } from 'react'
import { Chip } from 'react-native-paper';
import Constants from 'expo-constants';
import { getNotes } from '../SignUpDataLayer/'
import { Text, Image, StyleSheet, TouchableOpacity, View, TextInput, FlatList, SafeAreaView } from 'react-native';

export default class SearchNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text : '',
            notes : '',
            data : '',
            editLabel : '',
        }
    }

    changeLabel = (text) => {
        if(text !== null){
            this.setState({
                editLabel : text
           })
    }
    }

    componentDidMount() {
        getNotes((notes) => {
            this.setState({
                notes: notes
            }, () => {
                Object.keys(this.state.notes).map(() => {
                })
            })
        })
    }

    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.title.toUpperCase()}  ${item.textNote.toUpperCase()}
           `;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({ data: newData });
    };

    renderHeader = () => {
        return (
            <View style={ styles.container }>

                <View style={ styles.appBarContainer }>
                    <TouchableOpacity style={{ width: '20%' }}
                        onPress={ () => this.props.navigation.navigate('Dashboard') }
                    >
                        <Image
                            style={{ height: 34, width: 40 }}
                            source={ require('/root/Desktop/fun-fundooApp/image/outline_arrow_bac.png') }
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search Your Notes"
                        multiline={ true }
                        value={ this.state.editLabel === '' ? this.props.labelName : this.state.editLabel }
                        onChangeText={ (text) => {this.searchFilterFunction(text),this.changeLabel(text)} }
                        style={{ fontSize: 16 }}
                    />
                </View>

            </View>
        );
    };

    render() {
        var moment = require('moment');
        var notes = [];
        this.arrayholder = [];
        Object.keys(this.state.notes).map((item) => {
            {
                this.state.notes[item].noteId = item
                notes.push(this.state.notes[item])
            }
        })

        this.arrayholder = notes

        const Item = ({ pinStatus, trashStatus, archiveStatus, noteId, title, textNote, reminderDate, reminderTime }) => {
            return (
                <View style = {
                    styles.listItem
                }>
                    <TouchableOpacity onPress = {() =>
                        this.props.navigation.navigate('VerticalIconOfEdit',
                            {
                                "pin" : pinStatus, "trash" : trashStatus,
                                "archive" : archiveStatus, "noteId" : noteId,
                                "titleOfCurrentNote" : title, "note" : textNote
                            })}>
                        <Text style = { styles.title }>{ title }</Text>
                        <Text style = { styles.title }>{ textNote }</Text>

                        {
                            reminderDate 
                                ?
                                <Chip icon = { require('/root/Desktop/fun-fundooApp/image/alarm.png') }
                                    style={{ width: 160 }} onPress={ () => console.log('Pressed') }>
                                    { moment(reminderDate).format("MMM Do") },{ reminderTime }
                                </Chip>
                                :
                                null
                        }
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <SafeAreaView style = { styles.containerOfFlatList }>

                <FlatList
                    data = { this.state.data }
                    renderItem = { ({ item }) => (console.log("Pinned items are ------------->>>>>> :", item)
                        ,
                        <Item
                            title = { item.title } textNote = { item.textNote }
                            noteId = { item.noteId } pinStatus = { item.pinStatus }
                            trashStatus = { item.trashStatus } archiveStatus = { item.archiveStatus }
                            reminderDate = { item.reminderDate } reminderTime = { item.reminderTime }
                        />)
                    }
                    ListHeaderComponent = { this.renderHeader }
                    stickyHeaderIndices = { [0] }
                />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        elevation : 10
    },
    containerOfFlatList : {
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
    appBarContainer : {
        width : '100%',
        flexDirection : 'row',
        height : 45,
        backgroundColor : 'grey',
        padding : 4,
        elevation : 8
    },
    title : {
        fontSize : 18,
    },
    searchNote : {
        height : '100%',
        justifyContent : 'center',
        flexDirection : 'row'
    }
});

