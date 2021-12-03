import React from 'react';
import {View, StyleSheet} from 'react-native';
import DisconnectIcon from './disconnectIcon';
import FavoriteIcon from './favorite';

const NavigationBar = () => {
  return (
    <View style={styles.boxBlue}>
      <View style={styles.icons}>
        <FavoriteIcon />
        <DisconnectIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxBlue: {
    backgroundColor: 'grey',
  },
  icons: {
    flexDirection: 'row',
  },
});

export default NavigationBar;
