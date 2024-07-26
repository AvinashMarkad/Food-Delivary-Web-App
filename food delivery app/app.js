import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
          alt="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="res-card">
      <img
        className="Meghana-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jhjyc3xjdbkqr9wbzsj7"
        alt="food img"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, Hyadrabadi Dam Biryani</h4>
      <h4>
        4.3 <span style={{ fontSize: "20px" }}>&#9733;</span>
      </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="mainbody">
      <div className="search">Search</div>
      <div className="res-container">
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
