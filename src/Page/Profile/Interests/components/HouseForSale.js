import React, { useEffect, useState } from "react";
import "../styles.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RenderItem from "../../../../Component/components/RenderItemHouse";
import { data } from "./data-demo";
import { Spin } from "antd";
import { remove } from "lodash";
const PropsType = {};
function HouseForSale({}) {
  const [listHouseForSale, setListHouseForSale] = useState([]);
  useEffect(() => {
    setListHouseForSale(data);
  }, []);
  const onLikeItem = (house) => {
    let before = [...listHouseForSale];
    remove(before, (item) => {
      return item == house;
    });
    setListHouseForSale(before);
  };
  if (listHouseForSale.length == 0)
    return (
      <div className="loading_page">
        <Spin />
      </div>
    );
  else
    return (
      <div>
        <div>
          <a className="title_duan_home" href="/mua-nha">
            {listHouseForSale.length} Nhà lẽ bán
          </a>
        </div>
        <div className="content_nhale_home">
          {listHouseForSale.map((item, index) => (
            <RenderItem
              item={item}
              index={index}
              key={index}
              onLikeItem={onLikeItem}
              isDelete={true}
            />
          ))}
        </div>
      </div>
    );
}
HouseForSale.propTypes = PropsType;
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(HouseForSale);
