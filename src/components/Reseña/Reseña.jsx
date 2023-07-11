import React, { useState, useEffect } from 'react'
import reviewService from '../../services/reseñas'

function Reseña() {

    const [reviews, setReviews] = useState([]) 

    useEffect(() => {
      reviewService
        .getAll()
        .then(initialReviews => {
          setReviews(initialReviews)
        })
    }, [])


    const renderReviews = () =>{
      return(
        <ul>
          {reviewsToShow.map((note, i) => 
            <p>{review.nombreAutor}</p>
          )}
        </ul> 
      )
    }
}
  
  export default Reseña;