import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export class SearchableMovieReviewsContainer extends Component {
  state={
    reviews: [],
    searchTerm: ''
  }
  onSubmit = (e) => {
    e.preventDefault()
    fetch(`${URL}+&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(reviews => {
      this.setState({
      reviews: reviews.results
      })
    })
  }
  handleInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.onSubmit}>
          <input type="search" onChange={this.handleInput} value={this.state.searchTerm} />
          <button type="submit">search</button>
        </form>
        { this.state.reviews? this.state.reviews.map((review, i) => (<MovieReviews key={i} review={review}/>)): ''}     

      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
