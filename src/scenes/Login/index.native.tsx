import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations';

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = ({
  navigation,
}: {
  navigation: ProfileScreenNavigationProp;
}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => navigation.navigate('Details')}>
      <Text>Go to Details</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LoginScreen;
