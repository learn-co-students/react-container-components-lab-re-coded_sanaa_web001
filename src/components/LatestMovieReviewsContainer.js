import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'jvBSUgFBAuAAdWQFs1D4wfBWsfEKRMFG';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

 class LatestMovieReviewsContainer extends Component {
     state = {
        reviews : []
     }
     componentDidMount() {
         fetch(URL)
         .then( res => res.json() )
         .then( data => this.setState({
            reviews : data
         }))
     }
    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews = {this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
