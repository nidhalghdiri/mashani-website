import React, {Component} from 'react';
import Aux from '../../hoc/auxilary/Auxilary';
import Header from '../header/Header';
// import TopBar from '../../components/topBar/TopBar';
import HeaderContent from '../../components/headerContent/HeaderContent';

import Footer from '../footer/Footer';
import classes from './About.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import back from '../../assets/slides/message.jpg';
class Message extends Component {
    state = {
        active: true,
      };

    toggleActiveHandler = () => {
        this.setState({ active: !this.state.active })
    }
    componentDidMount(){
        Aos.init({
          duration : 2000
        })
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
                    }}>
                        <h1 data-aos="fade-down">CHAIRMAN MESSAGE </h1>
                    </div>
                    <div className={classes.AboutContent} data-aos="zoom-in">
                        <p>AL MASHANI OFFICE FURNITURE FOUNDED BY SHEIKH SUHAIL BIN MOHAMMED BIN SUHAIL AL MASHANI IN 1976. WITH A VISION TO PROVIDE A QUALITY AND LOCALLY MADE  FURNITURE  IN  OMAN  AND  WITH  44  YEARS  OF  EXPERIENCE  WE  ARE  THE  ONE  OF THE WELLKNOWN FAMILY BUSINESS IN OMAN WE AIM AT DESIGNING, MANUFACTURING AND DELIVERING QUALITY FURNITURE BY UTILIZING ADVANCED TECHNOLOGIES  AND  EXCEEDING  CUSTOMER’S  EXPECTATIONS  IN  TERMS  OF  QUALITY  FINISH  AND TIMELY SUPPLY, INSTALLATION AND COMPLETION. WE BELIEVE IN CONTINUOUS IMPROVEMENT  THROUGH  LEADERSHIP  AND  TEAMWORK.  OUR  YEARS  OF  EXPERTISE  ENABLE  US  TO  EFFICIENTLY  MANAGE  ONTIME  ALL  CHALLENGING  PROJECTS,  IRRESPECTIVE OF THE SCOPE AND BUDGET. WE SINCERELY HOPE YOU WILL CONTINUE TO SEEK INSPIRATION FROM OUR HISTORY AND LOOK FORWARD TO A LASTING RELATIONSHIP WITH YOU.</p>
                        <div className={classes.Message}>
                        <p>KHALID SUHAIL AL MASHANI</p>
                        <p>CHAIRMAN</p>
                        </div>
                       
                    </div>
                </section>
            </main>
            <Footer />
            </Aux>
        );
    }
}

export default Message;