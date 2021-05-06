import React from 'react'
import CreateParticipantAccordion from './CreateParticipantAccordion';
import ParticipantCard from './CardParticipant';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
    setMargin: {
        marginTop: theme.spacing(4),
    }
}));


function Admin() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            
            <CreateParticipantAccordion />
            
            <Typography className={classes.setMargin} color="textSecondary" variant="h6">Participants </Typography>
            
            <ParticipantCard />
            
        </div>
    )

}

export default Admin