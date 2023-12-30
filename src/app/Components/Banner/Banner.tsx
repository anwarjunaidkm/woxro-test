import Image from "next/image";
import React from "react";
import banner from "../../../../public/banner.svg";
import { Container } from "../Container/Container";

function Banner() {
  return (
    <div>
      <div className=" hidden sm:block">
        <Container>
          <div className="flex flex-col justify-center font-extralight p-10 ">
            <h1 className=" text-center text-2xl">
              Epic Games : An American video game and software developer <br />{" "}
              and publisher based in Cary, North Carolina.
            </h1>
            <div className=" relative m-7">
              <Image
                src={banner}
                style={{ objectFit: "cover" }}
                alt="banner.png"
              />
            </div>
            <p className=" text-center m-7 font-normal text-[15px] px-5">
              Create, play, and battle with friends for free in Fortnite. Be the
              last player standing in Battle Royale and Zero Build, experience a
              concert or live event, or discover over a million creator made
              games, including racing, parkour, zombie survival, and more. Each
              Fortnite island has an individual age rating so you can find the
              one thats right for you and your friends. Find it all in Fortnite
              ... Drop In.
            </p>
            <div className=" flex justify-center ">
              <button className=" m-5 py-2 px-16 border  font-bold bg-white text-black">
                Visit Website
              </button>
            </div>
          </div>
        </Container>
      </div>
      {/* mobie view */}
      <div className=" sm:hidden">
        <div className="flex flex-col justify-center font-extralight p-1 m-3 ">
          <h1 className=" text-center text-xl">
            Epic Games : An American video game and software developer and
            publisher based in Cary, North Carolina.
          </h1>
          <div className=" relative m-7">
            <Image
              src={banner}
              style={{ objectFit: "cover" }}
              alt="banner.png"
            />
          </div>
          <p className=" text-center m-1 px-0 font-normal text-sm ">
            Create, play, and battle with friends for free in Fortnite. Be the
            last player standing in Battle Royale and Zero Build, experience a
            concert or live event, or discover over a million creator made
            games, including racing, parkour, zombie survival, and more. Each
            Fortnite island has an individual age rating so you can find the one
            thats right for you and your friends. Find it all in Fortnite ...
            Drop In.
          </p>
          <div className=" flex justify-center ">
            <button className=" m-5  py-1 px-10 border   font-bold bg-white text-black">
              Visit Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
