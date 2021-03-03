import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export class LatestMovieReviewsContainer extends Component {
  state={
    reviews: []
  }
  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(reviews => {
      this.setState({
      reviews: reviews.results
      })
    })
  }
  render() {
    return (
      <div className="latest-movie-reviews">
      { this.state.reviews? this.state.reviews.map((review, i) => (<MovieReviews key={i} review={review}/>)): ''}     
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
