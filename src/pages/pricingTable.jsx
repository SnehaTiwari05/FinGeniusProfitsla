import React from "react";

const PricingTable = () => {
  return (
    <div id="pricing-table" className="grid grid-cols-4 gap-4">
      <div className="plan">
        <h3>
          Title 1<span>$59</span>
        </h3>
        <a className="signup" href="">
          Buy
        </a>
        <ul>
          <li>
            <b>1Lorem</b> Lorem ipsum
          </li>
        </ul>
      </div>
      <div className="plan" id="most-popular">
        <h3>
          Title 2<span>$29</span>
        </h3>
        <a className="signup" href="">
          Buy
        </a>
        <ul>
          <li>
            <b>Lorem</b> Lorem ipsum
          </li>
          <li>
            <b>Lorem</b> Lorem ipsum
          </li>
        </ul>
      </div>
      <div className="plan">
        <h3>
          Title 3<span>$17</span>
        </h3>
        <a className="signup" href="">
          Buy
        </a>
        <ul>
          <li>
            <b>Lorem</b> Lorem ipsum
          </li>
        </ul>
      </div>
      <div className="plan">
        <h3>
          Title 4<span>$9</span>
        </h3>
        <a className="signup" href="">
          Buy
        </a>
        <ul>
          <li>
            <b>Lorem</b> Lorem ipsum
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingTable;
