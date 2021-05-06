import React from "react";
import { Button, AppBar, Bar, Panel } from "react95";

const Screen = ({ children }) => {
	return (
		<div className="flex" style={{ flex: 1 }}>
			<div className="flex" style={{ flex: 1 }}>
				{children}
			</div>
			<AppBar
				style={{ display: "flex", position: "relative", flexDirection: "row", alignItems: "flex-start", padding: 4 }}
			>
				<Button style={{ fontWeight: "bold" }}>
					<img
						src="https://win98icons.alexmeub.com/icons/png/windows-0.png"
						style={{ height: 20, width: 20, marginRight: 6 }}
					/>
					Nicolas Lazzos
				</Button>

				<Bar size={35} style={{ marginLeft: 6, marginRight: 6 }} />
				<Button>
					<img
						src="https://win98icons.alexmeub.com/icons/png/computer_explorer-2.png"
						style={{ height: 20, width: 20, marginRight: 6 }}
					/>
					Information Systems Engineer
				</Button>
				<div className="flex" style={{ flex: 1 }} />
				<Panel
					variant="well"
					className="flex"
					style={{ paddingLeft: 6, paddingRight: 6, alignItems: "center", justifyContent: "center", height: "100%" }}
				>
					<p style={{ fontSize: 14 }}>12:55 PM</p>
				</Panel>
			</AppBar>
		</div>
	);
};

export default Screen;
