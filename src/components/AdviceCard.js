import React from "react";
import dividerDesktop from "../Assets/pattern-divider-desktop.svg";
import dice from "../Assets/icon-dice.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAdvice } from "../rtk/Slices/advice-slice";
import { useEffect } from "react";
import RejectMessage from "./RejectMessage";

export const AdviceCard = () => {
  useEffect(() => {
    fetchAdvice();
  }, []);

  const a = useSelector((state) => state.advice);
  const dispatch = useDispatch();
  // console.log(a);

  return (
    <>
      {a == "rejected" ? (
        <>
          {" "}
          <RejectMessage />
        </>
      ) : (
        <div className="relative bg-backCard w-[95vw] sm:w-[400px] rounded-xl p-6 text-center">
          <h4 className="text-textseconsary mb-5">ADVICE # {a.id}</h4>
          <p className="mb-5 text-textprimary font-bold text-xl">
            "{a.advice}"
          </p>
          <div className="w-full mb-7">
            <img
              className="max-w-full object-contain "
              src={dividerDesktop}
              alt="divider"
            />
          </div>
          <button
            className="absolute bottom-[0] left-[50%] translate-x-[-50%] translate-y-[50%] rounded-full p-4 bg-textseconsary transition-all duration-200 hover:cursor-pointer hover:shadow-[0px_0px_30px_4px_#53ffab]"
            onClick={() => {
              dispatch(fetchAdvice());
            }}
          >
            <img className="max-w-full " src={dice} alt="dice" />
          </button>
        </div>
      )}
    </>
  );
};

export default AdviceCard;
