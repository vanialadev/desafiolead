import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native';

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
import {api_key, language} from '../../utils/params';

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
  tagline: string;
  genres: Genre[];
}

interface MovieDetailsProps {
  route: any;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ route }) => {
  const { id } = route.params.movie;
  const [movie, setMovie] = useState<Movie>({} as Movie);

  useEffect(() => {
    const showMovie = async () => {
      console.log(1);
      const { data } = await api.get<Movie>(`movie/${id}`, {
        params: {
          api_key: api_key,
          language: language,
        },
      });
      console.log(data);
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
          accessibilityHint={`poster do filme ${movie.title}`}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          }}
        />
        <Title accessibilityHint={`título  do filme ${movie.title}`}>
          {movie.title}
        </Title>
        <Overview accessibilityRole="text">{movie.overview}</Overview>
        <Rating>
          <Icon
            name="star"
            size={20}
            color="#E50914"
            accessibilityHint="média de avaliação"
          />
          <AverageText>{Number(movie.vote_average).toFixed(1)}</AverageText>
        </Rating>
        <Popularity>
          <Icon
            name="user"
            size={20}
            color="#E50914"
            accessibilityHint="popularidade do filme"
          />
          <PopularityText>{movie.popularity}</PopularityText>
        </Popularity>
        <Genre>
          <Icon
            accessibilityHint="gêneros do filme"
            name="film"
            size={20}
            color="#E50914"
          />
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
