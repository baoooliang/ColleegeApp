import React from "react";

// core components
import Wizard from "../../common/components/Wizard/Wizard.js";
import GridContainer from "../../common/components/Grid/GridContainer.js";
import GridItem from "../../common/components/Grid/GridItem.js";
import Result from "./Result.js";

import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";

const questions = [
  {question: '你打算去哪个国家留学？', options: ['美国'], type: 0},
  {question: '你打算申请几所大学？', options: ['5所以内', '5~10所', '10～15所', '15～20所'], type: 0},
  {question: '你想申请的学校类型？', options: ['大型公立', '文理学院', '私立', '小型公立'], type: 1},
  {question: '你想生活在哪个地区？', options: ['东部', '西部', '南部', '北部'], type: 1},
  {question: '你想去中国留学生多多学校吗？', options: ['是的', '不是'], type: 1},
  {question: '你想未来的专业方向？', options: ['工程', '科学/数学', '艺术', '体育', '医药'], type: 1},
  {question: '你喜欢生活在城市还是郊区？', options: ['城市', '郊区'], type: 1},
  {question: '你的每年留学预算是多少？', options: ['3万美金', '5万美金', '8万美金', '不差钱'], type: 1}
]

export default function WizardView() {
  const [resultView, setResultView] = React.useState(false)
  const showResultView = () => {
    setResultView(true)
  }

    if(resultView){
      return <Result />
    }

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
              validate
              steps={[
                { stepName: "成绩", stepComponent: Step1, stepId: "about" },
                { stepName: "专业", stepComponent: Step2, stepId: "account" },
                { stepName: "问答", stepComponent: Step3, stepId: "address" }
              ]}
              title="智能选校"
              subtitle="通过智能算法帮你选择合适的学校"
              finishButtonClick={e => alert(e)}
              questions={questions}
              confirmClicked={showResultView}
            />
      </GridItem>
    </GridContainer>
  );
}
