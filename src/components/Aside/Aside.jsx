import React, { useState } from "react";
import { images } from "../../constants";

import "./Aside.scss";

const Aside = (props) => {
  const [active, setActive] = useState(false);
  const showActive = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <aside className="aside">
      <ul className="aside__list">
        <li className="aside__item">
          <a
            href="/contact"
            className={
              active ? "aside__link active" : "aside__link " + props.class
            }
            onClick={() => showActive()}
          >
            <img
              src={images.checkedFile}
              alt="checkedFile"
              className="checkedfile"
            />
            Руйхатга олиш
            <img src={images.arrowRight} alt="arrowRight" />
          </a>
        </li>
        <li className="aside__item">
          <a href="/about" className="aside__link">
            <img src={images.file} alt="file" />
            Маъмурий иш
            <span>34</span>
          </a>
        </li>
      </ul>
      <ul className="smallscreen__list">
        <li>
          <a
            href="/contact"
            className={
              active ? "aside__link active" : "aside__link " + props.class
            }
            onClick={() => showActive()}
          >
            <img
              src={images.checkedFile}
              alt="checkedFile"
              className="checkedfile"
            />
            <img src={images.arrowRight} alt="arrowRight" />
          </a>
        </li>
        <li>
          <a href="/about" className="aside__link">
            <img src={images.file} alt="file" />
            <span>34</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
