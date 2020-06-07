import React from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get()
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, from the App</h1>
        <CardList />
      </div>
    )
  }
}

export default App;
