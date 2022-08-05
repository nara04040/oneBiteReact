import React from 'react';
// import './App.css';

import MyHeader from "./MyHeader"

function App() {
  const myName = 'nara'
  const style = {
    App : {
      backgroundColor: "black"
    },
    h2 : {
      color: 'red'
    },
    bold_text: {
      color: 'green'
    }
  }
  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader />
        <h2 style={style.h2}>안녕리액트</h2>
        <b style={style.bold_text}>
          {number} : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
    </div> 
  );
}

export default App;