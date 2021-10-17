import "./Skills.css";
import { Collapse, List, Avatar, Progress } from "antd";
import {technologies, softSkills, languages} from '../../data/data'



function Skills({ id }: { id: string }) {
  const { Panel } = Collapse;
 
  return (
    <div className="skillsContainer">
      <a id={id} className="buffer"></a>
      <div className='collapseContainer'>
        <Collapse  defaultActiveKey={['1']}>
          <Panel  header="Technologies" key="1">
            <List
              itemLayout="horizontal"
              dataSource={technologies}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={<a href="https://ant.design">{item.title}</a>}
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
      </div>
      <div className='collapseContainer'>
        <Collapse  defaultActiveKey={['2']}>
          <Panel header="Soft skills" key="2">
            <List
              itemLayout="horizontal"
              dataSource={softSkills}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
      </div>
      <div className='collapseContainer'>
        <Collapse  defaultActiveKey={['3']}>
          <Panel header="Languages" key="3">
            <List
              itemLayout="horizontal"
              dataSource={languages}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={<Progress percent={item.percent} showInfo={false} strokeColor={{
                        "0%": "#b886ac",
                        "100%": "#393a55",
                      }}/> }
                  />
                </List.Item>
              )}
            />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default Skills;



