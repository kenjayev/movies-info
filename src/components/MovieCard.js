import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movies, movieCardRef } = this.props;
    return (
      <>
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <div
              className="homepageMovies__item"
              key={movie.id}
              ref={movieCardRef}
            >
              <div className="homepageMovies__item__imageBox">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="homepageMovies__item__body">
                <h3 className="homepageMovies__item__title">
                  {movie.title || movie.name}
                </h3>
              </div>
            </div>
          ))}
      </>
    );
  }
}

export default MovieCard;
