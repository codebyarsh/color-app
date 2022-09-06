import { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App dice">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
