// ============================
// src/components/CustomerSection.jsx
// ============================

import member from "../assets/member.png";
import appleStore from "../assets/appleStore.png";
import playStore from "../assets/playStore.png";

function CustomerSection() {
  return (
    <div className="sixthSectionContainer">
      <div className="sixthSectionLeft">
        <img
          src={member}
          alt=""
          className="memberImage"
        />
      </div>

      <div className="sixthSectionRight">
        <h1 className="sixthSectionRightTitle">
          3 Million+ customers
        </h1>

        <p className="sixthSectionRightText">
          Since launching in 2016, over 3,000,000 people
          have used Piggyvest to manage their money better,
          avoid over-spending and be more accountable
        </p>

        <p className="sixthSectionRightTextMobile">
          Since launching in 2016, over 3,000,000 people
          have used Piggyvest to manage their money better,
          avoid over-spending and be more accountable
        </p>

        <button className="buttonStartSaving">
          Start Saving
        </button>

        <div className="buttonDownloadGroup">
          <button className="buttonGetStarted">
            Get Started
          </button>

          <button className="buttonDownload">
            <img src={appleStore} alt="" />
            <p>Get on Iphone</p>
          </button>

          <button className="buttonDownload">
            <img src={playStore} alt="" />
            <p>Get on Android</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerSection;