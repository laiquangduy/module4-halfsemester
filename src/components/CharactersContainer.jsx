import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Result from "./Result";
class CharactersContainer extends Component {
  state = {};
  render() {
    let {profile} = this.props;
    return (
      <>
        <SearchBox />
        <div className="row">
        {profile.map((e, i) => (
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
