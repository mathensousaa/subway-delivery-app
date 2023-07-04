import { useState, useEffect } from "react";
import "./Drinks.css";
import { Drinks } from "../../../pages/Menu/importItems";
import { Row, Col, Card, Modal, FloatingLabel, Form } from "react-bootstrap";
import ButtonSubway from "../../Button/Button";

const DrinksItem = (prop) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArrayItem, setSelectedArrayItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [DrinksMenu, setDrinksMenu] = useState([]);

  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const setLocalStorage = (localKey, list, setter) => {
      const storedMenu = localStorage.getItem(localKey);
      if (storedMenu) {
        if (JSON.parse(storedMenu) != list) {
          setter(list);
          localStorage.setItem(localKey, JSON.stringify(list));
        } else setter(JSON.parse(storedMenu));
      } else {
        setter(list);
        localStorage.setItem(localKey, JSON.stringify(list));
      }
    };

    setLocalStorage("DrinksMenu", Drinks, setDrinksMenu);
  }, []);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleItemSelection = (item) => {
    setSelectedItem(item);
  };

  const handleClearSelection = () => {
    setQuantity(1);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = (array, itemName) => {
    setModalOpen(true);
    setSelectedArrayItem(array);
    handleItemSelection(itemName);
    handleClearSelection();
  };

  const closeModal = () => {
    setTotalPrice(0);
    setModalOpen(false);
    setSelectedArrayItem(null);
    handleClearSelection();
  };

  useEffect(() => {
    if (selectedArrayItem) {
      setTotalPrice(selectedArrayItem.price);
    }
  }, [selectedArrayItem]);

  const handleAddToCart = () => {
    const selectedArrayItemCard = {
      itemName: selectedItem,
      quantity: quantity,
      itemPrice: totalPrice * quantity,
    };
    console.log(selectedArrayItem);
    prop.handleAddToCart(selectedArrayItemCard);
    closeModal();
  };

  return (
    <>
      <Row id={prop.rowID} className="mb-5">
        <h4 className="mb-3">Bebidas</h4>
        {DrinksMenu.map((drink) => (
          <Col xl={6} lg={6} md={12} sm={12} key={drink.id} className="mb-4">
            <Card onClick={() => openModal(drink, drink.name)}>
              <Card.Img src={drink.img} />
              <Card.Body className="cardContent">
                <Card.Title className="h6">{drink.name}</Card.Title>
                <small className="mb-2">{drink.description}</small>
                <span className="price">
                  A partir de R${" "}
                  {drink.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedArrayItem && (
        <Modal show={modalOpen} fullscreen="md-down" onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedArrayItem.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="itemSummary">
              <img src={selectedArrayItem.img} className="img-fluid mb-3" />
              <div className="summaryText">
                <small>{selectedArrayItem.description}</small>
                <span className="price mt-3">
                  R${" "}
                  {selectedArrayItem.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>

            <div className="itemSelection">
              <div className="itemSelectionHeader">
                <span className="selectionText">
                  Alguma observação?
                  <small>Máximo de 200 caracteres</small>
                </span>
                <small className="isRequired text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                  OBRIGATÓRIO
                </small>
              </div>
              <div className="itemSelectionBody p-3" >
                <FloatingLabel controlId="floatingTextarea2" label="Observações" >
                  <Form.Control
                    as="textarea"
                    placeholder="..."
                    style={{ height: "100px" }}
                    maxlength="200"
                  />
                </FloatingLabel>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <ButtonSubway
              content={
                <>
                  <span className="pe-2">Adicionar</span>
                  <span className="price">
                    R$
                    {totalPrice.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </>
              }
              onClick={handleAddToCart}
            />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default DrinksItem;
