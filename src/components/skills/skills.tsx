import "./Skills.css";
import { Collapse, List, Avatar, Progress } from "antd";
import {
  softSkills,
  languages,
  backendDevopsTech,
  frontendTech,
} from "../../data/data";

function Skills({ id }: { id: string }) {
  const { Panel } = Collapse;

  return (
    <>
      <a id={id} className="buffer"></a>
      <div className="skillsContainer">
        <div className="collapseContainer">
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Frontend" key="1">
              <List
                itemLayout="horizontal"
                dataSource={frontendTech}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.image} />}
                      title={<span>{item.title}</span>}
                      description={
                        <Progress
                          strokeColor={{
                            "0%": "#108ee9",
                            "100%": "#87d068",
                          }}
                          percent={item.percent}
                        />
                      }
                    />
                  </List.Item>
                )}
              />
            </Panel>
          </Collapse>
          <Collapse defaultActiveKey={["4"]}>
            <Panel header="Languages" key="4">
              <List
                itemLayout="horizontal"
                dataSource={languages}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<span>{item.title}</span>}
                      description={
                        <Progress
                          percent={item.percent}
                          showInfo={false}
                          strokeColor={{
                            "0%": "#b886ac",
                            "100%": "#393a55",
                          }}
                        />
                      }
                    />
                  </List.Item>
                )}
              />
            </Panel>
          </Collapse>
        </div>
        <div className="collapseContainer">
          <Collapse defaultActiveKey={["2"]}>
            <Panel header="Backend and DevOps" key="2">
              <List
                itemLayout="horizontal"
                dataSource={backendDevopsTech}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.image} />}
                      title={<span>{item.title}</span>}
                      description={
                        <Progress
                          strokeColor={{
                            "0%": "#108ee9",
                            "100%": "#87d068",
                          }}
                          percent={item.percent}
                        />
                      }
                    />
                  </List.Item>
                )}
              />
            </Panel>
          </Collapse>
          <Collapse defaultActiveKey={["3"]}>
            <Panel header="Soft skills" key="3">
              <List
                itemLayout="horizontal"
                dataSource={softSkills}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta title={<span>{item.title}</span>} />
                  </List.Item>
                )}
              />
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default Skills;
