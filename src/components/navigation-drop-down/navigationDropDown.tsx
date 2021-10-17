import "./NavigationDropDown.css";
import { Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { navigationItems } from "../../data/data";
import './NavigationDropDown.css'

function NavigationDropDown() {
  const menu = (
    <Menu>
      {navigationItems.map((item) => {
        return (
          <Menu.Item>
            <a className={'title'}rel={item.href} href={`#${item.href}`}>
              {item.title}
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <div>
      <Dropdown
        overlayStyle={{
          width: "15rem",
          boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.35)",
          textAlign: "center",
        }}
        placement="bottomCenter"
        overlay={menu}
        trigger={["click"]}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <MenuOutlined style={{ color: "#393a55" }} />
        </a>
      </Dropdown>
    </div>
  );
}

export default NavigationDropDown;
