import React, { Component } from "react";
class SearchBox extends Component {
  state = {};
  render() {
    let {handleChange,input}=this.props;
    return (
      <>
        <div>
          <input
            placeholder='Search characters'
            value={input}
            onChange={handleChange}
          />
        </div>
      </>
    );
  }
}

export default SearchBox;
