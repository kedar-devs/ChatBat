import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
const LoginScreen = () => {
    const [usercred,modifyState]=useState('')
    const [password,modifyPassword]=useState('')

    onSubmit=()=>{
        // axios.post()
        // .then()
        // .catch()
        this.props.navigation.navigate("Chat",{name:usercred})
    }

    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <View style={{marginTop:64}}>
                    <Image 
                    source={require('./../assets/Chat-PNG.png')}
                    style={{width:100, height:100,alignSelf:'center'}}
                    />
                </View>
                <View style={{marginHorizontal:32}}>
                    <Text style={styles.header}>
                        Username
                        </Text>
                    <TextInput style={style.input} placeholder="Mobile Number or Username" onChangeText={usercred=>modifyState(usercred)} value={usercred} />
                    

                </View>
                <View style={{marginHorizontal:32}}>
                    <Text style={styles.header}>
                        Password
                    </Text>
                    <TextInput placeholder="Password" style={style.input} onChangeText={password=>modifyPassword(password)} type="password" value={password}/>
                </View>
                <View style={{alignItem="flex-end",marginTop:64}}>
                        <TouchableOpacity style={styles.continue}>
                            <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
           
            </View>
        </View>
    )
}
const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f4f5f2"
    },
    circle:{
        width:500,
        height:500,
        borderRadius:500/2,
        backgroundColor:"#fff",
        posiiton:"absolute",
        left:-120,
        top:-20
    },
    header:{
        fontWeight:"800",
        fontSize:30,
        color:"#514E5A",
        marginTop:32        
    },
    input:{
        marginTop:32,
        height:50,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"#3BAB73C",
        borderRadius:38,
        paddingHorizontal:16,
        color:"#514E5A",
        fontWeight:"600"
    },
    continue:{
        width:70,
        height:70,
        borderRadius:70/2,
        backgroundColor:"#9075E3",
        alignItem:"center",
        justifyContent:"center"
    }

})

export default LoginScreen
