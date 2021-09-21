import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import * as MoviesActions from '../../store/actions/movies';
import { CharacterType } from '../../types/movies';
import Specie from '../Specie';

const Character = ({
  getCharacterInfo,
  characterUrl,
  characters,
}: {
  getCharacterInfo: (characterUrl: string) => void;
  characterUrl: string;
  characters: { [characterUrl: string]: CharacterType };
}) => {
  const characterInfo = characters[characterUrl];

  useEffect(() => {
    if (!Boolean(characterInfo)) {
      getCharacterInfo(characterUrl);
    }
  }, []);

  if (!Boolean(characterInfo)) {
    return <View />;
  }

  const { name, gender, species } = characterInfo;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>• {name}</Text>

      <Text style={styles.gender}>Gender: {gender}</Text>

      <View style={styles.specieContainer}>
        <Text style={styles.gender}>Specie:</Text>

        <Specie specieUrl={species[0]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  name: {
    fontSize: 16,
    marginTop: 8,
    color: '#535C5C',
  },
  gender: {
    fontSize: 14,
    marginTop: 4,
  },
  specieContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

const mapStateToProps = ({ movies }) => {
  return {
    characters: movies.characters,
  };
};

export default connect(mapStateToProps, MoviesActions)(Character);
