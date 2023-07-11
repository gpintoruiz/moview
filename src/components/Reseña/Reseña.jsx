import React, { useEffect, useState } from 'react';
import reviewServce from '../../services/reseñas';

const Reseñas = () => {
  const [reseñas, setReseñas] = useState([]);

  useEffect(() => {
    reviewServce.getAll()
      .then(response => {
        setReseñas(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {reseñas.map(reseña => (
        <div key={reseña.id}>
          <h3>{reseña.nombreAutor}</h3>
          <p>{reseña.contenido}</p>
          <p>{reseña.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Reseñas;