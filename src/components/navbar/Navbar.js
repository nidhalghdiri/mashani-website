import React, {Component} from 'react';
import CSSTransition from "react-transition-group/CSSTransition";
import  './Navbar.css';
import {NavLink} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
const animationTiming = {
    enter: 300,
    exit: 300
};
class Navbar extends Component{
    state={
        items: [
            {id:'000', name:'ABOUT US', href:'/about', items: [
                {id:'001', name:'ABOUT US', href:'/about'},
                {id:'002', name:'VISION', href:'/vision'},
                {id:'003', name:'MISSION', href:'/mission'},
                {id:'004', name:'CHAIRMAN MESSAGE', href:'/message'},
                {id:'005', name:'OUR CLIENTS', href:'/clients'}
            ] },
            {id:'111', name:'PRODUCTS', href:'/categorie', items:[
                {id:'1', name:'Office Chairs', href:'/categorie/1'},
                {id:'2', name:'SOFAS', href:'/categorie/2'},
                {id:'3', name:'Reception Counter', href:'/categorie/3'},
                {id:'4', name:'SCHOOL AND CLASSROOM FURNITURE', href:'/categorie/4'},
                {id:'5', name:'EXECUTIVE DESK', href:'/categorie/5'},
                {id:'6', name:'WORKSTASTION', href:'/categorie/6'},
                {id:'7', name:'CONFERENCE ROOM TABLE', href:'/categorie/7'},
                {id:'8', name:'SHELVING RACK', href:'/categorie/8'},
                {id:'9', name:'OFFICE LOUNGE FURNITURE', href:'/categorie/9'},
                {id:'10', name:'RETAIL STORE DISPLAY RACK', href:'/categorie/10'},
                {id:'11', name:'OFFICE CURTAINS', href:'/categorie/11'},
                {id:'12', name:'CARPET TILES', href:'/categorie/12'},
                {id:'13', name:'ARTIFICIAL GRASS', href:'/categorie/13'},
                {id:'14', name:'cafeteria Furniture', href:'/categorie/14'},
                {id:'15', name:'STORAGE RACK', href:'/categorie/15'}
            ]},
            {id:'222', name:'NEW', href:'/new', items:null},
            {id:'333', name:'CONTACT', href:'/contact', items:null}
        ],
        active: null
    }
    componentDidMount(){
        Aos.init({
          duration : 1000
        });
        
    }
    

    secondNavHandler = (index) => {
        if(this.state.active !== index){
            this.setState({
                active: index
            });
        }else{
            this.setState({
                active: null
            })
        }
    }
    hiddenNavHandler = () => {
        this.setState({
            active: null
        });
    }
    render(){
        
       let navItems = this.state.items.map((navItem, index) =>{

            let secondNav = navItem.items;
            
            return (

                    <li className={this.state.active === index? "Active" : null} key={navItem.id}>
                        <div>
                        {navItem.items === null?
                         <span><NavLink to={navItem.href} exact >{navItem.name}</NavLink></span>
                        : <span> <NavLink to={navItem.href} exact 
                        >{navItem.name}</NavLink> {this.state.active === null? <FontAwesomeIcon icon={faAngleDown} onClick={()=> this.secondNavHandler(index)} /> :
                         this.state.active === index? <FontAwesomeIcon icon={faAngleUp} onClick={()=> this.secondNavHandler(index)} /> :
                         <FontAwesomeIcon icon={faAngleDown} onClick={()=> this.secondNavHandler(index)} />}</span>
                        }
                        </div>
                        
                        {secondNav !== null?
                        <CSSTransition 
                        mountOnEnter 
                        unmountOnExit 
                        in={this.state.active === index}
                        timeout={animationTiming}
                        classNames={{
                            enter: '',
                            enterActive: 'ScNavbarOpen',
                            exit: '',
                            exitActive: 'ScNavbarClosed'
                        }}>
                        <ul  className="SecondNav" >
                               { secondNav.map(item =>{
                                    return(
                                        <li key={item.id} onClick={this.hiddenNavHandler}><NavLink to={item.href} exact >{item.name}</NavLink></li>
                                
                                    );
                                })}
                            </ul>
                            </CSSTransition>
                        : null}
                        
                    </li>
                   
               
            );
        })
        return  (
            <CSSTransition 
            mountOnEnter 
            unmountOnExit 
            in={this.props.show}
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'NavbarOpen',
                exit: '',
                exitActive: 'NavbarClosed'
            }}>
            <nav className="Navbar">
                <ul className="FirstNav">
                    {navItems}
                </ul>
            </nav>
            </CSSTransition>
        );
    }
} 
export default Navbar;