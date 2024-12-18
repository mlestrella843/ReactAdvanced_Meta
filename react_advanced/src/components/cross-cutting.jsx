import React from "react";

// Higher-Order Component (HOC) para agregar logging
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log(`Component ${WrappedComponent.name} rendered with props:`, props);
    return <WrappedComponent {...props} />;
  };
}

function UserProfile({ name }) {
    return <h1>Hello, {name}!</h1>;
  }

export const UserProfileWithLogging = withLogging(UserProfile);
