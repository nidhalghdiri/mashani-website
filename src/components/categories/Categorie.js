import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import Aux from '../../hoc/auxilary/Auxilary';
import {Row, Col} from 'react-bootstrap';
import Header from '../../containers/header/Header';
// import TopBar from '../topBar/TopBar';
import HeaderContent from '../headerContent/HeaderContent';

import Footer from '../../containers/footer/Footer';
import classes from './Categorie.module.css';


// Categories Imgs 

import cat1 from '../../assets/categories/chairs.jpg';
import cat2 from '../../assets/categories/sofas.jpg';
import cat3 from '../../assets/categories/receptionCounter.jpg';
import cat4 from '../../assets/categories/schoolFurniture.jpg';
import cat5 from '../../assets/categories/desk.jpg';
import cat6 from '../../assets/categories/workStation.jpg';
import cat7 from '../../assets/categories/conferenceRoomTable.jpg';
import cat8 from '../../assets/categories/shelvingRack.jpg';
import cat9 from '../../assets/categories/officeLoungeFurniture.jpg';
import cat10 from '../../assets/categories/retailDisplayRack.jpg';
import cat11 from '../../assets/categories/officeCurtianBlinds.jpg';
import cat13 from '../../assets/categories/artificialGrass.jpg';
import cat14 from '../../assets/categories/cafeteriaFurniture.jpg';
import cat12 from '../../assets/categories/carpetTiles.jpg';
import cat15 from '../../assets/categories/storageRack.jpg';

// chairs
// GP
    import chair1 from '../../assets/chairs/gp/gp1.png';
    import gp2 from '../../assets/chairs/gp/gp2.png';
    import gp3 from '../../assets/chairs/gp/gp3.png';
    import gp4 from '../../assets/chairs/gp/gp4.png';
    import gp5 from '../../assets/chairs/gp/gp5.png';
   //King
   import king1 from '../../assets/chairs/king/king1.png';
    import king2 from '../../assets/chairs/king/king2.png';
    import king3 from '../../assets/chairs/king/king3.png';
    import king4 from '../../assets/chairs/king/king4.png';
    import king5 from '../../assets/chairs/king/king5.png';
   
    //rex
   import rex1 from '../../assets/chairs/rex/rex1.png';
   import rex2 from '../../assets/chairs/rex/rex2.png';
   import rex3 from '../../assets/chairs/rex/rex3.png';
   import rex4 from '../../assets/chairs/rex/rex4.png';
   import rex5 from '../../assets/chairs/rex/rex5.png';
   import rex6 from '../../assets/chairs/rex/rex6.png';

   //royal
   import royal1 from '../../assets/chairs/royal/royal1.png';
   import royal2 from '../../assets/chairs/royal/royal2.png';
   import royal3 from '../../assets/chairs/royal/royal3.png';
   import royal4 from '../../assets/chairs/royal/royal4.png';
  
   //sleek
   import sleek1 from '../../assets/chairs/sleek/sleek1.png';
   import sleek2 from '../../assets/chairs/sleek/sleek2.png';
   import sleek3 from '../../assets/chairs/sleek/sleek3.png';
   import sleek4 from '../../assets/chairs/sleek/sleek4.png';
   import sleek5 from '../../assets/chairs/sleek/sleek5.png';
   import sleek6 from '../../assets/chairs/sleek/sleek6.png';
   import sleek7 from '../../assets/chairs/sleek/sleek7.png';
   import sleek8 from '../../assets/chairs/sleek/sleek8.png';

   //tango
   import tango1 from '../../assets/chairs/tango/tango1.png';
   import tango2 from '../../assets/chairs/tango/tango2.png';
   import tango3 from '../../assets/chairs/tango/tango3.png';
   import tango4 from '../../assets/chairs/tango/tango4.png';
   import tango5 from '../../assets/chairs/tango/tango5.png';
   import tango6 from '../../assets/chairs/tango/tango6.png';


// Sofas
//opera
import opera1 from '../../assets/sofas/opera/opera1.png';
   import opera2 from '../../assets/sofas/opera/opera2.png';
   import opera3 from '../../assets/sofas/opera/opera3.png';
   import opera4 from '../../assets/sofas/opera/opera4.png';

//classic
import classic1 from '../../assets/sofas/classic/classic1.png';
   import classic2 from '../../assets/sofas/classic/classic2.png';
   import classic3 from '../../assets/sofas/classic/classic3.png';
   import classic4 from '../../assets/sofas/classic/classic4.png';

   //crown
import crown1 from '../../assets/sofas/crown/crown1.png';
import crown2 from '../../assets/sofas/crown/crown2.png';
import crown3 from '../../assets/sofas/crown/crown3.png';
import crown4 from '../../assets/sofas/crown/crown4.png';

  //lana
  import lana1 from '../../assets/sofas/lana/lana1.png';
  import lana2 from '../../assets/sofas/lana/lana2.png';
  import lana3 from '../../assets/sofas/lana/lana3.png';
  import lana4 from '../../assets/sofas/lana/lana4.png';
  
  //omega
  import omega1 from '../../assets/sofas/omega/omega1.png';
  import omega2 from '../../assets/sofas/omega/omega2.png';
  import omega3 from '../../assets/sofas/omega/omega3.png';
  import omega4 from '../../assets/sofas/omega/omega4.png';

  //roma
  import roma1 from '../../assets/sofas/roma/roma1.png';
  import roma2 from '../../assets/sofas/roma/roma2.png';
  import roma3 from '../../assets/sofas/roma/roma3.png';
  import roma4 from '../../assets/sofas/roma/roma4.png';

    //arc
    import arc1 from '../../assets/sofas/arc/arc1.png';
    import arc2 from '../../assets/sofas/arc/arc2.png';
    import arc3 from '../../assets/sofas/arc/arc3.png';
    import arc4 from '../../assets/sofas/arc/arc4.png';
    import arc5 from '../../assets/sofas/arc/arc5.png';
    import arc6 from '../../assets/sofas/arc/arc6.png';
    import arc7 from '../../assets/sofas/arc/arc7.png';


    // Desk
    import desk1 from '../../assets/desk/desk1.jpg';
    import desk2 from '../../assets/desk/desk2.jpg';
    import desk3 from '../../assets/desk/desk3.jpg';
    import desk4 from '../../assets/desk/desk4.jpg';
    import desk5 from '../../assets/desk/desk5.jpg';
    import desk6 from '../../assets/desk/desk6.jpg';
    import desk7 from '../../assets/desk/desk7.jpg';
    import desk8 from '../../assets/desk/desk8.jpg';
    import desk9 from '../../assets/desk/desk9.jpg';
    import desk10 from '../../assets/desk/desk10.jpg';




// School
import school1 from '../../assets/school/school1.jpg';
import school2 from '../../assets/school/school2.jpg';
import school3 from '../../assets/school/school3.jpg';
import school4 from '../../assets/school/school4.jpg';
import school5 from '../../assets/school/school5.jpg';
import school6 from '../../assets/school/school6.jpg';
import school7 from '../../assets/school/school7.jpg';
import school8 from '../../assets/school/school8.jpg';
import school9 from '../../assets/school/school9.jpg';
import school10 from '../../assets/school/school10.JPG';
import school11 from '../../assets/school/school11.jpg';
import school12 from '../../assets/school/school12.jpg';
import school13 from '../../assets/school/school13.jpg';
import school14 from '../../assets/school/school14.jpg';
import school15 from '../../assets/school/school15.jpg';
import school16 from '../../assets/school/school16.jpg';
import school17 from '../../assets/school/school17.jpg';
// Tables
import img1 from '../../assets/receptionCounter/img1.jpg';
import img2 from '../../assets/receptionCounter/img2.jpg';
import img3 from '../../assets/receptionCounter/img3.jpg';
import img4 from '../../assets/receptionCounter/img4.jpg';
import img5 from '../../assets/receptionCounter/img5.jpg';
import img6 from '../../assets/receptionCounter/img6.jpg';
import img7 from '../../assets/receptionCounter/img7.jpg';
import img8 from '../../assets/receptionCounter/img8.jpg';
import img9 from '../../assets/receptionCounter/img9.jpg';
import img10 from '../../assets/receptionCounter/img10.jpg';
import img11 from '../../assets/receptionCounter/img11.jpg';
import img12 from '../../assets/receptionCounter/img12.jpg';
import img13 from '../../assets/receptionCounter/img13.jpg';
// STORAGE RACK
// import storage from '../../assets/categories/img5.png';
// works
import work1 from '../../assets/work/work1.png';
import work2 from '../../assets/work/work2.png';
import work3 from '../../assets/work/work3.png';
import work4 from '../../assets/work/work4.png';
import work5 from '../../assets/work/work5.png';
import work6 from '../../assets/work/work6.png';
import work7 from '../../assets/work/work7.png';
import work8 from '../../assets/work/work8.png';
import work9 from '../../assets/work/work9.png';
import work10 from '../../assets/work/work10.png';
import work11 from '../../assets/work/work11.png';
import work12 from '../../assets/work/work12.png';
import work13 from '../../assets/work/work13.png';

// storage
import storage1 from '../../assets/storage/storage1.jpg';
import storage2 from '../../assets/storage/storage2.jpg';
import storage3 from '../../assets/storage/storage3.jpg';
import storage4 from '../../assets/storage/storage4.jpg';
import storage5 from '../../assets/storage/storage5.JPG';
import storage6 from '../../assets/storage/storage6.jpg';
import storage7 from '../../assets/storage/storage7.jpg';
import storage8 from '../../assets/storage/storage8.JPG';
import storage9 from '../../assets/storage/storage9.jpg';
import storage10 from '../../assets/storage/storage10.jpg';
import storage11 from '../../assets/storage/storage11.JPG';
import storage12 from '../../assets/storage/storage12.jpg';
import storage13 from '../../assets/storage/storage13.jpg';
import storage14 from '../../assets/storage/storage14.jpg';
// import storage15 from '../../assets/storage/storage15.jpg';


// Conference
import conf1 from '../../assets/conference/img1.png';
import conf2 from '../../assets/conference/img2.png';
import conf3 from '../../assets/conference/img3.png';
import conf4 from '../../assets/conference/img4.png';
import conf5 from '../../assets/conference/img5.png';
import conf6 from '../../assets/conference/img6.png';
import conf7 from '../../assets/conference/img7.png';
import conf8 from '../../assets/conference/img8.png';
import conf9 from '../../assets/conference/img9.png';
// office
import office1 from '../../assets/office/office1.png';
import office2 from '../../assets/office/office2.png';
import office3 from '../../assets/office/office3.png';
import office4 from '../../assets/office/office4.png';
import office5 from '../../assets/office/office5.png';
import office6 from '../../assets/office/office6.png';
import office7 from '../../assets/office/office7.png';
import office8 from '../../assets/office/office8.png';
import office9 from '../../assets/office/office9.png';
import office10 from '../../assets/office/office10.png';
import office11 from '../../assets/office/office11.png';
import office12 from '../../assets/office/office12.png';
import office13 from '../../assets/office/office13.png';
import office14 from '../../assets/office/office14.png';

// store
import store1 from '../../assets/store/store1.png';
import store2 from '../../assets/store/store2.png';
import store3 from '../../assets/store/store3.png';
import store4 from '../../assets/store/store4.png';
import store5 from '../../assets/store/store5.jpg';
import store6 from '../../assets/store/store6.jpg';
import store7 from '../../assets/store/store7.jpg';
import store8 from '../../assets/store/store8.JPG';
import store9 from '../../assets/store/store9.JPG';
import store10 from '../../assets/store/store10.jpg';
import store11 from '../../assets/store/store11.png';
// curtain
import curtain1 from '../../assets/curtain/curtain1.png';
import curtain2 from '../../assets/curtain/curtain2.png';
import curtain3 from '../../assets/curtain/curtain3.png';
import curtain4 from '../../assets/curtain/curtain4.png';
import curtain5 from '../../assets/curtain/curtain5.png';
// carpet
import carpet1 from '../../assets/carpet/carpet1.jpg';
import carpet2 from '../../assets/carpet/carpet2.jpg';
import carpet3 from '../../assets/carpet/carpet3.jpg';
import carpet4 from '../../assets/carpet/carpet4.jpg';
import carpet5 from '../../assets/carpet/carpet5.jpg';
import carpet6 from '../../assets/carpet/carpet6.jpg';
import carpet7 from '../../assets/carpet/carpet7.jpg';
import carpet8 from '../../assets/carpet/carpet8.jpg';
import carpet9 from '../../assets/carpet/carpet9.jpg';
// grass
import grass1 from '../../assets/grass/grass1.png';
import grass2 from '../../assets/grass/grass2.png';

//Cafeteria

import caf1 from '../../assets/cafeteria/caf1.jpg';
import caf2 from '../../assets/cafeteria/caf2.jpeg';
import caf3 from '../../assets/cafeteria/caf3.jpg';
import caf4 from '../../assets/cafeteria/caf4.jpg';
import caf5 from '../../assets/cafeteria/caf5.jpg';
import caf6 from '../../assets/cafeteria/caf6.jpg';
import caf7 from '../../assets/cafeteria/caf7.jpg';
import caf8 from '../../assets/cafeteria/caf8.jpg';
import caf9 from '../../assets/cafeteria/caf9.JPG';
import caf10 from '../../assets/cafeteria/caf10.jpg';
import caf11 from '../../assets/cafeteria/caf11.JPG';
import caf12 from '../../assets/cafeteria/caf12.jpg';
import caf13 from '../../assets/cafeteria/caf13.JPG';
import caf14 from '../../assets/cafeteria/caf14.JPG';
import caf15 from '../../assets/cafeteria/caf15.jpg';
import caf16 from '../../assets/cafeteria/caf16.jpg';
import caf17 from '../../assets/cafeteria/caf17.jpg';
import caf18 from '../../assets/cafeteria/caf18.jpg';
import caf19 from '../../assets/cafeteria/caf19.JPG';
import caf20 from '../../assets/cafeteria/caf20.jpg';
import caf21 from '../../assets/cafeteria/caf21.jpg';
import caf22 from '../../assets/cafeteria/caf22.jpg';
import caf23 from '../../assets/cafeteria/caf23.jpg';
import caf24 from '../../assets/cafeteria/caf24.jpg';
import caf25 from '../../assets/cafeteria/caf25.JPG';
import caf26 from '../../assets/cafeteria/caf26.jpg';
import caf27 from '../../assets/cafeteria/caf27.jpg';


import CategorieSection from '../../components/sections/categoriesSection/CategoriesSection';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Backdrop from '../../components/backdrop/Backdrop';
import Modal from '../../components/modal/Modal';
import Modal2 from '../../components/modal/Modal2';

// SHELVING RACK
import rak1 from '../../assets/SHELVINGRACK/img1.png';
import rak2 from '../../assets/SHELVINGRACK/img2.png';
import rak3 from '../../assets/SHELVINGRACK/img3.png';
import rak4 from '../../assets/SHELVINGRACK/img4.png';

class Categorie extends Component {
    state = {
        active: true,
        modal: false,
        modalSelected: 0,
        modal2: false,
        modal2Selected: 0,
        categories: [
            {id:1, name:'Office Chairs', href:'/', img: cat1, products:[
                {id:0, name:"Comport Executive Chairs", img: chair1, gallery:[
                    chair1, gp2, gp3, gp4, gp5
                ], content: ['High Back', 'Medium Back', 'Visitor'], },
                {id:1, name:"King Executive Chairs", img: king1, gallery:[
                    king1, king2, king3, king4, king5
                ], content: ['High Back', 'Medium Back', 'Visitor']},
                {id:2, name:"Royal High Executive Chairs", img: rex2, gallery:[
                    rex1, rex2, rex3, rex4, rex5,rex6
                ], content: ['High Back', 'Medium Back', 'Visitor']},
                {id:3, name:"Royal High Executive Chairs", img: royal2, gallery:[
                    royal1, royal2, royal3, royal4, 
                ], content: ['High Back', 'Medium Back', 'Visitor']},
                {id:4, name:"High Operative Mesh Chairs", img: sleek2, gallery:[
                    sleek1, sleek2, sleek3, sleek4, sleek5, sleek6, sleek7, sleek8
                ], content: ['High Back', 'Medium Back', 'Visitor']},
                {id:5, name:"Tango Chairs", img: tango2, gallery:[
                    tango1, tango2, tango3, tango4, tango5, tango6
                ], content: ['High Back', 'Medium Back', 'Visitor']},
               
                
            ],content: "Long hours? Hunching to see the screen? Al Mashani office seating features the latest in ergonomic technology dedicated to Posturepedic and comfort. Our chair features high back and neck support adjustable to a specific height. Our collection is designed to fit the varying requirements of work-life preventing aches or long term ill health. Our designs are also stylish and classy to help you exude your taste and professionalism. We provide mesh fabric back chairs for form-fitting comfort and a modern touch. Or leather for the classic and evergreen. This makes for more meaningful and effortless meeting sessions. We offer a diverse selection of chairs that can be customized to client’s needs, including a different range of fabric chairs, mesh chairs, and leather chairs."},
            {id:2, name:'SOFAS', href:'/', img: cat2,products:[
                {id:0, name:"Opera Sofa", img: opera4, gallery:[
                    opera1, opera2, opera3, opera4
                ], content: ['One Seater', 'Two Seater', 'Three Seater']},
                {id:1, name:"Classic Sofa", img: classic4, gallery:[
                    classic1, classic2, classic3, classic4, 
                ], content: ['One Seater', 'Two Seater', 'Three Seater']},
                {id:2, name:"Crown Sofa", img: crown4, gallery:[
                    crown1, crown2, crown3, crown4
                ], content: ['One Seater', 'Two Seater', 'Three Seater']},
                {id:3, name:"LANA Sofa", img: lana4, gallery:[
                    lana1, lana2, lana3, lana4,
                ], content: ['One Seater', 'Two Seater', 'Three Seater']},
                {id:4, name:"Omega Sofa", img: omega4, gallery:[
                    omega1, omega2, omega3, omega4
                ], content: ['One Seater', 'Two Seater', 'Three Seater']},
                {id:5, name:"Roma Sofa", img: roma4, gallery:[
                    roma1, roma2, roma3, roma4
                ], content: ['One Seater', 'Two Seater', 'Three Seater']},
                {id:6, name:"Arc Sofa", img: arc4, gallery:[
                    arc1, arc2, arc3, arc4, arc5, arc6, arc7
                ], content: ['One Seater', 'Two Seater', 'Three Seater']},

            ],content: "Be original and your office will speak for itself. Office sofa is usually the furniture pieces that will set an impression of how efficient your organization is. We provide a wide range of sofa design option will match with any kind of office interiors."},
            {id:3, name:'Reception Counter', img: cat3, href:'/',products:[
                {id:0, name:"", img: img1, gallery:null, content:null},
                {id:1, name:"", img: img2, gallery:null, content: null},
                {id:2, name:"", img: img3, gallery:null, content: null},
                {id:3, name:"", img: img4, gallery:null, content: null},
                {id:4, name:"", img: img5, gallery:null, content: null},
                {id:5, name:"", img: img6, gallery:null, content: null},
                {id:6, name:"", img: img7, gallery:null, content: null},
                {id:7, name:"", img: img8, gallery:null, content: null},
                {id:8, name:"", img: img9, gallery:null, content: null},
                {id:9, name:"", img: img10, gallery:null, content: null},
                {id:10, name:"", img: img11, gallery:null, content: null},
                {id:11, name:"", img: img12, gallery:null, content: null},
                {id:12, name:"", img: img13, gallery:null, content: null},
            ],content: "A reception desk emphasizes the professionalism and prestige of your company. Whether it is your employee or a client, reception desks are usually the furniture pieces that will set an impression of how efficient your organization is. Therefore your reception area ought to be warm and welcoming along with a visually appealing reception desk placed as a focal point."},
            {id:4, name:'SCHOOL AND CLASSROOM FURNITURE',img: cat4, href:'/',products:[
                {id:0, name:"", img: school1, gallery:null, content:null},
                {id:1, name:"", img: school2, gallery:null, content:null},
                {id:2, name:"", img: school3, gallery:null, content: null},
                {id:3, name:"", img: school4, gallery:null, content:null},
                {id:4, name:"", img: school5, gallery:null, content: null},
                {id:5, name:"", img: school6, gallery:null, content: null},
                {id:6, name:"", img: school7, gallery:null, content: null},
                {id:7, name:"", img: school8, gallery:null, content: null},
                {id:8, name:"", img: school9, gallery:null, content: null},
                {id:9, name:"", img: school10, gallery:null, content: null},
                {id:10, name:"", img: school11, gallery:null, content: null},
                {id:11, name:"", img: school12, gallery:null, content: null},
                {id:12, name:"", img: school13, gallery:null, content: null},
                {id:13, name:"", img: school14, gallery:null, content: null},
                {id:14, name:"", img: school15, gallery:null, content: null},
                {id:15, name:"", img: school16, gallery:null, content: null},
                {id:16, name:"", img: school17, gallery:null, content: null},
            ],content: "The flexibility of school furniture enables changing environments that favor multiple dynamics. The spaces are personalized and contexts occur that reflect the cultural and pedagogical identity of the school."},
            {id:5, name:'EXECUTIVE DESK', href:'/', img: cat5,products:[
                {id:0, name:"", img: desk1, gallery:null, content:null},
                {id:1, name:"", img: desk2, gallery:null, content: null},
                {id:2, name:"", img: desk3, gallery:null, content: null},
                {id:3, name:"", img: desk4, gallery:null, content: null},
                {id:4, name:"", img: desk5, gallery:null, content: null},
                {id:5, name:"", img: desk6, gallery:null, content: null},
                {id:6, name:"", img: desk7, gallery:null, content: null},
                {id:7, name:"", img: desk8, gallery:null, content: null},
                {id:8, name:"", img: desk9, gallery:null, content: null},
                {id:9, name:"", img: desk10, gallery:null, content: null},
              
                
            ],content: "Offices, where we spend most of our daily life, are changing dimensions. New generation executives prefer office furniture that reflects both their own style and the corporation’s when furnishing their offices. The executive office desk we supply with the consciousness that the quality is in the perfection of details and price editing always offer you more than you search for."},
            {id:6, name:'WORKSTASTION', href:'/', img: cat6,products:[
                {id:0, name:"", img: work1, gallery:null, content:null},
                {id:1, name:"", img: work2, gallery:null, content: null},
                {id:2, name:"", img: work3, gallery:null, content: null},
                {id:3, name:"", img: work4, gallery:null, content: null},
                {id:4, name:"", img: work5, gallery:null, content: null},
                {id:5, name:"", img: work6, gallery:null, content: null},
                {id:6, name:"", img: work7, gallery:null, content: null},
                {id:7, name:"", img: work8, gallery:null, content: null},
                {id:8, name:"", img: work9, gallery:null, content: null},
                {id:9, name:"", img: work10, gallery:null, content: null},
                {id:10, name:"", img: work11, gallery:null, content: null},
                {id:11, name:"", img: work12, gallery:null, content: null},
                {id:12, name:"", img: work13, gallery:null, content: null},
            ],content: " Everyone with an office in Oman or planning to set up one wants an efficient and comfortable space. Our elegant system furniture comes in handy, considering that you and your employees possibly spend most of your time in the office. At Al Mashani Office furniture, we offer a wide range of system furniture developed to cater for the diverse needs of our clients. We offer trendy, efficient, cost-effective, and long-lasting office workstations in Oman. The office workstation is the extension of a person’s workspace. It can facilitate processes to provide added efficiency and comfort. Our range of office furniture designed from the floor up to meet those needs. An integrated program of thick and thin panes based workstations, free-standing desk, office partition, offering well designed, cost-effective furniture solution for the modern office."},
                {id:7, name:'CONFERENCE ROOM TABLE', href:'/',img: cat7,products:[
                    {id:0, name:"", img: conf1, gallery:null, content:null},
                    {id:1, name:"", img: conf2, gallery:null, content: null},
                    {id:2, name:"", img: conf3, gallery:null, content: null},
                    {id:3, name:"", img: conf4, gallery:null, content: null},
                    {id:4, name:"", img: conf5, gallery:null, content: null},
                    {id:5, name:"", img: conf6, gallery:null, content: null},
                    {id:6, name:"", img: conf7, gallery:null, content: null},
                    {id:7, name:"", img: conf8, gallery:null, content: null},
                    {id:8, name:"", img: conf9, gallery:null, content: null},
                ],content: " This is where the most important moments occur. Where ideas are shared and decisions are made. The meeting table sets the terms of your discussions and dealings. Signing on paper against mahogany or teak creates the professional atmosphere for closing top-notch deals. Al Mashani office Furniture offers a diverse range of conference tables that can fit your ideas. Choose the perfect office desk furniture and take your business to new heights."},
                {id:8, name:'SHELVING RACK', href:'/',img: cat8,products:[
                    {id:0, name:"", img: rak1, gallery:null, content: null},
                    {id:1, name:"", img: rak2, gallery:null, content: null},
                    {id:2, name:"", img: rak3, gallery:null, content: null},
                    {id:3, name:"", img: rak4, gallery:null, content: null},
                   
                ],content: "We offer the best quality light or heavyweight shelving and slotted angel rack for Office, warehouse, and manufacturing companies to store files or goods."},
                {id:9, name:'OFFICE LOUNGE FURNITURE', href:'/',img: cat9,products:[
                    {id:0, name:"", img: office1, gallery:null, content: null},
                    {id:1, name:"", img: office3, gallery:null, content: null},
                    {id:2, name:"", img: office11, gallery:null, content: null},
                    {id:3, name:"", img: office4, gallery:null, content: null},
                    {id:4, name:"", img: office12, gallery:null, content: null},
                    {id:5, name:"", img: office9, gallery:null, content: null},
                    {id:6, name:"", img: office10, gallery:null, content: null},
                    {id:7, name:"", img: office8, gallery:null, content: null},
                    {id:8, name:"", img: office2, gallery:null, content: null},
                    {id:9, name:"", img: office7, gallery:null, content: null},
                    {id:10, name:"", img: office6, gallery:null, content: null},
                    {id:11, name:"", img: office5, gallery:null, content: null},
                    {id:12, name:"", img: office13, gallery:null, content: null},
                    {id:13, name:"", img: office14, gallery:null, content: null},
                ],content: "Add some color to commonly mundane office life with designer fixtures to make your office stand out from the rest. We supply office furniture to your workplaces, sofas to your reception areas, and tables and chairs to the pantry. We have got you covered with all your office furnishing needs."},
                {id:10, name:'RETAIL STORE DISPLAY RACK', href:'/', img: cat10,products:[
                    {id:0, name:"", img: store1, gallery:null, content:null},
                {id:1, name:"", img: store2, gallery:null, content: null},
                {id:2, name:"", img: store3, gallery:null, content: null},
                {id:3, name:"", img: store4, gallery:null, content: null},
                {id:4, name:"", img: store5, gallery:null, content: null},
                {id:5, name:"", img: store6, gallery:null, content: null},
                {id:6, name:"", img: store7, gallery:null, content: null},
                {id:7, name:"", img: store8, gallery:null, content: null},
                {id:8, name:"", img: store9, gallery:null, content: null},
                {id:9, name:"", img: store10, gallery:null, content: null},
                {id:10, name:"", img: store11, gallery:null, content: null},
                ],content: "We deliver End to End retail solutions, personalized services for each client. From tradition to innovation, from the metal, wood, acrylic, injection, glass material to digital executions."},
                {id:11, name:'OFFICE CURTAINS', href:'/',img: cat11,products:[
                    {id:0, name:"", img: curtain1, gallery:null, content: null},
                    {id:1, name:"", img: curtain5, gallery:null, content: null},
                    {id:2, name:"", img: curtain3, gallery:null, content: null},
                    {id:3, name:"", img: curtain4, gallery:null, content: null},
                    {id:4, name:"", img: curtain2, gallery:null, content: null},
                ],content: "We offer unprecedented design freedom and have a vital role in determining and defining the overall look of your office, our blinds are practical, Versatile and stylish, and they offer great control over how much light is filtered into room. When closed they provide privacy and protect furniture and carpets from direct sunlight. The widest range of Design options will match with any kind of interiors perfectly and different touch will be given to it."},
                {id:12, name:'CARPET TILES', href:'/',img: cat12,products:[
                    {id:0, name:"", img: carpet1, gallery:null, content:null},
                    {id:1, name:"", img: carpet2, gallery:null, content: null},
                    {id:2, name:"", img: carpet3, gallery:null, content: null},
                    {id:3, name:"", img: carpet4, gallery:null, content: null},
                    {id:4, name:"", img: carpet5, gallery:null, content: null},
                    {id:5, name:"", img: carpet6, gallery:null, content: null},
                    {id:6, name:"", img: carpet7, gallery:null, content: null},
                    {id:7, name:"", img: carpet8, gallery:null, content: null},
                    {id:8, name:"", img: carpet9, gallery:null, content: null},
                ],content: "Al Mashani Furnishing provides classy and elegant designs of carpet designs to make your office business professional. Our noise-reducing carpets will make your office extra conducive to getting work done. They also feel great between the toes."},
                {id:13, name:'ARTIFICIAL GRASS', href:'/',img: cat13,products:[
                    {id:0, name:"", img: grass1, gallery:null, content:null},
                    {id:1, name:"", img: grass2, gallery:null, content:null}
                ],content: "The grass may look greener on the other side of the fence, but when you get there, you would find its artificial turf."},
                {id:14, name:'cafeteria Furniture', href:'/',img: cat14,products:[
                    {id:0, name:"", img: caf1, gallery:null, content:null},
                {id:1, name:"", img: caf2, gallery:null, content:null},
                {id:2, name:"", img: caf3, gallery:null, content: null},
                {id:3, name:"", img: caf4, gallery:null, content:null},
                {id:4, name:"", img: caf5, gallery:null, content: null},
                {id:5, name:"", img: caf6, gallery:null, content: null},
                {id:6, name:"", img: caf7, gallery:null, content: null},
                {id:7, name:"", img: caf8, gallery:null, content: null},
                {id:8, name:"", img: caf9, gallery:null, content: null},
                {id:9, name:"", img: caf10, gallery:null, content: null},
                {id:10, name:"", img: caf11, gallery:null, content: null},
                {id:11, name:"", img: caf12, gallery:null, content: null},
                {id:12, name:"", img: caf13, gallery:null, content: null},
                {id:13, name:"", img : caf14, gallery:null, content: null},
                {id:14, name:"", img: caf15, gallery:null, content: null},
                {id:15, name:"", img: caf16, gallery:null, content: null},
                {id:16, name:"", img: caf17, gallery:null, content: null},
                {id:17, name:"", img: caf18, gallery:null, content: null},
                {id:18, name:"", img: caf19, gallery:null, content: null},
                {id:19, name:"", img: caf20, gallery:null, content: null},
                {id:20, name:"", img: caf21, gallery:null, content: null},
                {id:21, name:"", img: caf22, gallery:null, content: null},
                {id:22, name:"", img: caf23, gallery:null, content: null},
                {id:23, name:"", img : caf24, gallery:null, content: null},
                {id:24, name:"", img: caf25, gallery:null, content: null},
                {id:25, name:"", img: caf26, gallery:null, content: null},
                {id:26, name:"", img: caf27, gallery:null, content: null},
                ],content: "A cafeteria is a place where a lot of things happen with lunch or coffee. Design your office cafeteria with our wide range of café furniture, recliner sofas, bar stool to provide a relaxing and fun environment."},
                {id:15, name:'STORAGE RACK', href:'/', img: cat15,products:[
                    {id:0, name:"", img: storage1, gallery:null, content:null},
                    {id:1, name:"", img: storage2, gallery:null, content: null},
                    {id:2, name:"", img: storage3, gallery:null, content: null},
                    {id:3, name:"", img: storage4, gallery:null, content: null},
                    {id:4, name:"", img: storage5, gallery:null, content: null},
                    {id:5, name:"", img: storage6, gallery:null, content: null},
                    {id:6, name:"", img: storage7, gallery:null, content: null},
                    {id:7, name:"", img: storage8, gallery:null, content: null},
                    {id:8, name:"", img: storage9, gallery:null, content: null},
                    {id:9, name:"", img: storage10, gallery:null, content: null},
                    {id:10, name:"", img: storage11, gallery:null, content: null},
                    {id:11, name:"", img: storage12, gallery:null, content: null},
                    {id:12, name:"", img: storage13, gallery:null, content: null},
                    {id:13, name:"", img: storage14, gallery:null, content: null},
                    
                ],content: " Clutter is the number one distraction. Nobody can work peacefully with disorder all around. Keeping the office organized and tidy can increase productivity more than one might expect. Our office storage solution aims to maximize space for each business through storage organization, taking clutter out of sight and out of mind. Al Mashani provides customizable office cabinets and storage sections made to measure. Our experienced sales team will examine and analyze your office space and business condition to provide industry advice on how to optimize space and store documents."}
        ],
        lodedCat :  null,
        isOpen: false
      };
      
      componentDidMount () {
        Aos.init({
            duration : 2000
          });
        let cat = null;
        if(this.props.match.params.id){
            if(!this.state.lodedCat || this.props.id !== this.state.lodedCat.id){
                // axios.get('/posts/' + this.props.match.params.id).then(response => {
            
                //     this.setState({lodedPost: response.data});
                //     //console.log(response);
                // });
                cat = this.state.categories[this.props.match.params.id - 1];
                this.setState({lodedCat: cat});

            }
                
        }
            
    }
    componentWillReceiveProps(nextProps) {
        // In this case cdm is not called and only cwrp know
        // that id has been changed so we have to updated our page as well
        const newLicenseId = nextProps.match.params.id;
      
        // Check id changed or not
       let cat = this.state.categories[newLicenseId -1];
                this.setState({lodedCat: cat});
      }
   
    toggleActiveHandler = () => {
        this.setState({ active: !this.state.active })
    }
    sideBarClickedHandler = (id) => {
        this.setState({
            lodedCat: this.state.categories[id]
        })
    }

    hideBackdropHandler = () =>{
        this.setState({
            modal : false,
            modal2 : false
           
        });
        
    }

    openModalHandler = (id) => {
        this.setState({
            modal: true,
            modalSelected: id
        })
    }
    openModal2Handler = (id) => {
        this.setState({
            modal2: true,
            modal2Selected: id
        })
    }
    render(){
        // let items = this.state.categories.map((item, index) => {
        //     return (
        //     <li key={item.id} onClick={() => this.sideBarClickedHandler(index)}>
        //         <NavLink to={'/categorie/' + item.id} exact>{item.name}</NavLink>
        //     </li>
        //     );
        // })
let modalShow = null;
        let categorieContent = <CategorieSection categories={this.state.categories} />;
        let products = <div>Loading...</div>
        if(this.state.lodedCat){
            products = this.state.lodedCat.products.map(prod => {
                let product = null;
                if(prod.name === "" || prod.gallery === null || prod.content === null){
                    product = (
                        <Col lg={4} md={6} sm={6} xs={12} key={prod.id}>
                                    <div className={classes.Product} data-aos="zoom-in">
                                        <div className={classes.ProductImg} >
                                        
                                        <img src={prod.img} alt={prod.name}  onClick={() => this.openModal2Handler(prod.id)} />
                                        
                                      
                                       
                                       
                                        </div>
                                        
        
                                    </div>
                                </Col>
                    );
                }else{
                    product = (
                        <Col lg={4} md={6} sm={6} xs={12} key={prod.id}>
                                    <div className={classes.Product} data-aos="zoom-in">
                                        <div className={classes.ProductImg} >
                                        <img src={prod.img} alt={prod.name} onClick={() => this.openModalHandler(prod.id)} />
                                        </div>
                                        <div className={classes.ProductTitle}>
                                            <span onClick={() => this.openModalHandler(prod.id)}>{prod.name}</span>
                                        </div>
        
                                    </div>
                                </Col>
                    );
                }
                return product;
            });
            categorieContent = (
                <div className={classes.CategorieContent}>
                <div className={classes.CategorieTop}>
                <div className={classes.CategorieTitle} >
                    <h1>{this.state.lodedCat.name}</h1>
                </div>
                <div className={classes.Description}>
                    <p>
{this.state.lodedCat.content}
</p>
                </div>
                </div>
                <div className={classes.Products}>
                    <Row>
                        {products}
                    </Row>
                </div>
            </div>
            );
            modalShow = null;
            if(this.state.lodedCat.products[0].name === "" || this.state.lodedCat.products[0].gallery === null || this.state.lodedCat.products[0].content === null){
                modalShow = (
                    <Aux>
                        <Backdrop clicked={this.hideBackdropHandler} show={this.state.modal2}  />
                    <Modal2 show={this.state.modal2} item={this.state.lodedCat.products[this.state.modal2Selected]} clicked={this.hideBackdropHandler} />
               
                    </Aux>
                );
            }else{
                modalShow = (
                    <Aux>
                        <Backdrop clicked={this.hideBackdropHandler} show={this.state.modal}  />
                    <Modal show={this.state.modal} item={this.state.lodedCat.products[this.state.modalSelected]} clicked={this.hideBackdropHandler} />
               
                    </Aux>
                );
            }
        }
        
        return(
            <Aux>
                 {modalShow}
                <Header>
                {/* <TopBar /> */}
                <HeaderContent active={this.state.active}
                    clicked={this.toggleActiveHandler} />
            </Header>
            <main>
                <div className={classes.Categorie}>
                
                    {/* <Row>
                        <Col lg={3}>
                        <nav className={classes.SideBar} data-aos="fade-right">
                            <ul>
                                {items}
                            </ul>
                        </nav>
                        </Col>
                        <Col lg={9}> */}
                       {categorieContent}
                        {/* </Col>
                    </Row> */}
                </div>

            </main>
            <Footer />
            </Aux>
        );
    }
}

export default Categorie;