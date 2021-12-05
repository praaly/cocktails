import React, {useMemo, useState} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  View,
} from 'react-native';

/**
 * @HomeScreen
 * api send all the available cocktails
 * @returns page of cocktails
 **/
const HomeScreen = ({navigation}) => {
  const [valueSearch, setValueSearch] = useState('');
  const [data, setData] = useState([]);

  // send a reqsuest with axios from the cocktails api
  //-> return the list of available cocktails with (the name, thumbmail image, and the list of ingredients).
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

  //return homescreen view
  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>COCKTAIL SEARCH</Text>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.searchBar}
          placeholder="SEARCH A COCKTAIL"
          onChangeText={setValueSearch}
          value={valueSearch}
        />
      </View>
      <View style={styles.todoForm}>
        <FlatList
          data={data}
          style={styles.flatBox}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    data: item,
                  })
                }
                style={styles.todoFormClass}>
                <View style={styles.todoFormClass2}>
                  <Text style={styles.todoFormTextTitle} ref={index}>
                    {item.strDrink}
                  </Text>
                  <Image
                    source={{uri: item.strDrinkThumb}}
                    style={styles.tinyLogo}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#ded1bb',
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
    width: 150,
    height: 150,
  },
  todoForm: {
    flex: 8,
    padding: 20,
  },
  todoFormTextTitle: {
    color: 'white',
    backgroundColor: '#337',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  todoFormClass: {
    width: '50%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  searchBar: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
  },
});

export default HomeScreen;
