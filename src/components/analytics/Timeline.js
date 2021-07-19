import { React } from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
//import Chip from '@material-ui/core/Chip';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    oppositeContent: {
      // TODO: adjust this value accordingly
      flex: 0.1,
      content: ""
    },
}));

export default function BasicTimeline({ historyData }) {
    const classes = useStyles();

    //console.log(historyData)
    
    return(
    <div>
      {historyData ? historyData.map(snip => {
        if(historyData[historyData.length-1] === snip){
          return(
            <TimelineItem key={snip.time}>
              <TimelineOppositeContent
                className={classes.oppositeContent}
                color="textSecondary"
              >
                { snip.time }
              </TimelineOppositeContent>
              <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary"/>
              
              </TimelineSeparator>
            <TimelineContent>
                { snip.company_name +" holds " + snip.product_name + " from " + snip.unit_start +" from " + snip.unit_end }
              </TimelineContent>
            </TimelineItem>
          )  
        }
        else {
          return(
            <TimelineItem key={snip.time}>
              <TimelineOppositeContent
                className={classes.oppositeContent}
                color="textSecondary"
              >
                { snip.time }
              </TimelineOppositeContent>
              <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary"/>
              <TimelineConnector />
              </TimelineSeparator>
            <TimelineContent>
                { snip.company_name +" holds " + snip.product_name + " from " + snip.unit_start +" to " + snip.unit_end }
              </TimelineContent>
            </TimelineItem>
          )
        }
        
      }): null}
    </div>
    )
}