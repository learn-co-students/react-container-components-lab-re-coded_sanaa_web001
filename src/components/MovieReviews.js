// Code MovieReviews Here
import React from 'react';

const Review = ({ display_title, headline, byline, summary_short, link }) => {
  return (
    <div className="review" key={display_title}>
      <h3><a className="review-link" href={link.url} >{headline}</a></h3>
      <p>by {byline}</p>
      <blockquote>"{summary_short}"</blockquote>
    </div>
  )
}

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
  )

  MovieReviews.defaultProps = {
    reviews: [],
  }


export default MovieReviews
