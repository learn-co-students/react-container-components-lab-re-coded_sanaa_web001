import React from 'react';

const MovieReviews = (props) =>
  <div className="review-list">
      {props.reviews.map(movie => {
          return <div className="review">
                <a href={movie.link.url}>{movie.headline}</a>
            </div>
      })}
  </div>

export default MovieReviews 