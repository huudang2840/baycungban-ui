import React from "react";
import "./Timeline.scss";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__start">
        <p>21:40</p>
        <div className="timeline__start__code">DAD</div>
      </div>
      <div className="timeline__estimate">
        <p>1h 30m</p>
        <div className="line__time"></div>
        <p>Direct</p>
      </div>
      <div className="timeline__end">
        <p>23:10</p>
        <div className="timeline__end__code">DAD</div>
      </div>
    </div>
  );
}

export default Timeline;
