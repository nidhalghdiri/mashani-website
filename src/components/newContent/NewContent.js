import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './NewContent.module.css';
import img from '../../assets/chairImg.png';
import prod from '../../assets/newImg.png';
import icon from '../../assets/icons/itemIcon.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class NewContent extends Component{
    state={
        items: [
            {id:1, title: 'Product Name1', content: {p1: 'Details:', p2: 'Name:', p3: 'Size:', p4: 'Materials:', p5: 'Price:'} },
            {id:2, title: 'Product Name2', content: {p1: 'Details:', p2: 'Name:', p3: 'Size:', p4: 'Materials:', p5: 'Price:'}},
            {id:3, title: 'Product Name3', content: {p1: 'Details:', p2: 'Name:', p3: 'Size:', p4: 'Materials:', p5: 'Price:'}},
            {id:4, title: 'Product Name4', content: {p1: 'Details:', p2: 'Name:', p3: 'Size:', p4: 'Materials:', p5: 'Price:'}},
        ],
        selected: false,
        item: null
    }
    componentDidMount(){
        Aos.init({
          duration : 2000
        })
    }

    selectItemHandler = (index) => {
        let itemSelected = this.state.items[index];
        this.setState({
            selected: true,
            item: itemSelected
        })
        
    }
    render(){
        
        let itemContent = (<Row>
            <Col lg={6} md={6} sm={12} xs={12}>
            <div className={classes.NewItem_Content} data-aos="fade-right">
             <h1>Our Products</h1>
             <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis n</p>
         </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
         <div className={classes.NewItem_img} data-aos="fade-left">
             <img src={img} alt="productImg" />
         </div>
            </Col>
        </Row>);
        if(this.state.selected === true && this.state.item != null){
            itemContent = (<Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                <div className={classes.NewItem_Content}>
                 <h1>{this.state.item.title}</h1>
                 <p>{this.state.item.content.p1}</p>
                 <p>{this.state.item.content.p2}</p>
                 <p>{this.state.item.content.p3}</p>
                 <p>{this.state.item.content.p4}</p>
                 <p>{this.state.item.content.p5}</p>
             </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
             <div className={classes.NewItem_img}>
                 <img src={prod} alt="prodImg" />
             </div>
                </Col>
            </Row>);
        }
        let items = this.state.items.map((item,index) =>{
            return <div key={item.id} className={classes.Item}
                    onClick={() => this.selectItemHandler(index)} data-aos="zoom-in">
                        <img src={icon} alt="icon" />
                    </div>
        });
        return(
            <section className={classes.New}>
                <div className={classes.NewItem_Main}>
                   {itemContent}
                </div>
                <div className={classes.NewItems}>
                    {items}
                </div>

            </section>
        );
    }
}

export default NewContent;