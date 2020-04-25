import React, {PureComponent, Fragment} from "react";
import {Sider} from '@/components'
export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, renderProps  } = this.props;
 
    return (
        <Fragment>
          <Sider></Sider> 
        </Fragment>
    );
  }
}
