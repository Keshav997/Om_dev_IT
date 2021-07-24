import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function renderSubmenu(submenu, setClickedMenu) {
  return (
    <ul className="md:absolute md:left-16 w-44 bg-neutral-dark text-black text-opacity-50 md:text-white md:bg-secondary shadow flex flex-col divide-y divide-white z-30">
      {submenu.map((submenu, idx) => (
        <Link
          key={idx}
          to={submenu.link}
          className={
            "px-2 py-1 md:p-2 w-full text-base text-left hover:bg-black hover:bg-opacity-20 flex flex-row justify-between item-center"
          }
          onClick={(e) => setClickedMenu(undefined)}
        >
          <span className="text-sm">{submenu.subtitle}</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      ))}
    </ul>
  );
}

export default function SidebarIcon({
  item,
  clickedMenu,
  setClickedMenu,
  isActive,
}) {
  return (
    <>
      <div
        key="desktop-sidemenu"
        className={
          clickedMenu === item.title ? "hidden md:flex md:relative" : "hidden"
        }
      >
        {item.submenu ? renderSubmenu(item.submenu, setClickedMenu) : null}
      </div>
      <li
        className={
          isActive ? "border-l-4 border-secondary shadow-inner" : "shadow-inner"
        }
      >
        {item.submenu ? (
          <span
            className={`flex flex-row md:flex-col items-center text-start md:text-center p-2 w-full cursor-pointer text-xs space-y-1 space-x-2 md:space-x-0 py-4 
    ${
      clickedMenu === item.title
        ? "bg-secoundary text-color-secondary"
        : "hover:bg-secoundary hover:text-color-secondary"
    }`}
            onClick={(e) =>
              clickedMenu === item.title
                ? setClickedMenu(undefined)
                : setClickedMenu(item.title)
            }
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <div>{item.title}</div>
          </span>
        ) : (
          <Link
            className="flex flex-row md:flex-col item-center text-start md:text-center p-2 w-full cursor-pointer text-xs space-y-1 space-x-2 md:space-x-0 py-4 hover:bg-secoundary hover:text-white"
            to={item.title}
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <div>{item.title}</div>
          </Link>
        )}
      </li>
      <div
        key="mobile-sidemenu"
        className={clickedMenu === item.title ? "relative md:hidden" : "hidden"}
      >
        {item.submenu ? renderSubmenu(item.submenu) : null}
      </div>
    </>
  );
}
