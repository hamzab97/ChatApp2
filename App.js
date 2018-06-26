import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import { Home } from './src/Components/Home.js'
import { chat } from './src/Components/chat.js'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key = 'root' style = {{paddingTop: 64}}>
                    <Scene key = 'Home' component = {Home} title = 'Home'/>
                    <Scene key = 'chat' component = {chat} title = 'Chat'/>
                </Scene>
            </Router>
            //<Text>Hello</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
