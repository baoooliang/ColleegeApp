import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from "../common/components/Table/Table.js";
import Card from "../common/components/Card/Card.js";
import CardHeader from "../common/components/Card/CardHeader.js";
import CardBody from "../common/components/Card/CardBody.js";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CardIcon from "../common/components/Card/CardIcon.js";
import NavPills from "../common/components/NavPills/NavPills.js";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Schedule from "@material-ui/icons/Schedule";
import Button from "../common/components/CustomButtons/Button.js";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CreateIcon from '@material-ui/icons/Create';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Timeline from './Timeline'

const scores = [
      ['SAT均分', '1440 ~ 1700', '1200'],
      ['托福均分', '95 ~ 110', '80'],
      ['GPA均分', '4.0', '3.5']
]
 const studentsInfo = [
      ['学生人数', 20000, 20000],
      ['国际生人数', 1000, 1200],
      ['国际生比例', '10%', '5%'],
      ['中国留学生人数', 400, 200]
    ]

const cost = [
      ['总花费', '$60000', '50000'],
      ['学费', '$40000', '35000'],
      ['周边房租', '$1000', '800']
    ]

const useStyles = makeStyles({
  table: {
    '& tr': {
      height: '80px'
    }
  },
  button: {
    marginTop: '20px',
    float: 'right'
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
      <>
        <Card>
            <CardHeader>
              <h4 className={classes.cardIconTitle}>
                学校数据 <small> - Data</small>
              </h4>
            </CardHeader>
            <CardBody>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 12, md: 4 },
                  contentGrid: { xs: 12, sm: 12, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "录取成绩",
                    tabIcon: CreateIcon,
                    tabContent: (
                      <div>
                      <Table
                          className={classes.table}
                          tableHead={["Type", "分数", "全美平均值"]}
                          tableData={scores}
                        />
                        <Button className={classes.button} color="info" round>
                            查看你的录取概率
                          </Button>
                      </div>
                    )
                  },
                  {
                    tabButton: "学生信息",
                    tabIcon: SupervisorAccountIcon,
                    tabContent: (
                      <Table
                          className={classes.table}
                          tableHead={["Type", "Value", "全美平均值"]}
                          tableData={studentsInfo}
                        />
                    )
                  },
                  {
                    tabButton: "花费",
                    tabIcon: AttachMoneyIcon,
                    tabContent: (
                      <Table
                          className={classes.table}
                          tableHead={["Type", "花费", "全美平均值"]}
                          tableData={cost}
                        />
                    )
                  },
                  {
                    tabButton: "专业信息",
                    tabIcon: MenuBookIcon,
                    tabContent: (
                      <Table
                          className={classes.table}
                          tableHead={["Type", "花费", "全美平均值"]}
                          tableData={cost}
                        />
                    )
                  },
                  {
                    tabButton: "申请时间表",
                    tabIcon: Schedule,
                    tabContent: (
                      <Timeline />
                    )
                  }
                ]}
              />
            </CardBody>
          </Card>
    </>
  );
}