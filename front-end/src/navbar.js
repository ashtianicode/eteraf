import React from 'react';
import { MenuItem,NavDropdown,NavItem,Nav ,Navbar, Jumbotron, Button } from "react-bootstrap";


export default class NavBar extends React.Component{
render(){

  return(

    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Confession</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">need help?</NavItem>
          <NavItem eventKey={2} href="#">about us</NavItem>
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

  )
}

}
