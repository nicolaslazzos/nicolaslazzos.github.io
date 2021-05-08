import React from "react";
import { AppBar as R95AppBar, Panel, Bar } from "react95";

import { Button } from "../Button";

export interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = () => {
	return (
		<R95AppBar style={styles.appBar}>
			<Button text="Nicolas Lazzos" icon="windows_logo" style={styles.homeButton} />

			<Bar size={35} style={styles.bar} />

			<Button text="Information Systems Engineer" icon="computer_explorer" />

			<div className="flex" style={{ flex: 1 }} />
			<Panel variant="well" className="flex" style={styles.panel}>
				<p style={{ fontSize: 14 }}>12:55 PM</p>
			</Panel>
		</R95AppBar>
	);
};

const styles = {
	appBar: { display: "flex", position: "relative", flexDirection: "row", alignItems: "flex-start", padding: 4 },
	homeButton: { fontWeight: "bold" },
	bar: { marginLeft: 6, marginRight: 6 },
	panel: { paddingLeft: 10, paddingRight: 10, alignItems: "center", justifyContent: "center", height: "100%" },
};
