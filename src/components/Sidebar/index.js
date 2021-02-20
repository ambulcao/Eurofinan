import React from 'react';
import { SidebarConteiner, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarRoute, SidebarMenu, SidebarbtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarConteiner isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />    
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="sobre" onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to="explore" onClick={toggle}>Explore</SidebarLink>
                    <SidebarLink to="servicos" onClick={toggle}>Serviços</SidebarLink>
                    <SidebarLink to="inscrever" onClick={toggle}>Inscrever-se</SidebarLink>
                </SidebarMenu>
                <SidebarbtnWrap>
                    <SidebarRoute to="/entre">Entre</SidebarRoute>
                </SidebarbtnWrap> 
            </SidebarWrapper>    
        </SidebarConteiner>
    );
};

export default Sidebar;
