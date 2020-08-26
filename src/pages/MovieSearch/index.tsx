import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Platform, KeyboardAvoidingView} from 'react-native';
import { genres } from '../../utils/genres';
import api from '../../services/api';
import {
  ViewInput,
  IconInput,
  Input,
  Container,
  ViewPoster,
  Poster,
} from './styles';
import {Movie} from '../MoveList';
import ButtonPage from '../../components/ButtonsPages';
import {api_key, include_adult, language, sort_by} from '../../utils/params';

interface MovieSearchProps {
  route: any;
}

interface accentsMapObject {
  a: string;
  e: string;
  i: string;
  o: string;
  u: string;
  c: string;
  n: string;
  [key: string]: string;
}


const MovieSearch: React.FC<MovieSearchProps> = ({ route }) => {
  const { navigate } = useNavigation();

  let {name, id} = route.params.genre;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');

      useEffect(() => {
        if (id !== undefined) {
          setSearch(name);
          searchMoviesByGenres(1, id);
        }
      }, [id]);

  const removeAccentuation= (str: string) => {
    const accentsMap: accentsMapObject  = {
      a: 'á|à|ã|â|À|Á|Ã|Â',
      e: 'é|è|ê|É|È|Ê',
      i: 'í|ì|î|Í|Ì|Î',
      o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      c: 'ç|Ç',
      n: 'ñ|Ñ',
    };
    const word = Object.keys(accentsMap).reduce(
      (acc, cur) => {
        return acc.replace(new RegExp(accentsMap[cur], 'g'), cur);
      },
      str,
    );
    return word.toLowerCase();
  };

  const searchMoviesByGenres = async (pageNumber = 1, id: number) => {
    try {
      const response = await api.get('discover/movie', {
        params: {
          api_key: api_key,
          language: language,
          sort_by: sort_by,
          include_adult: include_adult,
          page: pageNumber,
          with_genres: id,
        },
      });
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      setMovies([]);
    }
  };

  const searchMoviesByTitle = async (pageNumber = 1, stringSearch: string) => {
    try {
      const response = await api.get('search/movie', {
        params: {
          api_key: api_key,
          language: language,
          sort_by: sort_by,
          include_adult: include_adult,
          page: pageNumber,
          query: stringSearch,
        },
      });

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      setMovies([]);
    }
  };

  const searchMovies = (stringInput: string, pag = 1) => {
    setSearch(stringInput);
    setPage(pag);

    const stringSearch = removeAccentuation(stringInput);
    const genreObject = genres.find(
      genre => genre.nameSearch === stringSearch
    );

    genreObject !== undefined
      ? searchMoviesByGenres(pag, genreObject.id)
      : searchMoviesByTitle(pag, stringSearch)

  };

  const loadMore = () => {
    if (page === totalPages) return
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
      <ViewInput accessible>
        <IconInput
          name="search"
          size={20}
          color="#fff"
          style={{ paddingRight: 16, color: 'white' }}
        />
        <Input
          autoFocus={true}
          defaultValue={search}
          placeholder="Busca filme ou gênero"
          returnKeyType="send"
          keyboardAppearance="dark"
          onChangeText={string => searchMovies(string, page)}
        />
      </ViewInput>
      <ScrollView
        keyboardShouldPersistTaps="handled"
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
                accessibilityRole="button"
                key={movie.id}
                source={{
                  uri: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
              />
            </ViewPoster>
          ))}
        </Container>
      </ScrollView>
      </KeyboardAvoidingView>

      <ButtonPage
        page={page}
        totalPages={totalPages}
        loadLess={loadLess}
        loadMore={loadMore} />
    </>
  );
};

export default MovieSearch;
