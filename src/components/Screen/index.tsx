import React from "react";
import { useResizeDetector } from "react-resize-detector";

import { AppBar } from "../AppBar";

interface ResizeContextProps {
  height: number;
  width: number;
}

export const ResizeContext = React.createContext<ResizeContextProps>({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const useResize = () => React.useContext(ResizeContext);

export interface ScreenProps {
  children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
  const { ref, width, height } = useResizeDetector();

  return (
    <div className="flex" style={{ flex: 1 }}>
      <div ref={ref} className="flex" style={{ flex: 1 }}>
        <ResizeContext.Provider value={{ width: width ?? window.innerWidth, height: height ?? window.innerHeight }}>
          {children}
        </ResizeContext.Provider>
      </div>
      <AppBar />
    </div>
  );
};

export default Screen;
