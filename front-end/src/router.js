import React from 'react';
import {render} from 'react-dom';
import Main from './main.js';
import About from './about/about.js';
import Help from './help/help.js';

import { MenuItem,NavDropdown,NavItem,Nav ,Navbar, Jumbotron, Button } from "react-bootstrap";

import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

class Menue extends React.Component{
  render(){
    return(
      <div>


      <BrowserRouter history={history}  >
      <div>

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
          <Link to="/">Confession</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <NavItem eventKey={1} >need help?</NavItem>
            <NavItem eventKey={2} ><Link to="/about" style={{ textDecoration: 'none',pointerevents: 'none', cursor: 'default' }}>about us</Link></NavItem>
            <NavDropdown eventKey={3} title="know more about " id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>dreams</MenuItem>
              <MenuItem eventKey={3.2}>fantasies</MenuItem>
              <MenuItem eventKey={3.3}>guilt</MenuItem>
              <MenuItem eventKey={3.4}>lie</MenuItem>
              <MenuItem eventKey={3.5}>pain</MenuItem>
              <MenuItem eventKey={3.6}>question</MenuItem>
              <MenuItem eventKey={3.7}>random feelings</MenuItem>
              <MenuItem eventKey={3.8}>truth</MenuItem>
              <MenuItem eventKey={3.9}>wild experiences</MenuItem>





            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>




      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/help" component={Help}/>


      </div>

      </BrowserRouter>



       </div>
    )
  }
}

render(<Menue/>,document.getElementById('main'));
