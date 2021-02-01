import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>EUROFIN</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='sobre'>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='explore'>Explore</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='servicos'>Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='inscrever'>Inscrever-se</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/entre'>Entre</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>      
    );
};

export default Navbar;