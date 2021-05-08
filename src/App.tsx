import React from "react";

import Screen from "./components/Screen";
import { Shortcut } from "./components/Shortcut";

function App() {
	return (
		<div className="main-container">
			<Screen>
				<Shortcut text="My Computer" icon="computer_explorer" />
			</Screen>
		</div>
	);
}

export default App;
