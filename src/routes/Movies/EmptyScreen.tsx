import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const EmptyScreen = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) return <View />;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.gifer.com/1DvC.gif' }}
        style={styles.image}
      />

      <Text style={styles.description}>No movies found :(</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
  },
});

export default EmptyScreen;
