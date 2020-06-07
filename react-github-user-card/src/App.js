import React from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {}
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/KirstenS13')
      .then(res => {
        console.log(res);
        this.setState( {userInfo: res.data} );
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, from the App</h1>
        <CardList userInfo={this.state.userInfo} followersUrl={this.state.userInfo.followers_url}/>
      </div>
    )
  }
}

export default App;
