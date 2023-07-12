import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reseña({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const API_URL = 'https://api.themoviedb.org/3';
      const API_KEY = '49149d975d5c0df0a79802f0a64ad893';

      const response = await axios.get(`${API_URL}/movie/${movieId}/reviews`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          page: 1,
        },
      });

      setReviews(response.data.results);
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>Content: {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay reseñas disponibles.</p>
      )}
    </div>
  );
}

export default Reseña;
