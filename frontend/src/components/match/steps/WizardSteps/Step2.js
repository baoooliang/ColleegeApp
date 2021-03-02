import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';


// core components
import GridContainer from "../../../common/components/Grid/GridContainer.js";
import GridItem from "../../../common/components/Grid/GridItem.js";

import customSelectStyle from "../../../common/assets/jss/material-dashboard-react/customSelectStyle.js";
import customCheckboxRadioSwitch from "../../../common/assets/jss/material-dashboard-react/customCheckboxRadioSwitch.js";

const style = {
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

const engineering = [
  '土木工程 Civil Engineering',
  '计算机工程 Computer Science Engineering',
  '化学工程 Chemistry Engineering',
  '航天工程 Areospace Engineering',
  '电子工程 Electronic Engineering',
  '机械工程 Machanics Engineering',
  '纳米工程 Nano Engineering',
  '生物工程 Biology Engineering',
  '信息技术工程 Information Engineering',
];

const science = [
  '数学 Mathematics',
  '化学 Chemistry',
  '物理 Physics',
  '数据科学 Data Science',
  '生物 Biology'
];

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      majors: [],
    };
  }
  sendState() {
    return this.state;
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({majors: [...value]})
  }

  isValidated() {
    return true;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4 className={classes.infoText}>选择你未来的专业（最多3个）</h4>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={8}>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    选择专业
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    multiple
                    value={this.state.majors}
                    onChange={event => this.handleChange(event)}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                          {selected.map((value, index) => (
                            <Chip key={index} label={value} className={classes.chip} />
                          ))}
                        </div>
                    )}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      工程专业
                    </MenuItem>
                    {engineering.map((name, index) => (
                        <MenuItem key={index} value={name}
                            classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}>
                          {name}
                        </MenuItem>
                      ))}
                      <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      科学
                    </MenuItem>
                    {science.map((name, index) => (
                        <MenuItem key={index} value={name}
                            classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}>
                          {name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Step2.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(Step2);
