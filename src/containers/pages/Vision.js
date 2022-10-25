import React, {Component} from 'react';
import Aux from '../../hoc/auxilary/Auxilary';
import Header from '../header/Header';
// import TopBar from '../../components/topBar/TopBar';
import HeaderContent from '../../components/headerContent/HeaderContent';

import Footer from '../footer/Footer';
import classes from './About.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import back from '../../assets/slides/vision.jpg';
class Vision extends Component {
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
                        <h1 data-aos="fade-down">VISION</h1>
                    </div>
                    <div className={classes.AboutContent} data-aos="zoom-in">
                        <p>TO BECOME THE MOST DYNAMIC WHOLESALE FURNITURE COMPANY IN OMAN AND MIDDLES EAST BY UTILIZING MODERN TECHNOLOGY AND LATEST DESIGNING MODULE IN THE FURNITURE INDUSTRY, ALSO GIVING CUSTOMERS DEMAND THE PRIORITY AND TRIES IT LEVEL BEST TO SATISFY AND FULFIL THE DESIRE OF THE CLIENT WITHIN THE SCOPE OF BRINGING BEAUTY TO THE ENVIRONMENT.</p>
                       
                    </div>
                </section>
            </main>
            <Footer />
            </Aux>
        );
    }
}

export default Vision;