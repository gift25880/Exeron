import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'; 

const Navbar1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar color="black" dark expand="md" className="navbar-background" style={{paddingTop: "1.5%", paddingLeft: "5.25%"}}>
            <div className="container-fluid">
                <NavbarBrand href="/">
                    <img src="../static/images/logo.png" alt="Logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar style={{paddingLeft: "40px"}}>
                        <NavItem style={{paddingRight: '40px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="text-white font-weight-bold">Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{paddingRight: '40px', fontSize: '12px'}} className="text-white font-weight-bold">
                                What Is EXERON
                            </DropdownToggle>
                            <DropdownMenu right className="text-center font-weight-bold" style={{fontSize: '12px'}}>
                                <DropdownItem >
                                    This Is EXERON
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Videos
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Power Range
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem style={{paddingRight: '40px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="text-white font-weight-bold">Applications</NavLink>
                        </NavItem>
                        <NavItem style={{paddingRight: '40px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="text-white font-weight-bold">Benefits</NavLink>
                        </NavItem>
                        <NavItem style={{paddingRight: '40px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="text-white font-weight-bold">Downloads</NavLink>
                        </NavItem>
                        <NavItem style={{paddingRight: '40px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="text-white font-weight-bold">FAQ</NavLink>
                        </NavItem>
                        <NavItem style={{marginRight: '40px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="text-white font-weight-bold">About IPS</NavLink>
                        </NavItem>
                        <NavItem style={{marginRight: '40px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="text-white font-weight-bold">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>

    );
}

export default Navbar1;