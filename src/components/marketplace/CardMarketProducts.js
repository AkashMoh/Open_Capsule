import React,{ useState, useEffect, useContext, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchAllProducts } from '../../services/productService';
import PurchaseForm from './PurchaseForm'
import { AddressContext } from '../sidebar/Sidebar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(4),
    maxWidth: '340px',
    minWidth: '330px',
  },
  newUnit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
  },
  extraPadding: {
    paddingTop: theme.spacing(4),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  
}));

function CardMarketProducts() {
  const classes = useStyles();
  const [ products, setProducts ] = useState([]);
  const addressGlobal = useContext(AddressContext)

  const getProducts = useCallback(async() => {
    fetchAllProducts(addressGlobal).then(result => {
      //console.log("marketData"+result)
      setProducts(result)
      }
    ) 
  })

  useEffect(() => {
    getProducts()
  },[addressGlobal]); 

  return(
      <React.Fragment>
          {products? products.map(prod => {
              
              return <div key={prod._id}>
                <Card className={classes.root} variant="outlined">
            
                 <CardContent className={classes.content}>
                   <Typography variant="h6" color="textPrimary">
                     {prod.product_name}
                   </Typography>
                   <Typography variant="caption" color="textSecondary">
                     Product code: <Typography variant="caption" color="textPrimary">{prod.product_code}</Typography>
                   </Typography>
                   <Typography variant="body2" color="textPrimary">
                     {prod.company_name}
                   </Typography>
                   <Typography variant="caption" color="textSecondary">
                     {prod.company_address}
                   </Typography>
                   <Typography variant="caption" color="textSecondary">
                     Price : <Typography variant="caption" color="textPrimary">{prod.price}</Typography>
                   </Typography>
                   <Typography variant="caption" color="textSecondary">
                     Units: <Typography variant="caption" color="textPrimary">{prod.unit_start}</Typography> to <Typography variant="caption" color="textPrimary">{prod.unit_end}</Typography>
                   </Typography>
                   <Typography variant="caption" color="textSecondary">
                     Hash Details: {prod.hash_details}
                   </Typography>
                   <div className={classes.newUnit}>
                     <PurchaseForm props={prod}/>
                   </div>
                 </CardContent>
         </Card>
       </div> 
          }): <CircularProgress />}
      </React.Fragment>
  )  
}

export default React.memo(CardMarketProducts)

