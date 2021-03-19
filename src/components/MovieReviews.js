// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props) {
    return (
        <div className="review-list">
            {props.reviews.map(review => { return <div className="review">
                                                            <h1>{review.display_title}</h1>
                                                        </div>})}
        </div>
    )
}
