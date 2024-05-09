import React from "react";
import home from "../images/home.png";
import left_arrow from "../images/left_arrow.png";
import card from "../images/card.png";
import restart from "../images/restart.png";
import leftcardarrow from "../images/left-card-arrow.png";
import rightcardarrow from "../images/right-card-arrow.png";
import fullsize from "../images/fullsize.png";
import pubhug from "../images/pub_hug.png";
import plus from "../images/plus.png";
import logo from "../images/logo.png";
import down from "../images/down_arrow.png";

export default function Home() {
  return (
    <>
      <section className="path flex items-center mx-[40px] my-[30px] flex-wrap font-semibold">
        <img src={home} alt="home" className="home" />
        <img
          src={left_arrow}
          alt="left_arrow"
          className="left_arrow mx-[10px] my-[0]"
        />
        <p className="text-[#696671] [@media(max-width:352px)]:text-[0.8rem]">
          Flashcard
        </p>
        <img
          src={left_arrow}
          alt="left_arrow"
          className="left_arrow mx-[10px] my-[0]"
        />
        <p className="text-[#696671] [@media(max-width:352px)]:text-[0.8rem]">
          Mathmatics
        </p>
        <img
          src={left_arrow}
          alt="left_arrow"
          className="left_arrow mx-[10px] my-[0]"
        />
        <p
          className="relations text-[#06286e
}] [@media(max-width:352px)]:text-[0.8rem]"
        >
          Relation and Function
        </p>
      </section>
      <p className="randfpara bg-[linear-gradient(180deg,_#06286e_0%,_#164ec0_100%)] bg-clip-text text-transparent text-[2rem] font-semibold px-[40px] py-[0] [@media(max-width:674px)]:text-[1.5rem] [@media(max-width:352px)]:text-[0.8rem]">
        Relations and Functions ( Mathematics )
      </p>
      <section className="disbox flex justify-center items-center mt-[40px] p-[20px]">
        <div className="dis flex flex-col justify-center items-center gap-[20px] [@media(max-width:980px)]:w-[80vw] [@media(max-width:557px)]:gap-[10px]">
          <div className="list w-4/5 flex justify-between items-center text-[1.2rem] px-[20px] py-[0] text-[gray] font-semibold pb-[20px] flex-wrap [@media(max-width:557px)]:text-[0.9rem] [@media(max-width:557px)]:pb-0 [@media(max-width:557px)]:justify-center [@media(max-width:557px)]:gap-[20px] [@media(max-width:557px)]:w-[90%] [@media(max-width:557px)]:flex-nowrap">
            <span className="border-b-[3px_solid_transparent] hover:text-[#06286e] hover:cursor-pointer hover:border-b-[3px_solid_#06286e]">
              Study
            </span>
            <span className="border-b-[3px_solid_transparent] hover:text-[#06286e] hover:cursor-pointer hover:border-b-[3px_solid_#06286e]">
              Quiz
            </span>
            <span className="border-b-[3px_solid_transparent] hover:text-[#06286e] hover:cursor-pointer hover:border-b-[3px_solid_#06286e]">
              Test
            </span>
            <span className="border-b-[3px_solid_transparent] hover:text-[#06286e] hover:cursor-pointer hover:border-b-[3px_solid_#06286e]">
              Game
            </span>
            <span className="border-b-[3px_solid_transparent] hover:text-[#06286e] hover:cursor-pointer hover:border-b-[3px_solid_#06286e]">
              Others
            </span>
          </div>
          <img src={card} alt="card" className="card w-full" />
          <div className="options flex items-center w-4/5 justify-between [@media(max-width:557px)]:w-[90%]">
            <img
              src={restart}
              className="restart [@media(max-width:557px)]:w-[20px]"
              alt="restart"
            />
            <div className="middle flex items-center gap-[10px]">
              <img
                src={rightcardarrow}
                alt="rightcardarrow"
                className="[@media(max-width:557px)]:w-[40px] [@media(max-width:360px)]:w-[25px]"
              />
              <p className="text-[#06286e] font-bold ">01 / 10</p>
              <img
                src={leftcardarrow}
                alt="leftcardarrow"
                className="[@media(max-width:557px)]:w-[40px]
                 [@media(max-width:360px)]:w-[25px]"
              />
            </div>
            <img
              src={fullsize}
              alt="fullsize"
              className="fullsize [@media(max-width:557px)]:w-[20px]"
            />
          </div>
        </div>
      </section>
      <section className="published flex justify-between px-[40px] py-[0] [@media(max-width:728px)]:px-[10px] [@media(max-width:728px)]:py-[0] [@media(max-width:500px)]:px-[10px] [@media(max-width:500px)]:py-[0] [@media(max-width:447px)]:flex-col [@media(max-width:447px)]:w-full [@media(max-width:447px)]:justify-center [@media(max-width:447px)]:items-center [@media(max-width:447px)]:gap-[30px]">
        <div className="left flex items-center text-[#06286e] text-[1.2rem] font-semibold [@media(max-width:728px)]:text-[1rem] [@media(max-width:500px)]:text-[0.8rem] [@media(max-width:447px)]:text-[1.3rem] [@media(max-width:447px)]:flex-col [@media(max-width:447px)]:text-center">
          <img
            src={pubhug}
            alt="publistimage"
            className="pusblistimg [@media(max-width:728px)]:w-[100px] [@media(max-width:500px)]:w-[80px] [@media(max-width:447px)]:w-[100px]"
          />
          <div className="rem flex flex-col">
            <span>Published by</span>
            <img
              src={logo}
              alt="logo"
              className="publogo w-[150px] [@media(max-width:728px)]:w-[130px] [@media(max-width:500px)]:w-[100px] [@media(max-width:400px)]:w-[160px]"
            />
          </div>
        </div>
        <div className="right flex items-center text-[#06286e] font-semibold gap-[10px] text-[1.5rem] [@media(max-width:728px)]:text-[1rem] [@media(max-width:500px)]:text-[0.8rem] [@media(max-width:447px)]:text-[1.3rem] [@media(max-width:447px)]:flex-col [@media(max-width:447px)]:text-center [@media(max-width:447px)]:mt-[30px]">
          <img
            src={plus}
            alt="plus"
            className="plus [@media(max-width:728px)]:w-[40px] [@media(max-width:500px)]:w-[30px] [@media(max-width:447px)]:w-[50px]"
          />
          <span>Create FlashCard</span>
        </div>
      </section>
      <section className="footer w-full pl-[40px] [@media(max-width:750px)]:mx-[auto] [@media(max-width:750px)]:my-[0] [@media(max-width:750px)]:p-[10px]">
        <p className="bg-[linear-gradient(180deg,_#06286e_0%,_#164ec0_100%)] bg-clip-text text-[3rem] text-transparent font-semibold mt-[30px]">
          FAQ
        </p>
        <div className="can max-w-[700px] flex justify-between items-center border-[2px] border-[solid] border-[#06286e] px-[20px] py-[15px] mb-[20px] rounded-[10px] text-[#06286e] font-semibold">
          <span>Can education flashcards be used for all age</span>
          <img src={down} alt="down" className="down" />
        </div>
        <div className="can max-w-[700px] flex justify-between items-center border-[2px] border-[solid] border-[#06286e] px-[20px] py-[15px] mb-[20px] rounded-[10px] text-[#06286e] font-semibold">
          <span>How do education flashcards work?</span>
          <img src={down} alt="down" className="down" />
        </div>
        <div className="can max-w-[700px] flex justify-between items-center border-[2px] border-[solid] border-[#06286e] px-[20px] py-[15px] mb-[20px] rounded-[10px] text-[#06286e] font-semibold">
          <span>Can education flashcards be used for text preparation?</span>
          <img src={down} alt="down" className="down" />
        </div>
      </section>
    </>
  );
}
