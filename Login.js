import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    setIsPasswordValid(password.length > 3);
  }, [password]);

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.titleText}>Login</Text>
          <Image
            style={styles.profil}
            source={{
              uri: 'https://www.destinationcocktails.fr/wp-content/uploads/2021/06/079_tropicalkamasutra.jpg',
            }}
          />
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setFirstName}
            />
            <TextInput
              style={[
                styles.input,
                isPasswordValid ? undefined : styles.borderRed,
              ]}
              placeholder="password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  height: 30,
                  paddingTop: 5,
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  height: 30,
                  paddingTop: 5,
                }}>
                Create account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profil: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
    marginBottom: 70,
  },
  input: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  borderRed: {
    borderColor: 'red',
  },
  buttonLogin: {
    borderWidth: 2,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Login;
