import React, { useRef, useEffect, useState } from 'react';
import {StyleSheet,View,Modal,Button,Alert} from 'react-native';
import t from 'tcomb-form-native';
import Card from './../Shared/Card'
import axios from 'axios';
import Plus from './../Shared/AddButton'

const Form = t.form.Form;
const SubjectData=t.struct({
    title:t.String
})
export default function Subject(){
    const [open,changeOpen]=useState(false)
    const [submap,ChangeSub]=useState('')
    useEffect(() => {
        getAllSubject()
    },[])
    const getAllSubject=()=>{
        axios.get('')
        .then(result=>{
            const allSub=result.data
            changeSub(allSub)
        })
        .catch(err=>{
            console.log(err)

        })
    }
    const submitter=()=>{
        const value=this._form.getValue()
        console.log(value)
        axios.post('',value)
        .then(result=>{
            changeOpen(!open)
            getAllSubject()
        })
        .catch(err=>{
            Alert.alert('Error:',err)
        })
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
                  <Button title="Add" onClick={submitter()}/>  
                </Modal>
                <Plus onPress={() =>changeOpen(!open)}/>
        </View>
    )


}
const styles = StyleSheet.create({

})