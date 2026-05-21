// ============================
// src/components/HeroSection.jsx
// ============================

import mainImage from "../assets/mainImage.png";
import appleStore from "../assets/appleStore.png";
import playStore from "../assets/playStore.png";

function HeroSection() {
  return (
    <div className="mainSection">
      <div className="mainSectionLeft">
        <h1 className="mainSectionTitle">
          The Best Way <br />
          To Save & Invest
        </h1>

        <div className="mainSectionText">
          Piggyvest help over 3 million customer achieve their financial
          goal by helping them save and invest with ease
        </div>

        <button className="buttonCreateAccount">
          Create Free Account
        </button>

        <div className="buttonDownloadGroup">
          <button className="buttonDownload">
            <div>
              <img src={appleStore} alt="apple" />
            </div>

            <div className="buttonDownloadText">
              Get on Iphone
            </div>
          </button>

          <button className="buttonDownload">
            <div>
              <img src={playStore} alt="playstore" />
            </div>

            <div className="buttonDownloadText">
              Get on Android
            </div>
          </button>
        </div>
      </div>

      <div>
        <img
          src={mainImage}
          alt="main"
          className="mainImage"
        />
      </div>

      <div className="mainSectionMobile">
        <h1 className="mainSectionTitle">
          The Best Way <br />
          To Save & Invest
        </h1>

        <div className="mainSectionText">
          Piggyvest help over 3 million customer
          achieve their financial goal by helping
          them save and invest with ease
        </div>

        <button className="buttonGetStarted">
          Get Started
        </button>

        <div className="buttonDownloadGroup">
          <button className="buttonDownload">
            <div>
              <img src={appleStore} alt="apple" />
            </div>

            <div className="buttonDownloadText">
              Get on Iphone
            </div>
          </button>

          <button className="buttonDownload">
            <div>
              <img src={playStore} alt="playstore" />
            </div>

            <div className="buttonDownloadText">
              Get on Android
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;