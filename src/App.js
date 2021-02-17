import React from "react";
import Slider from "./components/Slider";
import Information from "./components/Information";
import Pagination from "./components/Pagination";

function App() {
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => setHeight(window.innerHeight);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        // alignItems: "center",
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
          padding: 30
          // border: "1px solid red"
        }}
      >
        <Slider sections={4} onChange={(e) => console.log(e)} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 3,
          justifyContent: "center",
          padding: 30,
          // border: "1px solid yellow",
          overflowY: "scroll"
        }}
      >
        <Information />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 30
          // border: "1px solid red"
        }}
      >
        <Pagination />
      </div>
    </div>
  );
}

const styles = {};

export default App;
