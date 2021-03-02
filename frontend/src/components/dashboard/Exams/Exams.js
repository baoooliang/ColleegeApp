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
  }
}

const useStyles = makeStyles(styles);

export default function TableList() {
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
              <CardIcon color="rose" className={classes.icon}>
                <BorderColorIcon />
              </CardIcon>
              <p className={classes.cardCategory}>SAT!</p>
            </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="rose"
              tableHead={["类别", "Type", "进程", "预计成绩"]}
              tableData={[
                ["SAT 阅读", "Reading", "20/300", "700"],
                ["SAT 语法", "Grammar", "0/300", "未知"],
                ["SAT 数学", "Maths", "5/300", "未知"],
              ]}
              onRowClicked={(id) => onRowClick(id)}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader icon>
              <CardIcon color="rose" className={classes.icon}>
                <BorderColorIcon />
              </CardIcon>
              <p className={classes.cardCategory}>托福TOEFL</p>
            </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="rose"
              tableHead={["类别", "Type", "进程", "预计成绩"]}
              tableData={[
                ["托福阅读", "Reading", "20/300", "25"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader icon>
              <CardIcon color="rose" className={classes.icon}>
                <BorderColorIcon />
              </CardIcon>
              <p className={classes.cardCategory}>GRE</p>
            </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="rose"
              tableHead={["类别", "Type", "进程", "预计成绩"]}
              tableData={[
                ["GRE 阅读", "Reading", "20/300", "25"],
                ["GRE 数学", "Maths", "20/300", "25"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
