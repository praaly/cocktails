/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   FlatList,
   Text,
   TextInput,
   useColorScheme,
   View,
 } from 'react-native';
 


 const Login=() => {
   return (
     <SafeAreaView style={styles.box}>    
      <View style={styles.boxGreen}>
        <FlatList data={["Pierre","Eliott","Alexandre","Axel","Etienne","Maxime", "Lucas", "Basile", "EscapeFromHorror", "AnotherNam"]} style={styles.flatBox} renderItem={({item, index}) => {
            return <View style={styles.items}><Text style={styles.title} ref={index}>{item}</Text></View>;
        }}/>
      </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      items: {
        backgroundColor: '#333',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        color: 'white',
        fontSize: 32,
      },
    });
    
 
 export default Login;
 