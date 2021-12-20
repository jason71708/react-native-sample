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
import { SafeAreaView, useColorScheme } from 'react-native';
import { HelloWorld } from './components/atoms';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');

  return (
    <SafeAreaView>
      <div style={styles.container}>
        <h1
          style={{
            fontSize: isDarkMode ? '5rem' : '2rem',
          }}>
          123
        </h1>
        <HelloWorld name={'web'} />
        <button
          style={styles.button}
          onClick={() => {
            alert('Click!');
          }}>
          <span style={styles.buttonText}>Click me</span>
        </button>
        <input
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
      </div>
    </SafeAreaView>
  );
};

const styles = {
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
    padding: 20,
    color: 'white',
  },
};

export default App;
