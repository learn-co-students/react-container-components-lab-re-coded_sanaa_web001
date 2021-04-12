import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
      reviews: [],
      searchTerm: ''
    }
  
  
    fetchReviews = (event) => {
      event.preventDefault();
      const NYT_API_KEY = process.env.REACT_APP_NY_TIMES_API;
      const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`
      fetch(URL)
        .then(response => response.json())
        .then(json => this.setState({reviews: json.results}))
    }
  
    handleChange = (event) => this.setState({searchTerm: event.target.value})
  
    render() {
      return(
        <div className="searchable-movie-reviews">
          <form onSubmit={this.fetchReviews}>
            <input type="text" onChange={this.handleChange}/>
            <button type="submit">Search</button>
          </form>
  
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
  }
