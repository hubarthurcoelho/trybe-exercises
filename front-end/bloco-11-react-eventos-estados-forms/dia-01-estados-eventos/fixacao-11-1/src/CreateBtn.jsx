import React from 'react';

class CreateBtn extends React.Component {
  state = {
    clickCount: 0,
    backgroundColor: '#FFFFFF',
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }))
    if (this.state.clickCount % 2 === 0) {
      this.setState(() => ({
        backgroundColor: 'blue',
      }))
    } else {
      this.setState(() => ({
        backgroundColor: 'red',
      }))
    }
  }
  render () {
    return <button style={{backgroundColor: this.state.backgroundColor}} onClick={this.handleClick}>{this.state.clickCount}</button>;
  }
}

export default CreateBtn;