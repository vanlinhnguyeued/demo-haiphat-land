import React from "react";
import Banner from "./Banner";
import SuKienNoiBat from "./SuKienNoiBat";
import NhaLeBan from "./NhaLeBan";
import NhaLeThue from "./NhaLeThue";
import DuAnNoiBat from "./DuAnNoiBat";
import DuAnToanQuoc from "./DuAnToanQuoc";
import Contact from "./Contact";
import "./styles.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container_home">
        <Banner />
        <SuKienNoiBat />
        <NhaLeBan />
        <NhaLeThue />
        <DuAnNoiBat />
        <DuAnToanQuoc />
        <Contact />
      </div>
    );
  }
}

export default Home;
