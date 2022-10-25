import React, {Component} from 'react';
import Aux from '../../hoc/auxilary/Auxilary';
import Header from '../header/Header';
// import TopBar from '../../components/topBar/TopBar';
import HeaderContent from '../../components/headerContent/HeaderContent';
import NewContent from '../../components/newContent/NewContent';
import Footer from '../footer/Footer';
class New extends Component{
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
        <main>
            <NewContent />
        </main>
        <Footer />
        </Aux>
        );
    }
} 

export default New;