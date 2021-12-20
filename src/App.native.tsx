/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './scenes/Home';
import DetailsScreen from './scenes/Details';
import LoginScreen from './scenes/Login';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HelloWorld } from './components/atoms';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Title' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          pagingEnabled
          horizontal
          scrollsToTop
          contentInsetAdjustmentBehavior="automatic"
          minimumZoomScale={0.5}
          maximumZoomScale={2}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          style={backgroundStyle}>
          <View style={{ padding: 10 }}>
            <HelloWorld name={'native'} />
            <TextInput
              style={{ height: 40 }}
              placeholder="Type here to translate!"
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
              {text
                .split(' ')
                .map(word => word && '🍕')
                .join(' ')}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Button
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Press Me"
            />
            <Button
              onPress={() => {
                Alert.prompt('You tapped the button2!');
              }}
              title="Press Me2"
            />
            <TouchableHighlight
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              </View>
            </TouchableHighlight>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
              </View>
            </TouchableOpacity>
            <TouchableNativeFeedback
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              background={
                Platform.OS === 'android'
                  ? TouchableNativeFeedback.SelectableBackground()
                  : undefined
              }>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  TouchableNativeFeedback{' '}
                  {Platform.OS !== 'android' ? '(Android only)' : ''}
                </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight
              onLongPress={() => {
                Alert.alert('You long-pressed the button!');
              }}
              underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Touchable with Long Press</Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default App;
