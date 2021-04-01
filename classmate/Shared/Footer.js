import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ChartIcon from 'react-native-vector-icons/AntDesign'
export default function Footer() {
    return (
        <View style={styles.overview}>
            <View style={styles.Daddy}>
                <ChartIcon name="linechart" style={styles.iconStyling} />
                <Text style={styles.textclass}>progress</Text>
            </View>
            <View style={styles.Daddy}>
                <Icon name="file-text" style={styles.iconStyling} />
                <Text style={styles.textclass}>notes</Text>
            </View>
            <View style={styles.Daddy}>
                <Icon name="external-link" style={styles.iconStyling} />
                <Text style={styles.textclass}>links</Text>
            </View>
            <View style={styles.Daddy}>
                <Icon name="clipboard" style={styles.iconStyling} />
                <Text style={styles.textclass}>to-do</Text>
            </View>
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
    },
    Daddy:{
        
        width:"90px",
        height:"65px"
    }
    iconStyling:{
        position:"relative",
        width:"35px",
        height:"31px",
        padding:"14px 28px 20px 28px"
    }
    textclass:{
        position: "relative",
        width: "47px",  
        height: "14px",
        textAlign:"center",
        fontFamily: "Roboto monospace",   
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "14px",
        color: #000000;
    }
})
