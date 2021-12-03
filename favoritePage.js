import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoritePage = () => {
  return (
    <View style={styles.container}>
      <Text>MY FAVORITE LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    margiLeft: 'auto',
    marginRight: 'auto',
  },
});

export default FavoritePage;
