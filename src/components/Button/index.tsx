import React from "react";
import { Button as R95Button } from "react95";

import { Icon, IconProps } from "../Icon";

export interface ButtonProps {
  text?: string;
  icon?: IconProps["name"];
  style?: any;
}

export const Button: React.FC<ButtonProps> = ({ text, icon, ...props }) => {
  return (
    <R95Button {...props}>
      <Icon name={icon} size={22} style={{ marginRight: 6 }} />
      <div style={styles.text}>{text}</div>
    </R95Button>
  );
};

const styles = {
  text: { display: "block", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" } as object,
};
