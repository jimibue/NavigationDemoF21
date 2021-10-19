import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const User = ({route}) => {
  const navigation = useNavigation();
  const {id, name} = route.params;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{id}</Text>
      <Button title="Go Back" onPress={navigation.goBack} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default User;
