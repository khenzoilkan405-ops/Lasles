// ============================
// src/components/SaverSection.jsx
// ============================

import computer from "../assets/computer.png";
import backWhite from "../assets/backWhite.png";

function SaverSection() {
  return (
    <div className="fifthSectionContainer">
      <div className="fifthSectionLeft">
        <h1 className="fifthSectionLeftTitle">
          Meet the saver <br />
          of the month!
        </h1>

        <h1 className="fifthSectionLeftTitleMobile">
          Meet the saver of <br />
          the month!
        </h1>

        <p className="fifthSectionLeftText">
          Every month, we shine spotlight on one saver,
          asking them questions about their saving culture
          and how the product is helping them spend
          and save for future responsibilities
        </p>

        <p className="fifthSectionLeftTextMobile">
          Every month, we shine spotlight on one saver,
          asking them questions about their saving culture
          and how the product is helping them spend
          and save for future responsibilities
        </p>

        <div className="fifthSectionLeftMore">
          <img
            src={backWhite}
            alt=""
            className="fifthSectionLeftBack"
          />

          <p className="fifthSectionLeftMeet">
            Meet Tohbad
          </p>
        </div>
      </div>

      <div className="fifthSectionRight">
        <img
          src={computer}
          alt=""
          className="fifthSectionRightImage"
        />
      </div>
    </div>
  );
}

export default SaverSection;