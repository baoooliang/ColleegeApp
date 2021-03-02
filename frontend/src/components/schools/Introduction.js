import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "../common/components/Card/Card.js";
import CardBody from "../common/components/Card/CardBody.js";
import CardHeader from "../common/components/Card/CardHeader.js";
import CardIcon from "../common/components/Card/CardIcon.js";
import CardAvatar from "../common/components/Card/CardAvatar.js";
import Button from "../common/components/CustomButtons/Button.js";
import styles from "../common/assets/jss/material-dashboard-react/views/userProfileStyles.js";

const useLocalStyles = makeStyles({
  introduction: {
    textAlign: 'justify',
    marginTop: '30px'
  },
  introCard: {
    marginBottom: '20%'
  }
})
const useStyles = makeStyles(styles);

export default function Introduction() {
  const classes = useStyles();
  const localClasses = useLocalStyles();
  return (
    <Card className={localClasses.introCard} profile>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Princeton University</h6>
              <h4 className={classes.cardTitle}>普林斯顿大学</h4>
              <p className={classes.description + " " + localClasses.introduction}>
                普林斯顿大学是一所私立学校，成立于1746年。本科生总数为5,422，位于郊区，校园规模为600英亩。它使用基于学期的学术日历。
                普林斯顿大学在2021年最佳大学排名中排名第一。其学杂费为53,890美元。
                <br /><br />
                普林斯顿大学是美国历史最悠久的大学之一，位于新泽西州普林斯顿一个安静的小镇。普林斯顿大学在其历史悠久的常春藤覆盖的校园墙壁内，提供许多活动，活动和组织。
普林斯顿老虎队是常春藤联盟的成员，以其一向强大的男女曲棍球队而闻名。学生住在提供住宿社区和餐饮服务的六所住宿学院之一中，但可以选择在初中和高年级加入十多个饮食俱乐部之一。
饮食俱乐部是参加活动的学生的社交和用餐组织。普林斯顿大学的非正式座右铭是“普林斯顿国家服务和人类服务”，这是该大学对社区服务的承诺。
                <br /><br />
                普林斯顿大学是美国历史最悠久的大学之一，位于新泽西州普林斯顿一个安静的小镇。普林斯顿大学在其历史悠久的常春藤覆盖的校园墙壁内，提供许多活动，活动和组织。
普林斯顿老虎队是常春藤联盟的成员，以其一向强大的男女曲棍球队而闻名。学生住在提供住宿社区和餐饮服务的六所住宿学院之一中，但可以选择在初中和高年级加入十多个饮食俱乐部之一。
饮食俱乐部是参加活动的学生的社交和用餐组织。普林斯顿大学的非正式座右铭是“普林斯顿国家服务和人类服务”，这是该大学对社区服务的承诺。
              </p>
              <Button color="info" round>
                虚拟校园浏览
              </Button>
              <Button color="rose" round>
                加入我的学校清单！
              </Button>
            </CardBody>
          </Card>

  )
}