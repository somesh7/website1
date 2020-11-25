import React from 'react';
import { Route, Switch,} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import Search from './Search';
import Home from './Home';



const App = () => {
    return(
    <> 
    <h2> WP Works</h2>
    <Menu />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/service" component={Service} />
    <Route path="/search" component={Search} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={Error} />
    </Switch>

      </>
    );
};
export default App;