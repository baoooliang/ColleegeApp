import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../common/components/Grid/GridItem.js";
import GridContainer from "../../common/components/Grid/GridContainer.js";
import Table from "../../common/components/Table/Table.js";
import Card from "../../common/components/Card/Card.js";
import CardHeader from "../../common/components/Card/CardHeader.js";
import CardBody from "../../common/components/Card/CardBody.js";
import routes from "../routes.js"
import CardIcon from "../../common/components/Card/CardIcon.js";
import BorderColorIcon from '@material-ui/icons/BorderColor';


const styles = {
  cardCategory: {
    color: '#333',
    fontSize: '18px',
    paddingTop: '10px'
  },
  icon: {
    '& svg': {
      width: '24px',
      height: '24px'
    }
  },
  table: {
    '& td': {
        width: '20%'
    },
    action: {
      width: '5%'
    }
  },
}

const useStyles = makeStyles(styles);

export default function SchoolsList() {
  const examsRoutes = routes.filter(r => r.parent === 'exams')
  const classes = useStyles();

  const onRowClick = (id) => {
    const route = examsRoutes[id]
    window.location = route.layout + route.path;
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader icon>
              <CardIcon color="primary" className={classes.icon}>
                <BorderColorIcon />
              </CardIcon>
              <p className={classes.cardCategory}>学校清单</p>
            </CardHeader>
          <CardBody>
            <Table
              className={classes.table}
              tableHeaderColor="primary"
              tableHead={["校名", "Type", "Deadline", "进度"]}
              tableData={[
                ["普林斯顿大学", "冲刺学校", "01/20/2022", 80],
                ["斯坦福大学", "冲刺学校", "01/21/2022", 20],
                ["芝加哥大学", "冲刺学校", "02/20/2022", 30],
                ["加州大学洛杉矶分校", "核心学校", "01/20/2022", 50],
                ["加州大学圣地亚哥分校", "核心学校", "01/20/2022", 50],
                ["佛罗里达大学", "保底学校", "01/20/2022", 100],
                ["波士顿大学", "保底学校", "01/20/2022", 100],
                ["华盛顿大学", "保底学校", "01/20/2022", 100],
              ]}
              onRowClicked={(id) => onRowClick(id)}
              includeActions
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
