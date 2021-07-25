import { React, useState, useContext, useEffect } from 'react'
import { Container, Paper, Grid, makeStyles, Typography } from '@material-ui/core';
import DashCard from './DashCard'
import Recent from './Recent'
import Piechart from './Piechart'
import { fetchDashboard } from '../../services/dashboardService'


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
  },
  pieContainer: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  }
}));




function Dashboard() {
    const classes = useStyles();

    const addressGlobal = useContext(AddressContext)

    //const dashboardData = useContext(DashboardContext)
    //console.log(dashboardData)

    const [dashBoardData, setDashBoardData] = useState(null)

    //get dashboard data
    useEffect(() => {
      async function getDashboardData() {
          await fetchDashboard(addressGlobal).then(result => {
              
                  setDashBoardData(result)
              }
          ) 
      }
      getDashboardData()
      //console.log(dashBoardData)
      
    }, [addressGlobal])

    return (
      
        <Container className={classes.container}>

          <Paper className={classes.container} variant="outlined">

          <Typography color="textSecondary" variant="h6" className={classes.setMargin}>Dashboard</Typography>
          
          <Grid container spacing={4}>
            {dashBoardData && <DashCard name={'Sales'} dashBoardData={dashBoardData.sales}/>}
            {dashBoardData && <DashCard name={'Expense'} dashBoardData={dashBoardData.expense}/>}
            {dashBoardData && <DashCard name={'Orders'} dashBoardData={dashBoardData.orders}/>}
            {dashBoardData && <DashCard name={'Returns'} dashBoardData={dashBoardData.returns}/>}
            
            <Grid item xs={12} md={4}>
              <Paper variant="outlined" >
                <Typography color="textSecondary" variant="subtitle2" className={classes.pieContainer}>Inventory Status</Typography>
                <Piechart />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8}>
              <Recent />
            </Grid>

          </Grid>

          </Paper>

        </Container>
             
    )
}

export default Dashboard
