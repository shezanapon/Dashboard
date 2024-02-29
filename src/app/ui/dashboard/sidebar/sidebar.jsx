import React from "react";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter,
  MdAnalytics,
  MdPeople,
  MdWork,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork/>,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics/>,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople/>,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/setting",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.user}>
        <Image className="userImage" src="/shezan.png" alt="" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.username}>Shezan Mahbub</span>
          <span className={styles.userTitle}>Software Engineer</span>

        </div>
      </div>
      <ul className="styles.list">
        {menuItems.map((items) => (
          <li key={items.title}>
            <span className={styles.items}>{items.title}</span>
            {items.list.map(item=>(
                <MenuLink item={item} key={item.title}/>
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout/>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
