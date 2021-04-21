import React from 'react'
import styled from 'styled-components'
import { projectDetails } from '../shared/projectDetails'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Projects = () => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 600,
        },
        media: {
            height: 250,
            maxHeight:300,
            backgroundSize: "contain",
            backgroundPosition: "top",
        },
    });
    const classes = useStyles();

    return (
        <Container>
            {projectDetails.map(proj => (
                <ProjectContainer key={proj.title}>
                    <Project>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={proj.img}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {proj.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {proj.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button variant="outlined" color="primary" href={proj.link} target="_blank" rel="noopener noreferrer">
                                    Visit<ArrowForwardIosIcon />
                                </Button>
                            </CardActions>
                        </Card>
                    </Project>
                </ProjectContainer>
            ))}
        </Container>
    )
}

export default Projects

const Container = styled.div`
    margin:2rem auto;
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    align-items:center;
    justify-content:center;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    border-radius: 0.75rem;
    padding: 2rem;
    box-shadow: 0 4px 15px rgb(0 0 0 / 15%);

    @media screen and (max-width:768px){
        grid-template-columns:repeat(1,minmax(0,1fr));
        grid-template-rows:repeat(2,minmax(0,1fr));
    }
`

const ProjectContainer = styled.div`
    padding:2rem;
`
const Project = styled.div`
`