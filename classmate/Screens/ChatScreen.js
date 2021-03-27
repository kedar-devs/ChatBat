import React,{useCallback,useState,useEffect} from 'react'
import { View, Text,Platform,KeyboardAviodingView, } from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'

const ChatScreen = (name) => {
    const [message,Setmessage]=useState([])
    const [User,getUser]=useState({})
    useEffect(()=>{
        // axios.get()
        // .then(result=>{
        //     console.log(result)
        //     Setmessage(result)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        // axios.get("")
        // .then(res=>{
        //     console.log(res)
        //     getUser(res)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        Setmessage([{
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            }
        }])
        getUser({
            _id: 1,
        })
    },[])
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        /*axios.put('')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
        */
      }, [])
    const chat=<GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={User}
  />
    if(Platform.OS=="android"){
    return (
        <KeyboardAviodingView style={{flex:"1"}} behaviour="padding" keyboardVerticalOffset={30} enabled>
            {chat}
        </KeyboardAviodingView>
    )
    }
}

export default ChatScreen
