import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <p>I have {this.state.videos.length} videos</p>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;