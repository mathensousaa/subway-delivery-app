import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "../Card/Card";
import BMT from "../../assets/subs/BMT.png";

const ImgCarousel = () => {
  return (
    <Carousel className="carousel" variant="dark">
      <Carousel.Item>
        <div className="d-flex align-items-center image-container">
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center image-container">
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center image-container">
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
          <Card
            title="B.M.T Italiano"
            scr={BMT}
            alt="B.M.T Italiano"
            cardClass="text-center"
            bodyClass="p-0"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImgCarousel;
