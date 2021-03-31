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
    width: "51px",
    height: "50px",
    left: "301px",
    top: "518px",
  }
})