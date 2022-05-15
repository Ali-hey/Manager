import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import Gallery from "./gallery/Gallery";
import WithAlert2 from "./HOC/WithAlert2";
import Addpost from "./posts/Addpost";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import AddUser from "./users/AddUsers";
import EditDesc from "./users/EditDesc";
import Users from "./users/Users";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`}
        onClick={handleShowMenu}
      ></i>
      <Routes>
        <Route
          path="/"
          element={
            <WithAlert2
              render={(Confirm, Alert) => (
                <Users Confirm={Confirm} Alert={Alert} />
              )}
            />
          }
        />
        <Route path="/users/add" element={<AddUser />}>
          <Route path=":userId" element={<EditDesc />} />
        </Route>

        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/add" element={<Addpost />}>
          <Route path=":postId" />
        </Route>

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
        <Route
          path="*"
          element={
            <WithAlert2
              render={(Confirm, Alert) => (
                <Users Confirm={Confirm} Alert={Alert} />
              )}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Content;
