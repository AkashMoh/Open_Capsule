import { React, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Timeline from '@material-ui/lab/Timeline';

import BasicTimeline from './Timeline';
import { fetchHistory } from '../../services/trackingService';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        flexWrap: 'wrap',
    },
    xtraMargin: {
        marginRight: theme.spacing(1),
    }
}));

const initialValues = {
    productCode: "",
    productId: "",
};

function Analytics() {

    const classes = useStyles();

    const [formInput, setFormInput] = useState(initialValues);

    const [showTimeLine, setTimeLine] = useState(false);

    const [productCode, setProductCode] = useState("")

    const handleFormChange = (event) => {

        const { name, value } = event.target;
        setFormInput({...formInput, [name]: value,});
    
    };

    let historyData = [];

    const handleHistory = async(product_code) => {
        setTimeLine(false)
        setProductCode(product_code)
        //historyData = await fetchHistory(product_code)
        setTimeLine(true)
        //console.log(historyData)
    }

    return (
        <div className={classes.root}>
            <h3>Analytics</h3>
            <Paper className={classes.root} variant="outlined">
                <div className={classes.container}>
                    <TextField className={classes.xtraMargin}
                        label="Product Code"
                        id="outlined-size-small"
                        value={formInput.productCode}
                        onChange={handleFormChange}
                        name="productCode"
                        variant="outlined"
                        size="small" 
                    />

                    <Button 
                        variant="outlined"
                        size="medium"
                        color="primary"
                        onClick={() => handleHistory(formInput.productCode)}
                        >
                        TRACK
                    </Button>
                </div>
                <div>
                    {showTimeLine? 
                    <Timeline align="left">
                        <BasicTimeline productCode={productCode}/>
                    </Timeline> : null}
                </div>
            </Paper>
        </div>
    )
}

export default Analytics

