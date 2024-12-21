import React, { useEffect, useState } from "react";
import {
  bgback,
  bgball,
  bgbtn,
  bgcount,
  bgedit,
  bgheader,
  bglock,
  bgmarqu,
  bgreset,
  bgrounded,
  bgrun,
  bgsubmit,
  bgtext,
} from "../utility/color";
import { Close, Lock } from "@mui/icons-material";
import { toast } from "react-toastify";

export default function CricketBet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isGameSelected, setIsGameSelected] = useState(true);
  const [iframeSrc, setIframeSrc] = useState(
    "https://www.youtube.com/embed/-YK-Ykul2qs?si=ZltBsy_fY-OmcYwn&autoplay=0"
  );
  const repeatedRs = new Array(8).fill("R");
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value) => {
    setInputValue(value);
  };
  const [inputValues, setInputValues] = useState(new Array(10).fill(""));

  const handleInputChange = (e, index) => {
    const newValues = [...inputValues];
    newValues[index] = e.target.value;
    setInputValues(newValues);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModal1 = () => {
    setIsModalOpenEdit(!isModalOpenEdit);
  };
  const handleGameSelection = () => {
    setIsGameSelected(true);
  };

  const handleCasinoSelection = () => {
    setIsGameSelected(false);
  };

  const [currentNumber, setCurrentNumber] = useState(0);

  // Increment number to simulate a clock-like behavior (e.g., every second)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // State to track if video is playing

  useEffect(() => {
    if (isVideoPlaying) return; // Don't start the timer if the video is playing

    const timer = setInterval(() => {
      setCurrentNumber((prev) => (prev + 1) % 6); // cycle through 0-5
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(timer); // Clean up timer on unmount or if video starts
  }, [isVideoPlaying]);

  const handleVideoStateChange = (event) => {
    // event.data corresponds to the player's state:
    // 1 = playing, 2 = paused, 0 = ended
    if (event.data === 1) {
      // Video is playing
      setIsVideoPlaying(true);
    } else if (event.data === 2 || event.data === 0) {
      // Video is paused or ended
      setIsVideoPlaying(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeSrc(
        "https://www.youtube.com/embed/-YK-Ykul2qs?si=ZltBsy_fY-OmcYwn&autoplay=1"
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:flex justify-between w-full">
      <div className="lg:mx-2  lg:w-[70%]">
        <div
          className="flex justify-between p-1 items-center"
          style={{ backgroundColor: bgball, color: bgtext }}
        >
          <p className="lg:font-bold">
            Ball By Ball <sub>Rules</sub>
          </p>
          <p className="lg:text-sm text-xs">Round ID : 4830173992829</p>
        </div>
        <div className="relative">
          <div className="absolute lg:bottom-10 bottom-2 lg:-right-5 -right-2 h-16 w-[20%] ">
            <div className="text-white flex gap-1 items-center justify-center mr-12">
              <p className="!bg-yellow-500 items-center px-1 py-1 rounded-md lg:text-8xl text-6xl font-bold">
                0
              </p>
              <p className="!bg-yellow-500 items-center px-1 py-1 rounded-md lg:text-8xl text-6xl font-bold">
                0
              </p>
            </div>
          </div>

          <iframe
            width="100%"
            height="330"
            src={iframeSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onStateChange={handleVideoStateChange}
            style={{ maxWidth: "770px", width: "100%" }}
          ></iframe>
        </div>

        <div
          className="flex justify-between mt-2 p-1"
          style={{ backgroundColor: bgball, color: bgtext }}
        >
          <p className="font-bold">Runs</p>
          <p className="text-sm"></p>
        </div>

        <div className="border-b border-gray-500 grid grid-cols-9 place-items-center">
          <p className="font-bold"></p>
          <p
            className="text-sm lg:p-2 font-bold"
            style={{ backgroundColor: bgback, color: bgcount }}
          >
            Back
          </p>
          <p className="font-bold"></p>

          <p className="font-bold"></p>
          <p
            className="text-sm lg:p-2 font-bold"
            style={{ backgroundColor: bgback, color: bgcount }}
          >
            Back
          </p>
          <p className="font-bold"></p>

          <p className="font-bold"></p>
          <p
            className="text-sm lg:p-2 font-bold"
            style={{ backgroundColor: bgback, color: bgcount }}
          >
            Back
          </p>
          <p className="font-bold"></p>
        </div>
        <div className="border-b border-gray-500 grid grid-cols-9 place-items-center text-xs">
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            0 Runs{" "}
          </p>
          <p
            className="lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock onClick={toggleModal} style={{ color: bgtext }} />
          </p>
          <p
            className="lg:text-xs text-[8px] font-bold"
            style={{ color: bgrun }}
          >
            Min: 50 <br /> Max: 25K
          </p>
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            4 Runs{" "}
          </p>
          <p
            className=" lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock style={{ color: bgtext }} />
          </p>
          <p
            className="lg:text-xs text-[8px] font-bold"
            style={{ color: bgrun }}
          >
            Min: 5 <br /> Max: 2K
          </p>
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            10 Runs{" "}
          </p>
          <p
            className=" lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock style={{ color: bgtext }} />
          </p>
          <p
            className="lg:text-xs text-[8px] font-bold"
            style={{ color: bgrun }}
          >
            Min: 0 <br /> Max: 15K
          </p>
        </div>
        <div className="border-b border-gray-500 grid grid-cols-9 place-items-center text-xs">
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            3 Runs{" "}
          </p>
          <p
            className=" lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock style={{ color: bgtext }} />
          </p>
          <p
            className=" font-bold lg:text-xs text-[8px]"
            style={{ color: bgrun }}
          >
            Min: 0 <br /> Max: 25K
          </p>
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            40 Runs{" "}
          </p>
          <p
            className=" lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock style={{ color: bgtext }} />
          </p>
          <p
            className=" font-bold lg:text-xs text-[8px]"
            style={{ color: bgrun }}
          >
            Min: 51 <br /> Max: 2K
          </p>
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            100 Runs{" "}
          </p>
          <p
            className=" lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock style={{ color: bgtext }} />
          </p>
          <p
            className=" font-bold lg:text-xs text-[8px]"
            style={{ color: bgrun }}
          >
            Min: 01 <br /> Max: 5K
          </p>
        </div>
        <div className="border-b border-gray-500 grid grid-cols-9 place-items-center text-xs">
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            Boundary{" "}
          </p>
          <p
            className="lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock onClick={toggleModal} style={{ color: bgtext }} />
          </p>
          <p
            className=" font-bold lg:text-xs text-[8px]"
            style={{ color: bgrun }}
          >
            Min: 0 <br /> Max: 25K
          </p>
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            40 Runs{" "}
          </p>
          <p
            className=" lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock style={{ color: bgtext }} />
          </p>
          <p
            className=" font-bold lg:text-xs text-[8px]"
            style={{ color: bgrun }}
          >
            Min: 51 <br /> Max: 2K
          </p>
          <p
            className="font-bold lg:text-xs text-[8px]"
            style={{ color: bgcount }}
          >
            100 Runs{" "}
          </p>
          <p
            className=" lg:px-3 lg:py-2 font-bold"
            style={{ backgroundColor: bglock }}
          >
            <Lock style={{ color: bgtext }} />
          </p>
          <p
            className=" font-bold lg:text-xs text-[8px]"
            style={{ color: bgrun }}
          >
            Min: 01 <br /> Max: 5K
          </p>
        </div>
        <div
          className="flex justify-between items-center my-2 p-1"
          style={{ backgroundColor: bgmarqu, color: bgtext }}
        >
          <img
            src={
              "https://versionobj.ecoassetsservice.com/v25/static/front/img/icons/remark.png"
            }
            alt=""
            className="w-5 h-5 pt-1"
          />
          <p className="text-sm">
            <marquee>
              Results are based on stream only. Score board may be different or
              updated later.
            </marquee>
          </p>
        </div>
        <div
          className="flex justify-between mt-2 p-1 px-2"
          style={{ backgroundColor: bgball, color: bgtext }}
        >
          <p className="">Last Result</p>
          <p>View All</p>
        </div>
        <div className="flex justify-end gap-2 my-2">
          {repeatedRs.map((item, index) => (
            <p
              key={index}
              className="p-1 w-8 h-8 rounded-full text-center"
              style={{ backgroundColor: bgrounded, color: bgball }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="lg:w-[30%]">
        {isModalOpen && (
          <>
            <p
              className="font-bold p-1"
              style={{ backgroundColor: bgball, color: bgtext }}
            >
              Place Bet{" "}
            </p>
            <div
              className="flex justify-between p-1 border-b font-bold   text-sm"
              style={{ backgroundColor: bgbtn, color: bgheader }}
            >
              <p>(Bet for)</p>
              <p>Odds</p>
              <p>Stake</p>
              <p>Profit</p>
            </div>
            <div
              className="flex justify-between p-2 border-b font-bold text-sm"
              style={{ color: bgheader, backgroundColor: bgback }}
            >
              <p>2 Runs</p>
              <input
                type="number"
                placeholder="0"
                className="w-10 text-center"
              />
              <input
                type="text"
                className="w-16 text-center"
                value={inputValue}
              />
              <p></p>
            </div>
            <div
              className="grid grid-cols-3 place-items-center gap-1 p-2 border-b font-bold text-sm"
              style={{ color: bgheader, backgroundColor: bgback }}
            >
              <button
                className="w-24 p-2 rounded"
                style={{ backgroundColor: bgbtn }}
                onClick={() => handleButtonClick("25")} // Set value to 25 on button click
              >
                25
              </button>
              <button
                className="w-24 p-2 rounded"
                style={{ backgroundColor: bgbtn }}
                onClick={() => handleButtonClick("50")} // Set value to 50 on button click
              >
                50
              </button>
              <button
                className="w-24 p-2 rounded"
                style={{ backgroundColor: bgbtn }}
                onClick={() => handleButtonClick("100")} // Set value to 100 on button click
              >
                100
              </button>
              <button
                className="w-24 p-2 rounded"
                style={{ backgroundColor: bgbtn }}
                onClick={() => handleButtonClick("5")} // Set value to 5 on button click
              >
                5
              </button>
              <button
                className="w-24 p-2 rounded"
                style={{ backgroundColor: bgbtn }}
                onClick={() => handleButtonClick("40")} // Set value to 40 on button click
              >
                40
              </button>
              <button
                className="w-24 p-2 rounded"
                style={{ backgroundColor: bgbtn }}
                onClick={() => handleButtonClick("60")} // Set value to 60 on button click
              >
                60
              </button>
            </div>
            <div
              className="flex justify-between p-1 mb-2"
              style={{ backgroundColor: bgback }}
            >
              <div>
                <button
                  className=" w-20  p-2"
                  style={{ backgroundColor: bgedit, color: bgtext }}
                  onClick={toggleModal1}
                >
                  Edit
                </button>
              </div>
              <div className="flex justify-end gap-1">
                <button
                  className=" w-20  p-2"
                  style={{ backgroundColor: bgreset, color: bgtext }}
                  onClick={toggleModal}
                >
                  Reset
                </button>
                <button
                  className=" w-20  p-2"
                  style={{ backgroundColor: bgsubmit, color: bgtext }}
                  onClick={() => toast("Place bet successfully")}
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
        <div className="">
          {isModalOpenEdit && (
            <>
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white  w-[30%]">
                  <div
                    className="flex justify-between font-bold p-2"
                    style={{ backgroundColor: bgheader, color: bgtext }}
                  >
                    <p className="">Set Button Value</p>
                    <Close onClick={toggleModal1} />
                  </div>
                  <div className="flex justify-start m-4 ">
                    <button
                      className={`font-bold p-2  ${
                        isGameSelected ? "bg-yellow-400" : "bg-gray-400"
                      }`}
                      onClick={handleGameSelection}
                    >
                      Game Buttons
                    </button>
                    <button
                      className={` font-bold p-2  ${
                        !isGameSelected ? "bg-yellow-400" : "bg-gray-400"
                      }`}
                      onClick={handleCasinoSelection}
                    >
                      Casino Buttons
                    </button>
                  </div>
                  <div className="flex justify-between font-bold p-3 ">
                    {" "}
                    <p>Price Label :</p>
                    <p>Price Value :</p>
                  </div>
                  <div className="grid grid-cols-2 m-2 place-items-center gap-2">
                    {[1, 5, 45, 25, 14, 78, 24, 0, 45, 25, 5, 56]?.map(
                      (i, index) => (
                        <div
                          key={index}
                          className="flex flex-col justify-center"
                        >
                          <input
                            className="p-1 border border-gray-400 "
                            value={i}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      className="p-2 w-full m-5 "
                      style={{ backgroundColor: bgheader, color: bgtext }}
                      onClick={() => {
                        toast("Price Updated Successfully");
                        toggleModal1(); // Close the modal after update
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <p
          className="font-bold p-1 "
          style={{ backgroundColor: bgball, color: bgtext }}
        >
          My Bet{" "}
        </p>
        <div
          className="flex justify-between p-1 border-b font-bold  bg-gray-100 text-sm"
          style={{ color: bgheader }}
        >
          <p>Matched Bet</p>
          <p>Odds</p>
          <p>Stake</p>
        </div>
      </div>
    </div>
  );
}
