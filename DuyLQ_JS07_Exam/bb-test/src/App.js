import React, { Component } from "react";

import "./App.css";
import CharactersContainer from "./components/CharactersContainer";

import "./img/bg.jpg";
import imglogo from "./img/logo.png";

class App extends Component {
  state = {
    profile: [],
    loading: true,
    input:"",
  };

  componentDidMount() {
    fetch(`https://breakingbadapi.com/api/characters`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: false,
          profile: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange = (e) => {
    // e.target
    this.setState({
      input: e.target.value,
    });
  }
  render() {
    let {input,profile} = this.state;
    let search =profile.filter((items)=>{
      return items.name.toLowerCase().includes(input.toLowerCase());
    })
    return (
      <>
        <div className='App'>
          <img src={imglogo}  />
          <CharactersContainer loading={this.state.loading} profile={this.state.profile} input={this.state.input} handleChange={this.handleChange} search={search} />
        </div>
      </>
    );
  }
}

export default App;
