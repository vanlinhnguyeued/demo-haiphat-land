import React, { Component } from "react";
import RenderItem from "./renderItem";
import axios from "axios";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  setData = () => {
    axios
      .get(
        "http://trananh.citysoft.vn/api/project/getall?pageSize=2&pageIndex=1"
      )
      .then((res) => this.setState({ data: res.data }));
  };

  componentDidMount() {
    this.setData();
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container_duan_chudautu">
        <h2 className="title_duan_chudautu">Dự án phát triển</h2>
        <div className="content_duan_chudautu">
          {data.map((item, index) => (
            <RenderItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default index;
