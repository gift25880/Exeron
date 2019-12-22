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

const Active = {
    color: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderRadius: '15px',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontSize: '12px'
}


const Navbar1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar color="black" dark expand="md" className="navbar-background fixed-top" style={{paddingTop: "1.5%", paddingLeft: "5.25%"}}>
            <div className="container-fluid">
                <NavbarBrand href="/">
                    <img src="../static/images/logo.png" alt="Logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar style={{paddingLeft: "20px"}}>
                        <NavItem style={{marginLeft: "20px", marginRight: '20px'}}>
                            <NavLink href="/" style={Active}>Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{marginLeft: "20px", marginRight: '20px', fontSize: '12px'}} className="font-weight-bold navbar-item">
                                What Is EXERON
                            </DropdownToggle>
                            <DropdownMenu right className="text-center" style={{fontSize: '12px'}}>
                                <DropdownItem className="font-weight-bold">
                                    This Is EXERON
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="font-weight-bold">
                                    Videos
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="font-weight-bold">
                                    Power Range
                                </DropdownItem>
                                <DropdownItem className="text-left pt-4">
                                    → X &lt; 24kW
                                </DropdownItem>
                                <DropdownItem className="text-left pt-3">
                                    → X &gt; 24kW
                                </DropdownItem>
                                <DropdownItem className="text-left pt-3">
                                    → Customized X
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="font-weight-bold">
                                    Configurator
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="font-weight-bold">
                                    ees Award
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="font-weight-bold">
                                    X Around the World
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem style={{marginLeft: "20px", marginRight: '20px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="font-weight-bold navbar-item">Applications</NavLink>
                        </NavItem>
                        <NavItem style={{marginLeft: "20px", marginRight: '20px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="font-weight-bold navbar-item">Benefits</NavLink>
                        </NavItem>
                        <NavItem style={{marginLeft: "20px", marginRight: '20px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="font-weight-bold navbar-item">Downloads</NavLink>
                        </NavItem>
                        <NavItem style={{marginLeft: "20px", marginRight: '20px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="font-weight-bold navbar-item">FAQ</NavLink>
                        </NavItem>
                        <NavItem style={{marginLeft: "20px", marginRight: '20px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="font-weight-bold navbar-item">About IPS</NavLink>
                        </NavItem>
                        <NavItem style={{marginLeft: "20px", marginRight: '20px'}}>
                            <NavLink href="/" style={{fontSize: '12px'}} className="font-weight-bold navbar-item">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>

    );
}

export default Navbar1;