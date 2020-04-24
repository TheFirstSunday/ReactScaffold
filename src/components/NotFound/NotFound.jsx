import React from "react";
import "./style.less";
import new_404 from "assets/images/img/new404.png";

export default class Nofound extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="not-found">
            <img src={new_404} />
      </div>
                              
    );
  }
}
