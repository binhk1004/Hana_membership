import React from "react";
import "./Mypage.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites from "./img/icon_favorites.png";
import Btn_navy from "./components/Btn_navy";
import Btn_gray from "./components/Btn_gray";
import Btn_default from "./components/Btn_default";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Mypage() {
  return (
    <div className="Mypage">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" hidden />
            </div>
          </a>
          <h1>내 정보</h1>
          <a href="/login" className="header_icon_item icon_favorites">
            <div className="icon_img">
              <img src={icon_favorites} Link to="/login" hidden />
            </div>
          </a>
        </div>
      </div>
      {/* back_header : e */}
      {/* Mypage_contents : s */}
      <div className="Mypage_contents checkAll">
        <form action="">
          <div className="input_unit">
            <span>이름</span>
            <input type="text" placeholder="이름" name="name" minlength="2" />
          </div>
          <div className="input_unit">
            <span>휴대전화</span>
            <input type="text" placeholder="휴대전화" name="phone" />
          </div>
          <div className="input_unit">
            <span>이메일</span>
            <input type="text" placeholder="이메일" name="id" />
          </div>
          {/* 버튼 텍스트 변경 : 정보변경 */}
          <Btn_gray text="정보변경"/>
        </form>
        <div className="footer_fixed">
          {/* 버튼 텍스트 변경 : 로그아웃 */}
          <Link to="/">
            <Btn_default />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Mypage;
