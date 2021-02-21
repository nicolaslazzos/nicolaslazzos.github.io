import React from "react";
import Slider from "./components/Slider";
import Information from "./components/Information";
import Pagination from "./components/Pagination";

function App() {
  const [section, setSection] = React.useState(0);
  const [orientation, setOrientation] = React.useState("landscape");

  const sections = ["about.", "education.", "experience.", "skills.", "contact."];

  React.useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onResize = () => {
    const { innerWidth, innerHeight } = window;

    if (innerHeight <= innerWidth) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  };

  return (
    <div className="main-container">
      <div className="area-container left-container">
        <Slider sections={sections.length} onChange={(e) => setSection(e.section)} orientation={orientation} />
      </div>
      <div className="area-container center-container">
        <Information section={section} />
      </div>
      <div className="area-container right-container">
        <Pagination page={sections[section]} />
      </div>
    </div>
  );
}

export default App;
