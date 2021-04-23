import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <NavBar>
            <Logo>
                <a href="#greeting">{"<abhijeet pawar/>"}</a>
            </Logo>
            <NavLinks>
                <NavLink>
                    <a href="#greeting">Home</a>
                </NavLink>
                <NavLink>
                    <a href="#skills">Skills</a>
                </NavLink>
                <NavLink>
                    <a href="#project">Projects</a>
                </NavLink>
                <NavLink>
                    <a href="#contactme">Contact Me</a>
                </NavLink>
            </NavLinks>
        </NavBar>
    )
}

export default Header

const NavBar = styled.div`
    width:100%;
    padding:1.2rem 1.2rem;
    background-color: #ffffff;
    position:fixed;
    z-index:100;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const Logo = styled.div`
    a{
        font-weight:300;
        font-size:1.5rem;
        color: #5c1ec7;
        letter-spacing:0.1rem;
        text-decoration:none;
    }

    @media screen and (max-width:768px){
        a{
            font-weight:300;
            font-size:0.8rem;
            color: #5c1ec7;
        }
    }
`
const NavLinks = styled.ul`
    font-size:1rem;
    @media screen and (max-width:768px){
        font-size:0.8rem;
        > * {
            &:first-child{
                display:none;
            }
        }
    }
`

const NavLink = styled.li`
    display:inline;
    font-weight:300;
    padding-left:0.8rem;
    a{
        text-decoration:unset;
        transition:all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94) 0s;
    }
    a:hover{
        box-shadow: 0 4px #5c1ec7;
    }

    @media screen and (max-width:768px){
        padding-left:0.4rem;
        font-size:0.6rem;
    }
`
