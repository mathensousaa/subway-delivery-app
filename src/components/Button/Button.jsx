import React from 'react';
import Button from 'react-bootstrap/Button';
import './button.css';
import Icon from '../Icon/Icon'

function ButtonSubway (prop) {
    const [hover, setHover] = React.useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
    }

    const buttonStyles = {
        padding: prop.padding,
        border: hover ? prop.borderHover : prop.border,
        borderRadius: prop.bdRadius,
        backgroundColor: hover ? prop.bgColorHover : prop.bgColor,
        color: hover ? prop.colorHover : prop.color,
        fontWeight: prop.fontWeight,
        width: prop.buttonSize,
        height: prop.buttonSize,
    };
    
    if (prop.icon) {
        return (
            <Button type={prop.btnType} variant="primary" className='btn' style={buttonStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Icon 
                    icon={prop.icon}
                    iconColor={hover ? prop.iconColorHover : prop.iconColor}
                    iconSize={prop.iconSize}
                />
                {prop.content}
            </Button>
        );    
    } else {
        return (
            <Button type={prop.btnType} variant="primary" className='btn' style={buttonStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={prop.onClick}>
                {prop.content}
            </Button>
        );    
    }
    
}

export default ButtonSubway;