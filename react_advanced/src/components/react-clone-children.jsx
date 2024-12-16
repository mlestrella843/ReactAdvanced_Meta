import * as React from 'react';

const Row = ({ children, spacing }) => {
  return (
    <div className="flex items-center space-x-8">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: `${child.props.className || ''}`, // Preserve existing classes if any
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className="p-4 bg-gray-100">
      <Row spacing={32}>
        <p className="text-sm font-semibold">Pizza Margarita</p>
        <p className="text-sm text-gray-600">2</p>
        <p className="text-sm text-gray-600">$305</p>
        <p className="text-sm text-gray-600">10:35</p>
        <p className="text-sm text-gray-600">John</p>
      </Row>
    </div>
  );
}

export { LiveOrders };

