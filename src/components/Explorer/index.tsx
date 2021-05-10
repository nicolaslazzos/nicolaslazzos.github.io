import React from "react";
import { Cutout } from "react95";

import { Window, WindowProps } from "../Window";
import { Shortcut, ShortcutProps } from "../Shortcut";

export interface ExplorerProps extends WindowProps {
	items: ShortcutProps[];
}

export const Explorer = React.forwardRef<Window, ExplorerProps>((props, ref) => {
	const { items } = props;

	return (
		<Window
			{...props}
			ref={ref}
			toolbar={["File", "Edit", "View", "Help"]}
			icon="explorer"
			footer={`${items?.length ?? 0} object[s]`}
			resizable
		>
			<Cutout className="flex" style={{ margin: 2, marginBottom: 4, backgroundColor: "white" }}>
				<div className="flex" style={{ flexDirection: "row", flexWrap: "wrap" }}>
					{items?.map((item: ShortcutProps, i: number) => {
						return <Shortcut key={`item_${i}`} color="black" {...item} />;
					})}
				</div>
			</Cutout>
		</Window>
	);
});
