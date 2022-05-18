import React from "react";

import { Route, Link, Switch } from "react-router-dom";

import { routes } from "./routes";

const Router = () => {
  return (
    <div>
      {" "}
      <Switch>
        {routes &&
          routes.map((route, idx) => {
            return <Route path={route.path} {...route}></Route>;
          })}
      </Switch>
    </div>
  );
};

export default Router;
