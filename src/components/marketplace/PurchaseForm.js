import { React, useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { unitSorter } from '../../helpers/unitSorter'
import { updateProducts } from '../../services/productService'
import { getParticipant } from '../../web3/openCapsuleContract'
import { createProduct } from '../../web3/openCapsuleContract'

import { AddressContext } from '../sidebar/Sidebar'

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

const handleTransaction = async(quantityNeededBuyer, props, addressOfBuyer) => {
    let {newUnitEndofSeller, unitStartBuyer, unitEndBuyer} = await unitSorter(Number(quantityNeededBuyer), props.unit_end)
    let buyerDetails = await getParticipant(addressOfBuyer)
    createProduct(addressOfBuyer, buyerDetails.companyName, props.product_code, props.product_name, props.price, unitStartBuyer, unitEndBuyer, () => {
        updateProducts(props._id, newUnitEndofSeller)
    })
}

export default function PurchaseForm(props) {
    const classes = useStyles();

    const [formInput, setFormInput] = useState(initialValues.quantity);

    const addressOfBuyer = useContext(AddressContext)

    const handleFormChange = (event) => {

        const { name, value } = event.target;
        setFormInput({...formInput, [name]: value,});
    
    };
  
    return (
        <div className={classes.newUnit}>
            <TextField className={classes.xtraMargin}
            label="Quantity"
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
            onClick={() => handleTransaction(formInput.quantity, props.props, addressOfBuyer)}
            >
            BUY
            </Button> 
        </div>
     );
  }
  