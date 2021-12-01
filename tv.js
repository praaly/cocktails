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

 import axios from 'axios';
 const tv =() => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        const kraken = axios.create({baseURL: 'https://thecocktaildb.com/api/json/v1/1/filter.php'});
          kraken.get('?c=Cocktail').then(function (response) {
                setData(response.data['drinks']);
                console.log(response.data['drinks']);
        }).catch(function(error){
            console.log(error);
        });
    },[])

   return (
     <SafeAreaView style={styles.box}> 
      <View style
      ={styles.titleBox}>
          <Text style={styles.title}>TWITCH SEARCH</Text>
      </View>     
      <View style={styles.todoForm}>
      <FlatList data={data} style={styles.flatBox} numColumns={2} renderItem={({item, index}) => {
            return <View style={styles.todoFormClass}><Text style={styles.todoFormText} ref={index}>{item['strDrink']}</Text>
                    <Image source={{uri: item['strDrinkThumb']}} style={styles.tinyLogo} resizeMode='cover'></Image>
                    </View>
         
        }}/>
     </View>
      <View style={styles.boxBlue}>
 
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
        width: 100,
        height: 100,
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
    todoFormClass: {
        width:'50%',
        backgroundColor: "#333",
        alignItems: 'center',
        justifyContent: 'space-around', 
        padding:10,
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
 
 export default tv;
 