import React, { useEffect, useState } from "react";
import "./styles.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table, Tag, Space } from "antd";
const PropsType = {};
function Posts({}) {
  useEffect(() => {
    document.title = "Tin đăng của bạn  - Trang cá nhân";
  }, []);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "#",
      dataIndex: "#",
      key: "#",
      width: 60,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      width: 200,
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Phê duyệt",
      dataIndex: "approved",
      key: "approved",
      width: 100,
    },
    {
      title: "Ngày tạo",
      key: "dateCreated",
      dataIndex: "dateCreated",
      width: 120,
    },
    {
      title: "Ngày sửa",
      key: "dateOfCorrection",
      dataIndex: "dateOfCorrection",
      width: 120,
    },
    {
      title: "#",
      dataIndex: "#_",
      key: "#_",
      width: 70,
    },
  ];

  useEffect(() => {
    let data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        id: i,
        "#": i,
        title: `Text location${i}`,
        approved: true,
        dateCreated: "18/6/2020",
        dateOfCorrection: "18/6/2020",
        "#_": i,
      });
    }
    setData(data);
  }, []);
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };
  return (
    <div className="main_post" data-aos="fade-up">
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}
Posts.propTypes = PropsType;
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
