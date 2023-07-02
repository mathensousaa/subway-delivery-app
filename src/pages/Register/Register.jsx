import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Card from "react-bootstrap/Card";
import "./Register.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Dados do formulário foram armazenados no localStorage.");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Redirecionar para a página de login após o cadastro ser concluído
    window.location.href = "/login";
  };

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="gradientBackground registerPage">
      <Header />

      <div className="content">
        <Card className="registerCard">
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="cardTitle h1">
              Crie uma nova conta
            </Card.Title>
            <Container className="d-flex flex-column align-items-center">
              <form
                className="mx-auto text-center my-4"
                onSubmit={handleSubmit}
              >
                <Row className="d-flex flex-column flex-md-row justify-content-center mb-5">
                  <Col lg={12} className="mb-3">
                    <input
                      type="text"
                      className="form-control custom-input mb-3 mx-auto text-center"
                      placeholder="Nome"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg={12} className="mb-3">
                    <input
                      type="email"
                      className="form-control custom-input mb-3 mx-auto text-center"
                      placeholder="E-mail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg={12} className="mb-3">
                    <input
                      type="password"
                      className="form-control custom-input mb-3 mx-auto text-center"
                      placeholder="Senha"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg={12} className="mb-3">
                    <input
                      type="password"
                      className="form-control custom-input mb-3 mx-auto text-center"
                      placeholder="Confirmar Senha"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg={12} className="mb-3">
                    <Button
                      btnType="submit"
                      content="Criar conta"
                      bgColor="var(--green-900)"
                      border="1px solid var(--green-700)"
                      color="var(--light)"
                      padding=".75rem 2.5rem"
                      bdRadius="200px"
                      fontWeight="700"
                      bgColorHover="var(--green-700)"
                      borderHover="1px solid var(--green-700)"
                    />
                  </Col>
                </Row>
              </form>
            </Container>
          {errorMessage && <p className="errorMessage h5 text-danger">{errorMessage}</p>}
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;
