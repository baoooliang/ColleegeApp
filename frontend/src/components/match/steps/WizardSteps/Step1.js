import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "../../../common/components/Grid/GridContainer.js";
import GridItem from "../../../common/components/Grid/GridItem.js";
import CustomInput from "../../../common/components/CustomInput/CustomInput.js";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sat: '',
      satState: "",
      toefl: '',
      toeflState: "",
      gpa: '',
      gpaState: ""
    };
  }
  sendState() {
    return this.state;
  }

  change(event, stateName) {
    if (!isNaN(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (
      this.state.satState === "success" &&
      this.state.toeflState === "success" &&
      this.state.gpaState === "success"
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>
            让我们先从你的考试成绩开始
          </h4>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <CustomInput
            success={this.state.satState === "success"}
            error={this.state.satState === "error"}
            labelText={
              <span>
                SAT成绩/预计成绩 <small>(required)</small>
              </span>
            }
            id="sat"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "sat"),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Face className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            success={this.state.toeflState === "success"}
            error={this.state.toeflState === "error"}
            labelText={
              <span>
                托福成绩/预计成绩 <small>(required)</small>
              </span>
            }
            id="toefl"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "toefl"),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <RecordVoiceOver className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            success={this.state.gpaState === "success"}
            error={this.state.gpaState === "error"}
            labelText={
              <span>
                平时成绩（GPA）/ 预计GPA <small>(required)</small>
              </span>
            }
            id="gpa"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "gpa"),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <Email className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

Step1.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(Step1);
