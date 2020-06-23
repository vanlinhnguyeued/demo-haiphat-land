import React, { useEffect, useState } from "react";
import "./styles.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HouseForRent from "./components/HouseForRent";
import HouseForSale from "./components/HouseForSale";
import Projects from "./components/Projects";
import { Tabs } from "antd";
import { getListProjects, cleanUpData } from "../reducer";
const PropsType = {
  getListProjects: PropTypes.func,
  listProjects: PropTypes.array,
  isLoadingProject: PropTypes.bool,
};
function Interests({ getListProjects, listProjects, isLoadingProject }) {
  useEffect(() => {
    document.title = "Quan tâm - Trang cá nhân";
    getListProjects();
    return () => {
      cleanUpData();
    };
  }, []);
  const { TabPane } = Tabs;
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Dự án" key="1">
        <Projects listProjects={listProjects} isLoading={isLoadingProject} />
      </TabPane>
      <TabPane tab="Nhà bán" key="2">
        <HouseForSale />
      </TabPane>
      <TabPane tab="Nhà thuê" key="3">
        <HouseForRent />
      </TabPane>
    </Tabs>
  );
}
Interests.propTypes = PropsType;
const mapStateToProps = (state) => ({
  listProjects: state.profile.listProjects,
  isLoadingProject: state.profile.isLoadingProject,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getListProjects,
      cleanUpData,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Interests);
