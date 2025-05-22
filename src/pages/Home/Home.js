import React from "react";
import styles from "./Home.module.css";
import ExpandableContent from "./ExpandableContent"; // renamed from HomeSection

function Home() {
  return (
    <div className={styles.homeContainer}>
      <ExpandableContent sectionKey="intro" buttonLinkTo="/blabla" />
      <ExpandableContent sectionKey="outro" />
      <p className="text-3xl font-bold text-white">Hello Tailwind!</p>
    </div>
  );
}

export default Home;
