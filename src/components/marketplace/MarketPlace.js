import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
}));

function Marketplace() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>MarketPlace</h3>
        </div>
    )
}

export default Marketplace

