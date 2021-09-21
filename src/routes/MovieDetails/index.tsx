import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { StackProps } from '../../navigation';
import Character from '../../components/Character';

const MovieDetails = ({ navigation, route }: StackProps) => {
  const { episode_id, release_date, characters, title } = route.params.movie;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  const charactersList = characters.slice(0, 5);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Episode number:</Text>

        <Text style={styles.value}>{episode_id}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Release date: </Text>

        <Text style={styles.value}>{release_date}</Text>
      </View>

      <Text style={styles.label}>Top 5 characters: </Text>

      {charactersList.map((url: string) => (
        <Character characterUrl={url} key={url} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  label: {
    fontSize: 20,
    marginTop: 16,
  },
  value: {
    fontSize: 16,
    marginTop: 8,
    color: '#535C5C',
  },
});

export default MovieDetails;
