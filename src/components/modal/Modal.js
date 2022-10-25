import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import  './Modal.css';
 import {Row, Col} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";


const animationTiming = {
    enter: 700,
    exit: 700
};
const modal = (props) =>{

    let imgs = props.item.gallery.map((img, index) => {
        return {
            original: img,
          thumbnail: img
        }
    })

    let caract = props.item.content.map((li, index) => {
    return <li key={index}>{li}</li>
    })

    const images = imgs;

      return  (
        <CSSTransition 
                mountOnEnter 
                unmountOnExit 
                in={props.show} 
                timeout={animationTiming}
                classNames={{
                    enter: '',
                    enterActive: 'ModalOpen',
                    exit: '',
                    exitActive: 'ModalClosed'
                }}>
        <div className="MainModal">
        <div onClick={props.clicked}className="Close">
                    <div className="Bar" style={{transform: 'rotate(45deg)'}}></div>
                    <div className="Bar" style={{transform: 'rotate(-45deg)'}}></div>
            </div>
        <div className="Modal">
            <div className="ModalMain">
            <div class="Main">
            
            <div className="Content">
           <Row>
               <Col lg={6} md={6} sm={12} xs={12}>
               <ImageGallery items={images}  autoPlay={true} thumbnailPosition="bottom"
               showFullscreenButton={false} showPlayButton={false} showNav={false} 
              />;
               </Col>
               <Col lg={6} md={6} sm={12} xs={12}>
               <div className="ProductContent">
               <div className="Title">
            <h1>{props.item.name}</h1>
            </div>
            <div className="ProductCara">
            <h4>Available In:</h4>
                <ul>
                    
                    {caract}
                </ul>
                
            </div>
               </div>
               </Col>
           </Row>
            
            </div>
            </div>
       
            </div>
               
        </div>
        </div>
        </CSSTransition>
    );
}
export default modal;