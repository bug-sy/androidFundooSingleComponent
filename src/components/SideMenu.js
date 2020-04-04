
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import { Divider, } from 'react-native-paper';
import { getProfilePic } from '../SignUpDataLayer'

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      toggleGridOrList : false ,
      avatarSource : '',
      profilePic : ''
    }
  }

  componentDidMount() {
    getProfilePic((profilePic) => {
      this.setState({
        profilePic : profilePic
      }, () => {
      })
    })
  }

  navigateToScreen = (route,xyz) => () => {
    console.log("xyz------------------------------------------------------------------------------------------------------------------------",xyz)
  this.props.navigation.navigate(route,{value: xyz})
  }

  render () {
    return (
      <View style = { styles.container }>
        <ScrollView>
          <View>
         
            <View style={ styles.navSectionStyle }>
            <Avatar rounded 
              title = "MD"  
              source = {
              this.state.profilePic
              }
              size = "xlarge"
              overlayContainerStyle = {{ backgroundColor: 'blue', width :180, marginBottom : 5, marginLeft : 40}}
            />
             <Divider/>
              <Text style = { [styles.navItemStyle,{ marginTop : 10}] } onPress = { this.navigateToScreen('Dashboard', {
            xyz: 'dashboard',
          }) }>
                Dashboard
              </Text>
              <Text style = { styles.navItemStyle } onPress = { this.navigateToScreen('CreateLabel') }>
                CreateLabel
              </Text>
              <Text style = { styles.navItemStyle } onPress = { this.navigateToScreen('ReminderPage',  {
            xyz: 'ReminderPage',
          }) }>
                ReminderPage  
              </Text>
              <Text style = { styles.navItemStyle } onPress = { this.navigateToScreen('Piechart') }>
                Piechart 
              </Text>
               <Text style = { styles.navItemStyle } onPress = { this.navigateToScreen('Drag') }>
               Drag
              </Text> 
             
            </View>
          </View>
          <View>
          <Divider/>
            <View style = { styles.navSectionStyle }>
              <Text style = { styles.navItemStyle } onPress = { this.navigateToScreen('Archive', {
            xyz: 'Archive',
          }) }>
              Archive
              </Text>
              <Text style = { styles.navItemStyle } onPress = { this.navigateToScreen('TrashNotes', {
            xyz: 'TrashNotes',
          }) }>
              TrashNotes
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style = { styles.footerContainer }>
          <Text>Fundoo App</Text>
        </View>

      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
      },
      navItemStyle: {
        padding: 15,
        fontSize : 20,
      },
      navSectionStyle: {
        marginBottom : 70,
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
      }
  });

export default SideMenu;