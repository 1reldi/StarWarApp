import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { MovieType } from '../types/movies';
import Movies from '../routes/Movies';
import MovieDetails from '../routes/MovieDetails';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Movies">
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

type RootStackParamList = {
  MovieDetails: {
    movie: MovieType;
  };
};

export type StackProps = NativeStackScreenProps<
  RootStackParamList,
  'MovieDetails'
>;
