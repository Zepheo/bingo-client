import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((s) => s.User);
  return (
    <Route {...rest}
      render={(props) => {
        if (user.name) {
          return <Component {...rest} {...props} />;
        }
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
      }}
    />
  );
};

export default ProtectedRoute;