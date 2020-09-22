// Code MovieReviews Here
import React from 'react';

const rev = ({headline,byline,summary_short}) => {
  return (
    <div className="review">

          <h1>{headline}</h1>
        <p className="author">{byline}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return(
    <div className="review-list"> { reviews.map(rev)} </div>
  );
}

export default MovieReviews
