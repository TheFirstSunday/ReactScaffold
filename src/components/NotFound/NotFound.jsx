import React from "react";
import "./style.less";
import new_404 from "@/assets/images/imgs/new404.png";

export default class NotFound extends React.Component {

  render() {
    return (
      <div className="not-found">
            <img src={new_404}  alt='not found!'/>
      </div>
    );
  }
}
