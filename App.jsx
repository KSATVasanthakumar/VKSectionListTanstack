import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Chip, SegmentedButtons } from 'react-native-paper';
import { getUsers } from './api';
const App = () => {
  const [value, setValue] = useState('');

  // const { }= useQuery({
  //   queryKey:
  // })

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getUsers();
        console.log({ result });
      } catch (error) {
        console.error('Error Fetching api', error);
      }
    };
    fetchUsers();
  }, []);

  // const getUsers = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://jsonplaceholder.typicode.com/users',
  //     );
  //     console.log(response.data);
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   getUsers();
  // }, []);
  return (
    <SafeAreaView>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Active Users',
          },
          {
            value: 'train',
            label: 'In Active Users',
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
