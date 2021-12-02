import React, {useEffect, useMemo, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  function validateMail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function validatePassword() {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user');
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const validateSignUp = () => {
    if (validateMail()) {
      //   if (validatePassword() && password === passwordConfirmation) {
      var userValues = {email, password};
      storeData(userValues).then(getData().then(navigation.navigate('Login')));
      //   } else {
      //     console.log('triste');
      //   }
    } else {
      console.log('triste');
    }
  };

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
              onPress={() => {
                validateSignUp();
              }}>
              <Text>signUp</Text>
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
});

export default SignUp;
