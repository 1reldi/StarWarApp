import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return <View />;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.gifer.com/PbIi.gif' }}
        style={styles.loaderImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loaderImage: {
    width: 100,
    height: 100,
  },
});

export default Loader;
