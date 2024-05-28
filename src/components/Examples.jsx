import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section"
import Tabs from "./Tabs";


export default function Examples() {

    const [ selectedTopic, setSelectedTopic ] = useState();


    function handleClick(handleSelect) {
      setSelectedTopic(handleSelect)
      console.log(selectedTopic)
    }

    return(
        <Section title="Examples" id="examples" >
        <Tabs
        buttonContainer="menu"
        buttons={<>          
          <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleClick("components")}>Components</TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleClick("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleClick("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleClick("state")}>State</TabButton></>}>
          {TabButton}
        </Tabs>
        {!selectedTopic ? <p>Click an option to learn more</p> :           
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>} 
      </Section>
    );
}