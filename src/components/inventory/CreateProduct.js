import  {React, useState } from 'react'
import Button from '@material-ui/core/Button';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { createProduct } from '../../web3/openCapsuleContract';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '50%',
            margin: theme.spacing(2)
    }},
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {  
        width: '50%',    
      padding: theme.spacing(2, 4, 3),
    },
    margin: {
        margin: theme.spacing(1),
    },
  }));

const initialValues = {
    company_address: "",
    company_name: "",
    product_code: "",
    product_name: "",
    price: "",
    unit_start: "",
    unit_end: "",
};

export default function CreateProduct() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        resetForm();
    };

    const [formInput, setFormInput] = useState(initialValues);

    const handleFormChange = (event) => {

        const { name, value } = event.target;
        setFormInput({...formInput, [name]: value,});
    
    };

    const resetForm = () => {
        //console.log(formInput);
        setFormInput(initialValues);
    };

    return (
        <div>
            <Button 
                variant="outlined"
                size="medium"
                color="primary"
                startIcon={<AddCircleOutlineRoundedIcon />}
                onClick={handleOpen}
                >
                Create Product
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper className={classes.paper}>
                        <h2 id="transition-modal-title">Create Product</h2>
                        
                        <form className={classes.root} autoComplete="off">
                            <Grid container>
                                <Grid item sm={12} align="center" >
                            
                                <TextField 
                                    label="Company address"
                                    id="outlined-size-small"
                                    value={formInput.company_address}
                                    onChange={handleFormChange}
                                    name="company_address"
                                    variant="outlined"
                                    size="small" 
                                />
                                <TextField 
                                    label="Company Name"
                                    id="outlined-size-small"
                                    value={formInput.company_name}
                                    onChange={handleFormChange}
                                    name="company_name"
                                    variant="outlined"
                                    size="small" 
                                />
                                
                                <TextField 
                                    label="Product Code"
                                    id="outlined-size-small"
                                    value={formInput.product_code}
                                    onChange={handleFormChange}
                                    name="product_code"
                                    variant="outlined"
                                    size="small" 
                                />

                                <TextField 
                                    label="Product Name"
                                    id="outlined-size-small"
                                    value={formInput.product_name}
                                    onChange={handleFormChange}
                                    name="product_name"
                                    variant="outlined"
                                    size="small" 
                                />

                                <TextField 
                                    label="Price"
                                    id="outlined-size-small"
                                    value={formInput.price}
                                    onChange={handleFormChange}
                                    name="price"
                                    variant="outlined"
                                    size="small" 
                                />

                                <TextField 
                                    label="Unit Start"
                                    id="outlined-size-small"
                                    value={formInput.unit_start}
                                    onChange={handleFormChange}
                                    name="unit_start"
                                    variant="outlined"
                                    size="small" 
                                />

                                <TextField 
                                    label="Unit End"
                                    id="outlined-size-small"
                                    value={formInput.unit_end}
                                    onChange={handleFormChange}
                                    name="unit_end"
                                    variant="outlined"
                                    size="small" 
                                />
                                
                                <Grid item sm={4} xs={4} align='center'>
                                    <Button 
                                        variant="contained" 
                                        size="medium" 
                                        color="primary" 
                                        className={classes.margin}
                                        //onClick={getParticipant}
                                        onClick={() => {
                                            createProduct(
                                                formInput.company_address, 
                                                formInput.company_name, 
                                                formInput.product_code,
                                                formInput.product_name,
                                                formInput.price, 
                                                formInput.unit_start, 
                                                formInput.unit_end, )
                                            }
                                        }
                                        >
                                    Create
                                    </Button>
                                    <Button 
                                        variant="outlined"
                                        size="medium"
                                        color="primary"
                                        className={classes.margin}
                                        onClick={handleClose}>
                                    Cancel
                                    </Button>
                                </Grid>   

                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    )
}


