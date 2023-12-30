import React from "react";
import { Container } from "../Container/Container";
import Image from "next/image";
import c1 from "../../../../public/c1.svg";
import c2 from "../../../../public/c2.svg";
import c3 from "../../../../public/c3.svg";
import OurContribution from "../OurContribution/OurContribution";

function Card() {
  return (
    <>
      <Container>
        <div className="flex gap-16 md:gap-8   md:mx-9 lg:mx-32  flex-col md:flex-row md:justify-evenly items-center">
          <div className="text-center  md:w-[400px] h-[300px]">
            <div className="relative" style={{ width: "100%", height: "100%" }}>
              <Image
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={c1}
                alt="baner.png"
              />
            </div>
            <p className="text-center m-2">
              Explore large, destructible environments where no two games are
              ever the same.
            </p>
          </div>
          <div className="text-center md:w-[400px] h-[300px]">
            <div className="relative" style={{ width: "100%", height: "100%" }}>
              <Image
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={c2}
                alt="baner.png"
              />
            </div>
            <p className="text-center m-2">
              Explore large, destructible environments where no two games are
              ever the same.
            </p>
          </div>
          <div className="text-center md:w-[400px] h-[300px]">
            <div className="relative" style={{ width: "100%", height: "100%" }}>
              <Image
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={c3}
                alt="baner.png"
              />
            </div>
            <p className="text-center m-2">
              Explore large, destructible environments where no two games are
              ever the same.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Card;
