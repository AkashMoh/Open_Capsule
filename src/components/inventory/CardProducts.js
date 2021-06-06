import React,{ useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import { fetchProducts } from '../../services/productService';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(4),
    maxWidth: '330px',
    minWidth: '330px',
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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

  useEffect(() => {
    fetchProducts().then(result => {
      setProducts(result)
      //console.log(products);
      }
    )
  },[products])

  const productCards = products.map((prod) => {
    return(
      <div  key={prod._id}>
        <Card className={classes.root} variant="outlined">
          
              <CardContent className={classes.content}>
                <Typography variant="body2" color="textPrimary">
                  {prod.company_name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {prod.company_address}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  Product code: {prod.product_code}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {prod.product_name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {prod.price}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {prod.unit_start}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {prod.unit_end}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {prod.hash_details}
                </Typography>
              </CardContent>
              {/* <div className={classes.controls}>
                <Chip 
                  variant="outlined" 
                  size="small" 
                  icon={<LocationOnOutlinedIcon />}
                  label={ comp.country + ", " + comp.state} 
                />
                <Chip 
                      variant="outlined" 
                      size="small" 
                      color="primary"
                      label={comp.role} 
                    />
              </div> */}
            
            {/* <div className={classes.extraPadding}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <div className={classes.detailContainer}>
                    <Typography variant="body2" color="textSecondary">
                      Phone: 
                    </Typography>
                    <Typography variant="body2" color="textPrimary">
                      {comp.phone}
                    </Typography>  
                  </div>
                  <div className={classes.detailContainer}>
                    <Typography variant="body2" color="textSecondary">
                      Email: 
                    </Typography>
                    <Typography variant="body2" color="textPrimary">
                      {comp.email}
                    </Typography>  
                  </div>
                  <div className={classes.detailContainer}>
                    <Typography variant="body2" color="textSecondary">
                      Address: 
                    </Typography>
                    <Typography variant="body2" color="textPrimary">
                      {comp.address}
                    </Typography>  
                  </div>
                  
                </CardContent>
              </div>
            </div> */}
        
      </Card>
    </div>
    )
  })

  return (productCards)
}

export { ProductCard }
