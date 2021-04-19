import React from 'react'
import styled from 'styled-components'
import Greeting from './Greeting'
import Skills from './Skills'

const Home = () => {
    return (
        <Container>
            <GreetingSection>
                <Greeting />
            </GreetingSection>
            <SkillsSection>
                <Skills />
            </SkillsSection>
            <ProjectsSection>

            </ProjectsSection>
            <ContactMeSection>

            </ContactMeSection>
        </Container>
    )
}

export default Home


const Container = styled.div`
    max-width:1200px;
    margin:0 auto;
    padding:2rem 0;
    display:grid;
    grid-template-rows:repeat(4,minmax(0,1fr));
    grid-gap:5rem;
`

const GreetingSection = styled.section`
    margin:4rem 0 0 0;
`

const SkillsSection = styled.section`

`

const ProjectsSection = styled.section`

`

const ContactMeSection = styled.section`

`