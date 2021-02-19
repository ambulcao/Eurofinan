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
                    <SidebarLink to="sobre">Sobre</SidebarLink>
                    <SidebarLink to="explore">Explore</SidebarLink>
                    <SidebarLink to="servicos">Serviços</SidebarLink>
                    <SidebarLink to="inscrever">Inscrever-se</SidebarLink>
                </SidebarMenu>
                <SidebarbtnWrap>
                    <SidebarRoute to="/entre">Entre</SidebarRoute>
                </SidebarbtnWrap> 
            </SidebarWrapper>    
        </SidebarConteiner>
    );
};

export default Sidebar;
