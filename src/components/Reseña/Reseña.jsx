import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function Reseña({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const API_URL = 'https://api.themoviedb.org/3';
      const API_KEY = '49149d975d5c0df0a79802f0a64ad893';

      const response = await axios.get(`${API_URL}/movie/${movieId}/reviews`, {
        params: {
          api_key: API_KEY,
          language: 'en-ES',
          page: 1,
        },
      });

      setReviews(response.data.results);
    };

    fetchReviews();
  }, [movieId]);

  const truncateContent = (content, length) => {
    if (content.length > length) {
      return content.substring(0, length) + '...';
    }
    return content;
  };

  return (
    <div>
      {reviews.length > 0 ? (
        <div className="card-deck">
          {reviews.map((review) => (
            <Card bg='dark' text='white' key={review.id} className="mb-3" style={{ width: '85rem' }}> 
              <Card.Body>
                <Card.Title >Reseña de: {review.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Escrita el: {review.created_at}</Card.Subtitle>
                <Card.Text>{truncateContent(review.content, 500)}</Card.Text>
                <Card.Link href={review.url} target="_blank">
                  Leer reseña completa
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p>No hay reseñas disponibles.</p>
      )}
    </div>
  );
}

export default Reseña;