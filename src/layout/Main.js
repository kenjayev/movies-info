import { Component } from "react";
import HomePage from "../components/HomePage";
import MoviesPagesByCategory from "../components/MoviesPagesByCategory";

class Main extends Component {
  request = (link) => {
    return fetch(link)
      .then((response) => response.json())
      .then((data) => data.results);
  };
  linkByCategory = (category, genre = "") => {
    return `https://api.themoviedb.org/3/${category}?api_key=45b5011c63b6dfe0727f4a5ad0d341c0${genre}&language=en-US&page=1`;
  };

  render() {
    return (
      <main>
        {/* <HomePage request={this.request} link={this.linkByCategory} /> */}
        <MoviesPagesByCategory
          request={this.request}
          link={this.linkByCategory("movie/popular")}
        />
      </main>
    );
  }
}

export default Main;
