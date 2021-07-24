import {
  faChartBar,
  faUser,
  faCog,
  faPowerOff,
  faUserTag,
  faHome,
  faTag,
  faUsers,
  faFileContract,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

export const menu_config = {
  header: [
    {
      title: "Shop Owner",
      mobileOnly: false,
      icon: faUserTag,
      link: "/landing",
      sidebar: [
        {
          title: "Home",
          icon: faHome,
          link: "/landing",
        },
        {
          title: "Home",
          icon: faTag,
          link: "/landing",
        },
        {
          title: "Home",
          icon: faFileContract,
          link: "/landing",
        },
        {
          title: "Home",
          icon: faUsers,
          link: "/landing",
        },
        {
          title: "Home",
          icon: faRupeeSign,
          link: "/landing",
        },
      ],
    },
    {
      title: "Customer",
      mobileOnly: false,
      icon: faChartBar,
      link: "/landing",
      sidebar: [
        {
          title: "Home",
          icon: faHome,
          link: "/landing",
        },
        {
          title: "Profile",
          icon: faUser,
          link: "/landing",
        },
        {
          title: "Settings",
          icon: faCog,
          link: "/landing",
        },
        {
          title: "My Oders",
          icon: faHome,
          link: "/landing",
        },
        {
          title: "Logout",
          icon: faPowerOff,
          link: "/landing",
        },
      ],
    },
  ],
  quickLinks: [
    { label: "Home", icon: faHome, link: "/landing" },
    { label: "Home", icon: faHome, link: "/landing" },
    { label: "Home", icon: faHome, link: "/landing" },
    { label: "Home", icon: faHome, link: "/landing" },
  ],

  footer: [
    {
      title: "About Us",
      link: "/landing",
    },
    {
      title: "Customer Care",
      link: "/landing",
    },
    {
      title: "Privacy Policy",
      link: "/landing",
    },
    {
      title: "Terms & Conditions",
      link: "/landing",
    },
    {
      title: "Site map",
      link: "/landing",
    },
    {
      title: "Browser & Display Compatibility",
      link: "/landing",
    },
  ],
};
