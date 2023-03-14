import React from "react";
import "./YourFlights.scss";
import bamboImg from "../../img/bamboImg.jpeg";
import Timeline from "../Timeline/Timeline";

function YourFlights() {
  return (
    <div className="your-flights">
      <div className="your-flights__header">
        <p>Your Flights</p>
      </div>
      <div className="your-flights__body">
        <div className="f">
          <div className="f__id choose">01</div>
          <span>
            <p>Fri, 11 Feb, 2022</p>
            <h2>Da Nang - Ho Chi Minh</h2>
          </span>
        </div>
        <div className="brand-infor">
          <img src={bamboImg} alt="" />
          <span style={{ flexDirection: "column" }}>
            <h2>Bamboo Airways</h2>
            <p className="detail_active">Details</p>
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Timeline />
        </div>
        <button className="btn-change">Change departure flight</button>
        <div className="line-your-flight"></div>
      </div>
      <div className="f" style={{ marginLeft: "15px" }}>
        <div className="f__id">02</div>
        <span>
          <p>Fri, 11 Feb, 2022</p>
          <h2>Da Nang - Ho Chi Minh</h2>
        </span>
      </div>
      <div className="your-flights__footer">
        <p>Subtotal</p>
        <h2>1,322,000 vnd</h2>
      </div>
    </div>
  );
}

export default YourFlights;
