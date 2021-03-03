import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";

const NavbarMain = () => {
    const [navSize, setnavSize] = useState('10rem')
    const [navColor, setnavColor] = useState(true);

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavSize('5rem') : setnavSize('10rem');
        window.scrollY > 10 ? setnavColor(false) : setnavColor(true);

    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
            // setnavSize('');
            // setnavColor(false);
        }
    }, [])

    return (
        < >
            <NavbarContainer expand="lg" fixed="top" style={{ height: navSize }} color={{ clr: navColor }}>

                <Container  >
                    <NavLink to='/'>
                        <Navbar.Brand >
                            <img
                                src={logo}
                                width="130"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </NavLink>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='m-auto'>
                            <NavLink to='/'>
                                Home
                                </NavLink>
                            <NavLink to='/latest'>
                                Latest Movies
                            </NavLink>
                            <NavLink to='/browse/action'>
                                Browse
                            </NavLink>
                            <NavLink to='/search'>
                                Search
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </NavbarContainer>
            { /* Route components are rendered if the path prop matches the current URL */}
        </>
    )
}
export default NavbarMain


const NavbarContainer = styled(Navbar)`
background-color:${props => props.color.clr ? 'transparent' : 'black'};
border-bottom:${props => props.color.clr ? 'none' : '.4px inset rgba(255,255,255,0.56)'} ;
transition: all 500ms;
`

const NavLink = styled(Link)`
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    margin-right: 2rem;
    color: #ffffff;
    font-weight: 800;
    transition: all 400ms;

    :hover {
      color: #ff0000;
      text-decoration: none;
    }

`