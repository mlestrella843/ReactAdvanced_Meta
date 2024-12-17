import * as React from "react";

// RadioGroup Component
export const RadioGroup = ({ onChange, selected, children }) => {
  // Handle the change event inside RadioGroup
  const handleChange = (e) => {
    const newValueSelected = e.target.value;
    onChange(newValueSelected); // Pass the new value to the parent
  };

  // Clone children and pass additional props
  const RadioOptions = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        checked: child.props.value === selected, // Compare with the selected value
        onChange: handleChange, // Attach the onChange handler
      });
    }
    return child;
  });

  return <div className="space-y-4">{RadioOptions}</div>; // Add vertical spacing
};

// RadioOption Component
export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="flex items-center space-x-3">
      <input
        id={value}
        type="radio"
        name="radio-group" // Ensures all radio inputs belong to the same group
        value={value}
        checked={checked} // Determines if this radio is selected
        onChange={onChange} // Calls the onChange handler passed from RadioGroup
        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <label
        htmlFor={value}
        className="text-gray-700 text-sm font-medium cursor-pointer"
      >
        {children}
      </label>
    </div>
  );
};
