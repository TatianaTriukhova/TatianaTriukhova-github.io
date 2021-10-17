import "./EducationList.css";
import { Steps } from "antd";

export interface EducationEntryType {
  date: string;
  title: string;
  institution: string;
}

function EducationList({ educationEntries }: { educationEntries: EducationEntryType[] }) {
  const { Step } = Steps;
  const entries = window.innerWidth > 560 ? educationEntries : [...educationEntries].reverse()
   return (
      <div className="steps">
      <Steps className="stepsContainer" progressDot responsive>
        {entries.map((entry, index) => {
          return (
            <Step
              key={index}
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
        })}
      </Steps>
    </div>
   )
}
   

export default EducationList;
