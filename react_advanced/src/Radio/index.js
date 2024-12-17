import * as React from "react";

// RadioGroup Component
export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
  });

  return (
    <div className="w-full space-y-4 text-left">{RadioOptions}</div>
  );
};

// RadioOption Component
export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="flex items-center space-x-3 w-full">
      <input
        id={value}
        type="radio"
        name="radio-group" // Ensures all inputs belong to the same group
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
      />
      <label
        htmlFor={value}
        className="text-gray-700 text-sm font-medium cursor-pointer w-full"
      >
        {children}
      </label>
    </div>
  );
};

