import React, {useEffect, useState} from 'react';
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
const Comment = props => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const run = async () => {
      const data = await AsyncStorage.getItem('comments_' + props.id);

      if (data) {
        setCommentList(JSON.parse(data));
      }
    };

    run();
  });

  const postComment = async () => {
    const newCommentList = [
      ...commentList,
      {
        comment: comment,
        user: 'toto',
      },
    ];
    console.log(" c'est la que ca se passe : " + newCommentList);
    setCommentList(newCommentList);
    await AsyncStorage.setItem(
      'comments_' + props.id,
      JSON.stringify(newCommentList),
    );
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
      <FlatList
        data={commentList}
        style={{height: 200, width: 200, backgroundColor: 'red'}}
        renderItem={({item, index}) => {
          return (
            <Text>
              {item.user} : {item.comment}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputComment: {
    borderWidth: 2,
    width: '80%',
  },
});

export default Comment;
