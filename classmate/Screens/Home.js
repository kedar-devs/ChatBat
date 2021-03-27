import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated,Button  } from 'react-native';

 const FadingView=(props)=>{
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated.timing(fadeAnim,
            {
                toValue:1,
                duration: 4000
            }).start();
            return()=>{
                Animated.timing(
                 fadeAnim,
                 {
                   toValue: 0,
                   duration: 1000,
                 }
               ).start();
               }
           
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
    navigation.navigate('SubjectScreen')
   }
    return(
        <View style={styles.container}>
            <FadingView style={{width: 250, height: 50, backgroundColor: 'black'}}>
                    <Text style={styles.Heading}>Class-Mate</Text>
                    <Button 
                    style={styles.buttonMash}
                    onPress={GoSub()}
                    title="Start"
                    />
            </FadingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    Heading:{
        fontSize: 28, 
        textAlign: 'center', 
        margin: 10,
        color:'white'
    },
    buttonMash:{
      alignItems: 'center',
      color:"#000080"  
    }
  });
  