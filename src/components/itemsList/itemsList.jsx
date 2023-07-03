import { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';

const MenuComponent = (prop) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (item) => {
    setModalOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  function limitCharacter(text, limit) {
    if (windowWidth < 576) {
      if (text.length <= limit) {
        return text;
      }
      return text.slice(0, limit) + '...';
    } else {
      return text;
    }
  }

  return (
    <>
      <Row id={`item-${prop.listID}`} className="mb-5">
        <h4 className="mb-3">{prop.title}</h4>
        {prop.menuItems.map((item) => (
          <Col xl={6} lg={6} md={12} sm={12} key={item.id} className="mb-4">
            <Card>
              <Card.Img src={item.img} />
              <Card.Body className="cardContent">
                <Card.Title>{item.name}</Card.Title>
                <small className="mb-2">{limitCharacter(item.description, 50)}</small>
                <small className="mb-4 serves text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                  Serve {item.serves} {item.serves === 1 ? 'pessoa' : 'pessoas'}
                </small>
                <span className="price">A partir de R$ {item.price}</span>
                <Button variant="primary" onClick={() => openModal(item)}>
                  Fazer Pedido
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={modalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <div>
              <h5>{selectedItem.name}</h5>
              <p>{selectedItem.description}</p>
              <p>Preço: {selectedItem.price}</p>
              {/* Adicione outros detalhes do pedido aqui */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Fechar
          </Button>
          {/* Adicione outras ações do modal aqui */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MenuComponent;