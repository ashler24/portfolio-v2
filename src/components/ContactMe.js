import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

const ContactMe = () => {
    let gitHubUrl = "https://github.com/ashler24";
    let linkedInUrl = "https://www.linkedin.com/in/abhijeet-pawar-b96237130/";
    let twitterUrl = "https://twitter.com/pawar2467";
    return (
        <Container>
            <ContactMeTitle>
                <h1>Contact Me</h1>
            </ContactMeTitle>
            <SocialMediaContainer>
                <a href={twitterUrl} target="_blank" rel="noreferrer"> <TwitterIcon /></a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a href={gitHubUrl} target="_blank" rel="noreferrer"><GitHubIcon /></a>
            </SocialMediaContainer>
            <ContactMeQuote>
                <span>Made with <FavoriteTwoToneIcon /> by Abhijeet</span>
            </ContactMeQuote>
        </Container>
    )
}

export default ContactMe

const Container = styled.div`
    background-color:#e6edff;
    margin:0 -8rem;
    height:25rem;
    padding:3rem 0;
    display:grid;
    grid-template-rows:repeat(3, minmax(0,0.3fr));
    grid-gap:0.2rem;
    justify-content:center;
    align-items:center;
    @media screen and (max-width:768px){
        margin:0;
        padding:0;
        grid-gap:0;
    }
`
const ContactMeTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:1rem;
    color:#5c1ec7;
    font-weight:300;
`

const SocialMediaContainer = styled.div`
    height:5rem;
    background-color:#ffffff;
    border-radius: 0.75rem;
    box-shadow:0 6px 20px rgba(0,0,0,0.1);
    display:grid;
    grid-template-columns:repeat(3, minmax(0,1fr));
    justify-content:center;
    align-items:center;
    place-items:center;
    a > *{
        margin:1.5rem;
        color:#5c1ec7;
        font-size:1.8rem;
    }

    @media screen and (max-width:768px){
        a > *{
            margin:0;
            color:#5c1ec7;
        }
    }

`

const ContactMeQuote = styled.div`
    display:flex;
    align-items:center;
    span{
       text-transform:uppercase;
       letter-spacing:0.5rem;
    }
    @media screen and (max-width:768px){
        span{
            text-transform:uppercase;
            letter-spacing:0.3rem;
        }
    }
`