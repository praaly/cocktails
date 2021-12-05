import React from 'react';
import {StyleSheet, FlatList, Text, View, Image} from 'react-native';
import Comment from '../components/comments';
/**
 * @DetailsScreen
 * take the data from the api in value and return the details page.
 * @returns page of details (des ingreditents)
 */
const DetailsScreen = props => {
  const data = props.route.params.data;
  const ingredients = [];

  // we get all the objects that start with keyword 'strIngredient' and display only the results that are not equal to null
  Object.keys(data).forEach((value, key) => {
    if (value.startsWith('strIngredient') && data[value] != null) {
      ingredients.push(data[value]);
    }
  });

  //return detail page
  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <Text style={styles.detailsTextTitle}>{data.strDrink}</Text>
        <View style={styles.image}>
          <Image
            source={{uri: data.strDrinkThumb}}
            style={styles.tinyLogo}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.detailsTextTitle}>HOW TO SERVE</Text>
        <Text style={styles.servedescription}>{data.strInstructions}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.detailsTextTitle}>INGREDIENT(S)</Text>
        <FlatList
          // we display all the ingredients from the data
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
      </View>
      <Comment id={data.idDrink} />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ded1bb',
    flex: 1,
  },
  header: {
    backgroundColor: '#ded1bb',
    flex: 1.6,
  },
  middle: {
    backgroundColor: '#ded1bb',
    flex: 1,
  },
  footer: {
    backgroundColor: '#ded1bb',
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
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoForm: {
    flex: 8,
    padding: 20,
  },
  servedescription: {
    fontSize: 20,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
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
  detailsText: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsTextTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
    backgroundColor: '#337',
  },
});

export default DetailsScreen;
