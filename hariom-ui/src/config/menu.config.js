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
      title: "Customer",
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
          title: "Shop by Catagory",
          icon: faTag,
          link: "/landing",
        },
        {
          title: "My Order",
          icon: faFileContract,
          link: "/landing",
        },
        {
          title: "My Account",
          icon: faFileContract,
          link: "/landing",
        },
        {
          title: "Explore",
          icon: faUsers,
          link: "/landing",
        },
        {
          title: "About Us",
          icon: faRupeeSign,
          link: "/landing",
        },
        {
          title: "Contact Us",
          icon: faRupeeSign,
          link: "/landing",
        },
        {
          title: "Settings",
          icon: faRupeeSign,
          link: "/landing",
        },
        {
          title: "Customer Service",
          icon: faRupeeSign,
          link: "/landing",
        },
      ],
    },
    {
      title: "Shop Owner",
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
          title: "My Uploads",
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
