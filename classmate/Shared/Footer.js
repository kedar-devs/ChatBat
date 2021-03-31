import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Footer(props) {
    return (
        <View style={styles.overview}>
            
        </View>
    )
}
const styles = StyleSheet.create({
    overview:{
        position: "absolute",
         width: "360px",
        height: "65px",
        left: "0px",
        top: "575px",
        backgroundColor: "#008000",
        border: "1px solid #000000",
        boxSizing:"border-box",
    }
})
