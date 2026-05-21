// ============================
// src/components/SecuritySection.jsx
// ============================

import security from "../assets/security.png";

function SecuritySection() {
  return (
    <div className="secondSectionContainer">
      <div>
        <img src={security} alt="security" />
      </div>

      <div className="secondSectionRight">
        <h1 className="secondSectionRightTitle">
          Your Security is our priority
        </h1>

        <h1 className="secondSectionRightTitleMobile">
          Your Security is <br />
          our priority
        </h1>

        <p className="secondSectionRightText">
          Piggyvest use the highest level of security and it is secured
          by 256 bits SSL security encryption to ensure that your
          information is completely protected from fraud
        </p>

        <p className="secondSectionRightTextMobile">
          Piggyvest use the highest level of security and it is secured
          by 256 bits SSL security encryption to ensure that your
          information is completely protected from fraud
        </p>

        <div className="secondSectionRightLearn">
          <a href="#" className="secondSectionRightLearnText">
            Learn More &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;