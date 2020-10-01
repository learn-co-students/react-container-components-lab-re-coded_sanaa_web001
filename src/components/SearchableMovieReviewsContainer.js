import React from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

  class SearchableMovieReviewsContainer extends React.Component {
      constructor(props){
          super(props)
          this.state = {
              reviews: [],
              searchTerm: ''
          }
      }

      handleSearchInput = event => {
          this.setState({searchTerm: event.target.value})
      }

      handleSubmit = event => {
          event.preventDefault()
          fetch(URL.concat(this.state.searchTerm))
          .then(resp => resp.json())
          .then(data => this.setState({reviews: data.results}))
      }
      render(){
          return(
              <div className="searchable-movie-reviews">
                  <form onSubmit={this.handleSubmit}>
                      <label>Search Movie Reviews</label>
                      <input id="search-input" type="text" onChange={this.handleSearchInput}></input>
                      <button type="submit">Submit</button>
                  </form>
              {typeof this.state.reviews === 'object' &&
              this.state.reviews.length > 0 &&
              <h1>Movie Search</h1>}
          <MovieReviews reviews={this.state.reviews}/>
          </div>
          )
      }
  }

  export default SearchableMovieReviewsContainer
