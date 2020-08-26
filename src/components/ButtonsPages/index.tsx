import React from 'react';

import {
  ButtonsPages,
  ButtonPages,
  ButtonPagesText,
} from './styles';

interface ButtonPageProps {
  page: number;
  totalPages: number;
  loadLess(): void;
  loadMore(): void;
}

const ButtonPage: React.FC<ButtonPageProps> = (props) =>(
    <ButtonsPages accessible>
      <ButtonPages
        accessibilityLabel="Click aqui para ir para página anterior"
        style={props.page === 1 ? { width: 0, height: 0 } : null}
        onPress={() => {
          props.loadLess();
        }}
      >
        <ButtonPagesText>Voltar</ButtonPagesText>
      </ButtonPages>
      <ButtonPages
        accessibilityLabel="Click aqui para ir para próxima página"
        style={props.page === props.totalPages ? { width: 0, height: 0 } : null}
        onPress={() => {
          props.loadMore();
        }}
      >
        <ButtonPagesText>Próximo</ButtonPagesText>
      </ButtonPages>
    </ButtonsPages>
  );



export default ButtonPage;
