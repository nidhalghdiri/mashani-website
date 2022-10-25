import React, {Component} from 'react';
import Aux from '../../hoc/auxilary/Auxilary';
import Header from '../header/Header';
// import TopBar from '../../components/topBar/TopBar';
import HeaderContent from '../../components/headerContent/HeaderContent';

import Footer from '../footer/Footer';
import classes from './About.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import back from '../../assets/slides/mission.jpg';
class Mission extends Component {
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
                    }} >
                        <h1 data-aos="fade-down">MISSION</h1>
                    </div>
                    <div className={classes.AboutContent} data-aos="zoom-in">
                        <p>TO PROVIDE CLASSICAL AND HIGH-QUALITY MODERN FURNITURE TO THE CLIENT NATIONWIDE WITH THE GREATEST EFFORT OF OUR DEDICATED EMPLOYEES AND OFFER AUTHENTIC SERVICE TO THE COMMUNITY TO MEET CUSTOMER NEEDS  AND  DESIRES  ACCORDINGLY  IN  THE  FURNITURE  INDUSTRY  AND  GAIN  LEADERSHIP  BY  TREATING  EVERYONE  WITH FAIRNESS AND RESPECT.</p>
                       
                    </div>
                </section>
            </main>
            <Footer />
            </Aux>
        );
    }
}

export default Mission;