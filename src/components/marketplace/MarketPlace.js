import { React, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

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
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(4),
        flexWrap: 'wrap',
    },
}));

function MarketPlace() {

    const classes = useStyles();

    // const [currentAddress, setCurrentAddress] = useState(window.web3.currentProvider.selectedAddress);

    // console.log(window.web3.currentProvider.selectedAddress)
    // console.log(currentAddress)

    // window.ethereum.on('accountsChanged', function (accounts) {
    //     setCurrentAddress(accounts[0]);
    //     //console.log(accounts[0])
    // })

    return (
        <div className={classes.root}>
            <h3>MarketPlace</h3>
            <Paper className={classes.container} variant="outlined">
                <CardMarketProducts />
            </Paper>
        </div>
    )
}

export default MarketPlace

