import { React, useContext } from 'react'
import { Container, Paper, Grid, makeStyles, Typography } from '@material-ui/core';
import DashCard from './DashCard'

import { AddressContext } from '../sidebar/Sidebar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(4),
  },
  piechart: {
    padding: theme.spacing(1),
    textAlign: 'center',
    maxWidth:'20em',
  },
  setMargin: {
    marginBottom: theme.spacing(2),
}
}));


function Dashboard() {
    const classes = useStyles();

    const addressGlobal = useContext(AddressContext)

    return (
      
        <Container className={classes.container}>

          <Paper className={classes.container} variant="outlined">

          <Typography color="textSecondary" variant="h6" className={classes.setMargin}>Dashboard</Typography>
          
          <Grid container spacing={4}>
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            
            <Grid item xs={4}>
              <Paper className={classes.piechart} >
                
              </Paper>
            </Grid>

          </Grid>

          </Paper>

        </Container>
             
    )
}

export default Dashboard
