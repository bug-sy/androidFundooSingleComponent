import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import EditNotes from '../EditNotes/EditNotes'
import { deleteUserNote, updateUserNote } from '../SignUpDataLayer'
import ColorPalette from 'react-native-color-palette'

export default class VerticalIconOfEdit extends React.Component {
    state = {
        visible : false,
        check : false,
        keyForDeletion : null,
       // pin : false,
        text : '',
        pinStatus : false,
        archiveStatus : false,
        trashStatus : false,
        title : '',
        textNote : '',
        togglePinOrUnpin : false,
        toggleAlertion : false,
        archive : false,
        reminderDate : '',
        reminderTime : '',
        bgColor : ''
    };

    _openMenu = () => this.setState({ visible : true });
    _closeMenu = () => this.setState({ visible : false });

    globalDeletion(keyForDeletion)
    {
        this.setState({keyForDeletion : keyForDeletion})
    }

    handleBgColour = (col) => {
        console.log(" color in updation ",col)
    }


  globalChangePin(pinStatus){
    this.setState({ pinStatus : pinStatus },()=>{
      console.log("Hi there checkToggle  ----->", this.state.pin)
    })
  }

  globalChangeArchive(archive){
    this.setState({ archive : archive },()=>{
      console.log("archive status is  ----->", this.state.archive)
    })
  }

  globalChangeTitle(title){
    this.setState({ title : title },()=>{
      console.log("text is  ----->", this.state.title)
    })
  }

  globalChangeTextNote(textNote){
    this.setState({ textNote : textNote },()=>{
      console.log("textNote is  ----->",this.state.textNote)
    })
  }

  handleDateTime = (date, time) => {
    console.log("jhjhjh->", date, time)
    this.setState({ reminderDate: date, reminderTime: time }, () => {
        console.log("what time this time ------->>>>", this.state.reminderDate, this.state.reminderTime)
    })
  }

  handleTrashStatus = () => {
    updateUserNote({
        pinStatus : this.state.pinStatus,
        archiveStatus : this.state.archiveStatus,
        trashStatus : true,
        title : this.state.title,
        textNote : this.state.textNote,
    }, this.state.noteUpdationId)
}

    handleNoteStatus = (propActivity) => {  
        if(propActivity == 'Archive')
        {
        this.state.pinStatus == true
        ?
        updateUserNote({
            pinStatus : this.state.pinStatus,
            archiveStatus : false,
            title : this.state.title,
            textNote : this.state.textNote,
            reminderDate : this.state.reminderDate,
            reminderTime : this.state.reminderTime
        }, this.state.noteUpdationId)
        :
        updateUserNote({
            pinStatus : this.state.pinStatus,
            archiveStatus : this.state.archiveStatus,
            title : this.state.title,
            textNote : this.state.textNote,
            reminderDate : this.state.reminderDate,
            reminderTime : this.state.reminderTime
        }, this.state.noteUpdationId)
    }  
    else if(propActivity == 'Reminder') {
        this.state.archiveStatus == true
        ?
        updateUserNote({
            pinStatus : this.state.pinStatus,
            archiveStatus : !this.state.archiveStatus,
            title : this.state.title,
            textNote : this.state.textNote,
            reminderDate : this.state.reminderDate,
            reminderTime : this.state.reminderTime
        }, this.state.noteUpdationId)
        :
        updateUserNote( {
            pinStatus : this.state.pinStatus,
            archiveStatus : this.state.archiveStatus,
            title : this.state.title,
            textNote : this.state.textNote,
            reminderDate : this.state.reminderDate,
            reminderTime : this.state.reminderTime
        }, this.state.noteUpdationId)
    }      
    else 
    {
        {console.log("Pinnnnnnnnnnn", this.state.pinStatus,
        this.state.archiveStatus,
     this.state.title,
     this.state.textNote,
       this.props.bgColor,)}
        this.state.archiveStatus == true
        ?
        updateUserNote( {
            pinStatus : false,
            archiveStatus : this.state.archiveStatus,
            title : this.state.title,
            textNote : this.state.textNote,
            bgColor : this.state.bgColor,
            reminderDate : this.state.reminderDate,
            reminderTime : this.state.reminderTime
        }, this.state.noteUpdationId)
        :
        updateUserNote({
            pinStatus : this.state.pinStatus,
            archiveStatus : this.state.archiveStatus,
            title : this.state.title,
            textNote : this.state.textNote,
            bgColor : this.state.bgColor,
            reminderDate : this.state.reminderDate,
            reminderTime : this.state.reminderTime
        }, this.state.noteUpdationId)
    }
    }


  handleDateTime = (date, time) => {
    console.log("jhjhjh->", date, time)
    this.setState({ reminderDate: date, reminderTime: time }, () => {
        console.log("what time this time ------->>>>", this.state.reminderDate, this.state.reminderTime)
    })
  }

    componentDidMount() {
        
        this.setState({
            noteUpdationId : this.props.navigation.state.params.noteId,
            noteId : this.props.navigation.state.params.noteId,
            pinStatus : this.props.navigation.state.params.pin,
            title : this.props.navigation.state.params.titleOfCurrentNote,
            textNote : this.props.navigation.state.params.note,
            archiveStatus : this.props.navigation.state.params.archive,
            label : this.props.navigation.state.params.label,
            bgColor : this.props.navigation.state.params.bgColor,
            trashTag : this.props.navigation.state.params.trashTag
            
        })
    }

    render() {
        const { navigation } = this.props
        const activityProp = navigation.getParam('activityProp','no value')
        //const label = navigation.getParam('label','no value')
        console.log("activity Prop prop prop prop prop prop ------------>",activityProp)
        {console.log("Pinnnnnnnnnnn", this.state.pinStatus,
        this.state.archiveStatus,
     this.state.title,
     this.state.textNote,
       this.props.bgColor,)}
        return (
            <Provider >

                <EditNotes
                    navigation = { this.props.navigation }
                    globalDeletion = { this.globalDeletion.bind(this) }
                    pinStatus = { this.state.pinStatus }
                    globalChangePin = { this.globalChangePin.bind(this) }
                    archive = { this.state.archive }
                    globalChangeArchive = { this.globalChangeArchive.bind(this) }
                    title = { this.state.title }
                    globalChangeTitle = { this.globalChangeTitle.bind(this)}
                    textNote = { this.state.textNote }
                    globalChangeTextNote = { this.globalChangeTextNote.bind(this)}
                    handleNoteStatus = { this.handleNoteStatus }
                    handleDateTime = { this.handleDateTime }
                    bgColor = { this.state.bgColor }
                    activityProp = { activityProp }
                />
                <View
                    style = {{
                        bottom : 0,
                        position : 'absolute',
                        flexDirection : 'row',
                        justifyContent : 'space-between',
                        width : '100%',
                        elevation : 40,
                        padding : 8
                    }}>
                    <TouchableOpacity  >
                        <Image
                            style = {{ height : 30, width : 40, top : '5%' }}
                            source = {require('/root/Desktop/fun-fundooApp/image/addition.png')}
                        />
                    </TouchableOpacity>
                   
                        {activityProp !== 'Trash'
                        ?
                        <Menu      
                            visible = { this.state.visible }
                            onDismiss = { this._closeMenu }
                            anchor = {
                            <TouchableOpacity onPress = {() => { this._openMenu() }} style = {{ width : '100%' }}>
                                <Image
                                    style = {{ height : 30, width : 30, top : '5%' }}
                                    source = { require('/root/Desktop/fun-fundooApp/image/verticalMenu.png') }
                                />
                            </TouchableOpacity>
                            }
                            style = {{ width : '100%', paddingBottom : 30 }}
                        >
                        <Menu.Item icon = { require('/root/Desktop/fun-fundooApp/image/trash.png') } onPress = { () => { this.handleTrashStatus(),this.props.navigation.navigate('Dashboard') }} title = "Delete" />
                        <Menu.Item icon = { require('/root/Desktop/fun-fundooApp/image/CopyIcon.png') } onPress = { () => { } } title = "Make a copy" />
                        <Menu.Item icon = { require('/root/Desktop/fun-fundooApp/image/SendIcon.png') } onPress = { () => { } } title = "Send" />
                        <Menu.Item icon = { require('/root/Desktop/fun-fundooApp/image/addaccount.png') } onPress = { () => { } } title = "Collaborator" />
                        <Menu.Item icon = { require('/root/Desktop/fun-fundooApp/image/outline_label_black_48dp.png') } onPress = { () => {this.props.navigation.navigate('LabelInNote',{"noteId" :this.state.noteId,"label":this.state.label}),console.log("---------------------------",this.state.noteId)} } title = "Labels" />
                        <ColorPalette
                            title = ''
                            onChange =  { color => this.setState({ bgColor: color }, () => { this.handleBgColour(this.state.bgColor) }) }
                            defaultColor = { '#ffff' }
                            colors={[
                                '#ffffff', '#f28b82', 
                                '#fbbc04', '#fff475',
                                '#ccff90', '#a7ffeb', 
                                '#d7aefb', 
                            ]}/>
                            </Menu>
                            :
                            <Menu
                                visible = { this.state.visible }
                                onDismiss = { this._closeMenu }
                                anchor = {
                                    <TouchableOpacity onPress = {() => { this._openMenu() }} style = {{ width : '100%' }}>
                                        <Image
                                            style = {{ height : 30, width : 30, top : '5%' }}
                                            source = { require('/root/Desktop/fun-fundooApp/image/verticalMenu.png') }
                                        />
                                    </TouchableOpacity>
                                }
                                style = {{ width : '100%', paddingBottom : 30 }}
                            > 
                            <Menu.Item icon = { require('/root/Desktop/fun-fundooApp/image/trash.png') } onPress = { () => { deleteUserNote(this.state.noteUpdationId),this.props.navigation.navigate('Dashboard') }} title = "Delete" />
                            <Menu.Item icon = { require('/root/Desktop/fun-fundooApp/image/CopyIcon.png') } onPress = { () => { } } title = "Make a copy" />
                            </Menu>
                        }
              
                </View>
            
            </Provider>
        );
    }
}