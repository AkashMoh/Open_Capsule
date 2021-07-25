import React,{ useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import { fetchParticipants } from '../../services/participantService';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(4),
    maxWidth: '38em'
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  extraPadding: {
    paddingTop: theme.spacing(4),
  },
  content: {
    flex: '1 0 auto',
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

function ParticipantCard() {
  const classes = useStyles();
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetchParticipants().then(result => {
      setCompany(result)
      //console.log(company);
      }
    )
  },[setCompany])

  const companyCards = company.map((comp) => {
    return(
      <div  key={comp._id}>
        <Card className={classes.root} variant="outlined">
          <div className={classes.detailContainer}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h6" variant="h6">
                  {comp.company_name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {comp.wallet_address}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
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
              </div>
            </div>
            <div className={classes.extraPadding}>
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
            </div>
        </div>        
      </Card>
    </div>
    )
  })

  return (companyCards)
}

export { ParticipantCard }
