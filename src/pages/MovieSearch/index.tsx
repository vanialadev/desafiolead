import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { genres } from '../../utils/genres';
import api from '../../services/api';
import {
  ViewInput,
  IconInput,
  Input,
  Container,
  ViewPoster,
  Poster,
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
  nameSearch: string;
}

const MovieSearch: React.FC = ({ route }) => {
  const { navigate } = useNavigation();

  // console.log(route);
  let {name, id, nameSearch} = route.params.genre;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');



      useEffect(() => {
        console.log('useeffer');
        if (id !== undefined) {
          console.log('entrou1');
          setSearch(name);
          searchMoviesByGenres(1, id);
        }
      }, [id, name]);



  const removeAccentuation = (str: string) => {
    const accentsMap = {
      a: 'á|à|ã|â|À|Á|Ã|Â',
      e: 'é|è|ê|É|È|Ê',
      i: 'í|ì|î|Í|Ì|Î',
      o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      c: 'ç|Ç',
      n: 'ñ|Ñ',
    };
    const word = Object.keys(accentsMap).reduce(
      (acc, cur) => acc.replace(new RegExp(accentsMap[cur], 'g'), cur),
      str,
    );
    return word.toLowerCase();
  };

  const searchMoviesByGenres = async (pageNumber = 1, id: number) => {
    // const { data } = await api.get<Movie[]>('discover/movie', {
    try {
      // console.log(nameSearch, 'teste');

      const response = await api.get('discover/movie', {
        params: {
          api_key: 'b97006b0440ca06b9e06743ce41b0426',
          language: 'pt-BR',
          sort_by: 'popularity.desc',
          include_adult: 'false',
          page: pageNumber,
          with_genres: id,
        },
      });
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.log('erro genre');
    }
  };

  const searchMoviesByTitle = async (pageNumber = 1, stringSearch: string) => {
    try {
      const response = await api.get('search/movie', {
        params: {
          api_key: 'b97006b0440ca06b9e06743ce41b0426',
          language: 'pt-BR',
          sort_by: 'popularity.desc',
          include_adult: 'false',
          page: pageNumber,
          query: stringSearch,
        },
      });

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.log('erro title');
    }
  };

  const searchMovies = (stringInput: string, pag = 1) => {
    setSearch(stringInput);
    setPage(pag);

    const stringSearch = removeAccentuation(stringInput);

    console.log(stringSearch, 'word');

    const genreObject = genres.find(genre => genre.nameSearch === stringSearch);
    console.log(genreObject);

    if (genreObject !== undefined) {
      console.log(genreObject.id);
      searchMoviesByGenres(pag, genreObject.id);
    } else {
      searchMoviesByTitle(pag, stringSearch);
    }
  };

  const loadMore = () => {
    if (page === totalPages) return;
    searchMovies(search, page + 1);
  };

  const loadLess = () => {
    if (page === 1) return;
    searchMovies(search, page - 1);
  };
  const handleNavigateToDetailsPages = (movie: Movie) => {
    navigate('MovieDetails', {
      movie,
      name: movie.title,
    });
  };

  return (
    <>
      <ViewInput accessible>
        <IconInput
          name="search"
          size={20}
          color="#fff"
          style={{ paddingRight: 16, color: 'white' }}
        />
        <Input
          defaultValue={search}
          placeholder="Busca filme ou gênero"
          onChangeText={string => searchMovies(string, page)}
        />
      </ViewInput>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          {movies.map(movie => (
            <ViewPoster
              accessible
              key={movie.id}
              onPress={() => {
                handleNavigateToDetailsPages(movie);
              }}
            >
              <Poster
                accessible
                accessibilityHint={`poster do filme ${movie.title}`}
                key={movie.id}
                source={{
                  uri: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
              />
            </ViewPoster>
          ))}
        </Container>
      </ScrollView>
      <ButtonsPages>
        <ButtonPages
          style={page === 1 ? { width: 0, height: 0 } : null}
          onPress={() => {
            loadLess();
          }}
        >
          <ButtonPagesText>Voltar</ButtonPagesText>
        </ButtonPages>
        <ButtonPages
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

export default MovieSearch;
