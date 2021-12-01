/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useCallback, useEffect, useState } from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   FlatList,
   Text,
   Button,
   TouchableOpacity,
   TextInput,
   useColorScheme,
   Image,
   View,
   Touchable,
 } from 'react-native';


 const TodoList=() => {
    const [getData, setData] = useState([]);
    const [TodoListName, setTodoListName] = useState('');

    const insertData = useCallback(() =>{
        setData([...getData, TodoListName])   
    },[TodoListName, getData])

    const RemoveData = useCallback((index) =>{console.log(index)
        const Temp = [...getData]
        Temp.splice(index , 1);
        console.log(Temp)
        setData(Temp)   
        
    }, [getData])
    

   return (
     <SafeAreaView style={styles.box}> 
      <View style
      ={styles.titleBox}>
          <Text style={styles.title}>Inscription</Text>
      </View>     
      <View style={styles.todoForm}>

      <FlatList data={getData} style={styles.flatBox} renderItem={({item, index}) => {
            return <View style={styles.todoFormClass}><Text style={styles.todoFormText} ref={index}>{item}</Text><TouchableOpacity onPress={()=>RemoveData(index)} style={styles.todoFormButton}><Text style={styles.todoFormBtnText}>X</Text></TouchableOpacity></View>
         
        }}/>
     </View>
      <View style={styles.boxBlue}>
      <TextInput style={styles.input} onEndEditing={insertData} onChangeText={setTodoListName} value={TodoListName} placeholder="A faire ..."/>
     </View>
     </SafeAreaView>
   );
 };
 const styles = StyleSheet.create({
    box: {
        flex: 1,
    },
    titleBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    todoForm: {
        flex: 8,
        padding:20
        
    },
    todoFormText:{
        color: 'white'
    },
    todoFormBtnText:{
        color: 'white',
        justifyContent:'center',
        textAlign: 'center',
    },
    todoFormButton:{
        backgroundColor:'red',
        width:30
    },
    todoFormClass: {
        backgroundColor: "#333",
        marginVertical:10,
        justifyContent:'center',
        padding:10,

        height:50
    },
    boxBlue: {
        flex: 1,
        backgroundColor: 'blue'
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
 });
 
 export default TodoList;
 