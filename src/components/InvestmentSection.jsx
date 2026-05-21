// ============================
// src/components/InvestmentSection.jsx
// ============================

import handphone from "../assets/handphone.png";

function InvestmentSection() {
  return (
    <div className="fourthSectionContainer">
      <div className="fourthSectionLeft">
        <img
          src={handphone}
          alt="handphone"
          className="handphoneImage"
        />
      </div>

      <div className="fourthSectionRight">
        <p className="upto25">
          Up to 25% returned
        </p>

        <h1 className="fourthSectionTitle">
          Access investment <br />
          opportunities
        </h1>

        <p className="fourthSectionText">
          Invest securely and confidentially on the go.
          Grow your money confidently by investing
          on pre-vetted investment opportunities
        </p>

        <p className="fourthSectionTextMobile">
          Invest securely and confidentially on the go.
          Grow your money confidently by investing
          on pre-vetted investment opportunities
        </p>

        <p className="fourthLearnMore">
          Learn more about investment &gt;
        </p>
      </div>
    </div>
  );
}

export default InvestmentSection;