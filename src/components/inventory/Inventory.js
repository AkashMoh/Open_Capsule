import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CreateProduct from './CreateProduct'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
}));

function Inventory() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CreateProduct />
        </div>
    )
}

export default Inventory
