import React from 'react';
import Input from './Input';
class Forms extends React.Component {

  state = {
    nome: '',
    email: '',
    cpf: '',
    endereço: '',
    cidade: '',
    estado: '',
    tipo: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleBlur = ({ target }) => {
    const { name, value } = target;
    if (parseInt(value[0])) {
    this.setState({
      [name]: ''
    })
  }
  }

  render() {
    const {nome, email, cpf, endereço, cidade, estado, tipo} = this.state;
    return (
      <form>
        <Input name="nome" value={nome} length="40" description="Nome:" type="text" handler={ this.handleChange }/>
        <Input name="email" value={email} length="50" description="Email:" type="email" handler={ this.handleChange }/>
        <Input name="cpf" value={cpf} length="11" description="CPF:" type="text" handler={ this.handleChange }/>
        <Input name="endereço"value={endereço} length="200" description="Endereço:" type="text" handler={ this.handleChange }/>
        <Input name="cidade" value={cidade} length="28" description="Cidade:" type="text" blur={ this.handleBlur }handler={ this.handleChange }/>
      </form>
    )
  }
}

export default Forms;