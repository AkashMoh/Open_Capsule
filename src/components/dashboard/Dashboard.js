import { React, useContext } from 'react'
import { Container, Paper, Grid, makeStyles, Typography, Button, Menu, MenuItem } from '@material-ui/core';
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
  }
}));


function Dashboard() {
    const classes = useStyles();

    const addressGlobal = useContext(AddressContext)

    return (
      
        <Container className={classes.container}>

          <Paper className={classes.container} variant="outlined">

          <Typography variant="h4" gutterBottom="true" >Dashboard</Typography>
          
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
