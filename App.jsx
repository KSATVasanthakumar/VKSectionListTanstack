import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Button,
  Chip,
  SegmentedButtons,
} from 'react-native-paper';
import { getUsers } from './api';
import { useQuery } from '@tanstack/react-query';
const App = () => {
  const [value, setValue] = useState('completed');
  const [completedTask, setCompletedTask] = useState([]);
  console.log(value);

  const {
    data: usersList = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  const filteredData = usersList.filter(item =>
    value === 'completed' ? item.completed === true : item.completed === false,
  );
  if (error)
    return (
      <SafeAreaView>
        <Text>Error:{error.message}</Text>
      </SafeAreaView>
    );
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const result = await getUsers();
  //       console.log({ result });
  //     } catch (error) {
  //       console.error('Error Fetching api', error);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

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
          { value: 'completed', label: 'Completed Task' },
          { value: 'notcompleted', label: 'Not Completed' },
        ]}
      />

      {isPending ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: 'center', marginTop: 20 }}>
              No records found
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#f2f2f2',
                padding: 10,
                margin: 10,
                borderRadius: 8,
              }}
            >
              <Text>{item.id}</Text>
              <Text style={{ marginLeft: 10 }}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
