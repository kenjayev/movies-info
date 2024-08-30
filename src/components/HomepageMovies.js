import React, { createRef } from "react";
import MovieCard from "./MovieCard";

class HomepageMovies extends React.Component {
  state = {
    movies: [],
  };
  movieCardRef = createRef();
  movieCardWrapperRef = createRef();

  componentDidMount() {
    const { link, request } = this.props;
    request(link).then((data) => this.setState({ movies: data.slice(0, 8) }));
  }

  walkToRight = (isRight) => {
    const stepValue = this.movieCardRef.current.clientWidth + 20;
    const endStepsValue =
      this.movieCardWrapperRef.current.scrollWidth -
      this.movieCardWrapperRef.current.clientWidth;
    const scrollLeft = this.movieCardWrapperRef.current.scrollLeft;
    if (isRight) {
      if (scrollLeft + 2 >= endStepsValue) {
        this.movieCardWrapperRef.current.scrollLeft = 0;
      } else {
        this.movieCardWrapperRef.current.scrollLeft += stepValue;
      }
    } else {
      if (scrollLeft === 0) {
        this.movieCardWrapperRef.current.scrollLeft = endStepsValue;
      } else {
        this.movieCardWrapperRef.current.scrollLeft -= stepValue;
      }
    }
  };

  render() {
    const { movies } = this.state;
    const { title } = this.props;
    return (
      <div className="container homepageMovies">
        <div className="homepageMovies__header">
          <h3 className="homepageMovies__title">{title}</h3>
          <a href="#!">See more</a>
        </div>

        <div className="homepageMovies__body">
          <button
            className="walkToLeft"
            onClick={() => this.walkToRight(false)}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>

          <div className="homepageMovies__list" ref={this.movieCardWrapperRef}>
            <MovieCard movies={movies} movieCardRef={this.movieCardRef} />
          </div>

          <button
            className="walkToRight"
            onClick={() => this.walkToRight(true)}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default HomepageMovies;
