import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'
class App extends Component
{
    componentWillMount()
    {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyB8bxEeX0rBMcLVpfU6ITZhiBg-Wm4KOXE',
                authDomain: 'auth-f25a6.firebaseapp.com',
                databaseURL: 'https://auth-f25a6.firebaseio.com',
                storageBucket: 'auth-f25a6.appspot.com',
                messagingSenderId: '630468582625'
            }
        );
    }

    render()
    {
        return (
            <View>
                <Header headerText = 'Authentication'/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;