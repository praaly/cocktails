import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const FavoritePage = () => {
  return (
    <SafeAreaView
      style={
        (styles.container,
        {
          backgroundColor: '#ded1bb',
          height: '100%',
          alignItems: 'center',
        })
      }>
      <View>
        <Text
          style={
            (styles.Text,
            {
              fontSize: 25,
              fontWeight: 'bold',
            })
          }>
          MY FAVORITE LIST
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoritePage;
