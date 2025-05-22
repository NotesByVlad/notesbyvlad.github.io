import { presentation } from "../../assets/data/home-info";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ExpandableContent = ({ sectionKey, buttonLinkTo }) => {
  // Rename 'title' to 'sectionKey'
  const [shortContext, setShortContext] = useState(true);
  const [buttonState, setButtonState] = useState("Show more");

  const onContextChange = () => {
    setShortContext(!shortContext);
  };

  useEffect(() => {
    setButtonState(shortContext ? "Show more" : "Show less");
  }, [shortContext]);

  // Access data from 'presentation' using 'sectionKey'
  const {
    title: sectionTitle,
    shortContent,
    longContent,
  } = presentation[sectionKey] || {};

  if (!sectionTitle) return null; // Safeguard in case data is missing for the provided key

  return (
    <div className={style.homeHeader}>
      <h1>{sectionTitle}</h1> {/* Use 'sectionTitle' here */}
      {shortContext ? (
        <p>{shortContent}</p>
      ) : (
        <>
          <p>{longContent}</p>
          <button>test</button>
          <Link to={buttonLinkTo} className={style.links}>
            Test
          </Link>
        </>
      )}
      <button onClick={onContextChange}>{buttonState}</button>
    </div>
  );
};

export default ExpandableContent;
