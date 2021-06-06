import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
}));

function Analytics() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>Analytics</h3>
        </div>
    )
}

export default Analytics

