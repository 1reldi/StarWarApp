import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import * as MoviesActions from '../../store/actions/movies';
import { SpecieType } from '../../types/movies';

const Specie = ({
  getSpecieInfo,
  specieUrl,
  species,
}: {
  getSpecieInfo: (specieUrl: string) => void;
  specieUrl: string;
  species: { [specieUrl: string]: SpecieType };
}) => {
  const specieInfo = species[specieUrl];

  useEffect(() => {
    if (!Boolean(specieInfo)) {
      getSpecieInfo(specieUrl);
    }
  }, []);

  if (!Boolean(specieInfo)) {
    return <View />;
  }

  const { name } = specieInfo;

  return <Text style={styles.name}>{name}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    marginTop: 4,
  },
});

const mapStateToProps = ({ movies }) => {
  return {
    species: movies.species,
  };
};

export default connect(mapStateToProps, MoviesActions)(Specie);
