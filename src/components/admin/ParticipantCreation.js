import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, MenuItem, } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { createParticipant } from '../../web3/openCapsuleContract';
import { createDashboard } from '../../services/dashboardService';

import { AddressContext } from '../sidebar/Sidebar'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(2)
        }},

    margin: {
        margin: theme.spacing(1),
    },
}))

const roles = [
    {
      value: 'manufacturer',
      label: 'Manufacturer',
    },
    {
      value: 'distributor',
      label: 'Distributor',
    },
    {
      value: 'reseller',
      label: 'Reseller',
    },
  ];

const initialValues = {
    company_name: "",
    wallet_address: "",
    role: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    state: "",
};

export default function ParticipantCreation() {
    const classes = useStyles();

    const [formInput, setFormInput] = useState(initialValues);

    const currentAddress = useContext(AddressContext)

    const handleFormChange = (event) => {

        const { name, value } = event.target;
        setFormInput({...formInput, [name]: value,});
    
    };

    const resetForm = () => {
        //console.log(formInput);
        setFormInput(initialValues);
    };

    const handleParticipantBirth = () => {
        createParticipant(
            currentAddress,
            formInput.company_name, 
            formInput.wallet_address, 
            formInput.role,
            formInput.phone,
            formInput.email, 
            formInput.address, 
            formInput.country, 
            formInput.state, );
        createDashboard(formInput.wallet_address)
    }

  return (

            <form className={classes.root} autoComplete="off">
                <Grid container>
                    <Grid item sm={12} align="center" >
                
                    <TextField 
                        label="Name of the company"
                        id="outlined-size-small"
                        value={formInput.company_name}
                        onChange={handleFormChange}
                        name="company_name"
                        variant="outlined"
                        size="small" 
                    />
                    <TextField 
                        label="Wallet address"
                        id="outlined-size-small"
                        value={formInput.wallet_address}
                        onChange={handleFormChange}
                        name="wallet_address"
                        variant="outlined"
                        size="small" 
                    />

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Role"
                        value={formInput.role}
                        onChange={handleFormChange}
                        name="role"
                        variant="outlined"
                        size="small"
                        >
                        {roles.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    
                    <TextField 
                        label="Phone"
                        id="outlined-size-small"
                        value={formInput.phone}
                        onChange={handleFormChange}
                        name="phone"
                        variant="outlined"
                        size="small" 
                    />

                    <TextField 
                        label="Email"
                        id="outlined-size-small"
                        value={formInput.email}
                        onChange={handleFormChange}
                        name="email"
                        variant="outlined"
                        size="small" 
                    />

                    <TextField 
                        label="Address"
                        id="outlined-size-small"
                        value={formInput.address}
                        onChange={handleFormChange}
                        name="address"
                        variant="outlined"
                        size="small" 
                    />

                    <TextField 
                        label="Country"
                        id="outlined-size-small"
                        value={formInput.country}
                        onChange={handleFormChange}
                        name="country"
                        variant="outlined"
                        size="small" 
                    />

                    <TextField 
                        label="State"
                        id="outlined-size-small"
                        value={formInput.state}
                        onChange={handleFormChange}
                        name="state"
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
                            onClick={handleParticipantBirth}
                            >
                        Create
                        </Button>
                        <Button 
                            variant="outlined"
                            size="medium"
                            color="primary"
                            className={classes.margin}
                            onClick={resetForm}>
                        Cancel
                        </Button>
                    </Grid>   

                    </Grid>
                </Grid>
            </form>
        
  );
}