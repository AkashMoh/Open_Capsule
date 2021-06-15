import { React, useState, useEffect } from 'react';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Chip from '@material-ui/core/Chip';

import { makeStyles } from "@material-ui/core/styles";
import { fetchHistory } from '../../services/trackingService';

const useStyles = makeStyles((theme) => ({
    oppositeContent: {
      // TODO: adjust this value accordingly
      flex: 0.1,
      content: ""
    },
}));



//let historyData = await fetchHistory(productCode)

export default function BasicTimeline(code) {
    const classes = useStyles();
    const[data, setData] = useState([])
    //console.log(code.productCode)
    
    //fetchData()
    // async function fetchData() {
    //   let historyData = await fetchHistory(code.productCode)
    //   setData(historyData)
    // }
    // fetchData()

    useEffect(async() => {
      let historyData = await fetchHistory(code.productCode)
      setData(historyData)
    },[]);

    //console.log(data)
    
    
        return(
          <div>
        {data ? data.map(snip => {
          if(data[data.length-1] == snip){
            return(
              <TimelineItem>
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
              <TimelineItem>
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
        
    
  
    
  
  // const classes = useStyles();
    
    // datas.map(data => {
    //   return(
    //     <React.Fragment>
    //       <TimelineItem>
    //         <TimelineOppositeContent
    //           className={classes.oppositeContent}
    //           color="textSecondary"
    //         >
    //           { data.time }
    //         </TimelineOppositeContent>
    //         <TimelineSeparator>
    //         <TimelineDot variant="outlined" color="primary"/>
    //         <TimelineConnector />
    //         </TimelineSeparator>
    //         <TimelineContent>
    //           { data.product_name + data.unit_start + data.unit_end }
    //         </TimelineContent>
    //       </TimelineItem>
    //     </React.Fragment>
    //   )
    // })
    

    // return (
    
      
    //   <TimelineItem>
    //     <TimelineOppositeContent
    //         className={classes.oppositeContent}
    //         color="textSecondary"
    //     >
    //         09:30 am
    //       </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineDot variant="outlined" color="primary"/>
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>Eat</TimelineContent>
    //   </TimelineItem>
      
    //   <TimelineItem>
    //     <TimelineOppositeContent
    //     className={classes.oppositeContent}
    //     color="textSecondary"
    //     >
    //     09:30 am
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineDot variant="outlined" color="primary"/>
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>Code</TimelineContent>
    //   </TimelineItem>
      
    //   <TimelineItem>
    //     <TimelineOppositeContent
    //     className={classes.oppositeContent}
    //     color="textSecondary"
    //     >
    //     09:30 am
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineDot variant="outlined" color="primary"/>
    //     </TimelineSeparator>
    //     <TimelineContent>Sleep</TimelineContent>
    //   </TimelineItem>  
  // );
}