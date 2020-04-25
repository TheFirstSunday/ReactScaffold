import React, { Fragment,Component } from "react";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import {createBrowserHistory} from "history";
import App from "@/view/Index";
import Loadable from "react-loadable";
import { PageLoading, NotFound } from "@/components";

import routers from "./routers";
const history = createBrowserHistory();


const Nofound = Loadable({
  loader: () => import(NotFound),
  loading: PageLoading
});

export default class RouterView extends Component {

  onEnter(Component, props) {
    const LoadComponent = Loadable({
      loader: Component,
      loading: PageLoading
    });
    return <LoadComponent {...props} />;
  }
 
  render() {
    console.log(routers)
    return (
      <Fragment>
        <Router history={history}>
          <Route
            render={renderProps => {
              return (
                  <App renderProps={renderProps}>
                    <Switch>
                      <Redirect exact from="/" to="/home" />
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