import Carousel from 'react-bootstrap/Carousel';
import star from '../../img/estrella.png'
import './InTheater.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
function inTheater() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <Row xs={4} md={4} className="g-4">
          <Card className="card">
          <Card.Img id="it-card1-img" className='card-img' src='https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/IRN2ZUZFANAXVNKJZL62RNJEB4.jpg' alt="Card image" />
          <Card.ImgOverlay id="overlay">
            <Card.Text className='text'>
             <img src={star} alt="star" className='star' id="it-card1-star1"></img>
             <img src={star} alt="star" className='star' id="it-card1-star2"></img>
             <img src={star} alt="star" className='star' id="it-card1-star3"></img>
             <img src={star} alt="star" className='star' id="it-card1-star4"></img>
             <img src={star} alt="star" className='star' id="it-card1-star5"></img>
             <h3 id="it-card1-title"><b>Cruella</b></h3>
             <p id="it-card1-year"><b>2021</b></p>
             <p id="it-card1-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>

          <Card className="card">
          <Card.Img id="it-card2-img"  className='card-img' src='https://www.alohacriticon.com/wp-content/uploads/2023/05/guardianes-galaxia-volumen-3-poster-sinopsis-2023.jpg' alt="Card image" />
          <Card.ImgOverlay id="overlay">
            <Card.Text className='text'>
            <img src={star} alt="star" className='star'  id="it-card2-star1"></img>
             <img src={star} alt="star" className='star' id="it-card2-star2"></img>
             <img src={star} alt="star" className='star' id="it-card2-star3"></img>
             <img src={star} alt="star" className='star' id="it-card2-star4"></img>
             <img src={star} alt="star" className='star' id="it-card2-star5"></img>
             <h3 id="it-card2-title"><b>Cruella</b></h3>
             <p id="it-card2-year"><b>2021</b></p>
             <p id="it-card2-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>

          <Card className="card">
          <Card.Img id="it-card3-img"  className='card-img' src='https://image.tmdb.org/t/p/original/tnPGFoeQpLznLplytqPjmvRIJ2F.jpg' alt="Card image" />
          <Card.ImgOverlay id="overlay">
            <Card.Text className='text'>
            <img src={star} alt="star" className='star'  id="it-card3-star1"></img>
             <img src={star} alt="star" className='star' id="it-card3-star2"></img>
             <img src={star} alt="star" className='star' id="it-card3-star3"></img>
             <img src={star} alt="star" className='star' id="it-card3-star4"></img>
             <img src={star} alt="star" className='star' id="it-card3-star5"></img>
             <h3 id="it-card3-title"><b>Cruella</b></h3>
             <p id="it-card3-year"><b>2021</b></p>
             <p id="it-card3-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>
      </Row>
      </Carousel.Item>

      <Carousel.Item>
      <Row xs={4} md={4} className="g-4">
          <Card className="card">
          <Card.Img id="it-card1-img" className='card-img' src='https://image.tmdb.org/t/p/original/4SMqo8Me8aCT4KAVLeG9pk8VYiN.jpg' alt="Card image" />
          <Card.ImgOverlay id="overlay">
            <Card.Text className='text'>
             <img src={star} alt="star" className='star' id="it-card4-star1"></img>
             <img src={star} alt="star" className='star' id="it-card4-star2"></img>
             <img src={star} alt="star" className='star' id="it-card4-star3"></img>
             <img src={star} alt="star" className='star' id="it-card4-star4"></img>
             <img src={star} alt="star" className='star' id="it-card4-star5"></img>
             <h3 id="it-card1-title"><b>Cruella</b></h3>
             <p id="it-card4-year"><b>2021</b></p>
             <p id="it-card4-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>

          <Card className="card">
          <Card.Img id="it-card5-img" className="card-img" src='https://cartelerasdecine.info/wp-content/uploads/2022/04/La-Ciudad-Perdida-The-Lost-City-Pelicula-Cartelera-Cine.jpg' alt="Card image" />
          <Card.ImgOverlay id="overlay">
            <Card.Text className='text'>
            <img src={star} alt="star" className='star'  id="it-card5-star1"></img>
             <img src={star} alt="star" className='star' id="it-card5-star2"></img>
             <img src={star} alt="star" className='star' id="it-card5-star3"></img>
             <img src={star} alt="star" className='star' id="it-card5-star4"></img>
             <img src={star} alt="star" className='star' id="it-card5-star5"></img>
             <h3 id="it-card5-title"><b>Cruella</b></h3>
             <p id="it-card5-year"><b>2021</b></p>
             <p id="it-card5-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>

          <Card className="card">
          <Card.Img id="it-card6-img" className="card-img" src='https://www.ecartelera.com/carteles/6800/6851/001_p.jpg' alt="Card image" />
          <Card.ImgOverlay id="overlay">
            <Card.Text className='text'>
            <img src={star} alt="star" className='star'  id="it-card6-star1"></img>
             <img src={star} alt="star" className='star' id="it-card6-star2"></img>
             <img src={star} alt="star" className='star' id="it-card6-star3"></img>
             <img src={star} alt="star" className='star' id="it-card6-star4"></img>
             <img src={star} alt="star" className='star' id="it-card6-star5"></img>
             <h3 id="it-card6-title"><b>Cruella</b></h3>
             <p id="it-card6-year"><b>2021</b></p>
             <p id="it-card6-Genres"><b>Genres: Drama, Comedy, Adventure</b></p>
            </Card.Text>
          </Card.ImgOverlay>
          </Card>
      </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default inTheater;