import React from "react";

function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isAuthenticated = props.isAuthenticated; 

    if (!isAuthenticated) {
      return <h2>Please log in to access this page.</h2>;
    }

    return <WrappedComponent {...props} />; 
  };
}

function AdminPanel({ username }) {
    return <h1>Welcome to the Admin Panel, {username}!</h1>;
  }


export const ProtectedAdminPanel = withAuth(AdminPanel);
