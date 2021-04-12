// Code MovieReviews Here

import React from 'react';

const MovieReviews = (props) => {


  return(
    <div className='review-list'>
      <ol>
        {
          props.reviews.map( (review) => <li className='review'>{review.display_title} </li> )
        }
      </ol>
    </div>
  )
}

export default MovieReviews;