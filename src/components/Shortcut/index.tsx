import React from "react";
import styled, { css } from "styled-components";

import { Icon, IconProps } from "../Icon";

export interface ShortcutProps {
	text?: string;
	icon?: IconProps["name"];
	color?: string;
	style?: any;
	onClick?: () => void;
}

const StyledP = styled.p`
	${(props) => css`
		color: ${props.color};
	`}
	text-align: center;
	font-size: 15;
	margin-top: 3px;
	border-width: 2px;
	border-color: transparent;
	border-style: dotted;
	line-height: 20px;
`;

const StyledDiv = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-self: flex-start;
	padding: 10px;
	${(props) => css`
		&:active ${StyledP} {
			border-color: ${props.color === "black" ? "black" : "darkgrey"};
		}
	`}
`;

const defaultProps: ShortcutProps = {
	color: "white",
};

export const Shortcut: React.FC<ShortcutProps> = ({ text, icon, ...props }) => {
	return (
		<StyledDiv {...props}>
			<div className="flex" style={{ width: 100, alignItems: "center" }}>
				<Icon name={icon} size={50} />
				<StyledP {...props}>{text}</StyledP>
			</div>
		</StyledDiv>
	);
};

Shortcut.defaultProps = defaultProps;
