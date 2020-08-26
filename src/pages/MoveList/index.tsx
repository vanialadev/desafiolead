import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Card,
  Poster,
  Title,
  ReleaseText,
} from './styles';
import ButtonPage from '../../components/ButtonsPages';
import {api_key, include_adult, language, sort_by} from '../../utils/params';

export interface Movie {
  popularity: number;
  id: number;
  vote_average: number;
  poster_path: string;
  overview: string;
  title: string;
  backdrop_path: string;
  genre_ids: Array<number>;
  release_date: string;
}
interface MovieListProps {
  navigation: any;
}

const MovieList: React.FC<MovieListProps> = ({ navigation: {navigate, setOptions} }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  React.useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback
          onPress={() => navigate('Busca',{
            genre: {},
          })}
          accessibilityLabel="Click aqui para ir para página de busca"
        >
          <Icon
            name="search"
            size={20}
            color="#fff"
            style={{ paddingRight: 16 }}
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, [navigate]);

  const searchMovies = async (pageNumber = 1) => {
    const response = await api.get('discover/movie', {
      params: {
        api_key: api_key,
        language: language,
        sort_by: sort_by,
        include_adult: include_adult,
        page: pageNumber,
      },
    });

    setPage(response.data.page);
    setMovies(response.data.results);
    setTotalPages(response.data.total_pages);
  };
  useEffect(() => {
    searchMovies();
  }, []);

  const loadMore = () => {
    if (page === totalPages) return;
    const pageNumber = page + 1;
    searchMovies(pageNumber);
  };

  const loadLess = () => {
    if (page === 1) return;
    const pageNumber = page - 1;
    searchMovies(pageNumber);
  };

  const handleNavigateToDetailsPages = (movie: Movie) => {
    navigate('MovieDetails', {
      movie,
      name: movie.title,
    });
  };

  return (
    <>
      <ScrollView
        accessible
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <Container accessible>
          {movies.map(movie => {
            const [yyyy, mm, dd ] = movie.release_date.split('-');

            const data = `Lançamento: ${dd}/${mm}/${yyyy}`;
            return(
            <Card
              accessibilityLabel="Click aqui para ir para detalhes do filme"
              key={movie.id}
              onPress={() => {
                handleNavigateToDetailsPages(movie);
              }}
            >
              <View accessible>
                <Poster
                  accessibilityHint={`poster do filme ${movie.title}`}
                  accessibilityRole="image"
                  source={{
                    uri: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
                  }}
                />
              </View>
              <View
                accessible
                style={{ flexShrink: 1, justifyContent: 'center' }}
              >
                <Title
                  accessibilityHint={`título  do filme ${movie.title}`}
                  accessibilityRole="text"
                >
                  {movie.title}
                </Title>
                <ReleaseText>{data}</ReleaseText>
              </View>
            </Card>
          )})}
        </Container>
      </ScrollView>
      <ButtonPage page={page} totalPages={totalPages} loadLess={loadLess} loadMore={loadMore} />
    </>
  );
};

export default MovieList;
