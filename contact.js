import { Divider, makeStyles, Button, Grid, Paper, Typography } from "@material-ui/core";
import ContactForm from "../../components/contact/ContactForm";
import BackdropFlash from "../../components/ui/BackdropFlash";
import { useRouter } from "next/router";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1%",
        height: ""
    },
    form: {
        "&>*": {
            margin: theme.spacing(1)
        },
    },

}));


export default function ContactPage() {

    const classes = useStyles();
    const router = useRouter();

    function submitHandler(contactData) {

        function handleContactSubmit() {
            <BackdropFlash text="Thank you! We'll be in touch shortly." />
        }

        fetch("https://nextjs-website-01-default-rtdb.firebaseio.com/contacts.json",
            {
                method: 'POST',
                body: JSON.stringify(contactData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            router.push('/');
        })
    };

    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">Enter your information below to contact our team about customization.</Typography>
            <ContactForm submitContactInformation={submitHandler} />
        </div>
    )
}