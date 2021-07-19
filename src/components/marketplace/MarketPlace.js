import { React } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CardMarketProducts from './CardMarketProducts'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(-2),
        marginLeft: theme.spacing(-4),
        flexWrap: 'wrap',
    },
}));

function MarketPlace() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.root} variant="outlined">
                <Typography color="textSecondary" variant="h6" >Marketplace</Typography>
                <div className={classes.container}>
                    <CardMarketProducts />
                </div>
            </Paper>
        </div>
    )
}

export default MarketPlace

