import React from 'react'
import { Container, Paper, Grid, makeStyles, Typography, Button, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
      maxWidth:'15em ',
    },
    button: {
      height: '2em',
    },
    typography: {
      color: 'rgb(76,175,80)',
      backgroundColor: 'rgb(212, 255, 214, 0.5)',
      borderRadius: '5px',
      maxWidth: '5em'
    },

}));

function DashCard() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
          <Grid item xs={6} md={3}>
              <Paper className={classes.paper} variant="outlined">
                <Grid container >
                  <Grid item xs={5}>
                    <Typography variant="h6" gutterBottom="true">
                      Sales
                    </Typography>
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={5}>
                  <React.Fragment>
                    <Button className={classes.button} variant="outlined" size="small" color="primary" onClick={handleClick}>
                      Today
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Today</MenuItem>
                      <MenuItem onClick={handleClose}>Month</MenuItem>
                      <MenuItem onClick={handleClose}>Year</MenuItem>
                    </Menu>
                  </React.Fragment>
                  </Grid>
                  <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom="true">
                    $72,187
                  </Typography>
                  </Grid>
                  <Grid item xs={4}>
                  <Typography className={classes.typography} variant="body2" gutterBottom="true" color="textPrimary">
                    +120.1 %
                  </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="caption" display="block" color='textSecondary'>
                      Since last week 
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>  
        </>
    )
}

export default DashCard
