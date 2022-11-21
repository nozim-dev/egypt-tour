import React from "react";
import card1 from "./image/section_4-1.png";
import card2 from "./image/section_4-2.png";
import card3 from "./image/section_4-3.png";

const SectionFour = () => {
  return (
    <div className="SectionFour">
      <h1>Learn more About Egypt</h1>
      <div className="SectionFour_row">
        <div className="SectionFour_row_col">
          <div className="SectionFour_row_col_img">
            <img src={card1} alt="" />
          </div>
          <span>Hotel</span>
          <h3>
            Where to sleep in <br /> Luxor?
            <div className="arrow_up">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 29.75L29.75 12.25"
                  stroke="#FF5029"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.25 12.25H29.75V29.75"
                  stroke="#FF5029"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </h3>
        </div>
        <div className="SectionFour_row_col">
          <div className="SectionFour_row_col_img">
            <img src={card2} alt="" />
          </div>
          <div className="Section_Four_row_col_title">
            <span>Restaurant</span>
            <h3>
              5 restaurant in <br /> Cairo
              <div className="arrow_up">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 29.75L29.75 12.25"
                  stroke="#FF5029"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.25 12.25H29.75V29.75"
                  stroke="#FF5029"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            </h3>
          </div>
        </div>
        <div className="SectionFour_row_col">
          <div className="SectionFour_row_col_img">
            <img src={card3} alt="" />
          </div>
          <div className="Section_Four_row_col_title">
            <span>Advance & Tip</span>
            <h3>
              Is Egypt <br /> dangerous?
              <div className="arrow_up">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 29.75L29.75 12.25"
                  stroke="#FF5029"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.25 12.25H29.75V29.75"
                  stroke="#FF5029"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
