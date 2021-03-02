import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../../common/components/Card/Card.js";
import CardHeader from "../../../common/components/Card/CardHeader.js";
import CardAvatar from "../../../common/components/Card/CardAvatar.js";
import CardText from "../../../common/components/Card/CardText.js";
import CardBody from "../../../common/components/Card/CardBody.js";
import CardFooter from "../../../common/components/Card/CardFooter.js";
import FormatQuote from "@material-ui/icons/FormatQuote";
import GridContainer from "../../../common/components/Grid/GridContainer.js";
import GridItem from "../../../common/components/Grid/GridItem.js";
import Typography from '../components/Typography';

import image from "../../../common/assets/img/faces/mason.jpg";
import image2 from "../../../common/assets/img/faces/card-profile2-square.jpg";
import image3 from "../../../common/assets/img/faces/angle.jpg";

import {
  cardTitle,
  roseColor
} from "../../../common/assets/jss/material-dashboard-react.js";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(4),
  },
  cardTitle,
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  }
})

const useStyles = makeStyles(styles);

export default function Quotes(){
  const classes = useStyles()
  return (

  <div className={classes.root}>
    <Typography variant="h4" marked="center" align="center" component="h2">
        用户评价
      </Typography>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
        <Card testimonial>
        <div className={classes.testimonialIcon}>
          <FormatQuote />
        </div>
        <CardBody>
          <h5 className={classes.cardTestimonialDescription}>
            当我不知道该申请哪些美国大学的时候，Colleege根据我的情况以及喜好
            ，选择了5所最适合我的大学。我最终选择了UCLA！这是我人生中最正确的决定，感谢Colleege
          </h5>
        </CardBody>
        <CardFooter testimonial>
          <h4 className={classes.cardTitle}>Bryan Liang</h4>
          <CardAvatar testimonial testimonialFooter>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={image} alt="..." />
            </a>
          </CardAvatar>
        </CardFooter>
      </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
    <Card testimonial>
        <div className={classes.testimonialIcon}>
          <FormatQuote />
        </div>
        <CardBody>
          <h5 className={classes.cardTestimonialDescription}>
            我的SAT阅读分数有了大幅提升。感谢Colleege！非常好用的网站！
            我有机会能和斯坦福大学的学长1对1交流。在去到学校之前，真实了解
            校园的环境，线上参观学校宿舍。这给我的选校带来很大帮助！
          </h5>
        </CardBody>
        <CardFooter testimonial>
          <h4 className={classes.cardTitle}>Ryan Lee</h4>
          <CardAvatar testimonial testimonialFooter>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={image2} alt="..." />
            </a>
          </CardAvatar>
        </CardFooter>
      </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
    <Card testimonial>
        <div className={classes.testimonialIcon}>
          <FormatQuote />
        </div>
        <CardBody>
          <h5 className={classes.cardTestimonialDescription}>
            If you want to improve your standard exams scores, Colleege can
            definitely helps you! The vocabulary flashcard is the best study tool I
            have ever used!
          </h5>
        </CardBody>
        <CardFooter testimonial>
          <h4 className={classes.cardTitle}>Ashley Liu</h4>
          <CardAvatar testimonial testimonialFooter>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={image3} alt="..." />
            </a>
          </CardAvatar>
        </CardFooter>
      </Card>
      </GridItem>
    </GridContainer>
  </div>

  )
}