import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList
            ? menuList.map((curElement) => {
                return (
                  <button
                    className="btn-group__item"
                    onClick={() => filterItem(curElement)}
                  >
                    {curElement}
                  </button>
                );
              })
            : "Loading..."}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
