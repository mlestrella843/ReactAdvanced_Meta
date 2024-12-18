import React, { useState, useEffect } from "react";

const MouseTracker = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <>{render(mousePosition)}</>;
};
export {MouseTracker};

export const PanelMouseLogger = ({ mousePosition }) => {
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

  export const PointMouseLogger = ({ mousePosition }) => {
    return (
      <p className="text-center text-xl font-bold text-gray-800">
        ({mousePosition.x}, {mousePosition.y})
      </p>
    );
  };
  
