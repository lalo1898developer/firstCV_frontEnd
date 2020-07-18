import React, { useState, useContext } from 'react';
import {AuthContext} from '../../contexts/AuthContext'
import { Link } from 'react-router-dom';
import { AccountBox } from '@material-ui/icons';
import {
 Collapse,
 Navbar,
 NavbarToggler,
 NavbarBrand,
 Nav,
 NavItem,
 NavLink,
 Dropdown, 
 DropdownToggle, 
 DropdownMenu, 
 DropdownItem
} from 'reactstrap';

const Navigation = () => {
 const [isOpen, setIsOpen] = useState(false);
 const { isAuth, user } = useContext(AuthContext);
 const [dropdownOpen, setDropdownOpen] = useState(false);
  
 const toggle = () => setIsOpen(!isOpen);
 const toggleDropDown = () => setDropdownOpen(prevState => !prevState);

 const publicNavbar = () => {
   return (<Navbar
     className="navbar navbar-dark bg-dark"
     expand="md">
     <NavbarBrand tag={Link} to="/">MyFirstCV App</NavbarBrand>
     <NavbarToggler onClick={toggle} />
     <Collapse isOpen={isOpen} navbar>
       <Nav className="mr-auto" navbar>
         <NavItem>
           <NavLink tag={Link} to="/login">Login</NavLink>
         </NavItem>
         <NavItem>
           <NavLink tag={Link} to="/signup">Signup</NavLink>
         </NavItem>
       </Nav>
     </Collapse>
   </Navbar>)
 }

 const authNavbar = () => {
  return (<Navbar
    className="navbar navbar-dark bg-dark"
    // style={{ backgroundColor: "black", color: "red" }}
    expand="md">
    <NavbarBrand tag={Link} to="/">MyFirstCV App</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
           <NavLink tag={Link} to="/user/home">Home</NavLink>
         </NavItem>
        <NavItem>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle caret>
                <AccountBox className="float-left"/>
                {user.firstName}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={Link} to="/logout">Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>)
}

 return (
   <React.Fragment>
     { isAuth ? authNavbar() : publicNavbar() }
   </React.Fragment>
 );
}

export default Navigation;