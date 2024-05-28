import { Fragment } from "react";
import { Header } from "./components/header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
import CoreConcepts1 from "./components/CoreConcept.jsx";
import Examples from "./components/Examples.jsx";


function App() {


  return (
    <Fragment>
      <Header/>
      <main>
          <CoreConcepts1/>
          <Examples/>
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;