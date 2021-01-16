import { Grommet } from "grommet";

import AppBar from "./AppBar";

import theme from "./theme.json";

function App() {
  return (
    <Grommet theme={theme} style={{ backgroundColor: "transparent" }}>
      <AppBar
        actions={[
          { title: "Home" },
          { title: "About", type: "secondary" },
          { title: "Contact", type: "secondary" },
        ]}
      />
    </Grommet>
  );
}

export default App;
