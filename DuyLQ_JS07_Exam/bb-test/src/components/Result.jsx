import React, { Component } from "react";
class Result extends Component {
  state = {};
  render() {
    let { name, img, actorname, nickname, birthday, status } = this.props;
    return (
      <>
      <div className="character-container">
        <div class='flip-card'>
          <div class='flip-card-inner'>
            <div class='flip-card-front'>
              <img
                src={img}
                alt='Avatar'
                className="imgAvatar"
              />
            </div>
            <div class='flip-card-back'>
              <h1>{name}</h1>
              <p>Actor Name:</p>{actorname}
              <p>Nickname:</p>{nickname}
              <p>Birthday:</p>{birthday}
              <p>Status: </p>{status}
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Result;
