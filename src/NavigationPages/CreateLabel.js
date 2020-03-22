
import React, { Component } from 'react'
import { Text, Image, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { Divider, } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { createLabelNote, getLabels } from '../SignUpDataLayer'
import UpdateLabel from '../UpdateLabel/UpdateLabel'

export default class CreateLabel extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            label : '',
            addLabel : false,
            displayLabel : null,
            editLabel : ''
        }
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
        return (
            <ScrollView>
                <View style = { styles.container }>
                    <View style={ styles.editFullLabel }>

                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('Dashboard') }
                            style={{ width: '15%' }}
                        >
                            <Image
                                style = {{ height: 50, width: 32 }}
                                source = { require('/root/Desktop/fun-fundooApp/image/outline_arrow_bac.png') }
                            />
                        </TouchableOpacity>

                        <Text style = { styles.editLabel }>
                            Edit Labels
                        </Text>



                    </View>
                    <Divider/>
                    <View>
                        {
                            this.state.addLabel
                                ?



                                <View style = { styles.createLabelToggled }>

                                    <TouchableOpacity
                                        style = {{ width : '15%' }}
                                        onPress = { () => this.setState({ addLabel : !this.state.addLabel }) }
                                    >
                                        <Image
                                            style = {{ height : 50, width : 32 }}
                                            source = { require('/root/Desktop/fun-fundooApp/image/outline_add_black_.png') }
                                        />
                                    </TouchableOpacity>

                                    <Text style = {{ fontSize: 28 }}>
                                        Create New Label
                                    </Text>

                                </View>
                                :

                                <View style = { styles.createLabel }>
                                    <TouchableOpacity
                                       onPress = { () => this.setState({ addLabel : !this.state.addLabel }) }              
                                    >
                                        <Image
                                            style = {{ height: 50, width: 32 }}
                                            source = {require('/root/Desktop/fun-fundooApp/image/outline_close_black.png')}
                                        />
                                    </TouchableOpacity>

                                    <TextInput
                                        placeholder = "Create New Label"
                                        multiline = { true }
                                        value = { this.state.label }
                                        onChangeText = { label => this.setState({ label: label }) }
                                    />

                                    <TouchableOpacity
                                        onPress = { () => { this.setState({ addLabel: !this.state.addLabel }), this.createNewLabel(this.state.label) }}
                                    >
                                        <Image
                                            style = {{ height: 50, width: 32 }}
                                            source = { require('/root/Desktop/fun-fundooApp/image/outline_done_black.png') }
                                        />
                                    </TouchableOpacity>
                                </View>


                        }

                    </View>
                    <Divider />
                    { this.state.displayLabel !== null &&
                        Object.getOwnPropertyNames(this.state.displayLabel).map((key) => (
                            <UpdateLabel
                                labelName = { this.state.displayLabel[key].labelName }
                                labelKey = { key }
                            />
                        ))}

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
        justifyContent : 'space-between',
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
        fontSize : 35,
        height : '100%',
        width : '70%',
        alignItems : 'center'
    },
    divideLine : {
        color : 'red'
    }
});

