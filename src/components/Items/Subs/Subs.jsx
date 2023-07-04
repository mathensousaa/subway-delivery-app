import { useState, useEffect } from "react";
import "./Subs.css";
import {
  SUBS,
  Breads,
  Additionals,
  Sauces,
  Vegetables,
  Cheeses,
  Seasons,
} from "../../../pages/Menu/importItems";
import { Row, Col, Card, Modal, Form } from "react-bootstrap";
import ButtonSubway from "../../Button/Button";

const Subs = (prop) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArrayItem, setSelectedArrayItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [SubsMenu, setSubsMenu] = useState([]);

  const [BreadsMenu, setBreadsMenu] = useState([]);
  const [AdditionalsMenu, setAdditionalsMenu] = useState([]);
  const [SaucesMenu, setSaucesMenu] = useState([]);
  const [VegetablesMenu, setVegetablesMenu] = useState([]);
  const [CheesesMenu, setCheesesMenu] = useState([]);
  const [SeasonsMenu, setSeasonsMenu] = useState([]);

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBread, setSelectedBread] = useState("");
  const [selectedCheese, setSelectedCheese] = useState("");
  const [selectedTemperature, setSelectedTemperature] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedVegetables, setSelectedVegetables] = useState([]);
  const [selectedSeasonings, setSelectedSeasonings] = useState([]);
  const [selectedSauces, setSelectedSauces] = useState([]);
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

    setLocalStorage("SubsMenu", SUBS, setSubsMenu);
    setLocalStorage("BreadsMenu", Breads, setBreadsMenu);
    setLocalStorage("AdditionalsMenu", Additionals, setAdditionalsMenu);
    setLocalStorage("SaucesMenu", Sauces, setSaucesMenu);
    setLocalStorage("VegetablesMenu", Vegetables, setVegetablesMenu);
    setLocalStorage("CheesesMenu", Cheeses, setCheesesMenu);
    setLocalStorage("SeasonsMenu", Seasons, setSeasonsMenu);
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

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleSizeChange = (size) => {
    let newPrice;

    if (size === "15") {
      newPrice = selectedArrayItem.price15;
    } else if (size === "30") {
      newPrice = selectedArrayItem.price30;
    }
    setTotalPrice(newPrice);
    handleSizeSelection(size);
  };

  const handleBreadSelection = (bread) => {
    setSelectedBread(bread);
  };

  const handleCheeseSelection = (cheese) => {
    setSelectedCheese(cheese);
  };

  const handleTemperatureSelection = (temperature) => {
    setSelectedTemperature(temperature);
  };

  const handleAddonSelection = (addonName, totalPrice) => {
    const selectedAddon = AdditionalsMenu.find((addon) => addon.name === addonName);
  
    if (selectedAddon) {
      setSelectedAddons((prevAddons) => [...prevAddons, selectedAddon]);
      
      const addonPrice = selectedSize === "30" ? selectedAddon.price30 * 2 : selectedAddon.price15;
      setTotalPrice(totalPrice + addonPrice);
    }

    console.log(selectedAddons);
  };

  const handleVegetablesSelection = (vegetableName) => {
    const isVegetableSelected = selectedVegetables.includes(vegetableName);

    if (isVegetableSelected) {
      // Remover o vegetal do array
      const updatedVegetables = selectedVegetables.filter(
        (vegetable) => vegetable !== vegetableName
      );
      setSelectedVegetables(updatedVegetables);
    } else {
      // Adicionar o vegetal ao array
      setSelectedVegetables([...selectedVegetables, vegetableName]);
    }

    console.log(selectedVegetables);
  };

  const handleSeasoningSelection = (seasoning) => {
    const index = selectedSeasonings.indexOf(seasoning);
    if (index > -1) {
      setSelectedSeasonings(
        selectedSeasonings.filter((item) => item !== seasoning)
      );
    } else {
      setSelectedSeasonings([...selectedSeasonings, seasoning]);
    }
  };

  const handleSauceSelection = (sauce) => {
    const index = selectedSauces.indexOf(sauce);
    if (index > -1) {
      setSelectedSauces(selectedSauces.filter((item) => item !== sauce));
    } else {
      setSelectedSauces([...selectedSauces, sauce]);
    }
  };

  const handleClearSelection = () => {
    setSelectedBread("");
    setSelectedCheese("");
    setSelectedTemperature("");
    setSelectedAddons([]);
    setSelectedVegetables([]);
    setSelectedSeasonings([]);
    setSelectedSauces([]);
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
    handleSizeSelection("15");
    handleClearSelection();
  };

  const closeModal = () => {
    setTotalPrice(0);
    setModalOpen(false);
    setSelectedArrayItem(null);
    handleClearSelection();
  };

  function limitCharacter(text, limit) {
    if (windowWidth < 576) {
      if (text.length <= limit) {
        return text;
      }
      return text.slice(0, limit) + "...";
    } else return text;
  }

  useEffect(() => {
    if (selectedArrayItem) {
      setTotalPrice(selectedArrayItem.price15);
    }
  }, [selectedArrayItem]);

  const handleAddToCart = () => {
    const selectedArrayItemCard = {
      itemName: selectedItem,
      size: selectedSize,
      bread: selectedBread,
      cheese: selectedCheese,
      temperature: selectedTemperature,
      itemPrice: totalPrice,
    //   addons: selectedAddons,
    //   vegetables: selectedVegetables,
    //   seasonings: selectedSeasonings,
    //   sauces: selectedSauces,
    //   drink: selectedDrinks,
    //   dessert: selectedDesserts,
    //   quantity: quantity,
    };
    prop.handleAddToCart(selectedArrayItemCard);
    closeModal();
  };


  return (
    <>
      <Row id={prop.rowID} className="mb-5">
        <h4 className="mb-3">Subs</h4>
        {SubsMenu.map((sub) => (
          <Col xl={6} lg={6} md={12} sm={12} key={sub.id} className="mb-4">
            <Card onClick={() => openModal(sub, sub.name, )}>
              <Card.Img src={sub.imgSub15} />
              <Card.Body className="cardContent">
                <Card.Title className="h6">{sub.name}</Card.Title>
                <small className="mb-2">
                  {limitCharacter(sub.description, 50)}
                </small>
                <small className="mb-4 serves text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                  Serve {sub.serves} {sub.serves === 1 ? "pessoa" : "pessoas"}
                </small>
                <span className="price">
                  A partir de R${" "}
                  {sub.price15.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedArrayItem && (
        <Modal show={modalOpen} fullscreen="xl-down" onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedArrayItem.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="itemSummary">
              <img
                src={selectedArrayItem.imgSub15}
                className="img-fluid mb-3"
              />
              <div className="summaryText">
                <small>{selectedArrayItem.description}</small>
                <span className="price mt-3">
                  A partir de R${" "}
                  {selectedArrayItem.price15.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
            <Form>
              <div className="itemsSelection">
                <div className="itemSelection">
                  <div className="itemSelectionHeader">
                    <span className="selectionText">
                      Escolha o Tamanho
                      <small>Apenas 1</small>
                    </span>
                    <small className="isRequired text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                      OBRIGATÓRIO
                    </small>
                  </div>
                  <div className="itemSelectionBody">
                    {["15", "30"].map((size) => {
                      const is30cm = size === "30";
                      const priceDifference =
                        selectedArrayItem.price30 - selectedArrayItem.price15;

                      return (
                        <Form.Check
                          key={size}
                          type="radio"
                          id={`size-${size}`}
                          label={`${size}cm`}
                          custom
                        >
                          <Form.Check.Label>
                            {is30cm ? (
                              <img
                                src={selectedArrayItem.imgSub30}
                                alt={`Imagem ${size}cm`}
                              />
                            ) : (
                              <img
                                src={selectedArrayItem.imgSub15}
                                alt={`Imagem ${size}cm`}
                              />
                            )}
                            {is30cm && (
                              <small className="price-difference">
                                + R${priceDifference.toFixed(2)}
                              </small>
                            )}
                            {`${size}cm`}
                          </Form.Check.Label>
                          <Form.Check.Input
                            type="radio"
                            name="size"
                            onClick={() => handleSizeChange(size)}
                          />
                        </Form.Check>
                      );
                    })}
                  </div>
                </div>

                <div className="itemSelection">
                  <div className="itemSelectionHeader">
                    <span className="selectionText">
                      Escolha o Tipo de Pão
                      <small>Apenas 1</small>
                    </span>
                    <small className="isRequired text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                      OBRIGATÓRIO
                    </small>
                  </div>
                  <div className="itemSelectionBody">
                    {BreadsMenu.map((bread) => (
                      <Form.Check
                        key={bread.id}
                        type="radio"
                        id={`bread-${bread.id}`}
                        label={bread.id}
                        custom
                      >
                        <Form.Check.Label>
                          <img src={bread.img} alt={`Imagem ${bread.id}`} />
                          {bread.name}
                        </Form.Check.Label>
                        <Form.Check.Input
                          type="radio"
                          name="bread"
                          onClick={() => handleBreadSelection(bread.name)}
                        />
                      </Form.Check>
                    ))}
                  </div>
                </div>

                <div className="itemSelection">
                  <div className="itemSelectionHeader">
                    <span className="selectionText">
                      Escolha o Queijo
                      <small>Apenas 1</small>
                    </span>
                    <small className="isRequired text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                      OBRIGATÓRIO
                    </small>
                  </div>
                  <div className="itemSelectionBody">
                    {CheesesMenu.map((cheese) => (
                      <Form.Check
                        key={cheese.id}
                        type="radio"
                        id={`cheese-${cheese.id}`}
                        label={cheese.id}
                        custom
                      >
                        <Form.Check.Label>
                          <img src={cheese.img} alt={`Imagem ${cheese.id}`} />
                          {cheese.name}
                        </Form.Check.Label>
                        <Form.Check.Input
                          type="radio"
                          name="cheese"
                          onClick={() => handleCheeseSelection(cheese.name)}
                        />
                      </Form.Check>
                    ))}
                    <Form.Check
                      type="radio"
                      id="cheese-none"
                      label="Sem Queijo"
                      custom
                    >
                      <Form.Check.Label>
                        <img
                          src=""
                          alt="Imagem Sem Queijo"
                          className="opacity-0"
                        />
                        Sem Queijo
                      </Form.Check.Label>
                      <Form.Check.Input
                        type="radio"
                        name="cheese"
                        onClick={() => handleCheeseSelection("Sem Queijo")}
                      />
                    </Form.Check>
                  </div>
                </div>

                <div className="itemSelection">
                  <div className="itemSelectionHeader">
                    <span className="selectionText">
                      Escolha a Temperatura
                      <small>Apenas 1</small>
                    </span>
                    <small className="isRequired text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                      OBRIGATÓRIO
                    </small>
                  </div>
                  <div className="itemSelectionBody">
                    {[
                      { id: "quente", name: "Quente" },
                      { id: "frio", name: "Frio" },
                    ].map((temp) => (
                      <Form.Check
                        key={temp.id}
                        type="radio"
                        id={`temp-${temp.id}`}
                        label={temp.id}
                        custom
                      >
                        <Form.Check.Label>
                          <img
                            src=""
                            alt="Imagem Temperatura
                          Temperatura"
                            className="opacity-0"
                          />
                          {temp.name}
                        </Form.Check.Label>
                        <Form.Check.Input
                          type="radio"
                          name="temp"
                          onClick={() => handleTemperatureSelection(temp.name)}
                        />
                      </Form.Check>
                    ))}
                  </div>
                </div>

                {/* <div className="itemSelection">
                  <div className="itemSelectionHeader">
                    <span className="selectionText">
                      Escolha os adicionais
                      <small>Você pode todos</small>
                    </span>
                    <small className="isRequired text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                      OBRIGATÓRIO
                    </small>
                  </div>
                  <div className="itemSelectionBody">
                    {AdditionalsMenu.map((addon) => {
                        const is30cm = selectedSize === "30";

                        return (
                            <Form.Check
                                key={addon.id}
                                type="checkbox"
                                id={`addon-${addon.id}`}
                                label={addon.id}
                                custom
                            >
                                <Form.Check.Label>
                                    <img src={addon.img} alt={`Imagem ${addon.id}`} />
                                    {is30cm ? (
                                        <small className="addon-price">
                                            + R${addon.price30.toFixed(2)}
                                        </small>
                                    ) : (
                                        <small className="addon-price">
                                            + R${addon.price15.toFixed(2)}
                                        </small>
                                    )

                                    }
                                    {addon.name}
                                </Form.Check.Label>
                                <Form.Check.Input
                                    type="checkbox"
                                    name="addon"
                                    onClick={() => handleAddonSelection(addon.name)}
                                />
                            </Form.Check>
                        )
                    })}
                  </div>
                </div>

                <div className="itemSelection">
                  <div className="itemSelectionHeader">
                    <span className="selectionText">
                      Escolha o Queijo
                      <small>Apenas 1</small>
                    </span>
                    <small className="isRequired text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">
                      OBRIGATÓRIO
                    </small>
                  </div>
                  <div className="itemSelectionBody">
                    {VegetablesMenu.map((vegetable) => (
                      <Form.Check
                        key={vegetable.id}
                        type="radio"
                        id={`vegetable-${vegetable.id}`}
                        label={vegetable.id}
                        custom
                      >
                        <Form.Check.Label>
                          <img src={vegetable.img} alt={`Imagem ${vegetable.id}`} />
                          {vegetable.name}
                        </Form.Check.Label>
                        <Form.Check.Input
                          type="checkbox"
                          name="vegetable"
                          onClick={() => handleVegetablesSelection(vegetable.name)}
                        />
                      </Form.Check>
                    ))}
                    <Form.Check
                      type="checkbox"
                      id="vegetable-none"
                      label="Sem Queijo"
                      custom
                    >
                      <Form.Check.Label>
                        <img
                          src=""
                          alt="Imagem Sem Queijo"
                          className="opacity-0"
                        />
                        Sem Vegetais
                      </Form.Check.Label>
                      <Form.Check.Input
                        type="radio"
                        name="vegetable"
                        onClick={() => handleVegetablesSelection("Sem Vegetais")}
                      />
                    </Form.Check>
                  </div>
                </div> */}
              </div>
            </Form>
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

export default Subs;
