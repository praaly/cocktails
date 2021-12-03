import React, {useMemo, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @HomeScreen
 * Send a simple comment
 * @returns comment page
 **/
const Comment = () => {
  const [comment, setComment] = useState('');

  const postComment = async () => {
    storeData().then(() => {
      getData().then(value => {
        console.log(value);
      });
    });
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('comments', 'emailUser' + ':' + comment);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('comments');
      return value;
    } catch (e) {
      console.log('erreur : ' + e);
    }
  };

  return (
    <View>
      <Text style={styles.detailsText}>Commentaires :</Text>
      <View style={({flexDirection: 'row'}, {alignItems: 'center'})}>
        <TextInput
          style={styles.inputComment}
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.buttonComment} onPress={postComment}>
          <Text>Envoyer commentaire</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  inputComment: {
    borderWidth: 2,
    width: '80%',
  },
});

export default Comment;
