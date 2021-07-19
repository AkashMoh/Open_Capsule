import React,{ useState, useEffect, useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchProducts } from '../../services/productService';

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
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  playIcon: {
    height: 12,
    width: 12,
  },
}));

function ProductCard() {
  
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const addressGlobal = useContext(AddressContext)

  useEffect(() => {
    async function getProducts() {
      fetchProducts(addressGlobal).then(result => {
        console.log(result)
        setProducts(result)
        }
      )
    }
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
                   <TextField 
                     label="Quantity"
                     id="outlined-size-small"
                     //value={formInput.company_name}
                     //onChange={handleFormChange}
                     name="company_name"
                     variant="outlined"
                     size="small" 
                   />
                   <Button 
                     variant="outlined"
                     size="medium"
                     color="primary"
                     //className={classes.margin}
                     //onClick={cardClick(prod._id)}
                     >
                     ADD
                   </Button>
                 </div>
               </CardContent>
       </Card>
     </div>
        }): <CircularProgress />}
    </React.Fragment>
)  
}

export default ProductCard 
