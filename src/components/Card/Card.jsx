import Card from 'react-bootstrap/Card';

function CardSubway(prop) {

  return (
    <Card className={prop.cardClass} style={{ width: prop.cardWidth }}>
      <Card.Img className={prop.imgClass} variant="top" src={prop.scr} alt={prop.alt}/>
      <Card.Body className={prop.bodyClass}>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text >
          {prop.content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardSubway;