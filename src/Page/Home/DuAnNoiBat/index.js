import React, { Component } from "react";
import RenderItem from "./RenderItem";
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
        "http://trananh.citysoft.vn/api/project/getall?pageSize=8&pageIndex=1"
      )
      .then((res) => this.setState({ data: res.data }));
  };

  componentDidMount() {
    this.setData();
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container_duan_home">
        <h2 className="title_duan_home" data-aos="fade-up">
          Dự án nỗi bật
        </h2>
        <div className="content_duan_home">
          {data.map((item, index) => (
            <RenderItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default index;
