import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import classes from './Backdrop.module.css';
const animationTiming = {
    enter: 700,
    exit: 700
};
const backdrop = (props) => (
    <CSSTransition 
    mountOnEnter 
    unmountOnExit 
    in={props.show} 
    timeout={animationTiming}
    classNames={{
        enter: '',
        enterActive: 'BackdropOpen',
        exit: '',
        exitActive: 'BackdropClosed'
    }}>
    <div className={classes.Backdrop} onClick={props.clicked}>
        <div className={classes.Main}>
            
        </div>
    </div>
    </CSSTransition>
);

export default backdrop;