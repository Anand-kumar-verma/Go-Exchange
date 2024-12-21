import React from "react";
import { bgball, bgheader, bgtext } from "../utility/color";

const Header = () => {
  return (
    <>
      <div
        className="flex justify-between p-2"
        style={{ backgroundColor: bgheader }}
      >
        <div className="px-2">
          <img
            src="https://sitethemedata.com/sitethemes/goexch9.com/front/logo.png"
            alt="Logo"
            className="w-[100px] h-[64px] object-contain"
          />
        </div>

        <div
          className="flex flex-col sm:flex-row text-[${bgtext}] font-bold gap-3 sm:gap-5 pt-2 items-center sm:items-start"
          style={{ color: bgtext }}
        >
          <p className="hidden sm:block">Rules</p>
          <p className="text-center sm:text-left">
            Balance: 0 <br /> Exp: 0
          </p>
          <p className="hidden sm:block">Demo</p>
        </div>
      </div>
      <div
        className="flex text-sm  font-bold justify-start gap-5 p-3 px-5"
        style={{ backgroundColor: bgball, color: bgtext }}
      >
        <p className="hover:underline">HOME</p>
        <p className="hover:underline">LOTTERY</p>
        <p className="hover:underline">CRICKEt</p>
        <p className="hover:underline">TENNIS</p>
        <p className="hover:underline">FOOTBALL</p>
        <p className="hover:underline">TABLE TENNIS</p>
        <p className="hover:underline">BACCARAT</p>
        <p className="hover:underline">32 CARDS</p>
        <p className="hover:underline">TEENPATTI</p>
        <p className="hover:underline">POKER</p>
        <p className="hover:underline">LUCKY 7</p>
      </div>
    </>
  );
};

export default Header;
