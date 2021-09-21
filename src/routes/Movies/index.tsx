import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as MoviesActions from '../../store/actions/movies';
import { MovieType } from '../../types/movies';
import { filterMoviesByName } from '../../helpers/transforms/movies';
import { StackProps } from '../../navigation';
import Loader from '../../components/Loader';
import MovieCard from './MovieCard';
import EmptyScreen from './EmptyScreen';

interface MovieProps extends StackProps {
  getMoviesList: (nextPageUrl?: string) => void;
  moviesList: MovieType[];
  nextPage?: string;
  loadingMovies: boolean;
}

const Movies = ({
  navigation,
  getMoviesList,
  moviesList,
  nextPage,
  loadingMovies,
}: MovieProps) => {
  const [searchText, onChangeText] = useState('');

  useEffect(() => {
    getMoviesList();
  }, []);

  const renderItem = ({ item }: { item: MovieType }) => (
    <MovieCard
      movie={item}
      onClick={() => navigation.navigate('MovieDetails', { movie: item })}
    />
  );

  const moviesDataSource = filterMoviesByName(moviesList, searchText);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={onChangeText}
        value={searchText}
        placeholder="Search Star War Movie..."
      />

      <FlatList
        data={moviesDataSource}
        renderItem={renderItem}
        keyExtractor={(item: MovieType) => `${item.episode_id}`}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (nextPage) {
            getMoviesList(nextPage);
          }
        }}
        ListFooterComponent={<Loader isLoading={loadingMovies} />}
        ListEmptyComponent={<EmptyScreen isLoading={loadingMovies} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 8,
  },
});

const mapStateToProps = ({ movies }) => {
  return {
    moviesList: movies.moviesList,
    nextPage: movies.nextPage,
    loadingMovies: movies.loadingMovies,
  };
};

export default connect(mapStateToProps, MoviesActions)(Movies);
