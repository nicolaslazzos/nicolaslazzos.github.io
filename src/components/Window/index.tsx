import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Window as RN95Window, WindowHeader, Button, Toolbar, Panel } from "react95";

import { Shortcut, ShortcutProps } from "../Shortcut";
import { Icon, IconProps } from "../Icon";

const StyledContainer = styled.div`
	.window-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}
	.icon {
		font-weight: 900;
		margin-left: -1px;
		position: relative;
	}
	.close-icon {
		font-size: 35px;
		margin-top: -1px;
		transform: rotateZ(45deg);
	}
	.maximize-icon {
		font-size: 26px;
		margin-top: 1px;
	}
	.minimize-icon {
		margin-left: 0px;
		font-size: 28px;
		margin-top: -16px;
	}
	.window {
		width: 400px;
		min-height: 200px;
	}
	.toolbar {
		padding: 2px;
	}
	.content {
		flex: 1;
		margin: 2px;
		margin-bottom: 0px;
		margin-top: 0px;
		padding: 0px;
		background-color: white;
		overflow: hidden;
		height: 300px;
	}
	.footer {
		flex: 1;
		margin: 2px;
		margin-top: 0px;
		height: 31px;
		line-height: 31px;
		padding-left: 4px;
	}
`;

export interface WindowProps {
	title?: string;
	icon?: IconProps["name"];
	items?: ShortcutProps[];
}

export const Window: React.FC<WindowProps> = ({ items, title, icon }, ref) => {
	const [visible, setOpen] = React.useState(false);

	const open = () => setOpen(true);

	const close = () => setOpen(false);

	React.useImperativeHandle(ref, () => ({ open, close }));

	if (!visible) return null;

	return (
		<motion.div
			drag
			dragConstraints={false}
			dragElastic={0}
			dragMomentum={false}
			style={{ position: "absolute", zIndex: 99 }}
		>
			<StyledContainer>
				<RN95Window className="window" resizable>
					<WindowHeader className="window-header">
						<Icon name={icon} style={{ marginLeft: 4, marginRight: 8 }} />
						<span>{title}</span>
						<div className="flex" style={{ flex: 1 }} />
						<Button>
							<span className="minimize-icon icon">_</span>
						</Button>
						<Button style={{ marginLeft: 4 }}>
							<span className="maximize-icon icon">◻</span>
						</Button>
						<Button style={{ marginLeft: 4 }}>
							<span className="close-icon icon">+</span>
						</Button>
					</WindowHeader>
					<Toolbar className="toolbar">
						<Button variant="menu" size="sm">
							File
						</Button>
						<Button variant="menu" size="sm">
							Edit
						</Button>
						<Button variant="menu" size="sm">
							View
						</Button>
						<Button variant="menu" size="sm">
							Help
						</Button>
					</Toolbar>
					<Panel variant="well" className="content">
						<div className="flex" style={{ flexDirection: "row", flexWrap: "wrap" }}>
							{items?.map((item: ShortcutProps, i: number) => {
								return <Shortcut key={`item_${i}`} color="black" {...item} />;
							})}
						</div>
					</Panel>
					<div className="flex" style={{ flexDirection: "row" }}>
						<Panel variant="well" className="footer flex">
							{`${items?.length ?? 0} object[s]`}
						</Panel>
						<Panel variant="well" className="footer flex" />
					</div>
				</RN95Window>
			</StyledContainer>
		</motion.div>
	);
};
