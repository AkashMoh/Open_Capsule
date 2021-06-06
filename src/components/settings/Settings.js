import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
}));

function Settings() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>Settings</h3>
        </div>
    )
}

export default Settings

