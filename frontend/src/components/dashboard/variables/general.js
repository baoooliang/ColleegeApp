// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var tests = [
  '报考2月25号SAT',
  "这周完成5道托福听力模拟题",
  "准备UCSD， UCBerkeley的申请论文",
  "准备期末考试"
];
var applications = [
  "准备UCLA申请资料包括护照复印件和身份证复印件",
  '准备UCSD， UCBerkeley的申请论文"'
];

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    title: "背单词",
    allDay: true,
    start: new Date(y, m, 1),
    end: new Date(y, m, 1),
    color: "default"
  },
  {
    title: "SAT 考试 香港考场",
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: "green"
  },
  {
    title: "会议",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: "red"
  },
  {
    title: "UCLA 申请截止",
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: "azure"
  },
  {
    title: "SAT 冲刺班",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    color: "azure"
  },
  {
    title: "托福考试",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "orange"
  },
  {
    title: "UCSD 申请截止",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "rose"
  }
];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  tests,
  applications,
  events
};
