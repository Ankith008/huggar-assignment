import React, { useState } from "react";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import cross from "../images/cross.png";

export default function Navbar() {
  const [showmenu, setshowMenu] = useState(false);
  return (
    <>
      <div className="menuicon fixed w-[35px] top-[25px] right-[30px] hidden z-30 [@media(max-width:740px)]:block">
        <img
          onClick={() => {
            setshowMenu(!showmenu);
          }}
          src={showmenu ? cross : menu}
          alt="menu"
          className="menu w-full"
        />
      </div>
      <nav className="larger flex justify-between p-[30px] w-screen items-center h-[30px] mt-[30px]">
        <div className="logoclas">
          <img
            src={logo}
            alt="logo"
            className="logo [@media(max-width:740px)]:fixed [@media(max-width:740px)]:w-[120px] [@media(max-width:740px)]:top-[30px]"
          />
        </div>
        <div className="seconder flex p-[30px] items-center gap-[30px] font-medium text-[1.2rem]">
          <li className="list-none cursor-pointer [@media(max-width:770px)]:text-[1rem] [@media(max-width:740px)]:hidden">
            Home
          </li>
          <li className="list-none cursor-pointer [@media(max-width:770px)]:text-[1rem] [@media(max-width:740px)]:hidden">
            Flashcard
          </li>
          <li className="list-none cursor-pointer [@media(max-width:770px)]:text-[1rem] [@media(max-width:740px)]:hidden">
            Contact
          </li>
          <li className="list-none cursor-pointer [@media(max-width:770px)]:text-[1rem] [@media(max-width:740px)]:hidden">
            FAQ
          </li>
          <button className="loginbutton bg-[linear-gradient(180deg,_#06286e_0%,_#164ec0_100%)] text-[white] border-[none] px-[40px] py-[13px] rounded-[32px] text-[16px] [@media(max-width:740px)]:hidden">
            Login
          </button>
        </div>
      </nav>
      {showmenu && (
        <nav className="smaller fixed top-[0] right-[0] h-full min-h-screen w-[250px] flex flex-col gap-[20px] pt-[100px] items-center text-[1.2rem] font-medium [box-shadow:-7px_-7px_30px_rgba(0,_0,_0,_0.1)] hidden backdrop-filter backdrop-blur-[50px] [@media(max-width:740px)]:flex">
          <li
            onClick={() => setshowMenu(!showmenu)}
            className="list-none cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => setshowMenu(!showmenu)}
            className="list-none cursor-pointer"
          >
            Flashcard
          </li>
          <li
            onClick={() => setshowMenu(!showmenu)}
            className="list-none cursor-pointer "
          >
            Contact
          </li>
          <li
            onClick={() => setshowMenu(!showmenu)}
            className="list-none cursor-pointer"
          >
            FAQ
          </li>
          <button className="loginbutton bg-[linear-gradient(180deg,_#06286e_0%,_#164ec0_100%)] text-[white] border-[none] px-[40px] py-[13px] rounded-[32px] text-[16px] ">
            Login
          </button>
        </nav>
      )}
    </>
  );
}
