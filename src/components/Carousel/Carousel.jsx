import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import BMT from "../../assets/subs/BMT.png";
import Card from "../Card/Card";

const ImgCarousel = () => {
  return (
    <Carousel className="carousel" variant="dark">
      <Carousel.Item>
        <div className="d-flex align-items-center image-container">
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center image-container">
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center image-container">
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
          <Card
            cardWidth="12rem"
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
            bdRadius="16px"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImgCarousel;
