import "./TopPanel.css";
import NavigationDropDown from "../navigation-drop-down/navigationDropDown";
import useWindowWidth from "../../hooks/useWindowWidthCalculator";
import { navigationItems } from "../../data/data";
function TopPanel() {
  const isLargeScreen = useWindowWidth();
  return (
    <div className="headerContainer">
      <a href="#main" className="name">
        Tatiana Triukhova
      </a>
      <div className="navigation">
        {isLargeScreen ? (
          <>
            {navigationItems.map((item) => {
              return <a href={`#${item.href}`}>{item.title}</a>;
            })}
          </>
        ) : (
          <NavigationDropDown />
        )}
      </div>
    </div>
  );
}

export default TopPanel;

