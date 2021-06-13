import { React, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { unitSorter } from '../../helpers/unitSorter'
import { updateProducts } from '../../services/productService'

import { getParticipant } from '../../web3/openCapsuleContract'

import { walletFinder } from '../../web3/walletFinder'

import { createProduct } from '../../web3/openCapsuleContract'

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
// async function get() {
//     let addresss = await walletFinder()    
//     let getP = getParticipant(addresss)
//     console.log(getP)
// }
// get()


const handleTransaction = async(quantityNeededBuyer, props) => {
    let {newUnitEndofSeller, unitStartBuyer, unitEndBuyer} = await unitSorter(Number(quantityNeededBuyer), props.unit_end)
    let addressOfBuyer = await walletFinder()    
    let buyerDetails = await getParticipant(addressOfBuyer)
    createProduct(addressOfBuyer, buyerDetails.companyName, props.product_code, props.product_name, props.price, unitStartBuyer, unitEndBuyer)
    updateProducts(props._id, newUnitEndofSeller)
    
    console.log(unitStartBuyer)
    console.log(newUnitEndofSeller, unitStartBuyer, unitEndBuyer)
    // console.log(buyerDetails.companyName)
    // console.log(addressOfBuyer)
    // console.log(buyerDetails)
}


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
            onClick={() => handleTransaction(formInput.quantity, props.props)}
            >
            BUY
            </Button> 
        </div>
     );
  }
  