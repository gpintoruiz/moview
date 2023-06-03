import Carousel from 'react-bootstrap/Carousel';
import star from '../../img/estrella.png'
import './Trending.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Trending() {
  return (
    <Carousel fade>
      {/* Codigo 1er Slide del Carrusel */}
      <Carousel.Item>
      {/* Codigo de la fila que asegura que siempre se muestren 3 cards sin importar el viewport */}
      <Row xs={4} md={4} className="g-4">
          {/* 1era Card */}
          <Card className="t-card">
          <Card.Img id="t-card1-img" className='t-card-img' src='https://m.media-amazon.com/images/M/MV5BMDNhZWU4NTQtYjk1NS00MTM1LTg3ODYtMzE0MjQ2YTI5MGM4XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg' alt="Card image" />
          <Card.ImgOverlay id="t-overlay">
            <Card.Text className='t-text'>
             <img src={star} alt="star" className='t-star' id="t-card1-star1"></img>
             <img src={star} alt="star" className='t-star' id="t-card1-star2"></img>
             <img src={star} alt="star" className='t-star' id="t-card1-star3"></img>
             <img src={star} alt="star" className='t-star' id="t-card1-star4"></img>
             <img src={star} alt="star" className='t-star' id="t-card1-star5"></img>
             <h3 id="t-card1-title"><b>Cruella</b></h3>
             <p id="t-card1-year"><b>2021</b></p>
             <p id="t-card1-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>

          {/* 2da Card */}
          <Card className="t-card">
          <Card.Img id="t-card2-img"  className='t-card-img' src='https://www.mubis.es/media/users/12828/314879/trailer-y-poster-de-the-mother-original.jpg' alt="Card image" />
          <Card.ImgOverlay id="t-overlay">
            <Card.Text className='t-text'>
            <img src={star} alt="star" className='star'  id="t-card2-star1"></img>
             <img src={star} alt="star" className='star' id="t-card2-star2"></img>
             <img src={star} alt="star" className='star' id="t-card2-star3"></img>
             <img src={star} alt="star" className='star' id="t-card2-star4"></img>
             <img src={star} alt="star" className='star' id="t-card2-star5"></img>
             <h3 id="t-card2-title"><b>Cruella</b></h3>
             <p id="t-card2-year"><b>2021</b></p>
             <p id="t-card2-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>

          {/* 3ra Card */}
          <Card className="t-card">
          <Card.Img id="t-card3-img"  className='t-card-img' src='https://i.ebayimg.com/images/g/b-AAAOSwfOBkEoXc/s-l500.jpg' alt="Card image" />
          <Card.ImgOverlay id="t-overlay">
            <Card.Text className='t-text'>
            <img src={star} alt="star" className='t-star'  id="t-card3-star1"></img>
             <img src={star} alt="star" className='t-star' id="t-card3-star2"></img>
             <img src={star} alt="star" className='t-star' id="t-card3-star3"></img>
             <img src={star} alt="star" className='t-star' id="t-card3-star4"></img>
             <img src={star} alt="star" className='t-star' id="t-card3-star5"></img>
             <h3 id="t-card3-title"><b>Cruella</b></h3>
             <p id="t-card3-year"><b>2021</b></p>
             <p id="t-card3-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>
      </Row>
      </Carousel.Item>

      {/* Codigo del 2do slide del carrusel */}
      <Carousel.Item>
      <Row xs={4} md={4} className="g-4">
          {/* 1era Card */}
          <Card className="t-card">
          <Card.Img id="t-card1-img" className='t-card-img' src='https://www.joblo.com/wp-content/uploads/2023/04/Hypnotic-poster-1-691x1024.jpg' alt="Card image" />
          <Card.ImgOverlay id="t-overlay">
            <Card.Text className='t-text'>
             <img src={star} alt="star" className='t-star' id="t-card4-star1"></img>
             <img src={star} alt="star" className='t-star' id="t-card4-star2"></img>
             <img src={star} alt="star" className='t-star' id="t-card4-star3"></img>
             <img src={star} alt="star" className='t-star' id="t-card4-star4"></img>
             <img src={star} alt="star" className='t-star' id="t-card4-star5"></img>
             <h3 id="t-card1-title"><b>Cruella</b></h3>
             <p id="t-card4-year"><b>2021</b></p>
             <p id="t-card4-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>

          {/* 2da Card */}
          <Card className="t-card">
          <Card.Img id="t-card5-img" className="t-card-img" src='https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg' alt="Card image" />
          <Card.ImgOverlay id="t-overlay">
            <Card.Text className='t-text'>
            <img src={star} alt="star" className='t-star'  id="t-card5-star1"></img>
             <img src={star} alt="star" className='t-star' id="t-card5-star2"></img>
             <img src={star} alt="star" className='t-star' id="t-card5-star3"></img>
             <img src={star} alt="star" className='t-star' id="t-card5-star4"></img>
             <img src={star} alt="star" className='t-star' id="t-card5-star5"></img>
             <h3 id="t-card5-title"><b>Cruella</b></h3>
             <p id="t-card5-year"><b>2021</b></p>
             <p id="t-card5-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>

          {/* 3era Card */}
          <Card className="t-card">
          <Card.Img id="t-card6-img" className="t-card-img" src='https://www.ecartelera.com/carteles/6800/6851/001_p.jpg' alt="Card image" />
          <Card.ImgOverlay id="t-overlay">
            <Card.Text className='t-text'>
             <img src={star} alt="star" className='t-star' id="t-card6-star1"></img>
             <img src={star} alt="star" className='t-star' id="t-card6-star2"></img>
             <img src={star} alt="star" className='t-star' id="t-card6-star3"></img>
             <img src={star} alt="star" className='t-star' id="t-card6-star4"></img>
             <img src={star} alt="star" className='t-star' id="t-card6-star5"></img>
             <h3 id="t-card6-title"><b>Cruella</b></h3>
             <p id="t-card6-year"><b>2021</b></p>
             <p id="t-card6-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>
          
      </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default Trending;