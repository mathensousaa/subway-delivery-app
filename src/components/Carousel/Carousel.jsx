import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import { SUBSCarousel } from "../../pages/Menu/importItems";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ImgCarousel = () => {
  const chunks = Array.from(
    { length: Math.ceil(SUBSCarousel.length / 3) },
    (_, index) => SUBSCarousel.slice(index * 3, index * 3 + 3)
  );

  return (
    <>
      <Carousel className="carousel" variant="dark">
        {chunks.map((chunk, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="d-flex align-items-center image-container">
                {chunk.map((sub) => (
                  <Link
                    key={sub.id}
                    to="/menu"
                    className="link"
                    activeClassName="active"
                  >
                    <Card className="cardCarousel">
                      <Card.Img
                        variant="top"
                        src={sub.imgSub15}
                        className="img-fluid"
                      />
                      <Card.Body>
                        <Card.Title className="text-center">
                          {sub.name}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                ))}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImgCarousel;
