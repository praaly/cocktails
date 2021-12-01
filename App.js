/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


const App=() => {
  return (
    <SafeAreaView style={styles.box}> 
     <View style={styles.boxRed}>

     </View>     
     <View style={styles.boxGreen}>

      <View style={styles.thirdClass}></View>
      <View style={styles.thirdClass}></View>
      <View style={styles.thirdClass}></View>

     </View>
     <View style={styles.boxBlue}>
       
       </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  boxRed: {
    flex: 1,
    backgroundColor: 'red'
  },
  boxGreen: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-around', 
    backgroundColor: 'green'

  },
  boxBlue: {
    flex: 3,
    backgroundColor: 'blue'
  },
  thirdClass: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow'
  },
});

export default App;
