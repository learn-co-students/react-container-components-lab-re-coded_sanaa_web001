import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



// Code SearchableMovieReviewsContainer Here
const NYT_API_KEY = 'jvBSUgFBAuAAdWQFs1D4wfBWsfEKRMFG';
const URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">search</label>
          <input id="search-input" type="text"onChange={this.handleChange} />
          <button type="submit">submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
