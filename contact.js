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
   Text,
   Button,
   TextInput,
   useColorScheme,
   Image,
   View,
 } from 'react-native';


 const Contact=() => {
     const [Firstname, setFirstname] = useState('');
     const [Lastname, setLastname] = useState('');
     const [Password, setPassword] = useState('');
     const [PasswordConfirmation, setPasswordConfirmation] = useState('');
     const [isValidPassword, setIsValidPassword] = useState(true);

    const validatePassword = useCallback(() =>{
        if(Password.length <= 8){
            setIsValidPassword(false);
        }else{
           
            setIsValidPassword(true);
        } 
    },[Password])
    
    const validateConfirmPassword = useCallback(() =>{
        if(PasswordConfirmation === Password){
            setIsValidPassword(true);
            console.log("mot de passe identique")
        }else{
            setIsValidPassword(false);
            console.log("mot de passe n'est pas le même")
        } 
    },[Password])

   return (
     <SafeAreaView style={styles.box}> 
      <View style={styles.titleBox}>
          <Text style={styles.title}>Inscription</Text>
          <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg'}} style={styles.tinyLogo} resizeMode='cover'></Image>
      </View>     
      <View style={styles.registerForm}>
      <TextInput style={styles.input} onChangeText={setFirstname} value={Firstname} placeholder="Prénom"/>
      <TextInput style={styles.input} value={Lastname} onChangeText={setLastname} placeholder="Nom"/>
      <TextInput style={isValidPassword ? styles.textSuccess : styles.textError} onChangeText={setPassword} onEndEditing={validatePassword} value={Password} placeholder="Mot de passe"/>
      <TextInput style={styles.input} onChangeText={setPasswordConfirmation} value={PasswordConfirmation} onEndEditing={validateConfirmPassword} placeholder="Confirmation du mot de passe"/>
      </View>
      <View style={styles.boxBlue}>
        <Button type='submit' title='Envoyer'/>
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
    registerForm: {
        flex: 8,
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
    },
    textSuccess: {
        color: "green",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    textError: {
        color: 'red',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
 });
 
 export default Contact;
 