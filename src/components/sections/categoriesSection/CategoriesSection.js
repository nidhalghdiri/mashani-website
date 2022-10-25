import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import classes from './CategoriesSection.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
class CategoriesSection extends Component {

    // state = {
    //     categories: [
    //         {id: 1, name: 'Chairs', img: img1, backcolor: '#d8d44e'},
    //         {id: 2, name: 'Sofas', img: img2, backcolor: '#08a4ca'},
    //         {id: 3, name: 'Reception Counter', img: img3, backcolor: '#f8b938'},
    //         {id: 4, name: 'Classroom Furniture', img: img4, backcolor: '#e92028'},
    //         {id: 5, name: 'Storage Rack', img: img5, backcolor: '#d8d44e'},
    //         {id: 6, name: 'Workstation', img: img6, backcolor: '#d8d44e'},
    //         {id: 7, name: 'Conference Room Table', img: img7, backcolor: '#d8d44e'},
    //         {id: 8, name: 'Shelving Rack', img: img8, backcolor: '#d8d44e'},
    //         {id: 9, name: 'OFFICE LOUNGE FURNITURE', img: img9, backcolor: '#d8d44e'},
    //         {id: 10, name: 'RETAIL STORE DISPLAY RACK', img: img10, backcolor: '#d8d44e'},
    //         {id: 11, name: 'OFFICE CURTAINS', img: img11, backcolor: '#d8d44e'},
    //         {id: 12, name: 'CARPET TILES', img: img12, backcolor: '#d8d44e'},
    //         {id: 13, name: 'Cafeteria Furniture', img: img13, backcolor: '#d8d44e'},
    //         {id: 14, name: 'Carpet Tiles', img: img14, backcolor: '#d8d44e'},


    //     ]
    // }
    componentDidMount(){
        Aos.init({
          duration : 2000
        })
    }
    render() {

        let categories = this.props.categories.map(cat => {
            return (


                
                <Col key={cat.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                    <div className={classes.Categorie}>
                        <div className={classes.Img} >
                        <NavLink to={'/categorie/' + cat.id}  exact> <img src={cat.img} alt={cat.name} /></NavLink>
                        </div>
                        
                    </div>
                    </Col>
            );
        })

        return(
            <section className={classes.Categories}>
                <div className={classes.CategoriesTitle} data-aos="fade-right">
                    <h1>CATEGORIES</h1>
                </div>
                <Row>
                   {categories}
                </Row>
            </section>
        );
    }
}

export default CategoriesSection;
