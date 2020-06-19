import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //FIRST METHOD
  // onSearchSubmit(term) {
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization: "Client-ID coflEIfMl-iUwR1Jzn50H7-Rf_G3wlX4iNTToz1G3J8"
  //       }
  //     })
  //     .then(response => {
  //       //shows a notification that the request was done
  //       console.log(response.data.results);
  //       //parameter.data.results and not just parameteras we require only the info in data.results
  //     });
  // }

  //SECOND METHOD
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    //parameter.data.results and not just parameteras we require only the info in data.results
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
