import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import {StyleSheet, View} from 'react-native'
export default function AddButton(){
    return(
        <View>
            <Icon type="plus" style={styles.ButtonPos}/>
        </View>
    )
}
const styles=StyleSheet.create({
  ButtonPos:{
    position: "absolute",
    fontSize: "50px",
    bottom: "10px",
    right: "20px",
  }


})