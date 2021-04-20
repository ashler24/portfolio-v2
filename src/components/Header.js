import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <NavBar>
            <Logo>
                <span>{"<abhijeet pawar/>"}</span>
            </Logo>
            <NavLinks>
                <NavLink>
                    <a href="#greeting-section">Home</a>
                </NavLink>
                <NavLink>
                    <a href="#skills-section">Skills</a>
                </NavLink>
                <NavLink>
                    <a href="#project-section">Projects</a>
                </NavLink>
                <NavLink>
                    <a href="#contactme-section">Contact Me</a>
                </NavLink>
            </NavLinks>
        </NavBar>
    )
}

export default Header

const NavBar = styled.div`
    width:100%;
    padding:1.2rem 1.2rem;
    background-color: #e6edff;
    position:fixed;
    box-shadow: 0 6px 20px rgba(93,93,93,0.23);
    z-index:5;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const Logo = styled.div`
    span{
        font-weight:300;
        font-size:1.5rem;
        color: #5c1ec7;
        letter-spacing:0.1rem;
    }

    @media screen and (max-width:768px){
        span{
            font-weight:300;
            font-size:1rem;
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
    }
`
