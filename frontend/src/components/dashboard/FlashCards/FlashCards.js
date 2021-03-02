import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../common/components/Card/Card.js";
import CardHeader from "../../common/components/Card/CardHeader.js";
import CardIcon from "../../common/components/Card/CardIcon.js";
import CardBody from "../../common/components/Card/CardBody.js";
import CardFooter from "../../common/components/Card/CardFooter.js";
import Table from "../../common/components/Table/Table.js";
import routes from "../routes.js"
import DescriptionIcon from '@material-ui/icons/Description';


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


export default function FlashCards(){
  const classes = useStyles();
  const flashCardsRoutes = routes.filter(r => r.parent === 'flashcards')

  const onRowClick = (id) => {
    const route = flashCardsRoutes[id]
    window.location = route.layout + route.path;
  }

  return (
    <Card>
      <CardHeader icon>
        <CardIcon color="info" className={classes.icon}>
          <DescriptionIcon />
        </CardIcon>
        <p className={classes.cardCategory}>单词闪卡</p>
      </CardHeader>
      <CardBody>
        <Table
          tableHeaderColor="info"
          tableHead={["闪卡", "进度"]}
          tableData={[
                  ["SAT 核心单词", "20%"],
                  ["托福单词", "0%"]
          ]}
          onRowClicked={(id) => onRowClick(id)}
        />
      </CardBody>
    </Card>
  )
}


