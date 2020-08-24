import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Card,
  Poster,
  Title,
  ButtonsPages,
  ButtonPages,
  ButtonPagesText,
} from './styles';

interface Movie {
  popularity: number;
  id: number;
  vote_average: number;
  poster_path: string;
  overview: string;
  title: string;
  backdrop_path: string;
  genre_ids: Array<number>;
}

interface Genre {
  id: number;
  name: string;
}

const MovieList: React.FC = ({ navigation }) => {
  const { navigate } = useNavigation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback
          onPress={() => navigate('Busca')}
          accessibilityLabel="Click aqui para ir para página de busca"
        >
          <Icon
            name="search"
            size={20}
            color="#fff"
            style={{ paddingRight: 16, color: 'white' }}
          />
        </TouchableWithoutFeedback>
      ),
    });
  }, [navigate, navigation]);

  const searchMovies = async (pageNumber = 1) => {
    const response = await api.get('discover/movie', {
      params: {
        api_key: 'b97006b0440ca06b9e06743ce41b0426',
        language: 'pt-BR',
        sort_by: 'popularity.desc',
        include_adult: 'false',
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
          {movies.map(movie => (
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
              </View>
            </Card>
          ))}
        </Container>
      </ScrollView>
      <ButtonsPages accessible>
        <ButtonPages
          accessibilityLabel="Click aqui para ir para página anterior"
          style={page === 1 ? { width: 0, height: 0 } : null}
          onPress={() => {
            loadLess();
          }}
        >
          <ButtonPagesText>Voltar</ButtonPagesText>
        </ButtonPages>
        <ButtonPages
          accessibilityLabel="Click aqui para ir para próxima página"
          style={page === totalPages ? { width: 0, height: 0 } : null}
          onPress={() => {
            loadMore();
          }}
        >
          <ButtonPagesText>Proximo</ButtonPagesText>
        </ButtonPages>
      </ButtonsPages>
    </>
  );
};

export default MovieList;
