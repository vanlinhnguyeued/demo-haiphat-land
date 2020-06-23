import React, { useEffect, useState } from "react";
import "../styles.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import RenderItem from "../../../../Component/components/RenderItemProjects";

const PropsType = {
  listProjects: PropTypes.array,
  isLoading: PropTypes.bool,
};
function Projects({ listProjects, isLoading }) {
  const [listProject, setListProject] = useState([]);
  useEffect(() => {
    setListProject(listProjects);
  }, [listProjects]);

  return !isLoading ? (
    <div>
      <a className="title_duan_home" href="/du-an">
        {listProject.length} Dự án bất động sản
      </a>
      <div className="content_nhale_home">
        {listProject.map((item, index) => (
          <RenderItem item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  ) : (
    <div className="loading_page">
      <Spin />
    </div>
  );
}
Projects.propTypes = PropsType;
export default Projects;
