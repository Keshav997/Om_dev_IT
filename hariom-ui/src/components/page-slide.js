import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function PageSlide() {
  const imageData = "dfbbdsgb";
 // const slideTimeout = 300;
  let [initDone, setInitDone] = useState(false);
  let [lobIndex, setLobIndex] = useState(0);
  const history = useHistory();

  const goBack = () => {
    lobIndex === 0
      ? setLobIndex(imageData.length - 1)
      : setLobIndex(lobIndex - 1);
  };
  const goNext = () => {
    lobIndex === imageData.length - 1
      ? setLobIndex(0)
      : setLobIndex(lobIndex + 1);
  };
  useEffect(() => {
    let timerFunc = setTimeout(() => {
      goNext();
    }, 2000);
    return () => clearTimeout(timerFunc);
  });
  useEffect(() => {
    if (!initDone) {
      setInitDone(true);
    }
  }, [initDone, setInitDone]);

  return (
    <div className="relative p-2 h-24 bg-white-50 flex flex-col place-content-between">
      <div 
      className="absolute bg-cover bg-center left-0 right-0 w-full z-0"
    //   style={{backgroundImage: `url(${imageData.[lobIndex].image})`,
    // filter:`opaci`
    // }}
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-center items-center">
            <div
              className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full cursor-pointer z-30"
              onClick={goBack}
            >
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </div>
            <span
            onClick = {(e) => history.push(`/landing`)}
            >Dokan</span>
            <div
              className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full cursor-pointer z-30"
              onClick={goBack}
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
