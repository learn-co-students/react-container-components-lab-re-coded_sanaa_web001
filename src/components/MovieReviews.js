// Code MovieReviews Here
import React from 'react'

function MovieReviews({review}) {
  return (
    <div className="review-list">
      <h6 className="review">{review.headline}</h6>
      
    </div>
  )
}

export default MovieReviews