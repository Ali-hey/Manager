import React, { useContext } from "react";
import style from "./style.module.css";
import { MainContext } from "./contexts/MainContext";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  return (
    <div
      className={`${style.sidebar_section} bg-secondary`}
      style={showMenu ? { right: 0 } : {}}
    >
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src="/images/user.jpg" alt="" />
        </li>

        <NavLink className={({isActive})=>{return isActive?"active_nav":""}}      to="/">
          <li
            onClick={() => {
              setShowMenu(false);
            }}
          >
            کاربران
          </li>
        </NavLink>

        <NavLink className={({isActive})=>{return isActive?"active_nav":""}}      to="/posts">
          <li
            onClick={() => {
              setShowMenu(false);
            }}
          >
            پست ها
          </li>
        </NavLink>

        <NavLink className={({isActive})=>{return isActive?"active_nav":""}}      to="/gallery">
          <li
            onClick={() => {
              setShowMenu(false);
            }}
          >
            گالری
          </li>
        </NavLink>

        <NavLink className={({isActive})=>{return isActive?"active_nav":""}}      to="/todos">
          <li
            onClick={() => {
              setShowMenu(false);
            }}
          >
            کارها
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
