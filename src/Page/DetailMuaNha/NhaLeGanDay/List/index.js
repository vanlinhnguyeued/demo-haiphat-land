import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { tiengVietKhongDau } from "../../../../function/KhongDau";
import { topFunction } from "../../../../function/ToTop";
import "./styles.css";
class index extends React.Component {
  render() {
    const { data } = this.props;
    const columns = [
      {
        title: () => <p className="p_columns-tieude">#</p>,
        dataIndex: "Avatar",
        key: "Avatar",
        width: 70,
        render: (text, row) => (
          <Link
            to={{
              pathname: `/mua-nha/${tiengVietKhongDau(text).replace(
                / /g,
                "-"
              )}`,
              state: {
                item: row,
              },
            }}
          >
            <img src={text} className="img_column" />
          </Link>
        ),
      },
      {
        title: () => <p className="p_columns-tieude">Tiêu đề</p>,
        dataIndex: "TenCH",
        key: "TenCH",
        width: 250,
        render: (text, row) => (
          <Link
            to={{
              pathname: `/mua-nha/${tiengVietKhongDau(text).replace(
                / /g,
                "-"
              )}`,
              state: {
                item: row,
              },
            }}
          >
            <p className="p-tieude">{text}</p>
          </Link>
        ),
      },
      {
        title: () => <p className="p_columns-tieude">Giá</p>,
        dataIndex: "Gia",
        key: "Gia",
        width: 80,
      },
      {
        title: () => <p className="p_columns-tieude">Số PN</p>,
        dataIndex: "PhongNgu",
        key: "PhongNgu",
        width: 70,
      },
      {
        title: () => <p className="p_columns-tieude">Số WC</p>,
        key: "WC",
        dataIndex: "WC",
        width: 70,
      },
      {
        title: () => <p className="p_columns-tieude">Khu vực</p>,
        key: "TenKhuVuc",
        dataIndex: "TenKhuVuc",
        width: 150,
      },
    ];
    return (
      <div className="main_column">
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          style={{ marginBottom: 15 }}
        />
      </div>
    );
  }
}

export default index;
