import { makeStyles, Button, Grid, Paper, Typography, List, ListItem } from "@material-ui/core";
import Link from 'next/link';
import ProjectCard from "../../components/projects/ProjectCard";

const useStyles = makeStyles((theme) => ({
    root: {

    },

}));

const SHOP_DATA = [
    {
        id: "1",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hBRG_B4KaO79hrI-sJrVbAHaE8%26pid%3DApi&f=1",
        title: "My Special Egg",
        description: "I love special eggs because they are so special, make sure you own a special egg too.",
        price: "$400.11"
    },
    {
        id: "2",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0UR7Jel9jgoFbtH0jX9fQAHaFA%26pid%3DApi&f=1",
        title: "Sweet Eggs",
        description: "Sweet eggs are so sweet because they love so much, that's what makes them sweet and cost a premium",
        price: "$1,000.12"
    },
];


export default function ShopPage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Typography variant="h5">List Things for Sale</Typography>
            <List>
                {SHOP_DATA.map((shopItem) => {
                    return (
                        <Link href={"/shop/" + shopItem.title}>
                            <ListItem key={shopItem.id}>
                                <ProjectCard title={shopItem.title} description={shopItem.description} image={shopItem.image} />
                            </ListItem>
                        </Link>
                    )
                }
                )}
            </List>
        </div>
    )
}