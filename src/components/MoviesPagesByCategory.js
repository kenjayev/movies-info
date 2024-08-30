import React from "react";

class MoviesPagesByCategory extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    const { link, request } = this.props;
    request(link).then((data) => this.setState({ movies: data }));
  }
  render() {
    return <div className="MoviesPages"></div>;
  }
}

export default MoviesPagesByCategory;
