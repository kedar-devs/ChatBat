import React, { useEffect, useState } from 'react';
import {StyleSheet,View,Modal,Button,Alert} from 'react-native';
import t from 'tcomb-form-native';
import Card from './../Shared/Card'
//import axios from 'axios';
import Plus from './../Shared/AddButton'
import Footer from './../Shared/Footer'
const Form = t.form.Form;
const SubjectData=t.struct({
    sname:t.String
})
export default function Subject(navigation){
    const [open,changeOpen]=useState(false)
    const [submap,ChangeSub]=useState([])
    useEffect(() => {
        getAllSubject()
    },[])
    const getAllSubject=()=>{
        // axios.get('')
        // .then(result=>{
        //     const allSub=result.data
        //     ChangeSub(allSub)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        ChangeSub([{
                sname:"DSA",
                id:1
        },{
            sname:"CG",
            id:2
        }])
    }
    const submitter=()=>{
        const value=this._form.getValue()
        console.log(value)
        // axios.post('',value)
        // .then(result=>{
        //     changeOpen(!open)
        //     getAllSubject()
        // })
        // .catch(err=>{
        //     Alert.alert('Error:',err)
        // })
        navigation.navigate('Home')
    }
    return(
        <View>
            <Card submap={submap} />
                <Modal
                 animationType="slide"
                 transparent={true}
                 visible={modalVisible}
                 onRequestClose={() => {
                   
                   changeOpen(!open);
                 }}
                >
                  <Form type={SubjectData} />
                  <Button title="Add" onPress={submitter()}/>  
                </Modal>
                <Plus onPress={() =>changeOpen(!open)}/>
            <Footer />
        </View>
    )


}
const styles = StyleSheet.create({

})