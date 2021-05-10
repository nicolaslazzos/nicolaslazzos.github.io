import React from "react";

export interface IconProps {
	name?: keyof typeof icons;
	size?: number;
	style?: any;
}

const defaultProps: IconProps = {
	size: 22,
	name: "windows_logo",
};

export const Icon: React.FC<IconProps> = ({ name, size, style }) => {
	return <img src={icons[name ?? "windows_logo"]} alt={name} style={{ height: size, width: size, ...style }} />;
};

Icon.defaultProps = defaultProps;

const icons = {
	windows_logo: "https://win98icons.alexmeub.com/icons/png/windows-0.png",
	computer_explorer: "https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png",
	briefcase: "https://win98icons.alexmeub.com/icons/png/briefcase-4.png",
	computer_explorer_2: "https://win98icons.alexmeub.com/icons/png/computer_explorer_2k-2.png",
	notepad: "https://win98icons.alexmeub.com/icons/png/notepad_file-2.png",
	explorer: "https://win98icons.alexmeub.com/icons/png/directory_open_cool-0.png",
};
