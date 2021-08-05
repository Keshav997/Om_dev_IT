import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const imageData = require("./data.json");

export default function PageSlide() {
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
    <div className="bg-white-50 flex flex-col place-content-between">
      <div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center items-center">
            <div
              className="sticky bg-cover bg-center left-0 right-0 w-full h-60 z-0"
              style={{
                backgroundImage: `url(${imageData[lobIndex].image})`,
                //  filter: `opacity(${imageData[lobIndex].imageOpacity})`,
              }}
            //  onClick={(e) => history.push(`/landing`)}
            >
              <div className="flex flex-row justify-between items-center">
                <div
                  className="p-2 text-white cursor-pointer z-30 "
                  onClick={goBack}
                >
                  {" "}
                  <FontAwesomeIcon size="2x" icon={faChevronLeft} />
                </div>
                <div
                  className="p-2 text-white cursor-pointer z-30"
                  onClick={goNext}
                >
                  {" "}
                  <FontAwesomeIcon size="2x" icon={faChevronRight} />
                </div>
              </div>

              <div className="flex flex-row pt-36 justify-center">
                <div className="flex flex-row items-center gap-x-2">
                  {imageData.map((_, idx) => (
                    <div
                      className={`w-2 h-2 ${
                        idx === lobIndex
                          ? "bg-primary"
                          : "bg-neutral border border-neutral-dark"
                      } rounded-full cursor-pointer z-30`}
                      onClick={(e) => setLobIndex(idx)}
                    >
                      &nbsp;
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
