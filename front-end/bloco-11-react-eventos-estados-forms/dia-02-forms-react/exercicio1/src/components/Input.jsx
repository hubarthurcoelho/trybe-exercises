import React from 'react';

class Input extends React.Component {
  render() {
    const { handler, type, name, description, length, value, blur } = this.props;;
    return (
      <label htmlFor={ name }> { description }
        <input value={ value } maxLength={ length } type={ type } onBlur={ blur } onChange={ handler } name={ name }></input>
      </label>
    )
  }
}

export default Input;
