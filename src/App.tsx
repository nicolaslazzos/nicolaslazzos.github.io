import React from "react";

import Screen from "./components/Screen";
import { Shortcut } from "./components/Shortcut";
import { Explorer } from "./components/Explorer";
import { Notepad } from "./components/Notepad";

const App: React.FC = () => {
	const explorer = React.useRef<any>();
	const notepad = React.useRef<any>();

	return (
		<div className="main-container">
			<Screen>
				<Shortcut text="My Computer" icon="computer_explorer" onClick={() => explorer.current?.open()} />
				<Shortcut text="Experience.txt" icon="notepad" onClick={() => notepad.current?.open()} />
				<Explorer
					ref={(ref) => (explorer.current = ref)}
					title="Experience"
					items={[
						{ text: "Full Stack Developer @ Mobbex", icon: "computer_explorer_2" },
						{ text: "Full Stack Developer @ Mobbex", icon: "computer_explorer_2" },
						{ text: "Full Stack Developer @ Mobbex", icon: "computer_explorer_2" },
						{ text: "Full Stack Developer @ Mobbex", icon: "computer_explorer_2" },
					]}
				/>
				<Notepad
					ref={(ref) => (notepad.current = ref)}
					title="Experience.txt"
					text={
						<p>
							<span style={{ fontSize: 20 }}>Full Stack Developer</span>
							<br />
							August 2020 - Now
							<br />
							Mobbex
							<br />
						</p>
					}
				/>
			</Screen>
		</div>
	);
};

export default App;
