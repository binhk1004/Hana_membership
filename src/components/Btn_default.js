import React from "react";
import "./Btn_default.css";



function Btn_default() {

  // state = {
  //   login: '로그인',
  // }

  // appChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  return (
    <div className="Btn_default">
      <input type="submit" value="로그인" />
    </div>
  );
}

export default Btn_default;
