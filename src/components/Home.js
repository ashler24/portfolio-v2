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
    grid-template-rows:repeat(4,minmax(0,1fr));
    grid-gap:1rem;
`

const GreetingSection = styled.section`
    padding:8rem 0 0 0;
    @media screen and (max-width:768px){
        padding:4rem 0 0 0;
    }

`

const SkillsSection = styled.section`
    padding:8rem 0 0 0;
    @media screen and (max-width:768px){
        padding:4rem 0 0 0;
    }
`

const ProjectsSection = styled.section`
    padding:8rem 0 0 0;
    @media screen and (max-width:768px){
        padding:4rem 0 0 0;
    }
`

const ContactMeSection = styled.section`
    margin:8rem 0 0 0;
    padding:8rem 0 0 0;
    @media screen and (max-width:768px){
        padding:4rem 0 0 0;
    }
`