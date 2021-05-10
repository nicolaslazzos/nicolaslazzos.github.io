import React from "react";

import { AppBar } from "../AppBar";

export interface ScreenProps {
	children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
	return (
		<div className="flex" style={{ flex: 1 }}>
			<div className="flex" style={{ flex: 1 }}>
				{children}
			</div>
			<AppBar />
		</div>
	);
};

export default Screen;
