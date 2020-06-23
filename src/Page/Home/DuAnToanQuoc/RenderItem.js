import React, { Component } from "react";
import { Link } from "react-router-dom";
import { topFunction } from "../../../function/ToTop";

import "./styles.css";

class RenderItem extends Component {
  render() {
    const { item, index } = this.props;
    return (
      <div className="item_duantq_home" data-aos="fade-up">
        <div className="item_img_duantq_home">
          <Link
            to={{
              pathname: `/du-an`,
              state: {
                item,
              },
            }}
          >
            <img src={item.Avatar} className="img_duantq_home" />
          </Link>
        </div>
        <Link
          to={{
            pathname: `/du-an`,
            state: {
              item,
            },
          }}
        >
          <h2 className="title_item_thongtin_duantq_home">{item.TenKV}</h2>
        </Link>
      </div>
    );
  }
}
export default RenderItem;
