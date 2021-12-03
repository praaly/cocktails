import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoritePage = () => {
  return (
    <View style={styles.container}>
      <Text>MY FAVIRITE LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoritePage;
