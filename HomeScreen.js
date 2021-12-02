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

const HomeScreen = ({navigation}) => {
  const [valueSearch, setValueSearch] = useState('');
  const [data, setData] = useState([]);

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

export default HomeScreen;
