import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // onInputChange(event) {
  //     //event.target.value is the component that takes user input
  //     console.log(event.target.value);
  // }
  onFormSubmit = event => {
    //prevents the form to submit the input and refresh the page on pressing ENTER
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
