import React, {Component} from 'react';
import Aux from '../../hoc/auxilary/Auxilary';
import {Row, Col} from 'react-bootstrap';
import Header from '../header/Header';
// import TopBar from '../../components/topBar/TopBar';
import HeaderContent from '../../components/headerContent/HeaderContent';

import Footer from '../footer/Footer';
import classes from './About.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import back from '../../assets/clientImg.png';
import client1 from '../../assets/clients/client1.png';
import client2 from '../../assets/clients/client2.png';
import client3 from '../../assets/clients/client3.png';
import client4 from '../../assets/clients/client4.png';
import client5 from '../../assets/clients/client5.png';
import client6 from '../../assets/clients/client6.png';
import client7 from '../../assets/clients/client7.png';
import client8 from '../../assets/clients/client8.png';
import client9 from '../../assets/clients/client9.png';
import client10 from '../../assets/clients/client10.png';
import client11 from '../../assets/clients/client11.png';
import client12 from '../../assets/clients/client12.png';
import client13 from '../../assets/clients/client13.png';
import client14 from '../../assets/clients/client14.png';
import client15 from '../../assets/clients/client15.png';
import client16 from '../../assets/clients/client16.png';
import client17 from '../../assets/clients/client17.png';
import client18 from '../../assets/clients/client18.png';
import client19 from '../../assets/clients/client19.png';
import client20 from '../../assets/clients/client20.png';
import client21 from '../../assets/clients/client21.png';
import client22 from '../../assets/clients/client22.png';
import client23 from '../../assets/clients/client23.png';
import client24 from '../../assets/clients/client24.png';
import client25 from '../../assets/clients/client25.png';
import client26 from '../../assets/clients/client26.png';
import client27 from '../../assets/clients/client27.png';
import client28 from '../../assets/clients/client28.png';
import client29 from '../../assets/clients/client29.png';
import client30 from '../../assets/clients/client30.png';
import client31 from '../../assets/clients/client31.png';
import client32 from '../../assets/clients/client32.png';
import client33 from '../../assets/clients/client33.png';
import client34 from '../../assets/clients/client34.png';
import client35 from '../../assets/clients/client35.png';
import client36 from '../../assets/clients/client36.png';
import client37 from '../../assets/clients/client37.png';
import client38 from '../../assets/clients/client38.png';
import client39 from '../../assets/clients/client39.png';
import client40 from '../../assets/clients/client40.png';
import client41 from '../../assets/clients/client41.png';
import client42 from '../../assets/clients/client42.png';
import client43 from '../../assets/clients/client43.png';
import client44 from '../../assets/clients/client44.png';
import client45 from '../../assets/clients/client45.png';
import client46 from '../../assets/clients/client46.png';

class Client extends Component {
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
        const images = [
            client1, client2,client3,client4,client5,client6,client7,client8,client9,client10,
            client11, client12,client13,client14,client15,client16,client17,client18,client19,client20,
            client21, client22,client23,client24,client25,client26,client27,client28,client29,client30,
            client31, client32,client33,client34,client35,client36,client37,client38,client39,client40,
            client41, client42,client43,client44,client45,client46,
        ];

        let clients = images.map((clnt, index) => {
            return (
                <Col lg={2} md={3} sm={4} xs={6} className="mb-2">
                               <div className={classes.Client}>
                               <img src={clnt} alt="client" />
                               </div>
                            </Col>
            );
        })
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
                        <h1 data-aos="fade-down">Our Clients</h1>
                    </div>
                    <div className={classes.AboutContent} data-aos="zoom-in">
                        <Row>

                           {clients}
                            
                        </Row>
                    </div>
                </section>
            </main>
            <Footer />
            </Aux>
        );
    }
}

export default Client;