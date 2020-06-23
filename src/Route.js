import React from "react";
import { Route, Switch } from "react-router-dom";
//home
import Home from "./Page/Home";

//du an
import DuAn from "./Page/DuAn";
import DetailDuAn from "./Page/DetailDuAn";

//tin tuc
import TinTuc from "./Page/TinTuc";
import DetailTinTuc from "./Page/DetailTinTuc";

//khac
import Err404 from "./Page/Err404";
import LienHe from "./Page/LienHe";
import VeChungToi from "./Page/VeChungToi";
import Video from "./Page/Video";

//nha le
import MuaNha from "./Page/MuaNha";
import ThueNha from "./Page/ThueNha";
import DetailMuaNha from "./Page/DetailMuaNha";
import DetailThueNha from "./Page/DetailThueNha";

//tai khoan
import Login from "./Page/Login";
import DangKy from "./Page/DangKy";
import QuenMatKhau from "./Page/QuenMatKhau";

//page
import Page from "./Component";

//Profile
import Profile from "./Page/Profile";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Page component={<Home />} />
    </Route>
    <Route exact path="/du-an">
      <Page component={<DuAn />} />
    </Route>
    <Route exact path="/du-an/:name">
      <Page component={<DetailDuAn />} />
    </Route>
    <Route exact path="/tin-tuc">
      <Page component={<TinTuc />} />
    </Route>
    <Route exact path="/tin-tuc/:name">
      <Page component={<DetailTinTuc />} />
    </Route>
    <Route exact path="/mua-nha">
      <Page component={<MuaNha />} />
    </Route>
    <Route exact path="/thue-nha">
      <Page component={<ThueNha />} />
    </Route>
    <Route exact path="/thue-nha/:name">
      <Page component={<DetailThueNha />} />
    </Route>
    <Route exact path="/mua-nha/:name">
      <Page component={<DetailMuaNha />} />
    </Route>
    <Route exact path="/lien-he">
      <Page component={<LienHe />} />
    </Route>
    <Route exact path="/dang-nhap">
      <Page component={<Login />} />
    </Route>
    <Route exact path="/dang-ky">
      <Page component={<DangKy />} />
    </Route>
    <Route exact path="/quen-mat-khau">
      <Page component={<QuenMatKhau />} />
    </Route>
    <Route exact path="/video">
      <Page component={<Video />} />
    </Route>
    <Route exact path="/ve-chung-toi">
      <Page component={<VeChungToi />} />
    </Route>
    <Route exact path="/trang-ca-nhan/thong-tin">
      <Page component={<Profile />} />
    </Route>
    <Route exact path="/trang-ca-nhan/quan-tam">
      <Page component={<Profile />} />
    </Route>
    <Route exact path="/trang-ca-nhan/tin-dang-cua-ban">
      <Page component={<Profile />} />
    </Route>
    <Route exact path="*">
      <Err404 />
    </Route>
  </Switch>
);

export default Routes;
