import React from "react";
import { AppBar as R95AppBar, Panel, Bar } from "react95";
import dayjs from "dayjs";

import { Button } from "../Button";

export interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = () => {
  const [hour, setHour] = React.useState(dayjs().format("hh:mm A"));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHour(dayjs().format("hh:mm A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <R95AppBar style={styles.appBar}>
      <Button text="Nicolas Lazzos" icon="windows_logo" style={styles.homeButton} />

      <Bar size={35} style={styles.bar} />

      <div className="flex" style={{ flex: 1 }}>
        <div className="flex" style={styles.buttonsContainer}>
          <Button text="Information Systems Engineer" icon="computer_explorer" style={styles.button} />
        </div>
      </div>
      <Panel variant="well" className="flex" style={styles.panel}>
        <p style={{ fontSize: 14 }}>{hour}</p>
      </Panel>
    </R95AppBar>
  );
};

const styles = {
  appBar: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 4,
    overflow: "hidden",
    flexShrink: 1,
    width: "100%",
  },
  homeButton: { fontWeight: "bold" },
  button: { flex: 1, maxWidth: 170, marginRight: 6 },
  buttonsContainer: { flexDirection: "row", flexWrap: "nowrap", flexShrink: 1 } as object,
  bar: { marginLeft: 6, marginRight: 6 },
  panel: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    whiteSpace: "nowrap",
  },
};
