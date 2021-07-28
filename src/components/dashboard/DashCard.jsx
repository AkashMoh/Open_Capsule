import React, { useState } from 'react'
import { Paper, Grid, makeStyles, Typography, Button, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
      maxWidth:'14em ',
      minWidth:'12em ',
    },
    button: {
      height: '2em',
    },
    typography: {
      color: 'rgb(76,175,80)',
      backgroundColor: 'rgb(212, 255, 214, 0.5)',
      borderRadius: '5px',
      maxWidth: '5em',
    },

}));

function DashCard({name, dashBoardData}) {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null)

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = [
      'Today',
      'Month',
      'Year',
    ]

    const subOptions = [
      'day',
      'month',
      'year',
    ]

    return (
        <>
          <Grid item xs={6} md={3}>
              <Paper className={classes.paper} variant="outlined">
                <Grid container >
                  <Grid item xs={5}>
                    <Typography variant="h6" gutterBottom={true} color="textSecondary">
                      { name }
                    </Typography>
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={5}>
                  <React.Fragment>
                    <Button className={classes.button} variant="outlined" size="small" color="primary" onClick={handleClick}>
                      { options[selectedIndex] }
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                  </Grid>
                  <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom={true} noWrap={true}>
                    ${dashBoardData[options[selectedIndex].toLowerCase()]}
                  </Typography>
                  </Grid>
                  <Grid item xs={4}>
                  <Typography className={classes.typography} variant="body2" gutterBottom={true} color="textSecondary">
                    +120.1 %
                  </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="caption" display="block" color='textSecondary'>
                      Since last {subOptions[selectedIndex]}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>  
        </>
    )
}

export default DashCard
