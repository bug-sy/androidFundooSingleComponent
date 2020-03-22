import * as React from 'react';
import { Button, Input } from 'react-native-elements';
import { TextField } from 'material-bread';
import { Text, View, Image, ScrollView } from 'react-native';
import { SignUp } from './SignUpDataLayer'

export default class SignUpBeforeLogin extends React.Component {
    state = {
        firstName : '',
        lastName : '',
        userName : '',
        password : '',
        confirmPassword : '',
        emailerror : '',
        emailError : '',
        passwordError : '',
        passworderror : '',
    };

    handleEmailandPassword = (firstName, lastName, email, password) => {
        if (!email || !password) {
            if (!email && !password) {
                this.setState({
                    emailerror : "please enter email",
                    emailError : true,
                    passworderror : "please enter password",
                    passwordError : true
                })
            }

            else if (!email) {
                this.setState({
                    emailerror : "please enter email",
                    emailError : true
                })
            }

            else if (!password) {
                this.setState({
                    passworderror : "please enter password",
                    passwordError : true
                })
            }
        }

        else {
            SignUp(firstName, lastName, email, password, (notes) => {
                this.props.navigation.navigate('Login')
            })
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style = {{ justifyContent : 'flex-start', flex : 1, alignItems : 'center' }}>

                    <View style = {{ width : 280, alignItems : 'center', justifyContent : 'space-between', flexDirection : 'row', height : 120 }} >
                        <Text style = {{ fontSize : 20, fontWeight : 'bold', color : 'skyblue' }} h1>Fundoo</Text>
                        <View style = {{ flexDirection : 'row', alignItems : 'flex-start' }}>
                            <View ><Text style = {{ color : '#4285F4', fontSize : 40, fontWeight : 'bold', }}>G</Text></View>
                            <View><Text style = {{ color : '#DB4437', fontSize : 40, fontWeight : 'bold' }}>o</Text></View>
                            <View ><Text style = {{ color: '#F4B400', fontSize: 40, fontWeight : 'bold' }}>o</Text></View>
                            <View ><Text style = {{ color : '#4285F4', fontSize : 40, fontWeight : 'bold' }}>g</Text></View>
                            <View ><Text style = {{ color : '#0F9D58', fontSize : 40, fontWeight : 'bold' }}>l</Text></View>
                            <View ><Text style = {{ color : '#DB4437', fontSize : 40, fontWeight : 'bold' }}>e</Text></View>
                        </View>
                    </View>

                    <View style = {{ width : 200, alignItems : 'center', justifyContent : 'center', height : 80 }} >
                        <Text style = {{ fontSize : 30 }}>Signup Page</Text>
                    </View>

                    <View style = {{ width : 320, height : 340, justifyContent : 'space-between' }} >
                        <TextField
                            label = 'First Name'
                            labelStyle = {{ backgroundColor : 'transparent' }}
                            errorMessage = 'Please Enter The First Name '
                            type = { 'outlined' }
                            value = { this.state.firstName }
                            onChangeText = { firstName => this.setState({ firstName : firstName }) }
                        />
                        <TextField
                            type = { 'outlined' }
                            label = 'Last Name'
                            labelStyle = {{ backgroundColor : 'transparent' }}
                            value = { this.state.lastName }
                            onChangeText = { lastName => this.setState({ lastName: lastName }) }
                        />
                        <TextField
                            type = {'outlined'}
                            label = 'Username'
                            labelStyle = {{ backgroundColor: 'transparent' }}
                            error = { this.state.emailError }
                            value = { this.state.username }
                            onChangeText = { username => this.setState({ username: username }) }
                            helperText = {this.state.emailerror}
                        />
                        <TextField
                            type = { 'outlined' }
                            label = 'Password'
                            labelStyle = {{ backgroundColor: 'transparent' }}
                            error = { this.state.passwordError }
                            helperText = { this.state.passworderror }
                            secureTextEntry = { true }
                            value = { this.state.password }
                            onChangeText = { password => this.setState({ password: password }) }
                        />
                        <TextField
                            type = {'outlined'}
                            label = 'Confirm Password'
                            secureTextEntry = { true }
                            labelStyle = {{ backgroundColor: 'transparent' }}                    
                            value = { this.state.confirmPassword } 
                            onChangeText = { confirmPassword => this.setState({ confirmPassword: confirmPassword }) } 
                        />
                    </View>

                    <View style = {{ height : 80, justifyContent : 'center', top : 0, width : 210 }}>
                        <Button
                            title = "Sign UP"
                            type = "outline"
                            raised = "true"
                            onPress = { (e) => this.handleEmailandPassword(this.state.firstName, this.state.lastName, this.state.username, this.state.password) }
                        />
                    </View>

                </View>
            </ScrollView>
        );
    }
}