import './icon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = (prop) => {
    return (
        <FontAwesomeIcon icon={prop.icon} size={prop.iconSize} color={prop.iconColor}/>
    )
}

export default Icon