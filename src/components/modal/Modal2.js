import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import  './Modal.css';


const animationTiming = {
    enter: 700,
    exit: 700
};
const modal2 = (props) =>{



      return  (
        <CSSTransition 
                mountOnEnter 
                unmountOnExit 
                in={props.show} 
                timeout={animationTiming}
                classNames={{
                    enter: '',
                    enterActive: 'Modal2Open',
                    exit: '',
                    exitActive: 'Modal2Closed'
                }}>
     <div className="MainModal">
     <div onClick={props.clicked}className="Close">
                    <div className="Bar" style={{transform: 'rotate(45deg)'}}></div>
                    <div className="Bar" style={{transform: 'rotate(-45deg)'}}></div>
            </div>
     <div className="Modal2">
            <div className="ModalMain">
            <div class="Main">
            
            <img src={props.item.img} alt="img" />
            </div>
       
            </div>
               
        </div>
     </div>
        </CSSTransition>
    );
}
export default modal2;