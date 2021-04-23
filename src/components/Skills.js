import React from 'react'
import styled from 'styled-components'
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { DiMongodb, DiJavascript1, DiDocker, DiJava } from 'react-icons/di'
import { SiSpring } from 'react-icons/si'
import { AiOutlineHtml5 } from 'react-icons/ai'
import skillssvg from '../assets/skills.svg'

const Skills = () => {
    return (
        <Container>
            <SkillsSvg>
                <img src={skillssvg} alt="skills-img" />
            </SkillsSvg>
            <SkillsInfo>
                <SkillsTitle>
                    <span>My skills include</span>
                </SkillsTitle>
                <SkillsIconContainer>
                    <span>
                        <span>
                            <FaReact />
                        </span>
                        <span>
                            React JS
                        </span>
                    </span>
                    <span>
                        <span>
                            <FaNodeJs />
                        </span>
                        <span>
                            Node JS
                        </span>
                    </span>
                    <span>
                        <span>
                            <DiMongodb />
                        </span>
                        <span>
                            MongoDB
                        </span>
                    </span>
                    <span>
                        <span>
                            <AiOutlineHtml5 />
                        </span>
                        <span>
                            HTML5
                        </span>
                    </span>
                    <span>
                        <span>
                            <FaCss3Alt />
                        </span>
                        <span>
                            CSS3
                        </span>
                    </span>
                    <span>
                        <span>
                            <DiJavascript1 />
                        </span>
                        <span>
                            Javascript
                        </span>
                    </span>
                    <span>
                        <span>
                            <DiDocker />
                        </span>
                        <span>
                            Docker
                        </span>
                    </span>
                    <span>
                        <span>
                            <DiJava />
                        </span>
                        <span>
                            Java 8
                        </span>
                    </span>
                    <span>
                        <span>
                            <SiSpring />
                        </span>
                        <span>
                            Spring MVC
                        </span>
                    </span>
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
    display:flex;
    position:relative;
    z-index:5;
`
const SkillsTitle = styled.div`
    display:flex;
    position:absolute;
    z-index:-1;
    top:-1rem;
    transform: translateX(-4%);
    width:90%;
    height:4rem;
    padding:1rem;
    background: rgb(144,144,255);
    color:#ffffff;
    font-weight:700;
    letter-spacing:0.08rem;
    border-radius:0.75rem;
    background: linear-gradient(90deg, rgba(144,144,255,1) 39%, rgba(0,212,255,0.8762446657183499) 100%);
    span{
        transform: translate(4%,-21%);
        padding: 0.4rem 0;
    }

    @media screen and (max-width:768px){
        transform: translateX(-5%);
        width:85%;
        height:4rem;
    }
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

    span{
        display: flex;
        flex-direction: column;
        align-items: center;

        &:last-child{
            font-size:0.8rem;
            letter-spacing:0.05rem;
            box-shadow:0 2px #83a3ef;
        }
    }

    svg{
        font-size:2.5rem;
        color:#80a6ff;
        font-weight:300;
    }

    @media screen and (max-width:768px){
        svg{
            font-size:2rem;
            color:#80a6ff;
            font-weight:300;
        }
    }
`


