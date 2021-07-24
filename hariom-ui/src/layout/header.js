import { Link } from "react-router-dom";
import { menu_config } from "../config/menu.config";
import { faBars, faCog, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { logo } = require("../config/branding.config");

const links = [
  { href: "/settings", icon: faCog, label: "Settings" },
  { href: "/logout", icon: faPowerOff, label: "Logout" },
];

export default function Header({ menu, service_type, toggleMenu }) {
  return (
    <nav className="w-full box-border">
      <ul className="bg-white mb-2 flex flex-row justify-between shadow px-5 py-2">
        <div className="flex flex-row">
          <li className="flex items-center justify-center text-3xl text-secondary mr-4 w-12 h-12 md:hidden">
            <FontAwesomeIcon icon={faBars} onClick={(e) => toggleMenu()} />
          </li>
          <li>
            <img
              alt="logo"
              // src={logo.small}
              className="h-10 items-center mt-0 mr-2 justify-center md:justify-start"
            />
          </li>
          <li className="pl-4 hidden md:flex flex-row items-center text-base my-1 divide-x divide-neutral">
            {menu_config.header
              .filter((hdr) => !hdr.mobileOnly)
              .map((hdr, idx) => (
                <Link key={idx} to={hdr.link}>
                  <div
                    className={
                      service_type === hdr.title
                        ? "p-2 text-secondary space-x-2"
                        : "p-2 text-neutral-dark hover:text-secondary cursor-pointer space-x-2"
                    }
                  >
                    <FontAwesomeIcon icon={hdr.icon} />
                    <span>{hdr.title}</span>
                  </div>
                </Link>
              ))}
          </li>
        </div>
        <div className="flex items-center md:divide-x divide-gray-200 space-x-2">
          <div className="flex flex-row px-4">
            <FontAwesomeIcon icon={faBell} size="lg" />
          </div>

          <div className="hidden md:flex flex-col text-base pr-2 pl-4">
            <div className="flex flex-row space-x-1 justify-start items-center">
              <span>Welcome</span>
              <span></span>
            </div>
            <div className="text-xs">Last Login</div>
          </div>
          <ul className="hidden md:flex items-center justify-between space-x-2 pl-2">
            {links.map(({ href, icon, label }) => (
              <li key={`${href}`} className="hover:text-secondary p-2">
                <Link id={label} to={href} className="no-underline">
                  <FontAwesomeIcon icon={icon} size="lg" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
}
