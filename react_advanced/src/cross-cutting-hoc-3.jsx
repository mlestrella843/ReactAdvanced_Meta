import { useState, useEffect } from "react";

// Higher-Order Component (HOC) for tracking mouse position
const withMousePosition = (WrappedComponent) => {
  return (props) => {
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

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

// PanelMouseLogger Component
export const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md max-w-sm mx-auto">
      <p className="text-lg font-semibold text-gray-700">Mouse Position</p>
      <div className="mt-2 flex justify-between">
        <span className="text-blue-500 font-mono">x: {mousePosition.x}</span>
        <span className="text-green-500 font-mono">y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

// PointMouseLogger Component
export const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p className="text-center text-xl font-bold text-gray-800">
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

// Wrapped Components
export const PanelMouseTracker = withMousePosition(PanelMouseLogger);
export const PointMouseTracker = withMousePosition(PointMouseLogger);
