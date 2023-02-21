import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Contador de clics</h1>
        <p>Has hecho clic {this.state.count} veces</p>
        <button onClick={this.handleClick}>Haz clic aquí</button>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
