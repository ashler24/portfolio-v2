import React from 'react'
import styled from 'styled-components'
import ContactMe from './ContactMe'
import Greeting from './Greeting'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
    return (
        <Container>
            <GreetingSection id="greeting">
                <Greeting />
            </GreetingSection>
            <SkillsSection id="skills">
                <Skills />
            </SkillsSection>
            <ProjectsSection id="project">
                <ProjectTitle>Projects</ProjectTitle>

                <Projects />
            </ProjectsSection>
            <ContactMeSection id="contactme">
                <ContactMe />
            </ContactMeSection>
        </Container>
    )
}

export default Home


const Container = styled.div`
    max-width:1200px;
    margin:0 auto;
    padding:0;
    display:grid;
    grid-template-rows:auto;
    grid-gap:1rem;
`

const GreetingSection = styled.section`
    padding:8rem 0 0 0;
    @media screen and (max-width:768px){
        padding:2rem 0 0 0;
    }

`

const SkillsSection = styled.section`
    padding:10rem 0 0 0;
    @media screen and (max-width:768px){
        padding:1rem 0 0 0;
    }
`

const ProjectsSection = styled.section`
    padding:6rem 5rem 0;
    @media screen and (max-width:768px){
        padding:1rem 0 0 0;
    }
`
const ProjectTitle = styled.div`
    text-align:center;
    border-radius:0.75rem;
    box-shadow:0 4px 10px 0 rgba(0,0,0,0.12);
    padding:1.2rem;
    font-size:1.7rem;
    font-weight:700;
    letter-spacing:0.15rem;
    background: -webkit-linear-gradient(90deg, rgba(144,144,255,1) 39%, rgba(0,212,255,0.8762446657183499) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ContactMeSection = styled.section`
    padding:4rem 0 0 0;
    @media screen and (max-width:768px){
        padding:2rem 0 0 0;
    }
`