import React from "react";
import Slider from "./components/Slider";
import Information from "./components/Information";
import Pagination from "./components/Pagination";

function App() {
  const [section, setSection] = React.useState(0);

  const sections = ["about.", "education.", "experience.", "secial media."];

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
          padding: 40
        }}
      >
        <Slider sections={4} onChange={(e) => setSection(e.section)} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 3,
          justifyContent: "center",
          padding: 40,
          overflowY: "scroll"
        }}
      >
        <Information section={section} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 40
        }}
      >
        <Pagination page={sections[section]} />
      </div>
    </div>
  );
}

export default App;
