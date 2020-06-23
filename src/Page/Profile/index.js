import React, { useEffect, useState } from "react";
import "./styles.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AccountSetting from "./AccountSetting";
import Posts from "./Posts";
import Interests from "./Interests";
import { logout } from "./reducer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
const PropsType = {
  logout: PropTypes.func,
};
function Profile({ logout }) {
  const history = useHistory();
  const [isClick, setIsClick] = useState(true);
  const [activeValue, setActiveValue] = useState({
    id: 3,
    value: "Thông tin cá nhân",
  });
  const checkActive = () => {
    let currentPath = location.pathname;
    switch (currentPath) {
      case "/trang-ca-nhan/quan-tam":
        setActiveValue({
          id: 1,
          value: "Quan tâm",
        });
        break;
      case "/trang-ca-nhan/tin-dang-cua-ban":
        setActiveValue({
          id: 2,
          value: "Tin đăng của bạn",
        });
        break;

      case "/trang-ca-nhan/thong-tin":
        setActiveValue({
          id: 3,
          value: "Thông tin cá nhân",
        });
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    checkActive();
  }, [isClick]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token == null) {
      history.replace("/dang-nhap");
    }
  }, []);
  return (
    <div className="container_profile">
      <div className="content_profile flex_row">
        <div className="flex_row">
          <i className="fa fa-bars title_menu_profile" aria-hidden="true" />
          <div className="title_menu_profile">{activeValue.value}</div>
        </div>
        <div className="flex_row">
          <Link
            className="item_menu_profile flex_row"
            to={{
              pathname: "./quan-tam",
            }}
            style={{ color: activeValue.id === 1 && "var(--menuHover)" }}
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            <i className="fa fa-heart title_menu_profile" aria-hidden="true" />
            <div className="title_menu_profile"> Danh sách quan tâm</div>
          </Link>
          <Link
            className="item_menu_profile flex_row"
            to={{
              pathname: "./tin-dang-cua-ban",
            }}
            style={{ color: activeValue.id === 2 && "var(--menuHover)" }}
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            <i className="fa fa-home title_menu_profile" aria-hidden="true" />
            <div className="title_menu_profile">Tin đăng của bạn </div>
          </Link>
          <Link
            className="item_menu_profile flex_row"
            to={{
              pathname: "./thong-tin",
            }}
            style={{ color: activeValue.id === 3 && "var(--menuHover)" }}
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            <i className="fa fa-user title_menu_profile" aria-hidden="true" />
            <div className="title_menu_profile">Cài đặt tài khoản</div>
          </Link>
          <i
            className="fa fa-sign-out title_menu_profile item_menu_profile"
            aria-hidden="true"
            onClick={() => {
              logout();
              history.replace("/");
              history.action = "POP";
            }}
          />
        </div>
      </div>
      <div className="content_profile">
        <Switch>
          <Route exact path="/trang-ca-nhan/thong-tin">
            <AccountSetting />
          </Route>
          <Route exact path="/trang-ca-nhan/quan-tam">
            <Interests />
          </Route>
          <Route exact path="/trang-ca-nhan/tin-dang-cua-ban">
            <Posts />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
Profile.propTypes = PropsType;
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logout,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
