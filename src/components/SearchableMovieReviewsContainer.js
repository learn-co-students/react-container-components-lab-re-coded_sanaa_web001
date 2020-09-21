import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ff9c64f7a5e941cfa0a461c11640e6f3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }
  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  handleSubmit = (e) => {
    fetch(URL.concat(this.state.searchTerm)).then(response => response.json()).then(response =>
      this.setState({ reviews: response.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Term:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}