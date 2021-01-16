import React from "react";
import { Header, Anchor, Heading, Button } from "grommet";

const AppBar = ({ actions }) => {
  return (
    <Header margin="medium">
      <Heading level={3} color="brand" margin="none">
        Nicolas Lazzos
      </Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {actions.map((action) => {
          let cmp;

          if (action?.type === "secondary") {
            cmp = <Anchor href="#" label={action.title} focusIndicator={false} />;
          } else {
            cmp = <Button primary label={action.title} focusIndicator={false} />;
          }

          return <div style={{ marginLeft: 30 }}>{cmp}</div>;
        })}
      </div>
    </Header>
  );
};

export default AppBar;
