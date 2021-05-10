import React from "react";
import { Cutout } from "react95";

import { Window, WindowProps } from "../Window";

export interface NotepadProps extends WindowProps {
	text?: string | React.ReactNode;
}

export const Notepad = React.forwardRef<Window, NotepadProps>((props, ref) => {
	return (
		<Window
			{...props}
			ref={ref}
			title={`${props.title} - Notepad`}
			toolbar={["File", "Edit", "Search", "Help"]}
			icon="notepad"
		>
			<Cutout style={{ flex: 1, height: "300px", margin: 2, backgroundColor: "white" }}>
				<div className="flex">{props.text}</div>
			</Cutout>
		</Window>
	);
});
