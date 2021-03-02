import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tooltip from "@material-ui/core/Tooltip";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Table from "../../common/components/Table/ExtendedTable.js";
import Button from "../../common/components/CustomButtons/Button.js";
import Card from "../../common/components/Card/Card.js";
import CardBody from "../../common/components/Card/CardBody.js";
import CardIcon from "../../common/components/Card/CardIcon.js";
import CardHeader from "../../common/components/Card/CardHeader.js";
import CardFooter from "../../common/components/Card/CardFooter.js";
import Close from "@material-ui/icons/Close";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import GridItem from "../../common/components/Grid/GridItem.js";
import styles from "../../common/assets/jss/material-dashboard-react/views/dashboardStyle.js";
import GridContainer from "../../common/components/Grid/GridContainer.js";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PermIdentity from "@material-ui/icons/PermIdentity";


const useStyles = makeStyles(styles)

const schools = [
  {id: '1', name: 'Princeton University', label: '普林斯顿大学', type: 0, city: '纽约', image:'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2020/06/20170816_CL_DJA_152%281%29.jpg?itok=gk_-O3D3'},
  {id: '2', name: 'Harvard University', label: '哈佛大学', type: 0, city: '波士顿', image:'https://2u.com/static/84f4025b19c2bf44a1c9b049994c1eff/5044d/baker-library-harvard-university_OPxWuDn.max-2880x1800.jpg'},
  {id: '3', name: 'Stanford University', label: '斯坦福大学', type: 0, city: '旧金山', image:'https://nypost.com/wp-content/uploads/sites/2/2020/03/stanford.jpg?quality=80&strip=all'},
  {id: '4', name: 'Chicago University', label: '芝加哥大学', type: 0, city: '芝加哥', image:'https://cdn.britannica.com/39/160139-050-147B020E/Eckhart-Hall-campus-Ryerson-Physical-Laboratory-University.jpg'},
  {id: '5', name: 'UC San Diego', label: '加州大学圣地亚哥分校', type: 1, city: '圣地亚哥', image:'https://ucsdnews.ucsd.edu/news_uploads/upward-social-mobility.jpg'},
  {id: '6', name: 'UC Los Angeles', label: '加州大学洛杉矶分校', type: 1, city: '洛杉矶', image:'https://luskinconferencecenter.ucla.edu/wp-content/uploads/2018/03/Blog_Luskin.jpg'},
  {id: '7', name: 'University of Florida', label: '佛罗里达大学', type: 1, city: '迈阿密', image:'https://bloximages.newyork1.vip.townnews.com/thecentersquare.com/content/tncms/assets/v3/editorial/3/ba/3ba73eec-7add-11e8-b383-dbaa9db01cd6/5b34ed1645334.image.jpg?crop=889%2C667%2C55%2C0&resize=1200%2C900&order=crop%2Cresize'},
  {id: '8', name: 'Seattle University', label: '西雅图大学', type: 1, city: '西雅图', image:'https://www.seattleu.edu/newsroom/stories/2020/SpringTimeOnCampus_cjk_008-newsroom.jpg'},
  {id: '9', name: 'University of Colorado', label: '科罗拉多大学', type: 1, city: '丹佛', image:'https://upload.wikimedia.org/wikipedia/commons/5/52/Wolf_Law_building_at_University_of_Colorado_at_Boulder_from_the_southwest.JPG'},
  {id: '10', name: 'Boston University', label: '波士顿大学', type: 2, city: '波士顿', image:'http://www.bu.edu/files/2020/05/resized-feature-17-2005-AERIALS-005.jpg'},
  {id: '12', name: 'University of Washington', label: '华盛顿大学', type: 2, city: '西雅图', image:'https://media.bizj.us/view/img/10428030/washington-university-2014-003*1200xx5472-3084-0-0.jpg'},
  {id: '13', name: 'Fordham University', label: '佛德汉姆大学', type: 2, city: '纽约', image:'https://www.nydailynews.com/resizer/APImAY3vlsqSKBGzNjG4dU58OUM=/415x276/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4F3FRNSBV4AXSEKVONJDA7M7KM.jpg'}
]

export default function Result() {
  const classes = useStyles();

  const saveClicked = () => {
    window.location = "/admin/schoolslist"
  }

  return (
    <>
    <GridContainer>
      <GridItem xs={12} sm={12} md={1} />
      <GridItem xs={12} sm={12} md={10}>
        <Card>
        <CardHeader color="rose" icon>
            <CardIcon color="rose">
                <PermIdentity />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              智能选校 - <small>Smart School Match</small>
            </h4>
        </CardHeader>
        <CardBody>
          以下是我们为你选择的学校，请将心仪的学校加入学校清单！
        </CardBody>
    </Card>
        <GridContainer>
          {
            schools.map((school, index) => {
              return (<GridItem xs={12} sm={12} md={4} key={index}>
                  <Card product className={classes.cardHover}>
                    <CardHeader image className={classes.cardHeaderHover}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img className={classes.img} src={school.image} alt="..." />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <div className={classes.cardHoverUnder}>
                        <Tooltip
                          id="tooltip-top"
                          title="添加进学校清单"
                          placement="bottom"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button color="primary" simple>
                            <AddCircleIcon className={classes.underChartIcons} />
                            加入学校清单
                          </Button>
                        </Tooltip>
                      </div>
                      <h4 className={classes.cardProductTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          {school.label}
                        </a>
                      </h4>
                      <p className={classes.cardProductDesciprion}>
                        {school.name}
                      </p>
                    </CardBody>
                    <CardFooter product>
                      <div className={classes.price}>
                        <h4>{school.type === 0 ? '冲刺学校' : (school.type === 1 ? '核心学校' : '保底学校')}</h4>
                      </div>
                      <div className={`${classes.stats} ${classes.productStats}`}>
                        <Place /> {school.city}
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
            )})
          }
      </GridContainer>
      </GridItem>
      <GridItem xs={12} sm={12} md={1} />
    </GridContainer>
    </>
  );
}
