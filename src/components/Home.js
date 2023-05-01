import React from 'react';
import Child from './Child';
import "./Home.css";
import btnCss from "./Button.module.css";

const Home = () => {
  return (
    <div className='home'>
        <h1>Home Component</h1>
        <Child />
        <button className={btnCss.loginBtn}>Login</button>
        <button className={btnCss.logoutBtn}>Logout</button>
    </div>
  )
}

export default Home