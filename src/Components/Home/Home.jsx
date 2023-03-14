import React, { useState } from "react";
import "./Home.scss";
import bgImg from "../../img/bg-homepage.png";
import { FaChevronRight } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";

function Home() {
  let today = new Date();
  let day = ("0" + today.getDate()).slice(-2);
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let time = today.getFullYear() + "-" + month + "-" + day;

  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownClass, setShowDropDownClass] = useState(false);
  const [countNumAdult, setCountNumAdult] = useState(0);
  const [countNumChild, setCountNumChild] = useState(0);
  const [classType, setClassType] = useState("Business Class");
  const [dateGo, setDateGo] = useState(time);
  const [dateReturn, setDateReturn] = useState(time);

  const [from, setFrom] = useState({ ciy: "Da Nang", location: "Quang Nam, Viet Nam" });
  const [to, seTo] = useState({ ciy: "Ho Chi Minh", location: "Viet Nam" });

  function handleClickPeople() {
    setShowDropDown(!showDropDown);
  }
  function handleClickClass() {
    setShowDropDownClass(!showDropDownClass);
  }

  function handleAdd(e) {
    e.preventDefault();
    setCountNumAdult(countNumAdult + 1);
  }
  function handleSub(e) {
    e.preventDefault();
    setCountNumAdult(countNumAdult - 1);
    if (countNumAdult <= 0) {
      setCountNumAdult(0);
    }
  }

  function handleAddChild(e) {
    e.preventDefault();
    setCountNumChild(countNumChild + 1);
  }
  function handleSubChild(e) {
    e.preventDefault();
    setCountNumChild(countNumChild - 1);
    if (countNumChild <= 0) {
      setCountNumChild(0);
    }
  }

  function handleChangeClassType(e) {
    setClassType(e.target.className + " Class");
  }

  function handleChangePlace() {
    setFrom(to);
    seTo(from);
  }
  function handleChangeDayGo(e) {
    setDateGo(e.target.value);
    setDateReturn(e.target.value);
  }
  function handleChangeDayReturn(e) {
    setDateReturn(e.target.value);
  }

  return (
    <div className="home">
      <div className="home__background">
        <img src={bgImg} alt="" />
      </div>
      <div className="home__text">
        <p>
          Hello! <br />
          Where are
          <br />
          you <span className="bold-blue">flying</span> to ...
        </p>
      </div>
      <form className="home__flight" action="/list">
        {/* Header */}
        <div className="home__flight__header">
          {/* Multi choice */}
          <div className="choice">
            <input type="radio" id="oneCity" value="oneCity" name="radio_city" checked />
            <label htmlFor="oneCity">One Way / Round Trip</label>

            <input type="radio" id="multiCity" value="multiCity" name="radio_city" />
            <label htmlFor="multiCity">Multi City</label>
          </div>

          <div className="wrap-2">
            {/* Dropdown Numbers People */}
            <div className="dropdown">
              <p onClick={handleClickPeople}>
                <span className="bold-blue">{countNumAdult}</span> Adult,{" "}
                <span className="bold-blue">{countNumChild}</span> children
              </p>
              <input
                type="number"
                value={countNumAdult}
                name="num_adult"
                style={{ display: "none" }}
              />
              <input
                type="number"
                value={countNumChild}
                name="num_child"
                style={{ display: "none" }}
              />
              <MdArrowDropDown size={"20px"} color={"#4D46FA"} onClick={handleClickPeople} />

              <ul className={showDropDown ? "dropdown__space" : "dropdown__space hide"}>
                <li>
                  <span>
                    <button onClick={handleAdd}>+</button>
                    <input typeof="number" value={countNumAdult} />
                    <button onClick={handleSub}>-</button>
                  </span>
                  Adult
                </li>
                <li>
                  <span>
                    <button onClick={handleAddChild}>+</button>
                    <input typeof="number" value={countNumChild} />
                    <button onClick={handleSubChild}>-</button>
                  </span>
                  Children
                </li>
              </ul>
            </div>

            {/* Dropdown Class Type */}
            <div className="dropdown">
              <p onClick={handleClickClass}>{classType}</p>
              <input type="text" value={classType} name="type_class" style={{ display: "none" }} />
              <MdArrowDropDown size={"20px"} color={"#4D46FA"} onClick={handleClickClass} />
              <ul
                className={
                  showDropDownClass ? "dropdown__space class" : "dropdown__space class hide"
                }
              >
                <li onClick={handleChangeClassType} className="Business">
                  Business Class
                </li>
                <li onClick={handleChangeClassType} className="Economy">
                  Economy Class
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detail Find Fight */}
        <div className="home__flight__detail">
          {/* FROM */}
          <div className="wrap">
            <div className="home__flight__detail__from">
              <p className="op-05">FROM</p>
              <h1 className="textBlue">{from.ciy}</h1>
              <p>{from.location}</p>
              <BiTransfer onClick={handleChangePlace} className="transfer-icon" />
            </div>

            {/* TO */}
            <div className="home__flight__detail__to">
              <p className="op-05">TO</p>
              <h1 className="textBlue">{to.ciy}</h1>
              <p>{to.location}</p>
            </div>
          </div>

          {/* DATE */}
          <div className="home__flight__detail__date">
            <div className="home__flight__detail__date__arrive">
              <p className="op-05">Departure</p>
              <div className="input-date">
                <input
                  className="textBlue"
                  type="date"
                  name="dayGo"
                  min={time}
                  value={dateGo}
                  onChange={handleChangeDayGo}
                />
                <span>
                  <RxCalendar color="#4D46FA" style={{ opacity: 1 }} />
                </span>
              </div>

              <span>
                <p>Prev</p>
                <p>Next</p>
              </span>
            </div>
            <div className="home__flight__detail__date__return">
              <p className="op-05">Return</p>
              <div className="input-date">
                <input
                  className="textBlue"
                  type="date"
                  name="dayReturn"
                  min={dateGo}
                  value={dateReturn}
                  onChange={handleChangeDayReturn}
                />
                <span>
                  <RxCalendar color="#4D46FA" style={{ opacity: 1 }} />
                </span>
              </div>

              <span>
                <p>Prev</p>
                <p>Next</p>
              </span>
            </div>
          </div>
        </div>

        <button className="search" type="submit">
          Search Flights
          <FaChevronRight />
        </button>
      </form>
    </div>
  );
}

export default Home;
