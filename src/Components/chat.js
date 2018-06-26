import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

class chat extends React.Component{
    state = {
        messages: []
    };
    render(){
        return(
            <GiftedChat
                messages = {this.state.messages}
                onSend={(message) => {
                    //receive message as parameter, and send it to backend
                }}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}

Chat.defaultProps = {
    name: 'Hamza'
};

Chat.propTypes = {
    name: React.propTypes.string, /** set value for the props**/
};

export default chat;