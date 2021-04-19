import React from 'react'
import styled from 'styled-components'
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { DiMongodb, DiJavascript1, DiDocker } from 'react-icons/di'
import { AiOutlineHtml5} from 'react-icons/ai'
import skillssvg from '../assets/skills.svg'

const Skills = () => {
    return (
        <Container>
            <SkillsSvg>
                <img src={skillssvg} alt="skills-img" />
            </SkillsSvg>
            <SkillsInfo>
                <SkillsIconContainer>
                    <FaReact />
                    <FaNodeJs />
                    <DiMongodb />
                    <AiOutlineHtml5 />
                    <FaCss3Alt />
                    <DiJavascript1 />
                    <DiDocker />
                </SkillsIconContainer>
            </SkillsInfo>
        </Container>
    )
}

export default Skills

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

const SkillsSvg = styled.div`
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

const SkillsInfo = styled.div`
    padding:2rem;
    width:100%;
    height:100%;
`

const SkillsIconContainer = styled.div`
    background-color:#ffffff;
    width:100%;
    height:100%;
    margin:0 auto;
    padding:2rem 1rem;
    box-shadow: 0 6px 20px rgba(0,0,0,0.07);
    border-radius:0.75rem;
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    grid-template-rows:repeat(3,minmax(0,1fr));
    grid-gap:1rem;
    place-items:center;

    svg{
        font-size:3rem;
        color:#80a6ff;
        font-weight:300;
    }
`

