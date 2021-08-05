import { useState } from "react";
import Header from "./header";
// import QuickLinks from "./quick-link";
import Sideber from "./sidebar";
import Footer from "./footer";

export function Layout({ children, nav, service_type }) {
  let [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    // <span>Inside layout</span>
    <div className="w-screen relative h-auto">
      <Header {...{ service_type, toggleMenu }} />
      {/* <QuickLinks /> */}
      <div className="flex flex-row min-h-screen">
        <Sideber {...{ nav, service_type, showMenu, toggleMenu }} />
        <div className="w-full">
          <div className="w-full">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const ClientService = "Shop Owner";
export const SelfService = "Customer";
