import React, {Component} from 'react';
import Aux from '../../hoc/auxilary/Auxilary';
import Header from '../header/Header';
// import TopBar from '../../components/topBar/TopBar';
import HeaderContent from '../../components/headerContent/HeaderContent';
import ContactContent from '../../components/contactContent/ContactContent';
import Footer from '../footer/Footer';
class Contact extends Component{
    state = {
        active: true,
      };
   
    toggleActiveHandler = () => {
        this.setState({ active: !this.state.active })
    }
    render(){
        return(
            <Aux>
            <Header>
            {/* <TopBar /> */}
            <HeaderContent active={this.state.active}
                clicked={this.toggleActiveHandler} />
        </Header>
        <ContactContent />
        <Footer />
        </Aux>
        );
    }
} 

export default Contact;