import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCircle as faCircleSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import * as allSvgIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PageSlide() {
  const plansPerpage = 3;
  const slideTimeout = 300;
  let [pageNo, setPageNo] = useState(0);
  let [planStartNo, setPlanStartNo] = useState(0);
  let [slideLeft, setSlideLeft] = useState(false);
  let [slideRight, setSlideRight] = useState(false);
  let [pageLeftRequired, setPageLeftRequired] = useState(false);
  let [pageRightRequired, setPageRightRequired] = useState(false);
  useEffect(() => {
    if (slideLeft) {
      const timer = setTimeout(() => {
        setSlideLeft(false);
        setPageNo(pageNo - 1);
        setPlanStartNo(Math.max(0, planStartNo - plansPerpage));
      }, slideTimeout);
      return () => {
        clearTimeout(timer);
      };
    }
    if (slideRight) {
      const timer = setTimeout(() => {
        setSlideRight(false);
        setPageNo(pageNo + 1);
        setPlanStartNo(Math.max(planStartNo + plansPerpage, 4));
      }, slideTimeout);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [
    slideLeft,
    slideRight,
    pageRightRequired,
    pageLeftRequired,
    pageNo,
    planStartNo,
  ]);

  const moveForwardNextPage = () => {};
}
