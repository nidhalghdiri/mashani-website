import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './TopBar.module.css';
import emailIcon from '../../assets/icons/emailIcon.png';
import phoneIcon from '../../assets/icons/phoneIcon.png';
import fb from '../../assets/icons/facebook.png';
import twit from '../../assets/icons/twitter.png';
import insta from '../../assets/icons/instagram.png';
import yout from '../../assets/icons/youtube.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
class TopBar extends Component {
    componentDidMount(){
        Aos.init({
          duration : 2000
        })
    }
    render(){
        return(

            <div className={classes.TopBar}>
                <Row>
                    <Col lg={4} md={6} sm={12} xs={12}>
                    <div className={classes.TopBarSocial} data-aos="fade-right">
                    <a href="/"><img src={fb} alt="facebook" /></a>
                    <a href="/"><img src={twit} alt="twitter" /></a>
                    <a href="/"><img src={yout} alt="youtube" /></a>
                    <a href="/"><img src={insta} alt="instagram" /></a>
                    
                    
               
        </div>
                    </Col>
                    <Col lg={8} md={6} sm={12} xs={12}>
                    <div className={classes.TopBarContent} data-aos="fade-left">
                    
                    <div className={classes.TopBarContent_item}>
                    <img src={emailIcon} alt="email" />
                    <span>info@almashanioffice.com</span>
                    </div>
                   
                    <div className={classes.TopBarContent_item}>
                    <img src={phoneIcon} alt="phone" />
                    <span>00968000000</span>
                    </div>
               
        </div>
                    </Col>
                </Row>
            </div>
        );
    }
} 

export default TopBar;