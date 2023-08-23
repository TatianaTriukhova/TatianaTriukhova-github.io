import ExperienceListEntry, {
  ListEntryType,
} from "../experience-list-entry/experienceListEntry";
import "./ExperienceList.css";

function ExperienceList({
  experienceEntries,
}: {
  experienceEntries: ListEntryType[];
}) {
  return (
    <div className="listContainer">
      {experienceEntries.map((entry: ListEntryType) => {
        return (
          <ExperienceListEntry
            date={entry.date}
            positions={entry.positions}
            company={entry.company}
          />
        );
      })}
    </div>
  );
}

export default ExperienceList;
