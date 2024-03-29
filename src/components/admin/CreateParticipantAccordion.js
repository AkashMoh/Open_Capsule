import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ParticipantCreation from './ParticipantCreation';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    elevation: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CreateParticipantAccordion() {
  const classes = useStyles();

  return (
    <React.Fragment >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Create Participant</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
            <ParticipantCreation />    

        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}
