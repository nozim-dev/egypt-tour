import React from "react";
import user_1 from "../section-2/image/sect3-1.png";
import user_2 from "../section-2/image/sect3-2.png";
import user_3 from "../section-2/image/sect3-3.png";

const SectionThree = () => {
  return (
    <div className="SectionThree">
      <h1>How does it Work?</h1>
      <div className="SectionThree_row">
        <div className="SectionThree_row_col">
          <img src={user_1} alt="" />
          <h3>Select a Guide</h3>
        </div>
        <div className="SectionThree_row_col">
          <img src={user_2} alt="" />
          <h3>Contact Guide</h3>
        </div>
        <div className="SectionThree_row_col">
          <img src={user_3} alt="" />
          <h3>Create your Travel</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
