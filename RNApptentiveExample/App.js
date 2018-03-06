/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Button
} from 'react-native';
import Apptentive from 'react-native-apptentive-module';

const settings = Platform.select({
  android: {
    appKey: 'YOUR_APPTENTIVE_APP_KEY',
    appSignature: 'YOUR_APPTENTIVE_APP_SIGNATURE',
  },
  ios: {
    appKey: 'YOUR_APPTENTIVE_APP_KEY',
    appSignature: 'YOUR_APPTENTIVE_APP_SIGNATURE',
  }
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
	  Apptentive.register(settings.appKey, settings.appSignature);
  }

  showMessageCenter = () => {
	  Apptentive.presentMessageCenter().catch(error => {
	    alert(error)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.module}>
	        Apptentive 5.x
        </Text>
        <Text style={styles.module}>
	        Example project
        </Text>
        <Text style={styles.instructions}>
          Make sure you have added this code to your own project and you have setup the appKey and appSignature.
        </Text>
        <Button onPress={this.showMessageCenter} title="Show message center" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  module: {
    fontSize: 15,
    textAlign: 'center',
  },
  instructions: {
    margin: 10,
    textAlign: 'center',
    color: '#333333',
  },
});
