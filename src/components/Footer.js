import React from "react";
import "./Footer.css";

import icon_f_off_1 from "../img/icon_f_off_1.png";
import icon_f_off_2 from "../img/icon_f_off_2.png";
import icon_f_off_3 from "../img/icon_f_off_3.png";
import icon_f_off_4 from "../img/icon_f_off_4.png";
import icon_f_off_5 from "../img/icon_f_off_5.png";
import icon_f_off_6 from "../img/icon_f_off_6.png";
import icon_f_on_1 from "../img/icon_f_on_1.png";
import icon_f_on_2 from "../img/icon_f_on_2.png";
import icon_f_on_3 from "../img/icon_f_on_3.png";
import icon_f_on_4 from "../img/icon_f_on_4.png";
import icon_f_on_5 from "../img/icon_f_on_5.png";
import icon_f_on_6 from "../img/icon_f_on_6.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <ul>
          <li className="footer_inner_item on">
            <a href="#"><img src={icon_f_on_1} Link to="/"/><span>관심</span></a>
          </li>
          <li className="footer_inner_item">
            <a href="#"><img src={icon_f_off_2} Link to="/"/><span>시세</span></a>
          </li>
          <li className="footer_inner_item">
            <a href="#"><img src={icon_f_off_3} Link to="/"/><span>주문</span></a>
          </li>
          <li className="footer_inner_item">
            <a href="#"><img src={icon_f_off_4} Link to="/"/><span>차트</span></a>
          </li>
          <li className="footer_inner_item">
            <a href="#"><img src={icon_f_off_5} Link to="/"/><span>내역</span></a>
          </li>
          <li className="footer_inner_item">
            <a href="#"><img src={icon_f_off_6} Link to="/"/><span>정보</span></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
