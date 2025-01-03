
import { useEffect, useState } from "react";

export const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };

  }, []);

  return render({ mousePosition });
};


export const PanelMouseLogger = () => {
    return (
      <div className="BasicTracker">
        <p>Mouse position:</p>
        <MousePosition
          render={({ mousePosition }) => (
            <div className="Row">
              <span>x: {mousePosition.x}</span>
              <span>y: {mousePosition.y}</span>
            </div>
          )}
        />
      </div>
    );
  };
  

export const PointMouseLogger = () => {
    return (
      <MousePosition
        render={({ mousePosition }) => (
          <p>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
    );
  };
  