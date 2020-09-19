import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  };
  handleSearch = event =>
    this.setState({ searchTerm: event.target.value });

  Submit = event => {
    event.preventDefault();

    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.Submit}>
          <input type="text" onChange={this.handleSearch} />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}