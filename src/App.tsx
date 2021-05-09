import React from "react";

import Screen from "./components/Screen";
import { Shortcut } from "./components/Shortcut";
import { Window } from "./components/Window";

const App: React.FC = () => {
	const experience = React.useRef();

	return (
		<div className="main-container">
			<Screen>
				<Shortcut text="My Computer" icon="computer_explorer" />
				<Window
					title="Experience"
					icon="briefcase"
					items={[
						{ text: "Full Stack Developer @ Mobbex", icon: "computer_explorer_2" },
						{ text: "Full Stack Developer @ Mobbex", icon: "computer_explorer_2" },
						{ text: "Full Stack Developer @ Mobbex", icon: "computer_explorer_2" },
						{ text: "Full Stack Developer @ Mobbex", icon: "computer_explorer_2" },
					]}
				/>
			</Screen>
		</div>
	);
};

export default App;
