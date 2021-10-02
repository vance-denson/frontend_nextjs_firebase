import { makeStyles, Button, Grid, Paper, Typography, List, ListItem } from "@material-ui/core";
import Link from 'next/link';
import ProjectCard from "../../components/projects/ProjectCard";
import ProjectList from "../../components/projects/ProjectList";
import { useEffect } from "react";
import { useState } from "react";
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        justifySelf: "center",
        textAlign: 'center',
    },
    loadingRoot: {
        marginTop: "10%",
        textAlign: "center",
        justifyContent: "center",
        height: "50vh",
    }

}));

const PROJECT_DATA = [
    {
        id: "1",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hBRG_B4KaO79hrI-sJrVbAHaE8%26pid%3DApi&f=1",
        title: "This Website",
        description: "The website you're currently on, my best work! This site was created using NextJS for static site generation and custom Material-UI theming",
        gitHubLink: ""
    },
    {
        id: "2",
        image: "/wp7250087.jpg",
        title: "Java Inventory System",
        description: "A small Java project inventory system created using JavaFX + Scene Builder MVC design pattern.",
        gitHubLink: ""
    },
];

export default function ProjectPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [projectList, setProjectList] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://nextjs-website-01-default-rtdb.firebaseio.com/projects.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                const projectData = []

                for (const key in data) {
                    const project = {
                        id: key,
                        ...data[key]
                    };
                    projectData.push(project);
                }


                setProjectList(projectData);
                setIsLoading(false);
                console.log(projectList);
            })
    }, []);


    if (isLoading) {
        return (
            <div className={classes.loadingRoot}>
                <LinearProgress color="secondary" />
                <Typography>Fetching from Firebase!...</Typography>
            </div>
        );
    }
    return (
        <div className={classes.root}>

            <Typography variant="h5">List of My Projects</Typography>

            <ProjectList projects={projectList} />
        </div>
    )
}