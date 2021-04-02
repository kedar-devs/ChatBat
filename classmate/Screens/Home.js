import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated,Button,TouchableOpacity  } from 'react-native';

 const FadingView=(props)=>{
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated.timing(fadeAnim,
            {
                toValue:1,
                duration: 4000,
               
            }).start();
            setTimeout(()=>{
                Animated.timing(
                 fadeAnim,
                 {
                   toValue: 0,
                   duration: 4000,
                 
                 }
               ).start();
               },3000)
           
    },[fadeAnim])
    return(
        <Animated.View                 
      style={{
        ...props.style,
        opacity: fadeAnim,        
      }}
    >
      {props.children}
    </Animated.View>
    )
 }
 
export default function Home({navigation}){
   
  const GoSub=()=>{
    navigation.navigate('subject')
   }
   const Gologin=()=>{
     navigation.navigate('login')
   }
   const Gosignin=()=>{
     navigation.navigate('signup')
   }
    return(
        <View style={styles.container}>
            <FadingView style={{width: 250, height: 50, backgroundColor: 'green'}}>
                    <Text style={styles.Heading}>Class-Mate</Text>
            </FadingView>
            <Button title="Sign-Up" onPress={()=>Gosignin}>
            </Button>
            <Button title="Login" onPress={()=>Gologin}/>
            <Text>if you wanna continue without login press</Text>
            <TouchableOpacity onPress={()=>GoSub}>
              <Text>
              skip
              </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#00ff00"
    },
    Heading:{
        fontSize: 28, 
        textAlign: 'center', 
        margin: 10,
        color:'white'

    },
    buttonMash:{
      height:"50px",
      width:"120px",
      marginBottom:10,
      alignItems: 'center',
      color:"#000080" ,
      fontSize:18,
      backgroundColor:"#FFFFFF",
    }
  });
  