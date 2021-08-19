import Menu from "./MenuAPI";
import "./style.css";
import { useState } from "react";
import Menucard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((curElement) => {
      return curElement.category === category;
    });
    setMenuData(updateList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );
};
export default Resturant;
