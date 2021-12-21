import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableHighlight,
  TextInput,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = ({
  navigation,
}: {
  navigation: ProfileScreenNavigationProp;
}) => {
  const [username, setUsername] = useState('');

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@username', value);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@username');
        if (value !== null) {
          setUsername(value);
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Screen: Login</Text>
      </View>
      <View>
        <TextInput
          onChangeText={setUsername}
          value={username}
          onKeyPress={event => {
            if (event.nativeEvent.key === 'Enter') {
              storeData(username); // called only when multiline is false
            }
          }}
          onSubmitEditing={() => {
            storeData(username); //called when multiline is true
          }}
        />
      </View>
      <View>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Text>Go to home</Text>
        </TouchableHighlight>
      </View>
      <View>
        <TouchableHighlight onPress={() => navigation.navigate('Details')}>
          <Text>Go to Details</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
