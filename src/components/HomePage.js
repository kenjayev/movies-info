import React from "react";
import HomepageMovies from "./HomepageMovies";

class HomePage extends React.Component {
  render() {
    const { link, request } = this.props;
    return (
      <div className="HomePage">
        <HomepageMovies
          link={link("movie/popular")}
          request={request}
          title="popular movies"
        />
        <HomepageMovies
          link={link("discover/movie", "&with_genres=16")}
          request={request}
          title="Cartoons"
        />
        <HomepageMovies
          link={link("tv/popular")}
          request={request}
          title=" TV Shows"
        />
      </div>
    );
  }
}

export default HomePage;
