import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationBar from './navigationBar';
import {StyleSheet, FlatList, Text, View, Image} from 'react-native';

const DetailsScreen = props => {
  const data = props.route.params.data;
  console.log(data);
  const ingredients = [];
  Object.keys(data).forEach((value, key) => {
    if (value.startsWith('strIngredient') && data[value] != null) {
      ingredients.push(data[value]);
    }
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={ingredients}
        style={styles.box}
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
      <NavigationBar />
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
  drinkName: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default DetailsScreen;
