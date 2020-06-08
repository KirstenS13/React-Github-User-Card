import React from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      followers: []
    };
  }

  componentDidMount() {
    //get request for my profile
    axios
      .get('https://api.github.com/users/KirstenS13')
      .then(res => {
        console.log(res);
        this.setState( { ...this.state ,userInfo: res.data } );
      })
      .catch(err => {
        console.log(err);
      })
    //get request for followers
    axios
      .get('https://api.github.com/users/KirstenS13/followers')
      .then(res => {
        console.log(res);
        this.setState( { ...this.state, followers: res.data } );
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>The Github User Info Page</h1>
        <h2>{this.state.userInfo.login}'s Github Info</h2>
        <CardList userInfo={this.state.userInfo} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
