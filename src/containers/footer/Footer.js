import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import classes from './Footer.module.css';
import glob from '../../assets/icons/globalIcon.png';
import fb from '../../assets/icons/facebookIcon.png';
import twit from '../../assets/icons/twitterIcon.png';
import insta from '../../assets/icons/instagramIcon.png';
import yout from '../../assets/icons/youtubeIcon.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {NavLink} from 'react-router-dom';
class Footer extends Component{
    componentDidMount(){
        Aos.init({
          duration : 2000
        })
    }
    render(){
        return(
            <footer className={classes.Footer}>
                   <div className={classes.FooterMain}>
                   <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className={classes.SocialMain}>
                            <div className={classes.Social} >
                            <Row>
                                <Col lg={2} md={3} sm={3} xs={3}>
                                <div className={classes.Icon}> <img src={glob} alt="lang" /></div>
                                </Col>
                                <Col lg={2} md={3} sm={3} xs={3}>
                                <div className={classes.Icon}> <a href="https://www.facebook.com/almashani.furniture.12" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a></div>
                                </Col>
                                <Col lg={2} md={3} sm={3} xs={3}>
                                <div className={classes.Icon}> <a href="https://twitter.com/almashanioffice" target="_blank" rel="noopener noreferrer"><img src={twit} alt="twitter" /></a></div>
                                </Col>
                                <Col lg={2} md={3} sm={3} xs={3}>
                                <div className={classes.Icon}> <a href="https://www.instagram.com/almashanioffice/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram" /></a></div>
                                </Col>
                                <Col lg={4} md={3} sm={3} xs={3}>
                                <div className={classes.Icon}> <a href="https://www.youtube.com/channel/UCKttmuLGFUUQ35tIhuGrWNQ" target="_blank" rel="noopener noreferrer"><img src={yout} alt="youtube" /></a> </div>
                                </Col>
                            </Row>
                              
                             
                            
                              
                              
                            </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className={classes.Content} >
                                <ul>
                                    <h1>CONTACT US</h1>
                                    {/* <li>COSTUMERS SERVICES</li>
                                    <li>EMAIL</li>
                                    <li>STORES</li>
                                    <li>SUPPORT SERVICE</li> */}
                                    <Row>
                                        <Col lg={6} md={6} sm={12} xs={12}>
                                            <li style={{fontWeight: 'bold'}}>OFFICE</li>
                                        <li>P.O. BOX: 863 POSTAL CODE:211 </li>
                                        <li>OMAN-DHOFAR SALALAH</li>
                                    <li>TEL: +968 23138513</li>
                                    <li>FAX: +968 23138514</li>
                                    <li>E-MAIL: info@almashani.com</li>
                                        </Col>
                                        <Col lg={6} md={6} sm={12} xs={12}>
                                        <li style={{fontWeight: 'bold'}}>SOWROOM</li>
                                        <li>AL-SALAM STREET</li>
                                    <li>P.O. BOX: 863 POSTAL CODE:211</li>
                                    <li>OMAN-DHOFAR SALALAH</li>
                                    <li>TEL: +968 23291491</li>
                                    <li>FAX: +968 23291969</li>
                                    <li>E-MAIL: info@almashani.com</li>
                                        </Col>
                                    </Row>
                                   
                                    
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={2} sm={12} xs={12}>
                            <div className={classes.Content}>
                                <ul>
                                    <h1>OUR COMPANY</h1>
                                    
                                    <li><NavLink to="/about" exact >ABOUT US</NavLink> </li>
                                    <li><NavLink to="/vision" exact >VISION</NavLink></li>
                                    <li><NavLink to="/mission" exact >MISSION</NavLink></li>
                                    <li><NavLink to="/message" exact >Chairman Message</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <div className={classes.Copyright}>
                        <a href="http://www.nidhalghdiri.tn" target="_blank" rel="noopener noreferrer">© 2020 - Nidhal Ghdiri</a>
                    </div>
                   </div>
               
                </footer>
        );
    }
} 

export default Footer;