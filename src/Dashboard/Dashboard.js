
import { Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import React, { Component } from 'react'
import { Text, Image, ScrollView } from 'react-native';
import Drawer from '../components/Drawer'
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import FlatlistNotes from '../FlatlistNotes/FlatlistNotes'
import FlatListNotesUnpinned from '../FlatlistNotes/FlatListNotesUnpinned'
import { handleProfilePic, getProfilePic } from '../SignUpDataLayer'

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            toggleGridOrList : false ,
            avatarSource : '',
            //profilePic : '',
            condition : '',
        }
        getProfilePic((profilePic) => {
            this.setState({
              profilePic : profilePic
            }, () => {
            console.log("*******************************")
         console.log("*******************************")
         console.log("*******************************")
         console.log(this.state.profilePic.uri)
            })
          })
    }


    handleImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log("profile pic",source)
                this.setState({
                    avatarSource:  source 
                })
                handleProfilePic({ imageUrl : this.state.avatarSource })
                console.log("avatar source",this.state.avatarSource)
            }
          });
        
        }



    render() {
        const { navigation } = this.props
        const xyz =  navigation.getParam('value','noValue')
        //const label = navigation.getParam('label','no value')
        console.log("name**********************")
        console.log("name**********************")
        console.log("kjkjkjkj**********************",this.props.propName )
        console.log("xyz**********************",Object.values(xyz))
      // {()=> this.setState({ condition : xyz }) }
        return (
            <View style = {{ flex : 1, flexDirection : 'column' }}>

                <View style = {{ width : '100%', flexDirection : 'row', height : 45, backgroundColor: '#999966', padding : 4, elevation : 20 }}>
                    <View style = {{ flexDirection : 'row', width : '80%' }}>
                        <View style = {{ flexDirection : 'row' }}>
                            <TouchableOpacity style = {{ width : '12%' }}
                                onPress = {() => this.props.navigation.toggleDrawer(Drawer)}
                            >
                                <Image
                                    style = {{ height : 34, width : 40 }}
                                    source = { require('/root/Desktop/fun-fundooApp/image/menuIcon2.png') }
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style = {{ width : '87%', height : '100%', justifyContent : 'center', flexDirection : 'row' }}
                            onPress = { () => this.props.navigation.navigate('SearchNotes') }>
                                <Text
                                    style = {{ fontSize : 25 }}
                                >
                                    Search your Notes
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {{ flexDirection : 'row', justifyContent : 'space-between', width : '25%' }}>
                            {
                                this.state.toggleGridOrList != false
                                    ?
                                    <TouchableOpacity onPress = { () => this.setState({ toggleGridOrList : !this.state.toggleGridOrList }) }>
                                        <Image
                                            style = {{ height : 39, width : 30 }}
                                            source = { require('/root/Desktop/fun-fundooApp/image/grid.png') }
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress = {() => this.setState({ toggleGridOrList : !this.state.toggleGridOrList })}>
                                        <Image
                                            style = {{ height : 39, width : 30 }}
                                            source = { require('/root/Desktop/fun-fundooApp/image/list.png') }
                                        />
                                    </TouchableOpacity>
                            }
                            <TouchableOpacity
                            >
                                <Avatar rounded title = "MD"  
                                onPress = { () => this.handleImage() } 
                                source = {
                                    this.state.profilePic
                                  }
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {
                 this.props.propName == 'Pin'
                ?
                <ScrollView>
                    <View style = {{ justifyContent : 'center' }}>
                        <FlatlistNotes
                            navigation = { this.props.navigation }
                            toggleGridOrList = { this.state.toggleGridOrList }
                            propName = { this.props.propName }
                        />
                    </View>
                    <View style = {{ justifyContent: 'center', marginBottom: 45 }}>
                        <FlatListNotesUnpinned
                            navigation = { this.props.navigation }
                            toggleGridOrList = { this.state.toggleGridOrList }
                            propName = { this.props.propName }
                        />
                    </View>
                </ScrollView>
                :
                <ScrollView>
                         <View style = {{ justifyContent : 'center' }}>
                        <FlatlistNotes
                            navigation = { this.props.navigation }
                            toggleGridOrList = { this.state.toggleGridOrList }
                            propName = { this.props.propName }
                        />
                    </View>
                </ScrollView>
                }
                 {
                 this.props.propName == 'Pin'
                 ?
                <View style = {{ flexDirection : 'row', bottom : 0, position : 'absolute', backgroundColor : '#999966' }}>
                    <View style = {{
                        flexDirection : 'row',
                        flex : 1,
                        width : '100%',
                        justifyContent : 'space-between',
                        padding : 6,
                        elevation : 12
                    }}>
                        <TouchableOpacity style = {{ width : '60%' }} onPress = { () => this.props.navigation.navigate('VerticalIcon') }>
                            <Text
                                style = {{ fontSize : 25, width : '100%' }}
                            >
                                Add a note
                            </Text>
                        </TouchableOpacity>
                        <View style = { styles.bottomicons }>
                            <TouchableOpacity>
                                <Image
                                    style = {{ height : 33, width : 40 }}
                                    source = { require('/root/Desktop/fun-fundooApp/image/edit.png') }
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    style = {{ height : 32, width : 30 }}
                                    source = { require('/root/Desktop/fun-fundooApp/image/check-box.png') }
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style = {{ height: 34 }}>
                                <Image
                                    style = {{ height: 32, width: 32 }}
                                    source = { require('/root/Desktop/fun-fundooApp/image/add_image.png') }
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style = {{ height: 34 }}>
                                <Image
                                    style = {{ height: 32, width: 30 }}
                                    source = { require('/root/Desktop/fun-fundooApp/image/audio_recording.png') }
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                :
                null
    }
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 10
    },
    button : {
        backgroundColor : '#DDDDDD',
        justifyContent : 'flex-start',
        flexDirection : 'column',
        width : '5%',
        height : '100%',
        alignItems : 'center'
    },
    countContainer : {
        alignItems : 'center',
        padding : 10
    },
    countText : {
        color : '#FF00FF'
    },
    appbar : {
        width : '100%',
        justifyContent : "center",
        flex : 1,
        alignItems : "stretch",
        backgroundColor : 'pink',
        elevation : 10
    },
    bottom : {
        flexDirection : 'row',
        flex : 1,
        backgroundColor : 'green',
        width : '90%',
        justifyContent : 'flex-start',
        elevation : 10
    },
    bottomicons : {
        flexDirection : 'row',
        width : '40%',
        justifyContent : 'space-around',
    },
    fullPage : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
})