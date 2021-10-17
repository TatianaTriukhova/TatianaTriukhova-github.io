import "./EducationList.css";
import { Steps } from "antd";
import isMobile from 'ismobilejs';

export interface EducationEntryType {
  date: string;
  title: string;
  institution: string;
}

function EducationList({ educationEntries }: { educationEntries: EducationEntryType[] }) {
  const { Step } = Steps;
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };
  const entries = isMobileDevice() ? educationEntries.reverse() : educationEntries
  return (
    <div className="steps">
      <Steps className="stepsContainer" progressDot responsive>
        {entries.map((entry => {
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
