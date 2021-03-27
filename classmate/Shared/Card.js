import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const bgarray=[
    "./../assets/sub1.jpg",
    "./../assets/sub2.jpg",
    "./../assets/sub3.jpg",
    "./../assets/sub4.jpg",
    "./../assets/sub5.jpg",
    "./../assets/sub6.jpg",
]

export default function Card(props) {
    const DisplayCard=(props)=>{
    const {subjects}=props
    if(subjects.length>0){
    return(
        subjects.map((subject,i)=>{
            console.log(subject,i)
            return(
                <View style={{background: "linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url(" +require(bgarray[`${props.i%6}`])+ ")"}}>
                <View style={styles.card}>
                    <Text style={styles.cardContent}>
                        {subject.title}
                    </Text>
                </View>
                </View>
                )
        })
        
    )
    }
    else{
        return(
            <>
            </>
        )
    }
    }
    return(
        <>
        {DisplayCard(props)}
        </>
    )

}

const styles=StyleSheet.create({
    card:{
        height: "150px",
        margin: "20px",
        width: "300px",
        borderRadius: "20px",
        boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        "& a": {
            textDecoration:"none"
        },
         
    },
    cardContent: {
        height: "100px",
        width: "100%",
        color: "white",
        margin:"10px 0 0px 20px"
    }
})