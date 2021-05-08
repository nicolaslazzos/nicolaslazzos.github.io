import React from "react";
import { css } from "styled-components";
import { Button } from "react95";

import { Icon, IconProps } from "../Icon";

export const createWellBorderStyles = (invert = false) =>
	invert
		? css`
				border-style: solid;
				border-width: 2px;
				border-left-color: ${({ theme }) => theme.borderDark};
				border-top-color: ${({ theme }) => theme.borderDark};
				border-right-color: ${({ theme }) => theme.borderLightest};
				border-bottom-color: ${({ theme }) => theme.borderLightest};
		  `
		: css`
				border-style: solid;
				border-width: 2px;
				border-left-color: ${({ theme }) => theme.borderLightest};
				border-top-color: ${({ theme }) => theme.borderLightest};
				border-right-color: ${({ theme }) => theme.borderDark};
				border-bottom-color: ${({ theme }) => theme.borderDark};
		  `;

export interface ShortcutProps {
	text?: string;
	icon?: IconProps["name"];
	style?: any;
}

export const Shortcut: React.FC<ShortcutProps> = ({ text, icon, ...props }) => {
	return (
		<div {...props} className="flex" style={{ alignSelf: "flex-start", padding: 10 }}>
			<div className="flex" style={{ width: 100, alignItems: "center" }}>
				<Icon name={icon} size={50} />
				<p
					style={{
						color: "white",
						textAlign: "center",
						fontSize: 15,
						marginTop: 5,
						borderWidth: 2,
						borderColor: "darkgrey",
						borderStyle: "dotted",
					}}
				>
					{text}
				</p>
			</div>
		</div>
	);
};
