import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Chip } from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        const MyComponent = () => (
        <Chip icon="information" onPress={() => console.log('Pressed')}>
          <Text> Example Chip</Text>
        </Chip>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
