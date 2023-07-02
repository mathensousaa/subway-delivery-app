import "./Popover.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import Icon from "../Icon/Icon";

const PopoverComponent = (prop) =>{
    return (
        <>
        {['bottom'].map((placement) => (
          <OverlayTrigger
            trigger="focus"
            key = {placement}
            placement= {placement}
            overlay={
              <Popover id="popover-positioned-bottom">
                <Popover.Body className="popoverBody">
                  <div>
                    {prop.content}
                  </div>
                </Popover.Body>
              </Popover>
            }
          >
            <Button style={{backgroundColor: "white", border: "none"}}>
                <Icon 
                icon= {prop.icon}
                iconSize= "lg"
                iconColor= "var(--green-900)"                
                />
            </Button>
          </OverlayTrigger>
        ))}
      </>
    );
  }
  
  export default PopoverComponent;