import React from "react";

const SectionOne = () => {
  return (
    <div className="Section_One">
      <div className="Section_One_title">
        <h1>Find the Best <br /> Egyptian Guide</h1>
      </div>
      <div className="Section_One_guide">
        <form action="">
          <label htmlFor="gender">
            Gender <br />
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <label htmlFor="age">
            Age <br />
            <select name="age" id="age">
              <option value="24+">24+</option>
              <option value="45+">45+</option>
            </select>
          </label>
          <br />
          <label htmlFor="Language">
            Language <br />
            <select name="Language" id="Language">
              <option value="English, Arabic">English, Arabic</option>
              <option value="Russian, Uzbek">Russian, Uzbek</option>
            </select>
          </label>
          <br />
          <label htmlFor="Lacalisation">
            Lacalisation <br />
            <select name="Lacalisation" id="Lacalisation">
              <option value="Cairo">Cairo</option>
              <option value="San Fransisco">San Fransisco</option>
            </select>
          </label> <br />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SectionOne;
