import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useFormik, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import { isEmpty } from "lodash";
import "./styles.css";

const PropsType = {
  userInfor: PropTypes.object,
};
function AccountSetting({ userInfor }) {
  const [isShowChangePassword, setIsShowChangePassword] = useState(false);
  const [isShowChangeEmail, setIsShowChangeEmail] = useState(false);
  const formik = useFormik({
    initialValues: {
      userName: "",
      oldEmail: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      fullName: "",
      phoneNumber: "",
      employeeCode: "",
      company: "",
    },
    validationSchema: Yup.object({
      email:
        isShowChangeEmail &&
        Yup.string()
          .email("Email không đúng định dạng")
          .required("Bạn phải nhập Email"),
      oldPassword:
        isShowChangePassword &&
        Yup.string()
          .min(8, "Mật khẩu ít nhất có 8 ký tự")
          .required("Bạn phải nhập mật khẩu"),
      newPassword:
        isShowChangePassword &&
        Yup.string()
          .min(8, "Mật khẩu ít nhất có 8 ký tự")
          .required("Bạn phải nhập mật khẩu mới"),
      confirmPassword:
        isShowChangePassword &&
        Yup.string().oneOf(
          [Yup.ref("newPassword"), null],
          "Xác nhận mật khẩu sai"
        ),
      fullName: Yup.string().required("Bạn phải nhập họ tên"),
      phoneNumber: Yup.string()
        .max(15, "Số điện thoại sai")
        .required("Bạn phải nhập số điện thoại"),
      employeeCode: Yup.string().required("Bạn phải nhập mã nhân viên"),
      company: Yup.string().required("Bạn phải nhập tên công ty"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    document.title = "Thông tin cá nhân - Trang cá nhân";
  }, []);
  useEffect(() => {
    let user = userInfor.userInfo;
    if (!isEmpty(user)) {
      formik.handleChange("userName")(user.FullName);
      formik.handleChange("fullName")(user.FullName);
      formik.handleChange("employeeCode")(user.MaKH);
      formik.handleChange("company")(user.aud);
    }
  }, [userInfor]);
  return (
    <div className="container_setting">
      <div className="content_confirm_setting">
        <Button className="btn_confirm_setting">
          <SaveOutlined />
          Cập nhật
        </Button>
      </div>
      <div className="form_setting" data-aos="fade-up">
        <div className="form_content_setting">
          <div className="row_setting">
            <div className="title_setting">Tên đăng nhập</div>
            <div className="content_setting">{formik.values.userName}</div>
          </div>
          <div className="row_setting">
            <div className="title_setting">Email</div>
            <div className="content_setting"></div>
          </div>
          {!isShowChangeEmail && (
            <div className="row_setting">
              <div className="title_setting"></div>
              <div className="content_setting">
                <Button
                  className="btn_confirm_setting"
                  onClick={() => {
                    setIsShowChangeEmail(true);
                  }}
                >
                  Thay đổi email
                </Button>
              </div>
            </div>
          )}
          {isShowChangeEmail && (
            <div className="row_setting">
              <div className="title_setting">Email mới </div>
              <div className="content_setting">
                <Input
                  style={styles.input}
                  placeholder="example@abc.com"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="errorInput">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
          )}
          <div className="row_setting">
            <div className="title_setting">Mật khẩu</div>
            <div className="content_setting">
              {isShowChangePassword && (
                <>
                  <Input
                    placeholder="Mật khẩu cũ"
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.oldPassword}
                    style={{
                      ...styles.input,
                      borderColor: formik.errors.oldPassword
                        ? "red"
                        : "var(--borderColor)",
                    }}
                  />
                  {formik.touched.oldPassword && formik.errors.oldPassword ? (
                    <div className="errorInput">
                      {formik.errors.oldPassword}
                    </div>
                  ) : null}
                  <Input
                    placeholder="Mật khẩu mới"
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                    style={{
                      ...styles.input,
                      marginTop: "10px",
                      borderColor: formik.errors.newPassword
                        ? "red"
                        : "var(--borderColor)",
                    }}
                  />
                  {formik.touched.newPassword && formik.errors.newPassword ? (
                    <div className="errorInput">
                      {formik.errors.newPassword}
                    </div>
                  ) : null}
                  <Input
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    style={{
                      ...styles.input,
                      marginTop: "10px",
                      borderColor: formik.errors.confirmPassword
                        ? "red"
                        : "var(--borderColor)",
                    }}
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="errorInput">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </>
              )}

              {!isShowChangePassword && (
                <Button
                  className="btn_confirm_setting"
                  onClick={() => {
                    setIsShowChangePassword(true);
                  }}
                >
                  Thay đổi mật khẩu
                </Button>
              )}
              {isShowChangePassword && (
                <Button
                  style={{ marginTop: "10px" }}
                  className="btn_confirm_setting"
                  onClick={() => {}}
                >
                  Xác nhận
                </Button>
              )}
            </div>
          </div>
          <div className="row_setting">
            <div className="title_setting">Họ và tên </div>
            <div className="content_setting">
              <Input
                style={styles.input}
                placeholder="Nguyễn Văn A"
                name="fullName"
                id="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="errorInput">{formik.errors.fullName}</div>
              ) : null}
            </div>
          </div>
          <div className="row_setting">
            <div className="title_setting">Điện thoại</div>
            <div className="content_setting">
              <Input
                style={styles.input}
                placeholder="0987654321"
                name="phoneNumber"
                id="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                type="number"
                className="text_sodt_lienhe"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="errorInput">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
          </div>
          <div className="row_setting">
            <div className="title_setting">Mã nhân viên</div>
            <div className="content_setting">
              <Input
                style={styles.input}
                placeholder="MNV123"
                name="employeeCode"
                id="employeeCode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.employeeCode}
              />
              {formik.touched.employeeCode && formik.errors.employeeCode ? (
                <div className="errorInput">{formik.errors.employeeCode}</div>
              ) : null}
            </div>
          </div>
          <div className="row_setting">
            <div className="title_setting">Công ty</div>
            <div className="content_setting">
              <Input
                style={styles.input}
                placeholder="Công ty Hải Phát"
                name="company"
                id="company"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              />
              {formik.touched.company && formik.errors.company ? (
                <div className="errorInput">{formik.errors.company}</div>
              ) : null}
            </div>
          </div>
          <div className="row_setting">
            <div className="title_setting"></div>
            <div className="content_setting">
              <Button
                className="btn_confirm_setting"
                onClick={formik.handleSubmit}
              >
                <SaveOutlined />
                Cập nhật
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AccountSetting.propTypes = PropsType;
const mapStateToProps = (state) => ({
  userInfor: state.config,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting);
const styles = {
  input: {
    height: 40,
    paddingTop: 5,
    borderRadius: 5,
  },
  inputArea: {
    marginBottom: 15,
    borderRadius: 5,
    padding: 10,
  },
};
