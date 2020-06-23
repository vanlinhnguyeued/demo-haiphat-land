import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { useLocation, Link } from "react-router-dom";
import { topFunction } from "../../function/ToTop";
import { tiengVietKhongDau } from "../../function/KhongDau";
import history from "../../history";
import axios from "axios";
import parse from "html-react-parser";
import moment from "moment";
import "./styles.css";

const index = () => {
  const [data, setData] = useState({});
  const [dataKhac, setDataKhac] = useState([]);
  const [noiDung, setNoiDung] = useState("");
  let { item } = useLocation().state;
  async function fecthData() {
    const result = await axios.get(
      `http://trananh.citysoft.vn/api/News/get?id=${item.ID}`
    );
    const resultKhac = await axios.get(
      `http://trananh.citysoft.vn/api/News/getall?maDA=0&pageSize=5&pageIndex=1`
    );
    setData(result.data[0]);
    setNoiDung(result.data[0].Contents);
    setDataKhac(resultKhac.data);
    document.title = result.data[0].Subject;
  }

  useEffect(() => {
    fecthData();
  }, [item]);

  return (
    <div>
      <Banner title={data.Subject} />
      <div className="container_detailtintuc">
        <div className="content_detailtintuc">
          <h2>{data.Subject}</h2>
          <div className="hr_new" />
          <div className="text_date_new_detail">
            By Hai Phát Land | {moment(data.DatePost).format("L")}
          </div>
          <div>{parse(noiDung)}</div>
        </div>
        <div className="noibat_detailtintuc">
          <h2 className="title_tinkhac">CÁC TIN KHÁC</h2>
          <div className="hr_tinkhac">
            <div />
          </div>
          <div>
            {dataKhac.map((item, index) => (
              <div key={index} className="item_tintuckhac_dt">
                <Link
                  to={{
                    pathname: `/tin-tuc/${tiengVietKhongDau(
                      item.Subject
                    ).replace(/ /g, "-")}`,
                    state: {
                      item,
                    },
                  }}
                >
                  <div className="img_item_tintuckhac_dt">
                    <img src={item.Avatar} />
                  </div>
                </Link>

                <div>
                  <Link
                    to={{
                      pathname: `/tin-tuc/${tiengVietKhongDau(
                        item.Subject
                      ).replace(/ /g, "-")}`,
                      state: {
                        item,
                      },
                    }}
                  >
                    <h2 className="noidung_item_tintuckhac_dt">
                      {item.Subject}
                    </h2>
                  </Link>
                  <div className="date_item_tintuckhac_dt">
                    By Hai Phát Land | {moment(item.DatePost).format("L")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
