// ============================
// src/components/PartnerSection.jsx
// ============================

import netflix from "../assets/netflix.png";
import reddit from "../assets/reddit.png";
import amazon from "../assets/amazon.png";
import discord from "../assets/discord.png";
import spotify from "../assets/spotify.png";

function PartnerSection() {
  return (
    <>
      <div className="seventhSectionContainer">
        <div><img src={netflix} alt="" /></div>
        <div><img src={reddit} alt="" /></div>
        <div><img src={amazon} alt="" /></div>
        <div><img src={discord} alt="" /></div>
        <div><img src={spotify} alt="" /></div>
      </div>

      <div className="seventhSectionContainerMobile">
        <div className="upperImages">
          <div><img src={netflix} alt="" /></div>
          <div><img src={reddit} alt="" /></div>
        </div>

        <div className="lowerImages">
          <div><img src={amazon} alt="" /></div>
          <div><img src={discord} alt="" /></div>
          <div><img src={spotify} alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default PartnerSection;