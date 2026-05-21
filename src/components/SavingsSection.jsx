// ============================
// src/components/SavingsSection.jsx
// ============================

import protectBlue from "../assets/protectBlue.png";
import secretBlue from "../assets/secretBlue.png";
import protectGreen from "../assets/protectGreen.png";
import secretRed from "../assets/secretRed.png";

import backBlue from "../assets/backBlue.png";
import backGreen from "../assets/backGreen.png";
import backRed from "../assets/backRed.png";

function SavingsSection() {
  return (
    <div className="thirdSectionContainer">
      <div className="thirdMain">
        <h1 className="thirdMainTitle">
          4 Ways to build <br />
          your savings
        </h1>

        <p className="thirdMainText">
          Earn 5%-15% when you save with any
          of these Piggyvest plans
        </p>

        <button className="buttonStartSaving">
          Start Saving
        </button>

        <button className="buttonStartSavingMobile">
          Start Saving
        </button>
      </div>

      <div className="feature">
        <img src={protectBlue} alt="" height="41" width="43" />

        <h3 className="featureTitle">
          Automated Savings
        </h3>

        <p className="featureTextOdd">
          Build a dedicated saving on your
          term automatically or manually
        </p>

        <div className="goFeature">
          <img src={backBlue} alt="" />

          <p className="goFeatureText">
            Piggybank
          </p>
        </div>
      </div>

      <div className="feature">
        <img src={secretBlue} alt="" height="41" width="43" />

        <h3 className="featureTitle">
          Fixed Savings
        </h3>

        <p className="featureTextEven">
          Lock money away for a fixed duration
          with no access until maturity
        </p>

        <div className="goFeature">
          <img src={backBlue} alt="" />

          <p className="goFeatureText">
            Savelock
          </p>
        </div>
      </div>

      <div className="feature">
        <img src={protectGreen} alt="" height="41" width="43" />

        <h3 className="featureTitle">
          Goal oriented-Savings
        </h3>

        <p className="featureTextOdd">
          Build a dedicated saving on your
          term automatically or manually
        </p>

        <div className="goFeature">
          <img src={backGreen} alt="" />

          <p className="goFeatureText">
            Piggybank
          </p>
        </div>
      </div>

      <div className="feature">
        <img src={secretRed} alt="" height="41" width="43" />

        <h3 className="featureTitle">
          Fixed Savings
        </h3>

        <p className="featureTextEven">
          Lock money away for a fixed duration
          with no access until maturity
        </p>

        <div className="goFeature">
          <img src={backRed} alt="" />

          <p className="goFeatureText">
            Savelock
          </p>
        </div>
      </div>
    </div>
  );
}

export default SavingsSection;