/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import {PROPERTY_TYPES} from '@babel/types';
const Tv = () => {
  const [valueSearch, setValueSearch] = useState('');
  useMemo(() => {
    {
      const kraken = axios.create({
        baseURL: 'https://thecocktaildb.com/api/json/v1/1/search.php',
      });
      kraken
        .get('?s=' + valueSearch)
        .then(function (response) {
          setData(response.data.drinks);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [valueSearch]);

  const Stack = createNativeStackNavigator();
  const [data, setData] = useState([]);
  const HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.box}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={setValueSearch}
          value={valueSearch}
        />
        <TextInput style={styles.searchBar} onChangeText={setValueSearch} />
        <View style={styles.titleBox}>
          <Text style={styles.title}>TWITCH SEARCH</Text>
        </View>
        <View style={styles.todoForm}>
          <FlatList
            data={data}
            style={styles.flatBox}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={styles.todoFormClass}>
                  <Text style={styles.todoFormText} ref={index}>
                    {item.strDrink}
                  </Text>
                  <Image
                    source={{uri: item.strDrinkThumb}}
                    style={styles.tinyLogo}
                    resizeMode="cover"
                  />
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Details', {
                        data: item,
                      })
                    }>
                    <Text>Détails</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.boxBlue} />
      </SafeAreaView>
    );
  };

  const DetailsScreen = props => {
    const data = props.route.params.data;
    const ingredients = [];
    Object.keys(data).forEach((value, key) => {
      if (value.startsWith('strIngredient') && data[value] != null) {
        ingredients.push(data[value]);
      }
    });
    return (
      <FlatList
        data={ingredients}
        style={styles.flatBox}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View style={styles.todoFormClass}>
              <Text style={styles.todoFormText} ref={index}>
                {ingredients[index]}
              </Text>
            </View>
          );
        }}
      />
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  titleBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    padding: 20,
  },
  todoFormText: {
    color: 'white',
  },
  todoFormBtnText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  todoFormClass: {
    width: '50%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  boxBlue: {
    flex: 1,
    backgroundColor: 'blue',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  searchBar: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default Tv;
