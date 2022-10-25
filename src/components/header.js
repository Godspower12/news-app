import React from 'react';
import Cnn from "../images/cnn.jpg" 
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <HeaderImg>
            <Link to ='/'><img src={Cnn} alt="cnnLogo" /></Link>
        </HeaderImg>
    )
};


const HeaderImg = styled.div`
background: black;
width: 100vw;
top: 0;
margin-left: -10px;
img {
    height: 20vh;
    max-width: 20%;
    overflow: hidden;
    
    
    
        /* mobile screen */

        @media(max-width: 425px) {
            height: 7vh;
            width: 100%;
            }
        @media(max-width: 375px) {
        height: 7vh;
        width: 100%;
       
        }
       
}
`; 

export default Header
