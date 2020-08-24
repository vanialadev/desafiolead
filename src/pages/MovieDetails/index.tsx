import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Image, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import {
  Poster,
  Title,
  Overview,
  Rating,
  Icon,
  AverageText,
  Popularity,
  PopularityText,
  Genre,
  GenreText,
} from './styles';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  popularity: number;
  id: number;
  vote_average: number;
  poster_path: string;
  overview: string;
  title: string;
  backdrop_path: string;
  genres: Genre[];
}

const MovieDetails: React.FC = ({ route }) => {
  const { navigate } = useNavigation();
  // console.log(navigation);
  const { id } = route.params.movie;
  const [movie, setMovie] = useState<Movie>({} as Movie);

  useEffect(() => {
    const showMovie = async () => {
      console.log(1);
      // const { data } = await api.get<Movie[]>('discover/movie', {
      const { data } = await api.get<Movie>(`movie/${id}`, {
        params: {
          api_key: 'b97006b0440ca06b9e06743ce41b0426',
          language: 'pt-BR',
        },
      });

      setMovie(data);
    };
    showMovie();
  }, [id]);

  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Poster
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          }}
        />
        <Title>{movie.title}</Title>
        <Overview>{movie.overview}</Overview>
        <Rating>
          <Icon name="star" size={20} color="#E50914" />
          <AverageText>{movie.vote_average}</AverageText>
        </Rating>
        <Popularity>
          <Icon name="user" size={20} color="#E50914" />
          <PopularityText>{movie.popularity}</PopularityText>
        </Popularity>
        <Genre>
          <Icon name="film" size={20} color="#E50914" />
          {movie.genres &&
            movie.genres.map(genre => (
              <GenreText key={genre.id}>{genre.name}</GenreText>
            ))}
        </Genre>
      </ScrollView>
    </>
  );
};

export default MovieDetails;
