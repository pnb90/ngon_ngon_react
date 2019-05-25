import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Reviews() {  
  const [reviews, setReviews] = useState( [] );
  
  useEffect(async() => {
    const response = await axios("/api/reviews")
    setReviews(response.data)
  }, []);
  
  const review = reviews.map(oneReview =>
    <h2>{oneReview.rating}</h2>
    )

  return(
    <div>
      <h1>These are REVIEWS</h1>
      {review}
    </div>
  )
} 

export default Reviews