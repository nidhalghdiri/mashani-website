import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import classes from './AboutSection.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../assets/aboutImg.png';
// import img2 from '../../../assets/productsImg.png';
import img3 from '../../../assets/chairImg.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class AboutSection extends Component{
    state = {
        items : [
            {id: 1, title: 'ABOUT US', p: 'AL-MASHANI OFFICE FURNITURE IS HIGHLY SPECIALIZED IN FURNITURE AND DECORATING OF-FICE WITH AUTHENTIC SERVICE IN THE PROVISION OF QUALITY WORK. IN 2007 AL-MASHANI OFFICE FURNITURE OPENED A FACTORY OF 4000 SQUARE FEET FOR MANUFACTURING LOCAL MADE FURNITURE. OUR GOAL IS TO CREATE A PRODUCTIVE AND INNOVATIVE WORK ENVIRON-MENT FOR OUR ORGANIZATION BY USING MODERN TECHNOLOGY. DUE TO THE HARD WORK OF OUR DEDICATED EMPLOYEES AND COMPREHENSIVE EFFORT, WE ARE THE LARGEST FURNITURE WHOLESALE COMPANY IN SALALAH.',
        img: img1, href:'/about'},
        {id: 2, title: 'OUR PRODUCTS', p: 'Al Mashani Office Furniture provides quality one-stop solutions for an office furnishing. We offer a diverse range of work stations, office seating, storage solution, Curtains, Executive desk, Storage units, partitions, and designer furniture that can turn your office into the most conducive working space for you. Customized to your needs, our furniture is the spark for an organization, productivity, and innovation.',
        img: img3, href:'/categorie'},
        // {id: 3, title: 'SHIRMAN MESSAGE', p: 'AL MASHANI OFFICE FURNITURE FOUNDED BY SHEIKH SUHAIL BIN MOHAMMED BIN SUHAIL AL MASHANI IN 1976. WITH A VISION TO PROVIDE A QUALITY AND LOCALLY MADE FURNITURE IN OMAN AND WITH 44 YEARS OF EXPERIENCE WE ARE THE ONE OF THE WELL-KNOWN FAMILY BUSINESS IN OMAN WE AIM AT DESIGNING, MANUFAC-TURING AND DELIVERING QUALITY FURNITURE BY UTILIZING ADVANCED TECHNOL-OGIES AND EXCEEDING CUSTOMER’S EXPECTATIONS IN TERMS OF QUALITY FINISH AND TIMELY SUPPLY, INSTALLATION AND COMPLETION. ',
        // img: img2, href:'/categorie/1'},
        ]
    }
    componentDidMount(){
        Aos.init({
          duration : 2000
        })
    }
    render(){
        var settings = {
            dots: false,
            autoplay: true,
            fade: true,
        autoplaySpeed: 4000,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

 
          return (
            <section className={classes.About}>
                <Slider {...settings}>
                <div >
                    <Row>
                    <Col lg={{span: 8, order: 1}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} >
                    <div className={classes.AboutContent} >
                    <div className={classes.Link}><NavLink to="/about" exact >ABOUT US</NavLink></div>
                    <p data-aos="zoom-in">AL-MASHANI OFFICE FURNITURE IS HIGHLY SPECIALIZED IN FURNITURE AND DECORATING OF-FICE WITH AUTHENTIC SERVICE IN THE PROVISION OF QUALITY WORK. IN 2007 AL-MASHANI OFFICE FURNITURE OPENED A FACTORY OF 4000 SQUARE FEET FOR MANUFACTURING LOCAL MADE FURNITURE. OUR GOAL IS TO CREATE A PRODUCTIVE AND INNOVATIVE WORK ENVIRON-MENT FOR OUR ORGANIZATION BY USING MODERN TECHNOLOGY. DUE TO THE HARD WORK OF OUR DEDICATED EMPLOYEES AND COMPREHENSIVE EFFORT, WE ARE THE LARGEST FURNITURE WHOLESALE COMPANY IN SALALAH.</p>
                    </div>
                    </Col>
                    <Col lg={{span: 4, order: 1}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}}>
                    <div className={classes.AboutImg} data-aos="fade-left">
                        <img src={img1} alt="about" />
                    </div>
                    </Col>
                    </Row>
                    </div>
                    <div >
                    <Row>
                    <Col lg={{span: 8, order: 1}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} >
                    <div className={classes.AboutContent} >
                    <div className={classes.Link}><NavLink to="/categorie" exact >OUR PRODUCTS</NavLink></div>
                    <p data-aos="zoom-in">Al Mashani Office Furniture provides quality one-stop solutions for an office furnishing. We offer a diverse range of work stations, office seating, storage solution, Curtains, Executive desk, Storage units, partitions, and designer furniture that can turn your office into the most conducive working space for you. Customized to your needs, our furniture is the spark for an organization, productivity, and innovation.</p>
                    </div>
                    </Col>
                    <Col lg={{span: 4, order: 1}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}}>
                    <div className={classes.AboutImg} data-aos="fade-left">
                        <img src={img3} alt="ourProducts" />
                    </div>
                    </Col>
                    </Row>
                    </div>
            
           
          </Slider>
               
            </section>
        );
    }
} 

export default AboutSection;