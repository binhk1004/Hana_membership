import React from "react";
import "./Tab1.css";
import btn_sell from "./img/btn_sell.png";
import btn_cancle from "./img/btn_cancle.png";
import btn_buy from "./img/btn_buy.png";

// 호가 탭 내 가격(li) 터치 시 팝업
// 이미지 보이면 버튼으로 변경하기

function touch() {
  console.log("hi");

  return (
    <div className="touch">
      <img src={btn_sell} Link to="/" />
      <img src={btn_cancle} Link to="/" />
      <img src={btn_buy} Link to="/" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="Tab1">
      {/* 호가 */}
      <div className="Tab1_contents top">
        <div className="content sell_items">
          <ul>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="sell_item up" onClick={touch}>
              <ul className="sell_sellQuantity_item">
                <li className="sell price">20,950</li>
                <li className="sell quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content side_item">
          <div className="side_standard">
            <p className="tit">
              기준가<span>(만원)</span>
            </p>
            <p className="price">24,000</p>
            <p className="flow">
              1,000<span>(5%)</span>
            </p>
          </div>
          <div className="side_static">
            <div className="high">
              <p className="tit">
                고가<span>(만원)</span>
              </p>
              <p className="price">24,000</p>
            </div>
            <div className="low">
              <p className="tit">
                저가<span>(만원)</span>
              </p>
              <p className="price">19,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Tab1_contents btm">
        <div className="content buy_items">
          <ul>
            <li className="buy_item up">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item down">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item down">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item down">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item down">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item down">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item down">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item down">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
            <li className="buy_item down">
              <ul className="buy_buyQuantity_item">
                <li className="buy price">20,950</li>
                <li className="buy quantity">
                  <div className="width"></div>
                  <span>9,542</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content side_item">
          <table>
            <caption className="conclusion">체결 사항</caption>
            <thead hidden>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="conclusion_price">20,700</th>
                <td className="conclusion_quantity">100</td>
              </tr>
              <tr>
                <th className="conclusion_price">20,700</th>
                <td className="conclusion_quantity">100</td>
              </tr>
              <tr>
                <th className="conclusion_price">20,700</th>
                <td className="conclusion_quantity">100</td>
              </tr>
              <tr>
                <th className="conclusion_price">20,700</th>
                <td className="conclusion_quantity">100</td>
              </tr>
              <tr>
                <th className="conclusion_price">20,700</th>
                <td className="conclusion_quantity">100</td>
              </tr>
              <tr>
                <th className="conclusion_price">20,700</th>
                <td className="conclusion_quantity">100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tab1;
