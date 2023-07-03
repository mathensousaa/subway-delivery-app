import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Card from "react-bootstrap/Card";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const AlreadyLoggedInPage = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      navigate("/login");
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Atualizar os dados do usuário em formDataList
    const storedFormDataList = localStorage.getItem("formDataList");
    if (storedFormDataList) {
      const formDataList = JSON.parse(storedFormDataList);
      const updatedFormDataList = formDataList.map((formData) => {
        if (formData.id === userData.id) {
          return { ...formData, ...userData };
        }
        return formData;
      });
      localStorage.setItem("formDataList", JSON.stringify(updatedFormDataList));
    }

    localStorage.setItem("userData", JSON.stringify(userData));
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  if (!userData) {
    return null;
  }

  return (
    <div className="gradientBackground LoggedPage">
      <Header />
      <div className="content">
        <Card className="loginCard">
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="cardTitle h2">
              Você já está logado!
            </Card.Title>
            {isEditing ? (
              <div className="text-center mb-2">
                <div className="form-group">
                  <label className="h2" htmlFor="name">
                    Nome:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="h2" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                  <hr />
                </div>
                <div className="text-center">
                  <Button
                    btnType="submit"
                    content="Salvar"
                    bgColor="var(--green-900)"
                    border="1px solid var(--green-700)"
                    color="var(--light)"
                    padding=".3rem 2.5rem"
                    bdRadius="200px"
                    fontWeight="700"
                    bgColorHover="var(--green-700)"
                    borderHover="1px solid var(--green-700)"
                    onClick={handleSave}
                    className="btn-save"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center mb-2">
                <p className="h5 mb-2">
                  Nome:
                  <p className="dataDisplay">{userData.name}</p>
                </p>
                <p className="h5 mb-2">
                  Email:
                  <p className="dataDisplay">{userData.email}</p>
                  <hr />
                </p>
                <Button
                  btnType="submit"
                  content="Editar"
                  bgColor="var(--green-900)"
                  border="1px solid var(--green-700)"
                  color="var(--light)"
                  padding=".3rem 2.5rem"
                  bdRadius="200px"
                  fontWeight="700"
                  bgColorHover="var(--green-700)"
                  borderHover="1px solid var(--green-700)"
                  onClick={handleEdit}
                  className="btn"
                />
              </div>
            )}
            <Button
              btnType="submit"
              content="Logout"
              bgColor="var(--green-900)"
              border="1px solid var(--green-700)"
              color="var(--light)"
              padding="0.3rem 2.5rem"
              bdRadius="200px"
              fontWeight="700"
              bgColorHover="var(--green-700)"
              borderHover="1px solid var(--green-700)"
              onClick={handleLogout}
              className="btn"
            />
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AlreadyLoggedInPage;
