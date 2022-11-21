import React from "react";
import imageGroup from "../section-4/image/image_group.png";

const SectionFive = () => {
  return (
    <div className="SectionFive">
      <div className="SectionFive_blok">
        <p>
          Are you a Tourist <br /> Guide in Egypt?
        </p>
      </div>
      <div className="SectionFive_blok_item">
        <div className="SectionFive_blok_item_col">
          <p>
            Be referenced on our site,
            <div className="col_red">it's 100% free!</div>
          </p>
        </div>
        <div className="SectionFive_blok_item_col">
          <div className="SectionFive_blok_item_col_item">
            <button>I am a Tourist Guide</button>
          </div>
          <div className="SectionFive_blok_item_col_item">
            <img src={imageGroup} alt="" />
            <p>
              <span className="col_red">1000+</span> tourist <br /> join us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
