import React, { Component } from "react";
import { Modal } from "antd";
import BieuDo from "../GoogleMap/MapView";
import BieuDoVT from "../GoogleMap/MapViewVT";
import StreetView from "../GoogleMap/StreetView";
import ListImg from "../SliderImage";
import { CloseOutlined } from "@ant-design/icons";
import "./styles.css";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idMD: 1,
      visible: false,
    };
  }

  showModal(idMD) {
    this.setState({ idMD }, () => this.setState({ visible: true }));
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, idMD } = this.state;
    const { data, dataImg, dataMatBang } = this.props;
    return (
      <Modal
        title=""
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={null}
        zIndex={99999}
        style={{
          top: 0,
          width: "100vw",
          height: "100vh",
          margin: 0,
        }}
        bodyStyle={{
          width: "100vw",
          height: "100vh",
          padding: 0,
          backgroundColor: "#000",
        }}
        closable={false}
      >
        <div
          style={{
            width: "100%",
            textAlign: "right",
            color: "#fff",
            paddingTop: 30,
          }}
        >
          <label className="close-modal" onClick={this.handleCancel}>
            <CloseOutlined style={{ color: "#fff" }} size={25} />
          </label>
        </div>
        <div style={{ height: "80%", width: "100%", marginTop: 30 }}>
          {idMD == 1 ? (
            <ListImg dataImg={dataMatBang} />
          ) : idMD == 2 ? (
            <BieuDoVT lat={data.Lat} lng={data.Lng} TieuDe={data.DiaChi} />
          ) : idMD == 3 ? (
            <BieuDo lat={data.Lat} lng={data.Lng} TieuDe={data.DiaChi} />
          ) : idMD == 4 ? (
            <StreetView lat={data.LatStreet} lng={data.Lngtreet} />
          ) : (
            <ListImg dataImg={dataImg} />
          )}
        </div>
      </Modal>
    );
  }
}

export default index;
