import { SportsEsports } from "@mui/icons-material";
import TvIcon from "@mui/icons-material/Tv";
import React from "react";
import { useNavigate } from "react-router-dom";
import { bgheader } from "../utility/color";

const gameData = [
  {
    game: "Ball by Ball",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "Dhaka Division v Barisal Division",
    date: "19/12/2024 01:00:00 PM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "BM",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "Mumbai Indians XI v Punjab Kings XI",
    date: "19/12/2024 04:45:00 PM",
    status: "Ball by Ball",
    tvIcon: false,
    team1: "f",
    team2: "BM",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "ABL Stallions v Markhors",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "4",
    odds2: "-",
  },
  {
    game: "Brisbane Heat T10 v Adelaide Strikers",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "-",
    odds2: "6",
  },
  {
    game: "Kolkata Knight Riders T10 v Rajasthan Royals ",
    date: "20/12/2024 11:30:00",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "New Zealand Women v Australia Women ",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: false,
    team1: "f",
    team2: "",
    odds1: "8",
    odds2: "-",
  },
  {
    game: "Ball by Ball",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "",
    team2: "",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "Dhaka Division v Barisal Division",
    date: "19/12/2024 01:00:00 PM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "BM",
    odds1: "-",
    odds2: "1",
  },
  {
    game: "Mumbai Indians XI v Punjab Kings XI",
    date: "19/12/2024 04:45:00 PM",
    status: "Ball by Ball",
    tvIcon: false,
    team1: "",
    team2: "BM",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "ABL Stallions v Markhors",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "Brisbane Heat T10 v Adelaide Strikers ",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "Ball by Ball",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "Dhaka Division v Barisal Division",
    date: "19/12/2024 01:00:00 PM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "BM",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "Mumbai Indians XI v Punjab Kings XI",
    date: "19/12/2024 04:45:00 PM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "BM",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "ABL Stallions v Markhors",
    date: "20/12/2024 11:30:00 AM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "-",
    odds2: "-",
  },
  {
    game: "Brisbane Heat T10 v Adelaide Strikers T10 ",
    date: "19/12/2024 05:45:00 PM",
    status: "Ball by Ball",
    tvIcon: true,
    team1: "f",
    team2: "",
    odds1: "-",
    odds2: "-",
  },
  // More game
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex flex-col justify-between p-2 overflow-x-hidden"
        style={{ color: bgheader }}
      >
        <div className="flex lg:flex-row flex-col justify-between font-bold border-t w-full border-b border-[#bbbbbb]">
          <p className="px-2 lg:w-[70%] w-full lg:text-sm text-[10px] text-center">
            Game
          </p>
          <div className="lg:w-[30%] w-full grid grid-cols-3 place-items-center lg:text-sm text-[10px]">
            <p className="">1</p>
            <p className="">X</p>
            <p className="">2</p>
          </div>
        </div>

        {gameData.map((game, index) => (
          <div
            className="flex lg:flex-row flex-col justify-between border-b border-[#bbbbbb]"
            key={index}
          >
            <div className="lg:w-[70%] w-[100%] flex lg:gap-0 gap-2 justify-between   px-1 items-center">
              <p
                className="lg:w-[45%] w-[60%]   lg:text-sm text-[10px] cursor-pointer"
                onClick={() => navigate("/cricket")}
              >
                {game.game} / {game.date}
              </p>
              <div className="lg:w-[18%] w-[40%] grid grid-cols-5 gap-4 place-items-center lg:text-sm text-[10px]">
                <p className="bg-green-600 lg:w-3 lg:h-3 w-2 h-2 items-center rounded-full mt-2 "></p>
                <p>
                  {game.tvIcon && (
                    <TvIcon className="!font-bold lg:!text-sm !text-[15px]" />
                  )}
                </p>
                <p className="font-bold">{game.team1}</p>
                <p className="font-bold">{game.team2}</p>
                <p className="lg:text-sm text-[10px]">
                  <SportsEsports className="lg:!text-sm !text-[15px]" />
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 lg:w-[30%] w-[100%] lg:text-sm text-[10px]">
              <div className="grid grid-cols-2 bg-black text-center ">
                <p className="font-bold bg-[#72bbef] px-5 lg:p-0 p-2">
                  {game.odds1}
                </p>
                <p className="bg-[#faa9ba] px-5 lg:p-0 p-2">{game.odds2}</p>
              </div>
              <div className="grid grid-cols-2 text-center">
                <p className="font-bold bg-[#72bbef] px-5 lg:p-0 p-2">
                  {game.odds1}
                </p>
                <p className="bg-[#faa9ba] px-5 lg:p-0 p-2">{game.odds2}</p>
              </div>
              <div className="grid grid-cols-2 text-center ">
                <p className="font-bold bg-[#72bbef] px-5 lg:p-0 p-2 ">
                  {game.odds1}
                </p>
                <p className="bg-[#faa9ba] px-5 lg:p-0 p-2">{game.odds2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        <img
          className="w-full h-auto"
          src="https://dataobj.ecoassetsservice.com/casino-icons/lc/ourroullete.jpg"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://dataobj.ecoassetsservice.com/casino-icons/lc/ballbyball.jpg"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://dataobj.ecoassetsservice.com/casino-icons/lc/ab4.jpg"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://dataobj.ecoassetsservice.com/casino-icons/lc/teen.jpg"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://dataobj.ecoassetsservice.com/casino-icons/lc/ourroullete.jpg"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://dataobj.ecoassetsservice.com/casino-icons/lc/ballbyball.jpg"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://dataobj.ecoassetsservice.com/casino-icons/lc/ab4.jpg"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://dataobj.ecoassetsservice.com/casino-icons/lc/teen.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
