import "./style.css";

import React from "react";

const Lists = () => {
  return (
    <>
      <div className="lists-container">
        <ul>
          <li>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              est.
            </div>
            <div className="count">85</div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              est.
            </div>
            <div className="count">85</div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              est.
            </div>
            <div className="count count-green">85</div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              est.
            </div>
            <div className="count count-red">85</div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              est.
            </div>
            <div className="count count-blue">85++++</div>
          </li>
        </ul>
      </div>
      <div className="list-container1">
        <ul>
          <li>
            <h3>List group Item heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsum
              dolor sit amet consectetur, adipisicing eli.
            </p>
          </li>
          <li>
            <h3>List group Item heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit ipsum
              dolor sit amet consectetur, adipisicing eli.
            </p>
          </li>
          <li>
            <h3>List group Item heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing eli ipsum
              dolor sit amet consectetur, adipisicing elit.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Lists;
