import React, { Component } from 'react'
import { Text, Image, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { updateTheLabel, deleteTheLabel } from '../SignUpDataLayer'

export default class ArchivePage extends Component {
    constructor(props) {
        super(props)
        this.state = 
        { 
        
            editLabel : '',
            toggleForEdit : false
        }
    }

    changeLabel = (text) => {
         if(text !== null){
             this.setState({
                 editLabel : text
            })
    }
    }

    deleteLabel = (labelKeyToDelete) => {
        if (labelKeyToDelete) {
            deleteTheLabel(labelKeyToDelete)
        }
    
    }

    updateLabel = (labelKeyToUpdate,labelName) => {
        const noteLabel = {
            labelName : labelName
        }
        if (noteLabel.labelName) {
            updateTheLabel(labelKeyToUpdate,noteLabel)
        }
    
    }

    render(){
        return(
            <View>
                {
                    this.state.toggleForEdit
                    ?
                 <View style={styles.createLabel}>
                                <TouchableOpacity
                                onPress = { () => this.deleteLabel(this.props.labelKey) }               
                                >
                                    <Image
                                        style={{ height: 50, width: 32 }}
                                        source={require('/root/Desktop/fun-fundooApp/image/trash.png')}
                                    />
                                </TouchableOpacity>
        
                                <TextInput
                                    multiline={true}
                                    value={ this.state.editLabel === '' ? this.props.labelName : this.state.editLabel }
                                    onChangeText = {(text) => this.changeLabel(text)}
                                />
        
                                <TouchableOpacity
                                onPress = { () => {this.updateLabel(this.props.labelKey,this.state.editLabel),this.setState({
                                    toggleForEdit : !this.state.toggleForEdit
                               })} }               
                                >
                                    <Image
                                        style={{ height: 50, width: 32 }}
                                        source={require('/root/Desktop/fun-fundooApp/image/outline_done_black.png')}
                                    />
                                </TouchableOpacity>
                                </View>
                    :
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

                    <TouchableOpacity
                    onPress = { () => { this.setState({
                        toggleForEdit : !this.state.toggleForEdit
                   })} }               
                    >
                        <Image
                            style={{ height: 40, width: 28 }}
                            source={require('/root/Desktop/fun-fundooApp/image/outline_edit_black_.png')}
                        />
                    </TouchableOpacity>
                    </View>

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

