import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';

// core components
import GridContainer from "../../../common/components/Grid/GridContainer.js";
import GridItem from "../../../common/components/Grid/GridItem.js";
import Question from "../Questions";

import customSelectStyle from "../../../common/assets/jss/material-dashboard-react/customSelectStyle.js";


const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  ...customSelectStyle
};

class Step3 extends React.Component {
  constructor(props) {
    super(props);
  }

  sendState() {
    return this.state;
  }

  isValidated() {
    return true;
  }

  render() {
    const { classes, question } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
            <Question
              question={question}
            />
        </GridItem>
      </GridContainer>
    );
  }
}

Step3.propTypes = {
  classes: PropTypes.object,
  question: PropTypes.object
};

export default withStyles(style)(Step3);
