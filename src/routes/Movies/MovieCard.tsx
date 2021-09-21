import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MovieType } from '../../types/movies';

const MovieCard = ({
  movie,
  onClick,
}: {
  movie: MovieType;
  onClick: () => void;
}) => {
  const { title, episode_id, release_date } = movie;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onClick}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subTitle}>Episode number: {episode_id}</Text>

      <Text style={styles.subTitle}>Release date: {release_date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 32,
  },
  subTitle: {
    fontSize: 16,
    marginTop: 8,
    color: '#535C5C',
  },
});

export default MovieCard;
