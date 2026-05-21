// ============================
// src/components/FeatureCard.jsx
// ============================

function FeatureCard({
  icon,
  title,
  text,
  backIcon,
  featureName,
  textClass,
}) {
  return (
    <div className="feature">
      <img src={icon} alt={title} height="41" width="43" />

      <h3 className="featureTitle">
        {title}
      </h3>

      <p className={textClass}>
        {text}
      </p>

      <div className="goFeature">
        <img src={backIcon} alt="back" />

        <p className="goFeatureText">
          {featureName}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;