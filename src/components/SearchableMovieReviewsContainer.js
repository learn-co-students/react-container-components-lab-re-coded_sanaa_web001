import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handlechange = e => {
        this.setState({searchTerm: e.target.value})
    }

    componentDidUpdate() {
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(response => this.setState({reviews: response.results}))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handlechange} >
                    <input type='text' />
                </form>
                { this.state.reviews.length ? <MovieReviews reviews={this.state.reviews} /> : null}
            </div>
        )
    }
}
