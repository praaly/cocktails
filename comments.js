import React, {useEffect, useMemo, useState} from 'react';
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
        extraData={commentList}
        renderItem={({item, index}) => {
          <Text>
            {item.user} + {item.comment} tototo
          </Text>;
        }}
      />
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
