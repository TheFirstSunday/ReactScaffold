import React, { Fragment } from "react";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import App from "../view/App";
import Loadable from "react-loadable";
import { PageLoading, Nofound } from "components";
import routers from "./routers";
const history = createHistory();
const Nofound = Loadable({
  loader: () => import("view/exceptionPage/Nofound"),
  loading: PageLoading
});

export default class RouterView extends React.Component {
  constructor(props) {
    super(props);
  }

  onEnter(Component, props) {
    const LoadComponent = Loadable({
      loader: Component,
      loading: PageLoading
    });
    return <LoadComponent {...props} />;
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Route
            render={renderProps => {
              return (
                  <App renderProps={renderProps}>
                    <Switch>
                      <Redirect exact from="/" to="/fuse/home" />
                      {routers.map(route => (
                        <Route
                          path={route.path}
                          key={route.path}
                          render={props =>
                            this.onEnter(route.components, props, renderProps)
                          }
                        />
                      ))}
                      <Route component={Nofound} />
                    </Switch>
                  </App>
              );
            }}
          />
        </Router>
      </Fragment>
    );
  }
}
