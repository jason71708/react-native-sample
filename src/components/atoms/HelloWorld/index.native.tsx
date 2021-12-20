import React from 'react';
import { Text } from 'react-native';

const HelloWorld = ({ name }: { name: string }) => (
  <Text>Hello World {name}!</Text>
);

export default HelloWorld;
