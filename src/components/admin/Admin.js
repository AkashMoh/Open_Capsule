import React, {Suspense, lazy} from 'react'
import CreateParticipantAccordion from './CreateParticipantAccordion';
import { ParticipantCard } from './CardParticipant';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
//import MyErrorBoundary from './MyErrorBoundary';

//const ParticipantCard = lazy(() => import(('./CardParticipant')))

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
    setMargin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(-2),
    }
}));


function Admin() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.root} variant="outlined">
            
                <CreateParticipantAccordion />
                
                <Typography className={classes.setMargin} color="textSecondary" variant="h6">Participants </Typography>
                
                {/*<Suspense fallback = {<div>Loading...</div>}>*/}
                    <ParticipantCard />
                {/*</Suspense>*/}
                
            
            </Paper>
        </div>
    )

}

export default Admin