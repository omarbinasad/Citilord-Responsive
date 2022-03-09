import React from "react";
import "./AccordionDiv.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
// import DummyData from "./DummyData";
import {
  DummyData1,
  DummyData2,
  DummyData3,
  DummyData4,
  DummyData5,
  DummyData6,
} from "./DummyData";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "1300px",
    margin: "20px",
    borderRadius: "10px",
    border: "none",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  accordionContent: {
    display: "flex",
    justifyContent: "center",
  },
}));

const AccordionDiv = () => {
  const classes = useStyles();
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      className={classes.accordionContent}
    >
      <div className={classes.root}>
        {/* accordion start */}
        <Accordion style={{ borderRadius: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            // style={{
            //   // backgroundColor: "#FFB91D",
            //   borderBottom: "5px solid black",
            //   marginBottom: "10px",
            //   borderRadius: "10px",
            // }}
            className="glass-effect"
          >
            <Typography className={classes.heading}>
              Student Tenants and Guarantors
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <DummyData1 />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ borderRadius: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            // style={{
            //   backgroundColor: "#FFB91D",
            //   borderBottom: "5px solid black",
            //   marginBottom: "10px",
            //   borderRadius: "10px",
            // }}
            className="glass-effect"
          >
            <Typography className={classes.heading}>Identification</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <DummyData2 />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ borderRadius: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            // style={{
            //   backgroundColor: "#FFB91D",
            //   borderBottom: "5px solid black",
            //   marginBottom: "10px",
            //   borderRadius: "10px",
            // }}
            className="glass-effect"
          >
            <Typography className={classes.heading}>Furnishings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <DummyData3 />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ borderRadius: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            // style={{
            //   backgroundColor: "#FFB91D",
            //   borderBottom: "5px solid black",
            //   marginBottom: "10px",
            //   borderRadius: "10px",
            // }}
            className="glass-effect"
          >
            <Typography className={classes.heading}>
              Faults and Repairs
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <DummyData4 />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ borderRadius: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            // style={{
            //   backgroundColor: "#FFB91D",
            //   borderBottom: "5px solid black",
            //   marginBottom: "10px",
            //   borderRadius: "10px",
            // }}
            className="glass-effect"
          >
            <Typography className={classes.heading}>
              Safety Regulations
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <DummyData5 />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ borderRadius: "10px" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            // style={{
            //   backgroundColor: "#FFB91D",
            //   borderBottom: "5px solid black",
            //   marginBottom: "10px",
            //   borderRadius: "10px",
            // }}
            className="glass-effect"
          >
            <Typography className={classes.heading}>
              Important Information for Tenants
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <DummyData6 />
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* accordion end */}
      </div>
    </div>
  );
};

export default AccordionDiv;
