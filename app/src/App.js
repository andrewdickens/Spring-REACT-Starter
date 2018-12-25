import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    response: ''
  };

  async componentDidMount() {
    const response = await fetch('/greeting?name=Drew');
    const body = await response.json();
    this.setState({ response: body, isLoading: false });
  }

  render() {
    const {response, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Response</h2>
              <div>
                {response.content}
              </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
