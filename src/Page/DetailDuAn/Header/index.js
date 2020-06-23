import React, { Component } from "react";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          ID: 1,
          Title: "Tổng quan",
          KhongDau: "#tong-quan",
        },
        {
          ID: 2,
          Title: "Chủ đâu tư",
          KhongDau: "#chu-dau-tu",
        },
        {
          ID: 3,
          Title: "Ưu đãi",
          KhongDau: "#uu-dai",
        },
        {
          ID: 4,
          Title: "Chính sách ngân hàng",
          KhongDau: "#ngan-hang",
        },
        {
          ID: 5,
          Title: "Tài liệu",
          KhongDau: "#tai-lieu",
        },
      ],
      isShow: false,
    };
  }
  handleMenu = () => {
    const { isShow } = this.state;
    this.setState({ isShow: !isShow });
  };
  handleItem = (ID) => {
    this.setState({ isShow: false });
    this.props.setTab(ID);
  };
  render() {
    const { menu, isShow } = this.state;
    const { data, idTab } = this.props;
    return (
      <div>
        <h2 className="tenduan_header_detailduan">{data.TenDA}</h2>
        <div className="header_detailduan">
          <ul className="row_header_detailduan">
            {menu.map((item, i) => (
              <li
                key={i}
                className={
                  idTab === item.ID ? "item_header_active" : "item_header"
                }
              >
                <a
                  href={item.KhongDau}
                  className={
                    idTab === item.ID ? "a_item_header_active" : "a_item_header"
                  }
                  onClick={() => this.props.setTab(item.ID)}
                >
                  {item.Title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="column_header_detailduan">
            <div className="icon_header_detailduan" onClick={this.handleMenu}>
              {!isShow && <i className="fa fa-bars" />}
              {isShow && <i className="fa fa-times" />}
            </div>
            {isShow &&
              menu.map((item, i) => (
                <li
                  key={i}
                  className={
                    idTab === item.ID ? "item2_header_active" : "item2_header"
                  }
                >
                  <a
                    href={item.KhongDau}
                    className={
                      idTab === item.ID
                        ? "a_item2_header_active"
                        : "a_item2_header"
                    }
                    onClick={() => this.handleItem(item.ID)}
                  >
                    {item.Title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default index;
