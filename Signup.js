import React, {useEffect, useMemo, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    setIsPasswordValid(password.length > 3);
  }, [password]);

  const equalPwds = useMemo(() => {
    return password === passwordConfirmation;
  }, [password, passwordConfirmation]);

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.titleText}>SignUp</Text>
          <Image
            style={styles.profil}
            source={{
              uri: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg',
            }}
          />
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              defaultValue={email}
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
            <TextInput
              style={[[styles.input, equalPwds ? undefined : styles.borderRed]]}
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={passwordConfirmation}
              onChangeText={setPasswordConfirmation}
            />
            <TouchableOpacity
              style={styles.buttonSignUp}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  height: 30,
                  paddingTop: 5,
                }}>
                SignUp
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
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  borderRed: {
    borderColor: 'red',
  },
  buttonSignUp: {
    borderWidth: 2,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default SignUp;
