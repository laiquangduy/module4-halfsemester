import React, { Component } from "react";

import "./App.css";
import CharactersContainer from "./components/CharactersContainer";

import "./img/bg.jpg";
import imglogo from "./img/logo.png";

class App extends Component {
  state = {
    profile: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://breakingbadapi.com/api/characters`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: true,
          profile: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <div className='App'>
          <img src={imglogo}  />
          <CharactersContainer profile={this.state.profile} />
        </div>
      </>
    );
  }
}

export default App;
