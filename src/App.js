import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Aux from './hoc/auxilary/Auxilary';
import Home from './containers/pages/Home';
import About from './containers/pages/About';
import Vision from './containers/pages/Vision';
import Mission from './containers/pages/Mission';
import Message from './containers/pages/Message';
import Contact from './containers/pages/Contact';
import Categorie from './components/categories/Categorie';
import New from './containers/pages/New';
import Client from './containers/pages/Client';
function App() {
  return (
    <BrowserRouter>
    <Aux>
      <Route path="/" exact component={Home} />
      <Switch>   
    <Route path="/about" exact component={About} />
    <Route path="/vision" exact component={Vision} />
    <Route path="/mission" exact component={Mission} />
    <Route path="/message" exact component={Message} />
    <Route path="/categorie/:id" exact component={Categorie} />
    <Route path="/categorie" exact component={Categorie} />
    <Route path="/new" exact component={New} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/clients" exact component={Client} />
    </Switch> 
    </Aux>
    </BrowserRouter>
  );
}

export default App;
