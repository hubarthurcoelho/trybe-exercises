import React from 'react';
import './style.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
class Content extends React.Component {
  render() {
    return (conteudos.map((conteudo) => (

        <ul className='list'>
          <li>O conteúdo é: {conteudo.conteudo},</li>
          <li>status: {conteudo.status},</li>
          <li>Bloco: {conteudo.bloco}</li>
        </ul>
       
    )))
  }
}

export default Content;
