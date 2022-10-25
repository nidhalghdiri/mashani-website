import React, {Component} from 'react';

import classes from './Slider.module.css';
import slide1 from '../../assets/slides/Slides1.png';
import slide2 from '../../assets/slides/Slides2.png';
import slide3 from '../../assets/slides/Slides3.png';
import slide4 from '../../assets/slides/Slides4.png';
import slide5 from '../../assets/slides/Slides5.png';
import slide6 from '../../assets/slides/Slides6.png';
import slide7 from '../../assets/slides/Slides7.png';
import slide8 from '../../assets/slides/Slides8.png';
import slide9 from '../../assets/slides/Slides9.png';
import slide10 from '../../assets/slides/Slides10.png';
import slide11 from '../../assets/slides/Slides11.png';
import slide12 from '../../assets/slides/Slides12.png';
import slide13 from '../../assets/slides/Slides13.png';
import slide14 from '../../assets/slides/Slides14.png';
import slide15 from '../../assets/slides/Slides15.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class MySlider extends Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
render(){
    var settings = {
        dots: false,
        autoplay: true,
    autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className={classes.Slider}>
                
                <Slider ref={c => (this.slider = c)} {...settings}>
            <div><img src={slide1} alt="Slide1" /></div>
            <div><img src={slide2} alt="Slide2" /></div>
            <div><img src={slide3} alt="Slide3" /> </div>
            <div><img src={slide4} alt="Slide4" /> </div>
            <div><img src={slide5} alt="Slide5" /> </div>
            <div><img src={slide6} alt="Slide6" /> </div>
            <div><img src={slide7} alt="Slide7" /> </div>
            <div><img src={slide8} alt="Slide8" /> </div>
            <div><img src={slide9} alt="Slide9" /> </div>
            <div><img src={slide10} alt="Slide10" /> </div>
            <div><img src={slide11} alt="Slide11" /> </div>
            <div><img src={slide12} alt="Slide12" /> </div>
            <div><img src={slide13} alt="Slide13" /> </div>
            <div><img src={slide14} alt="Slide14" /> </div>
            <div><img src={slide15} alt="Slide15" /> </div>
           
          </Slider>
          <div style={{ textAlign: "center" }}>
          <button className={classes.BtnPrev} onClick={this.previous}>
         <span> &#8249;</span>
          </button>
          <button className={classes.BtnNext}  onClick={this.next}>
          <span> &#8250;</span>
          </button>
        </div> 
                </div>
    ) ;
}
}
    

export default MySlider;