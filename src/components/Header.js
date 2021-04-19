import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <NavBar>
            <Logo>
                <span>{"<abhijeet pawar/>"}</span>
            </Logo>
        </NavBar>
    )
}

export default Header

const NavBar = styled.div`
    width:100%;
    padding:1.2rem 1.5rem;
    background-color: #e6edff;
    position:fixed;
    box-shadow: 0 6px 20px rgba(93,93,93,0.23);
    z-index:5;
`
const Logo = styled.div`
    span{
        font-weight:300;
        font-size:1.5rem;
        color: #5c1ec7;
    }
`
