import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Window as RN95Window, WindowHeader, Button, Toolbar, Panel } from "react95";

import { Icon, IconProps } from "../Icon";
import { ResizeContext } from "../Screen";

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
    width: ${(props) => {
      // @ts-ignore
      return props.width < 400 ? `${props.width}px` : "400px";
    }};
    min-height: 200px;
  }
  .toolbar {
    padding: 2px;
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
  toolbar?: string[];
  footer?: string;
  resizable?: boolean;
  children?: React.ReactNode;
}

export class Window extends React.Component<WindowProps> {
  static contextType = ResizeContext;

  state = { visible: false };

  public open = () => this.setState({ visible: true });

  public close = () => this.setState({ visible: false });

  render() {
    const { title, icon, toolbar, footer, resizable, children } = this.props;

    if (!this.state.visible) return null;

    const { width, height } = this.context;

    return (
      <motion.div
        drag
        dragConstraints={false}
        dragElastic={0}
        dragMomentum={false}
        style={{ position: "absolute", zIndex: 99 }}
      >
        <StyledContainer {...{ height, width }}>
          <RN95Window className="window" resizable={resizable}>
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
              <Button style={{ marginLeft: 4 }} onClick={this.close}>
                <span className="close-icon icon">+</span>
              </Button>
            </WindowHeader>

            {!!toolbar?.length && (
              <Toolbar className="toolbar">
                {toolbar.map((item, i) => {
                  return (
                    <Button key={`item_${i}`} variant="menu" size="sm">
                      {item}
                    </Button>
                  );
                })}
              </Toolbar>
            )}

            {children}

            {!!footer && (
              <div className="flex" style={{ flexDirection: "row" }}>
                <Panel variant="well" className="footer flex">
                  {footer}
                </Panel>
                <Panel variant="well" className="footer flex" />
              </div>
            )}
          </RN95Window>
        </StyledContainer>
      </motion.div>
    );
  }
}
