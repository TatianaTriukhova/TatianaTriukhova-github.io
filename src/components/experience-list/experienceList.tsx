import ExperienceListEntry, { ListEntryType } from '../experience-list-entry/experienceListEntry';
import './ExperienceList.css';


function ExperienceList({experienceEntries}:{experienceEntries:ListEntryType[]}) {
    
  return (
    <div className="listContainer">
      { experienceEntries.map((entry: ListEntryType) => {
          return <ExperienceListEntry 
            date={entry.date} 
            position={entry.position} 
            description={entry.description} 
            company={entry.company}
           /> 
        })
      }
    </div>
  );
}

export default ExperienceList;
