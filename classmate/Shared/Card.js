import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const bgarray=[
    require("./../assets/sub1.jpg"),
    require("./../assets/sub2.jpg"),
    require("./../assets/sub3.jpg"),
    require("./../assets/sub4.jpg"),
    require("./../assets/sub5.jpg"),
    require("./../assets/sub6.jpg"),
]

export default function Card(props) {
    const DisplayCard=(props)=>{
    const {subjects}=props
    if(subjects.length>0){
    return(
        subjects.map((subject,i)=>{
            console.log(subject,i)
            return(
                <View style={{background: "linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url(" +bgarray[`${i%6}`]+ ")"}}>
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
        
         
    },
    cardContent: {
        height: "100px",
        width: "100%",
        color: "white",
        margin:"10px 0 0px 20px"
    }
})