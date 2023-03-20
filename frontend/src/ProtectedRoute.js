import React from 'react';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <div className="unauthorized">
      <span role="img" aria-label="Warning">
        ⚠️
      </span>{' '}
      You must be logged in to view this page. Please <a href="/login">login</a>.
    </div>
  );
};

export default ProtectedRoute;
