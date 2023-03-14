import React from "react";
import "./Flight.scss";
import Timeline from "../Timeline/Timeline";

function Flight(props) {
  const { option, btn, logoImg } = props;
  return (
    <div className={option === "nodata" ? "flight no-data" : "flight"}>
      {/* Header */}
      <div className="flight__header">
        {/* Logo */}
        <div className="brand">
          <img src={logoImg} alt="bambo" />
          <h1 className="brand__name">Bamboo Airways</h1>
        </div>

        <Timeline />

        {/* Header Detail Flights */}
        <div className="detail">
          <div className="detail__bag">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8_347)">
                <path
                  d="M11.8316 2.29805H10.2397C10.226 2.08389 10.0484 1.91428 9.83083 1.91428H9.80968V1.03468C9.80968 0.464203 9.34077 0 8.76442 0H5.24786C4.6714 0 4.2025 0.464203 4.2025 1.03468V1.91428H4.18135C3.96378 1.91428 3.78615 2.08389 3.77258 2.29805H2.18056C0.99324 2.29805 0.0273438 3.26395 0.0273438 4.45126V12.2411C0.0273438 13.211 0.81636 14 1.78621 14H12.226C13.1958 14 13.9848 13.211 13.9848 12.2411V4.45126C13.9848 3.26395 13.0188 2.29805 11.8316 2.29805V2.29805ZM7.26158 3.11836C7.62752 3.19142 7.94592 3.39885 8.1604 3.70572C8.38097 4.02135 8.46545 4.40405 8.39816 4.78313C8.37167 4.93277 8.32265 5.07451 8.25279 5.20631L7.1003 5.33865C6.98248 5.35211 6.87631 5.41599 6.80913 5.51372L5.12086 7.96835C5.05923 8.05797 5.03574 8.16841 5.0555 8.27544C5.07526 8.38246 5.13678 8.4771 5.22639 8.53873L6.91017 9.69678C6.98109 9.74559 7.06206 9.76898 7.14217 9.76898C7.27269 9.76898 7.40097 9.70692 7.48044 9.59125L9.1687 7.13661C9.23589 7.03888 9.25757 6.9169 9.22798 6.80208L8.93607 5.66624C9.06862 5.43788 9.15919 5.18954 9.20587 4.92647C9.3114 4.33153 9.17896 3.73114 8.83278 3.23596C8.80458 3.19548 8.77478 3.1566 8.74423 3.11836H10.2253V13.1797H3.7869V3.11836H7.26158ZM8.38716 6.82547L7.03706 8.78845L6.02919 8.09525L7.37929 6.13226L8.18518 6.03987L8.38716 6.82547ZM5.02281 1.03468C5.02281 0.912491 5.11958 0.820312 5.24786 0.820312H8.76442C8.8927 0.820312 8.98936 0.912491 8.98936 1.03468V1.91428H8.96822C8.75064 1.91428 8.57301 2.08389 8.55945 2.29805H5.45284C5.43916 2.08389 5.26164 1.91428 5.04396 1.91428H5.02281V1.03468ZM0.847656 12.2411V4.45126C0.847656 3.71629 1.44559 3.11836 2.18056 3.11836H2.96648V13.1797H1.78621C1.26871 13.1797 0.847656 12.7586 0.847656 12.2411ZM13.1645 12.2411C13.1645 12.7586 12.7436 13.1797 12.226 13.1797H11.0457V3.11836H11.8316C12.5666 3.11836 13.1645 3.71629 13.1645 4.45126V12.2411Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_347">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p>
              <span className="name-d"> Baggage</span>
              <span className="t-flight-blue"> 20kg</span>
            </p>
          </div>
          <div className="detail__meal">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.83383 0.00192261C8.49089 0.00192261 7.39832 1.0945 7.39832 2.43744V3.68286C7.39832 4.18648 7.55084 4.6698 7.83945 5.0806C8.06503 5.40199 8.36037 5.6609 8.70366 5.84045V12.8699C8.70366 13.4931 9.21069 14 9.83383 14C10.457 14 10.964 13.4931 10.964 12.8699V5.84056C11.3073 5.6609 11.6025 5.40199 11.8282 5.0807C12.1168 4.6698 12.2692 4.18648 12.2692 3.68297V2.43744C12.2693 1.0945 11.1768 0.00192261 9.83383 0.00192261ZM11.449 3.68286C11.449 4.34894 11.0307 4.95573 10.4079 5.19264C10.2488 5.2532 10.1437 5.40584 10.1437 5.5761V12.8699C10.1437 13.0407 10.0047 13.1797 9.83383 13.1797C9.66304 13.1797 9.52408 13.0407 9.52408 12.8699V5.5761C9.52408 5.40584 9.41887 5.2532 9.25972 5.19264C8.63712 4.95573 8.21873 4.34904 8.21873 3.68286V2.43744C8.21873 1.54684 8.94324 0.822342 9.83383 0.822342C10.7244 0.822342 11.449 1.54684 11.449 2.43744V3.68286Z"
                fill="black"
              />
              <path
                d="M6.21077 0C5.98433 0 5.80061 0.183609 5.80061 0.410156V3.23148H5.27072V0.410156C5.27072 0.183609 5.08711 0 4.86057 0C4.63412 0 4.45041 0.183609 4.45041 0.410156V3.23148H3.92052V0.410156C3.92052 0.183609 3.73691 0 3.51036 0C3.28381 0 3.1002 0.183609 3.1002 0.410156V3.23148H2.57031V0.410156C2.57031 0.183609 2.3867 0 2.16016 0C1.93361 0 1.75 0.183609 1.75 0.410156V5.00519C1.75 5.61903 2.24934 6.11838 2.86319 6.11838H3.05534V12.8699C3.05534 13.4931 3.56227 14 4.18552 14C4.80865 14 5.31558 13.4931 5.31558 12.8699V6.11838H5.50774C6.12158 6.11838 6.62093 5.61903 6.62093 5.00519V0.410156C6.62093 0.183609 6.43732 0 6.21077 0ZM5.50774 5.29807H4.90543C4.67899 5.29807 4.49527 5.48167 4.49527 5.70822V12.8699C4.49527 13.0407 4.35631 13.1797 4.18552 13.1797C4.01462 13.1797 3.87566 13.0407 3.87566 12.8699V5.70822C3.87566 5.48167 3.69205 5.29807 3.4655 5.29807H2.86319C2.70169 5.29807 2.57031 5.16669 2.57031 5.00519V4.05179H5.80072V5.00519C5.80061 5.16669 5.66924 5.29807 5.50774 5.29807Z"
                fill="black"
              />
            </svg>
            <p>
              <span className="name-d">In-flight</span>
              <span className="t-flight-blue"> Meal</span>
            </p>
          </div>
        </div>
        <div className="price">
          <div className="price__old">1,326,000 vnd</div>
          <div className="price__new">1,322,000 vnd</div>
        </div>
        <button className={btn === "choose" ? "btn-choose btn-choose-active" : "btn-choose"}>
          Choose
        </button>
      </div>
      <div className="flight__line">
        <h2 className={option === "detail" ? "detail_active" : ""}>Flight detail</h2>
        <h2 className={option === "fare" ? "detail_active" : ""}>fare info</h2>
        <div className={option === "nodata" ? "f_line op" : "f_line"}></div>
      </div>

      {/* Body Detail Flights */}
      <div className="flight__body  ">
        <div className={option === "detail" ? "flight__body__left " : "flight__body__left hide"}>
          <div className="flight__body__left__timeline ">
            <span>
              <h2>21:40</h2>
              <p>11 Feb</p>
            </span>
            <p>1h 30m</p>
            <span>
              <h2>21:40</h2>
              <p>11 Feb</p>
            </span>
          </div>
          <div className="line__time--h"></div>
          <div className="flight__body__left__place">
            <span className="flight__body__left__place--start">
              <h2>Da nang (DAD)</h2>
              <p>Da Nang Airport</p>
            </span>
            <span className="flight__body__left__place--end">
              <h2>Ho Chi Minh City (SGN)</h2>
              <p>Tansonnhat Intl</p>
            </span>
          </div>
        </div>

        <div className="flight__body__right">
          <span className={option === "fare" ? "header-fare" : "header-fare hide"}>
            <h1>Conditions</h1>
            <h1>price details</h1>
          </span>
          <div className={option === "detail" ? "brand-infor" : "brand-infor hide"}>
            <img src={logoImg} alt="" />
            <div style={{ flexDirection: "row" }}>
              <h2>Bamboo Airways</h2>
              <span>
                <p>QH-183 .</p>
                <p> Economy</p>
              </span>
            </div>
          </div>
          <div className={option === "fare" ? "fare" : "fare hide"}>
            <div className="fare__left">
              <div className="brand-infor">
                <img src={logoImg} alt="" />
                <div style={{ flexDirection: "row" }}>
                  <h2>Bamboo Airways</h2>
                  <span>
                    <p>QH-183 .</p>
                    <p> Economy</p>
                  </span>
                </div>
              </div>
              <span>
                <span className="flex">
                  <p>Da Nang</p>
                  <div className="line__time " style={{ margin: "10px ", width: "50px" }}></div>
                  <p>Ho Chi Minh City</p>
                </span>
                <p style={{ color: "#4D46FA" }}>Economy</p>
              </span>

              <p style={{ fontSize: "12px" }}>Non - Refundable</p>
            </div>
            <div className="fare__right">
              <div className="total-bill">
                {/* <h1>price details</h1> */}
                <span>
                  <p>Adult Basic Fare (x1)</p>
                  <p>Tax</p>
                  <p>Regular Total Price</p>
                  <p style={{ color: "#F06336" }}>Save</p>
                </span>
                <span>
                  <p style={{ fontWeight: "600" }}>1,326,000 vnd </p>
                  <p>included</p>
                  <p>1,326,000 vnd</p>
                  <p>-4,000 vnd</p>
                </span>
              </div>
              <div>
                <div className="line-bill"></div>
                <span className="you-pay">
                  <p>You pay</p>
                  <p style={{ color: "#F06336", fontWeight: "600" }}>1,322,000 vnd</p>
                </span>
              </div>
            </div>
          </div>

          <div className={option === "detail" ? "detail-infor" : "detail-infor hide"}>
            <span>
              <p>
                Baggage <span className="t-flight-blue">20kg</span>
              </p>
              <p>
                In-flight
                <span className="t-flight-blue"> Meal</span>
              </p>
              <p>
                In-flight
                <span className="t-flight-blue"> Entertainment</span>
              </p>
            </span>
            <span>
              <p>
                Aircraft Airbus
                <span className="t-flight-blue"> A321</span>
              </p>
              <p>
                Seat layout
                <span className="t-flight-blue"> 3-3</span>
              </p>
              <p>
                Seat pitch
                <span className="t-flight-blue"> 29 inches (standard)</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flight;
