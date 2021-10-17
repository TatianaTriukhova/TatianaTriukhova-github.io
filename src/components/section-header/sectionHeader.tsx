import "./SectionHeader.css";

function SectionHeader({ children, id }: { children: string, id:string }) {
  return (
    <div className={"sectionHeaderContainer"}>
        <a id={id} className="buffer"></a>
        <span className="name">{children}</span>
    </div>
  );
}

export default SectionHeader;
