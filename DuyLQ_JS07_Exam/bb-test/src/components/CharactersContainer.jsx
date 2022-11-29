import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Result from "./Result";
import Spinner from "../img/spinner.gif"
class CharactersContainer extends Component {
  state = {};
  render() {
    let {loading,input,handleChange,search} = this.props;
    return loading ? (
      <img
        src={Spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt='Loading'
      />):(
      <>
        <SearchBox input={input} handleChange={handleChange} />
        <div className="row">
        {search.map((e, i) => (
            <Result
              id={e.char_id}
              key={i}
              name={e.name}
              actorname={e.portrayed}
              nickname={e.nickname}
              birthday={e.birthday}
              status={e.status}
              img={e.img}
            />
          ))}
        </div>
      </>
    );
  }
}

export default CharactersContainer;
