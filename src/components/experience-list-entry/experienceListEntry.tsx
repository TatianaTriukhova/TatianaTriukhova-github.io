import "./ExperienceListEntry.css";

export interface ListEntryType {
  date: string;
  positions: { name: string; description: string }[];
  company: string;
}
function ExperienceListEntry({ date, positions, company }: ListEntryType) {
  return (
    <div className="listEntry">
      <div className="left">
        <span className="date">{date}</span>
        <p className="title">{company}</p>
      </div>
      <div className="right">
        {positions.map((position) => {
          return (
            <>
              <span className="title">{position.name.toUpperCase()}</span>
              <p className="listEntryContent">{position.description}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceListEntry;
