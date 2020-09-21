// Code MovieReviews Here
import React from 'react'

const Review = ({
    headline
  }) => {
    return (

      <div
        key={headline}
        className="review"
      >
          {headline}
      </div>
    )}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews
