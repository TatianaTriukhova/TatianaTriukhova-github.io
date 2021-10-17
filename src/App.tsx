import "./App.css";
import Footer from "./components/footer/footer";
import TopPanel from "./components/top-panel/topPanel";
import Main from "./components/main/main";
import Interests from "./components/interests/interests";
import SectionHeader from "./components/section-header/sectionHeader";
import Skills from "./components/skills/skills";
import EducationList from "./components/education-list/educationList";
import { educationEntries, experienceEntries, interests} from './data/data'
import ExperienceList from "./components/experience-list/experienceList";
function App() {
 
  return (
    <div className="app">
      <TopPanel/>
      <main>
        <Main />
        <SectionHeader id="experience">Experience</SectionHeader>
        <ExperienceList experienceEntries={experienceEntries} />
        <SectionHeader id="skills">Skills</SectionHeader>
        <Skills id="skills"/>
        <SectionHeader id="education">Education</SectionHeader>
        <EducationList educationEntries={educationEntries}/>
        <SectionHeader id="interests">Interests</SectionHeader>
        <Interests interests={interests} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
