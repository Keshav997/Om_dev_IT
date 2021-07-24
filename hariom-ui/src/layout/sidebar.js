import { useState } from "react";
import { menu_config } from "../config/menu.config";
import SideberIcon from "./sidebar-icon";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({ nav, service_type, showMenu, toggleMenu }) {
  let [clickedMenu, setClickedMenu] = useState(undefined);

  return (
    <>
      {/* {desktop menu} */}
      <ul
        className={
          "hidden md:flex md:flex-col w-16 bg-black text-white bg-opacity-50 min-h-screen max-h-full -mt-2 shadow-inner"
        }
      >
        {menu_config.header
          .find((hdr) => hdr.title === service_type)
          .sidebar.map((item, idx) => (
            <SideberIcon
              key={idx}
              {...{ item, clickedMenu, setClickedMenu }}
              isActive={nav[0] === item.title}
            />
          ))}
      </ul>
      {/* {mobile menu} */}
      <div
        className={
          showMenu ? "absolute top-0 md:hidden bg-white w-1/2 z-50" : "hidden"
        }
      >
        <ul className="bg-black bg-opacity-40 text-white h-20 p-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row text-left text-base pr-2 space-x-2">
                <span>Welcome</span>
                <span className="text-white text-base font-bold"></span>
              </div>
              <div className="text-xs">Last Login</div>
            </div>
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="cursor-pointer"
              onClick={(e) => toggleMenu()}
            />
          </div>
        </ul>
        <ul className="z-30 bg-black text-white bg-opacity-60 min-h-screen max-h-full -mt-2 shadow-inner">
          {menu_config.header.map((hdr, idx) => (
            <div className="w-full" key={idx}>
              <div className="w-full py-2 text-xs bg-primary text-white flex item-center justify-center">
                {hdr.title}
              </div>
              {hdr.sidebar.map((item, idx) => (
                <SideberIcon
                  key={idx}
                  {...{ item, clickedMenu, setClickedMenu }}
                  isActive={nav[0] === item.title}
                />
              ))}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
