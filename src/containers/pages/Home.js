import React, {Component} from 'react';
import Aux from '../../hoc/auxilary/Auxilary';
import Header from '../header/Header';
// import TopBar from '../../components/topBar/TopBar';
import HeaderContent from '../../components/headerContent/HeaderContent';
import MySlider from '../../components/slider/Slider';
import AboutSection from '../../components/sections/AboutSection/AboutSection';
// import CategoriesSection from '../../components/sections/categoriesSection/CategoriesSection';
// import ProductsSection from '../../components/sections/productsSection/ProductsSection';
import Footer from '../footer/Footer';
import Spinner from '../../components/UI/spinner/Spinner';
class Home extends Component{
    state = {
        load: true,
        active: false,
        secondNav : false
      };

      componentDidMount(){
        setTimeout(()=> {
          this.setState({load:false});
        },4000);
        
      }
    toggleActiveHandler = () => {
        this.setState({ active: !this.state.active });
        
    }
    render(){
        let spinner = null;
        if(this.state.load){
            spinner = <Spinner />;
        }
        return  (

            <Aux>
                {spinner}
                <Header>
                {/* <TopBar /> */}
                <HeaderContent active={this.state.active}
                    clicked={this.toggleActiveHandler}  />
                    <MySlider />
            </Header>
            <main>
                <AboutSection />
                {/* <CategoriesSection /> */}
                {/* <ProductsSection /> */}
            </main>
            <Footer />
            </Aux>
        );
    }
} 

export default Home;