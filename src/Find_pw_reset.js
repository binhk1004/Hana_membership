import React from "react";
import "./Find_pw_reset.css";
import "./components/Guide_ui.css";
import icon_back from "./img/right-arrow.png";
import icon_home from "./img/icon_home.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Btn_default from "./components/Btn_default";


function Find_pw_reset() {
  return (
    <div className="find_pw_reset">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" />
            </div>
          </a>
        </div>
      </div>
      {/* back_header : e */}

      {/* contents : s */}
      <div className="find_pw_reset_inner">
        <h1>비밀번호 재설정</h1>
        <div className="inner_content_text">
          안녕하세요, <span className="user_name">홍길동</span>님!
          <br />
          인증이 완료되어 비밀번호를 새로 설정합니다.
          <br />
          비밀번호를 잊어버리지 않게 주의하세요!
        </div>
        <div className="inner_content_input">
          <form action="">
            {/* input_password */}
            <div className="input_password">
              <span>새 비밀번호</span>
              <div className="input_unit check_ok">
                <input
                  type="password"
                  minlength={5}
                  placeholder="비밀번호를 입력해주세요."
                  name="password"
                  required
                />
              </div>
              <div className="input_unit check_fail">
                <input
                  type="password"
                  minlength={5}
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                  name="password-repeat"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <Btn_default />

      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_pw_reset;
