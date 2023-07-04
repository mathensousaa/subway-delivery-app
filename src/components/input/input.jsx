import "./Input.css";
import Button from '../Button/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Input (prop){
    const inputStyles = {
        width: prop.inpWidth,
        padding: prop.inpPadding,
        border: prop.inpBorder,
        borderRadius: prop.inpBdRadius,
        backgroundColor: prop.inpBgColor,
        color: prop.inpColor,
        fontWeight: prop.inpFontWeight,
    };

    if (prop.btnType) {
        return(
            <InputGroup 
            className={prop.inputClass}
            >
            <Form.Control
              placeholder={prop.placeholder}
              className={prop.formName}
              id={prop.inputId}
              type={prop.inputType}
              style={inputStyles}
            />
            <Button 
                btnType={prop.btnType}
                content={prop.btnContent}
                bgColor='var(--yellow-800)'
                border='1px solid var(--yellow-800)'
                color='var(--light)'
                padding={prop.btnPadding}
                bdRadius={prop.btnBdRadius}
                fontWeight='700'
                bgColorHover='var(--yellow-900)'
                borderHover='1px solid var(--yellow-900)'      
                >
            </Button>
          </InputGroup>
        )
    }
    else
     { return(
        <InputGroup 
        className={prop.inputClass}
        style={inputStyles}
        >
        <Form.Control
          placeholder={prop.placeholder}
          className={prop.formName}
        />
      </InputGroup>
    )
  }
}

export default Input
