import "./input.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input (prop){
    return(
        <InputGroup className="mb-3">
        <Form.Control
          placeholder={prop.placeholder}
          className={prop.className}
        />
        <Button className="submit-btn" variant= "success" >
          Buscar
        </Button>
      </InputGroup>
    )
}

export default Input