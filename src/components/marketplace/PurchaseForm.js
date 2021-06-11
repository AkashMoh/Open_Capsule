import { React, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    newUnit: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing(1),
    },
    xtraMargin: {
        marginRight: theme.spacing(1),
    }
  }));

const initialValues = {
    quantity: "",
};

export default function PurchaseForm(props) {
    const classes = useStyles();

    const [formInput, setFormInput] = useState(initialValues.quantity);

    const handleFormChange = (event) => {

        const { name, value } = event.target;
        setFormInput({...formInput, [name]: value,});
    
    };
  
    return (
        <div className={classes.newUnit}>
            <TextField className={classes.xtraMargin}
            label="Quantity"
            id="outlined-size-small"
            value={formInput.quantity}
            onChange={handleFormChange}
            name="quantity"
            variant="outlined"
            size="small" 
            />
            
            <Button 
            variant="outlined"
            size="medium"
            color="primary"
            //className={classes.margin}
            onClick={() => {console.log(formInput.quantity)}}
            >
            BUY
            </Button> 
        </div>
     );
  }
  