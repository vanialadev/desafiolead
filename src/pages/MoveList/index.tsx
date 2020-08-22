import React, { useState, useEffect } from 'react';

import { Image, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import logoImg from '../../assets/logo.png';
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

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);

  const searchMovies = async (pageNumber = 1) => {
    // const { data } = await api.get<Movie[]>('discover/movie', {
    const response = await api.get('discover/movie', {
      params: {
        api_key: 'b97006b0440ca06b9e06743ce41b0426',
        language: 'pt-BR',
        sort_by: 'popularity.desc',
        include_adult: false,
        page: pageNumber,
      },
    });

    // const { page: number, results: Movies[], total_pages: number } = response;

    // if (page > 1) {

    // }

    setPage(response.data.page);
    setMovies(response.data.results);
    // setTotalPages(response.data.total_pages);
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

  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          {movies.map(movie => (
            <Card
              key={movie.id}
              onPress={() => {
                console.log('TESTE');
              }}
            >
              <View>
                <Poster
                  source={{
                    uri: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
                  }}
                />
              </View>
              <View style={{ flexShrink: 1, justifyContent: 'center' }}>
                <Title>{movie.title}</Title>
              </View>
            </Card>
          ))}
        </Container>
      </ScrollView>
      <ButtonsPages>
        <ButtonPages
          style={page === 1 ? { width: 0, height: 0 } : null}
          onPress={() => {
            loadLess();
            // this.props.navigation.navigate('Product', { product: item });
          }}
        >
          <ButtonPagesText>Voltar</ButtonPagesText>
        </ButtonPages>
        <ButtonPages
          style={page === totalPages ? { width: 0, height: 0 } : null}
          onPress={() => {
            loadMore();
            // this.props.navigation.navigate('Product', { product: item });
          }}
        >
          <ButtonPagesText>Proximo</ButtonPagesText>
        </ButtonPages>
      </ButtonsPages>
    </>
  );
};

export default MovieList;
