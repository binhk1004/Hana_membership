import React from "react";
import "./Btn_navy.css";
import "./Guide_ui.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Btn_navy(props) {
  console.log(props.to)
  var Btn_text = ''
  const path = window.location.pathname
  
  if (props.to == '/findidComplete'){
    Btn_text='로그인'
  }
  else if (props.to == '/findAuth'){
    Btn_text='아이디 찾기'
  }
  else if (props.to == '/findpwReset'){
    Btn_text='비밀번호 찾기'
  }
  
  return (
    <div className="Btn_navy">
      <input className="navy" type="button" value={Btn_text}/>
    </div>
  );
  }
export default Btn_navy;