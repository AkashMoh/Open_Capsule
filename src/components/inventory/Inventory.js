import { React } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CreateProduct from './CreateProduct'
import ProductCard  from './CardProducts'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: theme.spacing(-4),
    },
    setMargin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(-2),
    }
}));

function Inventory() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.root} variant="outlined">
                <CreateProduct />
                <Typography className={classes.setMargin} color="textSecondary" variant="h6">Inventory</Typography>
                <div className={classes.container}>
                    <ProductCard />
                </div>
            </Paper>
        </div>
    )
}

export default Inventory
