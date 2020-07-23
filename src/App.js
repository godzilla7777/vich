import React from "react";
import Header from "./header";
import "./App.css";
import Vichh from "./vichh.jpg";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="form1">
        <img src={Vichh} alt="vichh" className="form" />
        <text
          style={{
            position: "absolute",
            top: 150,
            left: 50,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            fontSize: "70px",
            color: "silver",
            fontFamily: "Red Rose",
          }}
        >
          PerfectSquare
        </text>
        <h1 className="text1">About Us</h1>
        <text className="text1">
          hjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhs
          auhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafs
          fdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdf
          safsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdus
          hhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhsauhdushhjfdsfsdfsafsufdhs
          auhdushhjfdsfsdfsafsufdhsauhdush
        </text>
        <h1 className="text1">Our Team</h1>
      </div>
      <div className="div1">
        <h1 className="contact">Contact Us</h1>
        <label className="label">
          <input
            type="text"
            name="name"
            className="name"
            placeholder="  Name"
          />
        </label>
        <div>
          <label className="label">
            <input
              type="text"
              name="name"
              className="name"
              placeholder="  E-mail"
            />
          </label>
        </div>
        <div>
          <label className="label2">
            <input
              type="text"
              name="name"
              className="message"
              placeholder="  Message"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
