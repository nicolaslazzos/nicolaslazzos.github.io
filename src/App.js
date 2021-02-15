import React from "react";
import Slider from "./components/Slider";

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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        height: height - 80
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: 1300 }}>
        <Slider />
      </div>
    </div>
  );
}

const styles = {};

export default App;
