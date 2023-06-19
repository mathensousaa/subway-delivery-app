import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel';

const ImgCarousel = () => {
  return (
    <Carousel className="carousel" variant = "dark">
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://th.bing.com/th/id/OIP.5WcHBsq7c7nWGPXBwurn4QHaE8?w=304&h=203&c=7&r=0&o=5&pid=1.7"
          alt="Imagem 1"
        />
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex align-items-center image-container">
      <img
            className="d-block"
            src="https://th.bing.com/th/id/OIP.5WcHBsq7c7nWGPXBwurn4QHaE8?w=304&h=203&c=7&r=0&o=5&pid=1.7"
            alt="Imagem 1"
          />
          <img
            className="d-block"
            src="https://th.bing.com/th/id/OIP.5WcHBsq7c7nWGPXBwurn4QHaE8?w=304&h=203&c=7&r=0&o=5&pid=1.7"
            alt="Imagem 1"
          />
           <img
            className="d-block"
            src="https://th.bing.com/th/id/OIP.5WcHBsq7c7nWGPXBwurn4QHaE8?w=304&h=203&c=7&r=0&o=5&pid=1.7"
            alt="Imagem 1"
          />
          
            </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://th.bing.com/th/id/OIP.5WcHBsq7c7nWGPXBwurn4QHaE8?w=304&h=203&c=7&r=0&o=5&pid=1.7"
          alt="Imagem 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImgCarousel;
