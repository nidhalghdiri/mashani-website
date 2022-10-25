import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
import classes from '../AboutSection/AboutSection.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from '../../../assets/productsImg.png';
import img3 from '../../../assets/chairImg.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class ProductsSection extends Component{
    state = {
        items : [
            {id: 1, title: 'Chairs', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img2, href:'/categorie/1'},
        {id: 2, title: 'Sofas', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img3, href:'/categorie/2'},
        {id: 3, title: 'Tables', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img2, href:'/categorie/3'},
        {id: 4, title: 'Classroom Furniture', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img3, href:'/categorie/4'},
        {id: 5, title: 'Storage Rack', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img2, href:'/categorie/5'},
        {id: 6, title: 'Workstation', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img3, href:'/categorie/6'},
        {id: 7, title: 'Conference Room Table', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img2, href:'/categorie/7'},
        {id: 8, title: 'Shelving Rack', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img3, href:'/categorie/8'},
        {id: 9, title: 'OFFICE LOUNGE FURNITURE', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img2, href:'/categorie/9'},
        {id: 10, title: 'RETAIL STORE DISPLAY RACK', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img3, href:'/categorie/10'},
        {id: 11, title: 'OFFICE CURTAINS', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img2, href:'/categorie/11'},
        {id: 12, title: 'CARPET TILES', p: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n',
        img: img3, href:'/categorie/12'},
        
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
let items = <div>Loading...</div>;
items = this.state.items.map(item => {
    return ( <div key={item.id}>
                    <Row>
                    <Col lg={{span: 8, order: 1}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} >
                    <div className={classes.AboutContent} data-aos="fade-right" >
                    <NavLink to={'/categorie/' + item.id} exact >{item.title}</NavLink>
                    <p data-aos="zoom-in">{item.p}</p>
                    </div>
                    </Col>
                    <Col lg={{span: 4, order: 1}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}}>
                    <div className={classes.AboutImg} data-aos="fade-left">
                        <img src={item.img} alt={item.href} />
                    </div>
                    </Col>
                    </Row>
                    </div>
    );
})
          return (
            <section className={classes.About}>
                <Slider {...settings}>
            {items}
            
           
          </Slider>
               
            </section>
        );
    }
} 

export default ProductsSection;