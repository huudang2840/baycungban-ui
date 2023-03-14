import React from "react";
import { BiTransfer } from "react-icons/bi";
import { FaSistrix } from "react-icons/fa";
import Flight from "../Flight/Flight";
import YourFlights from "../YourFlights/YourFlights";
import bamboImg from "../../img/bamboImg.jpeg";
import vnAirline from "../../img/vnairline.png";

import "./List.scss";

function List() {
  return (
    <div className="list">
      <div className="list__bar">
        <div className="place">
          <div className="place__start">
            <h1>Da Nang (DAD)</h1>
            <p>Fri, 22 Mar, 2022</p>
          </div>
          <BiTransfer
            className="icon-transfer"
            size="30px"
            color="gray"
            style={{
              margin: "0 30px",
            }}
          />
          <div className="place__end">
            <h1>Ho Chi Minh (SGN)</h1>
            <p>Fri, 22 Mar, 2022</p>
          </div>
        </div>
        <div className="information">
          <h2 className="information__method">Round-trip</h2>
          <h2 className="information__people">
            <span style={{ color: " #4d46fa" }}>02</span> Adult,{" "}
            <span style={{ color: " #4d46fa" }}>02</span> children
          </h2>
          <h2 className="information__kind">Business Class</h2>
        </div>
        <a className="change-flights" href="/">
          <p>Change Flights</p> <FaSistrix size="16px" className="icon-search" />
        </a>
      </div>
      <div className="bg">
        <div className="list__body">
          <div className="list__left">
            <div className="flights">
              <div className="flights__filter">
                <p>FILTER</p>
                <select name="transit" id="transit">
                  <option value="1">Transit</option>
                  <option value="2">No Transit</option>
                </select>
                <select name="time" id="time">
                  <option value="1">Time </option>
                  <option value="2">Morning</option>
                  <option value="3">Afternoon</option>
                  <option value="4">Night</option>
                </select>
                <select name="airline" id="airline">
                  <option value="1">Airline </option>
                  <option value="2">Bamboo Airways</option>
                  <option value="3">VietNam Airline</option>
                  <option value="4">VietJet Air</option>
                </select>
                <select name="price" id="price">
                  <option value="1">Low Price</option>
                  <option value="2">Earliest departure</option>
                  <option value="2">Latest departure</option>
                  <option value="2">Shortest duration</option>
                </select>
              </div>
              <div className="flights__list">
                <Flight option="detail" logoImg={bamboImg} />
                <Flight option="fare" btn="choose" logoImg={bamboImg} />
                <Flight option="nodata" logoImg={vnAirline} />
                <Flight option="nodata" logoImg={bamboImg} />
                <Flight option="nodata" logoImg={vnAirline} />
                <Flight option="nodata" logoImg={bamboImg} />
                <Flight option="nodata" logoImg={vnAirline} />
                <Flight option="nodata" logoImg={bamboImg} />
              </div>
            </div>
          </div>

          <div className="list__right">
            <YourFlights />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
