import "./ExperienceListEntry.css";

export interface ListEntryType {
  date: string;
  position: string;
  company: string;
  description: string;
}
function ExperienceListEntry({ date, position, company, description }: ListEntryType) {
  return (
    <div className="listEntry">
      <div className="left">
        <span className="date">{date}</span>
        <p className="title">{company}</p>
      </div>
      <div className="right">
        <span className="title">{position.toUpperCase()}</span>
        <p className="listEntryContent">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceListEntry;
