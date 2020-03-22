import React, { Component } from 'react'
import { Text } from 'react-native';
import {
    StyleSheet,
    View,
} from 'react-native'
import { AsyncStorage } from 'react-native';

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

    componentDidMount() {
        setTimeout(()=>{

            AsyncStorage.getItem('authentication').then((auth) => {
                console.log("authentication is =============>", auth);
            
                    if(auth === "true"){
                         this.props.navigation.navigate('Drawer')    
                    }    
                    else{
                        this.props.navigation.navigate('Login')    
                    }
    
            }).catch((error) => {
                console.log(error)
            })
        ,5000})
    }

    render() {
        return (
            <View style = { styles.splashScreen }>
               <Text style = { styles.note }>Fundoo App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    splashScreen : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'grey', 
    },
    note : {
        fontSize : 40,
        padding : 40,
        fontWeight : "bold"
    }
})