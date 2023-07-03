import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Card from "react-bootstrap/Card";
import {useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const { name, email } = JSON.parse(storedUserData);
      const profileLink = `/profile?name=${name}&email=${email}`;
      navigate(profileLink);
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedData = localStorage.getItem("formDataList");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const user = parsedData.find(
        (data) =>
          data.email === formData.email && data.password === formData.password
      );
      if (user) {
        const userData = { id: user.id, name: user.name, email: user.email };
        localStorage.setItem("userData", JSON.stringify(userData));
        setLoginMessage("Login realizado com sucesso!");
        setFormData({
          email: "",
          password: "",
        });
        const profileLink = `/profile?name=${user.name}&email=${user.email}`;
        navigate(profileLink);
      } else {
        setLoginMessage("Email ou senha inválidos.");
      }
    } else {
      setLoginMessage("Nenhum dado de usuário encontrado.");
    }
  };

  return (
    <div className="gradientBackground loginPage">
      <Header />

      <div className="content">
        <Card className="loginCard">
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="cardTitle h1">
              Entrar na sua conta
            </Card.Title>
            <Container className="d-flex flex-column align-items-center">
              <form
                className="mx-auto text-center my-4"
                onSubmit={handleSubmit}
              >
                <Row className="d-flex flex-column flex-md-row justify-content-center mb-5">
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
                    <Button
                      btnType="submit"
                      content="Entrar"
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
            {loginMessage && <p className="loginMessage">{loginMessage}</p>}
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
