import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import freelancesvg from '../assets/freelance.svg'


const Greeting = () => {
    return (
        <Container>
            <GreetingInfo
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >

                <GreetingTypeWriter>
                    <Typewriter
                        options={{
                            strings: [`<div>Hello all,<h1 style="color:#6694ff">I'm Abhijeet<h1></div>`],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </GreetingTypeWriter>
                <GreetingBody>
                    <span>
                        A passionate Full Stack Software Developer 🚀 having an experience
                        of building Web with JavaScript / Reactjs / Nodejs and some other
                        cool libraries and frameworks.
                    </span>
                </GreetingBody>
                <GreetingButtonsContainer>
                    <ContactMeButton>
                        <a href="#contactme">Contact Me</a>
                    </ContactMeButton>
                    <ContactMeButton style={{ "paddingLeft": "0.5rem" }}>
                        <a href="https://drive.google.com/file/d/1vnJ_26e1mTgESeoL7h_0NL-hZ7ijaeSs/view?usp=sharing" targer="_blank" rel="noreferrer noopener">See Resume</a>
                    </ContactMeButton>
                </GreetingButtonsContainer>
            </GreetingInfo>
            <GreetingSvg
                initial={{ opacity: 0, x: "50%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={freelancesvg} alt="greeting-img" />
            </GreetingSvg>
        </Container>
    )
}

export default Greeting

const Container = styled.div`
    margin:2rem auto;
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    align-items:center;
    justify-content:center;

    @media screen and (max-width:768px){
        grid-template-columns:repeat(1,minmax(0,1fr));
        grid-template-rows:repeat(2,minmax(0,1fr));
    }
`

const GreetingInfo = styled(motion.div)`
    padding:2rem;
`
const GreetingTypeWriter = styled.div`
    margin:1rem auto;
    height:5rem;
`

const GreetingBody = styled.div`
    span{
        letter-spacing: 0.1rem;
        font-size: 0.8rem;
        text-align: justify;
        word-break: break-word;
    }
`
const GreetingButtonsContainer = styled.div`
    display:flex;
    justify-content:flex-start;
`

const ContactMeButton = styled.div`
    margin:1rem 0 0 0;
    a{
        width:8rem;
        height:auto;
        border:1px solid #5c1ec7;
        background-color:#e6edff;
        color:#5c1ec7;
        padding:0.8rem;
        letter-spacing:0.15rem;
        font-size:0.8rem;
        border-radius:0.25rem;
        text-decoration:none;
        :hover{
            cursor:pointer;
        }
    }
`

const GreetingSvg = styled(motion.div)`
    padding:2rem;
    img{
        width:80%;
    }
     @media screen and (max-width:768px){
        img{
            width:100%;
        }
    }
`
