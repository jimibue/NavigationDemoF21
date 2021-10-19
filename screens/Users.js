import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const dummyUsers = [
  {id: 1, name: 'User1'},
  {id: 2, name: 'User2'},
];

const Users = ({navigation}) => {
  const renderUsers = () => {
    return dummyUsers.map(user => {
      return (
        <Pressable
          onPress={() => navigation.navigate('User', user)}
          style={styles.userCard}>
          <Text>{user.name}</Text>
        </Pressable>
      );
    });
  };

  return <View style={styles.container}>{renderUsers()}</View>;
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'grey',
  },
  userCard: {
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Users;
