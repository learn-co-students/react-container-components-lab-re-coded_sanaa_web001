// Code MovieReviews Here
import React from 'react';

const Review = ({headline,byline,link,summary_short}) => {
  return (

    <div className="review">
        <a href={link.url}>{headline}</a>
        <h2>{byline}</h2>
      <p>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

export default MovieReviews;