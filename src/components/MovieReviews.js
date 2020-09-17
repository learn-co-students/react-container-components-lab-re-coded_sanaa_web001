// Code MovieReviews Here
import React, { Component } from 'react';
  

const Review = ({
    headline,
    byline,
    link,
    summary_short
  }) => {
    return (
  
      <div
        key={headline}
        className="review"
      >
        <header>
          <a
            className="review-link"
            href={link.url}
          >
            {headline}
          </a>
          <br/>
          <span className="author">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
      </div>
    );
  };
  
  const MovieReviews = ({ reviews }) =>
  {
    // console.log(reviews)
    return <div className="review-list">{reviews.map(Review)}</div>;
  } 
  
  MovieReviews.defaultProps = {
    reviews: []
  };
  
  export default MovieReviews;