import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name:
                </Text>
                <TextInput>
                    style={styles.nameInput}
                    placeholder='Hamza'
                    onChangeText={(text)=>{ //receive parameter text
                        this.setState({
                            name: text,
                        })
                }}
                value={this.state.name}
                </TextInput>
                <TouchableOpacity>
                    onPress{()=>{
                        console.log(this.state.name);
                        //navigate to second screen and pass the name
                    Actions.chat({ //use chat because thats the keyu we gave to the chat screen
                        name:this.state.name
                    })
                }}
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title:{
        marginTop:20,
        marginLeft:20,
        fontSize:20,
    },
    nameInput:{
        height:40,
        borderWidth:2,
        borderColor:'black',
        margin:20,
    },
    buttonText:{

    }
});

export default Home;