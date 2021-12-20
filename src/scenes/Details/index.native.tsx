import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations';

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

function DetailsScreen({
  navigation,
}: {
  navigation: ProfileScreenNavigationProp;
}) {
  return (
    <ScrollView>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        // onPress={() => navigation.navigate('Details')} /* Would do nothing */
        onPress={() =>
          navigation.push('Details')
        } /* Common in cases where you pass in some unique data to each route */
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Push Home to stack"
        onPress={() => navigation.push('Home')}
      />
    </ScrollView>
  );
}

export default DetailsScreen;
