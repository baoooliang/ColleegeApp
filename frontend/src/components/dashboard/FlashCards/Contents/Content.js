import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { vocabGroup1 } from "../Data/Vocab"
import Card from "../../../common/components/Card/Card.js";
import CardHeader from "../../../common/components/Card/CardHeader.js";
import CardIcon from "../../../common/components/Card/CardIcon.js";
import CardBody from "../../../common/components/Card/CardBody.js";
import CardFooter from "../../../common/components/Card/CardFooter.js";
import Table from "../../../common/components/Table/Table.js";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  card: {
    marginTop: '8%',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cardBody: {
    height: '400px'
  },
  content: {
    height: '80%'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    height: '5%'
  },
  button: {
    padding: '30px 40px'
  },
  word: {
    textAlign: 'center',
    paddingTop: '20%',
    fontSize: '20px'
  }
};

const useStyles = makeStyles(styles);

export default function FlashCardsContent(){
  const classes = useStyles()
  const [card, setCard] = React.useState(0)
  const [front, setFront] = React.useState(true)

  const onNextClick = () => {
    if(!front){
        setFront(true)
    }
    setCard(card + 1)
  }

  const onFlipClick = () => {
    setFront(!front)
  }

  return (
    <Card className={classes.card}>
      <CardHeader color="info">
        <h4 className={classes.cardTitleWhite}>{vocabGroup1.name}</h4>
        <p className={classes.cardCategoryWhite}>
          Flash Cards
        </p>
      </CardHeader>
      <CardBody className={classes.cardBody}>
        <div className={classes.content}>
          <p className={classes.word}>
            {front ? vocabGroup1.list[card].word : vocabGroup1.list[card].explanation}
          </p>
        </div>
        <ButtonGroup className={classes.buttons} variant="text" color="default" aria-label="text primary button group">
              <Button color='default' className={classes.button} onClick={onFlipClick}>{front ? '不认识' : 'Flip'}</Button>
              <Button color='default' className={classes.button} onClick={onNextClick}>{'下一个'}</Button>
          </ButtonGroup>
      </CardBody>
    </Card>
  )
}

