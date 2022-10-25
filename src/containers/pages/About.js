import React, {Component} from 'react';
import Aux from '../../hoc/auxilary/Auxilary';
import Header from '../header/Header';
// import TopBar from '../../components/topBar/TopBar';
import HeaderContent from '../../components/headerContent/HeaderContent';

import Footer from '../footer/Footer';
import classes from './About.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import back from '../../assets/slides/about.jpg';
class About extends Component {
    state = {
        active: true,
      };
      componentDidMount(){
        Aos.init({
          duration : 2000
        })
    }
    toggleActiveHandler = () => {
        this.setState({ active: !this.state.active })
    }
    render(){
        return (
            <Aux>
                <Header>
                {/* <TopBar /> */}
                <HeaderContent active={this.state.active}
                    clicked={this.toggleActiveHandler} />
            </Header>
            <main>
                <section className={classes.AboutUs}>
                    <div className={classes.Title} style={{
                       backgroundImage: "url(" + back + ")"
                    }} >
                        <h1 data-aos="fade-down">ABOUT US</h1>
                    </div>
                    <div className={classes.AboutContent} data-aos="zoom-in">
                        <p>AL-MASHANI OFFICE FURNITURE WAS ESTABLISHED IN 1976 IN THE CITY OF SALALAH SULTANATE OF OMAN AND CONTINUOUSLY GROWING BUSINESS IN THE FURNITURE INDUSTRY. AL-MASHANI  OFFICE  FURNITURE  HAS  WELL  DEVELOPED  ITS  BUSINESS  AND  REPUTATION  IN  THE  SOCIETY  NATIONWIDE  AND  GAINED  VITAL  KNOWLEDGE  ABOUT  THE  OMAN  ECONOMY.  AL-MASHANI OFFICE FURNITURE HAD SIGNED A JOINT AGREEMENT WITH COMPANIES THAT HAVE EXTENSIVE EXPERIENCE AND STRONG REPUTATION IN THE PROJECT OF FURNITURE FACILITIES ALL OVER THE WORLD. COMPANY HAS BEEN IMPROVING OVER THE YEARS AND THUS PRESENT-ING  WHAT  IS  NEW  IN  THE  WORLD  OF  OFFICE  FURNITURE.  COMPANY’S  STRENGTH  LIES  IN  ITS  ABILITY TO KEEP UP WITH THE LATEST DEVELOPMENT IN THE WORLD OF OFFICE FURNITURE.</p>
                        <p>
                        AL-MASHANI OFFICE FURNITURE IS HIGHLY SPECIALIZED IN FURNITURE AND DECORATING OFFICE  WITH  AUTHENTIC  SERVICE  IN  THE  PROVISION  OF  QUALITY  WORK.  IN  2007  AL-MASHANI  OFFICE  FURNITURE  OPENED  A  FACTORY  OF  4000  SQUARE  FEET  FOR  MANUFACTURING  LOCAL  MADE FURNITURE. OUR GOAL IS TO CREATE A PRODUCTIVE AND INNOVATIVE WORK ENVIRONMENT FOR OUR ORGANIZATION BY USING MODERN TECHNOLOGY. DUE TO THE HARD WORK OF OUR DEDICATED EMPLOYEES AND COMPREHENSIVE EFFORT, WE ARE THE LARGEST FURNITURE WHOLESALE COMPANY IN SALALAH. 
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
            </Aux>
        );
    }
}

export default About;