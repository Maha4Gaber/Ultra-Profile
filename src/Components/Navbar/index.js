import React from "react";
// import { Link } from "react-router-dom";

// import styled from "styled-components";
import {NaveSection ,Logo ,LogoText ,Ullist,NavbarLink ,Listitem} from "./style.js"

const NavBar = () => {
  return (
    <div>
      <NaveSection>
            
            <div className="container">
                
                <Logo >
                    <LogoText >Ultra Profile</LogoText>
                </Logo>                
                <Ullist >
                    <Listitem ><NavbarLink to="/" >Home</NavbarLink></Listitem>
                    <Listitem ><NavbarLink to="/work" >Work</NavbarLink></Listitem>
                    <Listitem ><NavbarLink to="/Portfolio" >Portfolio</NavbarLink></Listitem>
                    <Listitem ><NavbarLink to="/profile" >Resume</NavbarLink></Listitem>
                    <Listitem ><NavbarLink to="/about" >About</NavbarLink></Listitem>
                    <Listitem ><NavbarLink to="/contact" >Contact</NavbarLink></Listitem>
                </Ullist>
                
            </div>
            
        </NaveSection>
    </div>
    
  )
}
export default NavBar;