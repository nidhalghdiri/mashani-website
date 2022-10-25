import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Burger from 'react-css-burger';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeaderContent.module.css';
import logo from '../../assets/logo.png';
import Navbar from '../navbar/Navbar';
// import searchIcon from '../../assets/icons/searchIcon.png';
// import toggleIcon from '../../assets/icons/toggleIcon.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class HeaderContent extends Component {
    componentDidMount(){
        Aos.init({
          duration : 2000
        })
    }
    render(){
        // let nav = null;
        // if(this.props.active){
        //     nav = <Navbar />;
        // }
        return (
            <div className={classes.HeaderContent} >
                <div className={classes.HeaderContent_main}>
                <Row>
                    <Col lg={3} md={5} sm={6} xs={6}>
                    <div className={classes.Logo} data-aos="zoom-in">
                    <NavLink to="/" exact><img src={logo} alt="logo" /></NavLink>
                    </div>
                    </Col>
                    <Col lg={9} md={7} sm={6} xs={6}>
                        <div className={classes.HeaderContent_right} >
                        <Burger
                                onClick={this.props.clicked}
                                active={this.props.active}
                                burger="slider"
                                color="#349499"
                                hoverOpacity={0.8}
                                scale={1.2}
                            />
                            
                        </div>
                    </Col>
                </Row>
                </div>
                {/* {nav} */}
                 <Navbar show={this.props.active} />
            </div>
        );
    }
}

export default HeaderContent; 