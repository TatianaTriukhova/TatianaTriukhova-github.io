import "./EducationList.css";
import { Steps } from "antd";


export interface EducationEntryType {
  date: string;
  title: string;
  institution: string;
}

function EducationList({educationEntries}:{educationEntries: EducationEntryType[]}) {
  const { Step } = Steps;
  return (
    <div className="steps">
      <Steps className="stepsContainer" progressDot responsive>
        {educationEntries.map((entry => {
          return (
            <Step
              title={entry.title}
              subTitle={entry.date}
              status="finish"
              className="step"
              description={
                <div>
                  <div>{entry.institution}</div>
                </div>
              }
            />
          )
        }))}
      </Steps>
    </div>
  );
}

export default EducationList;
