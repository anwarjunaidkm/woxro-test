import React from "react";
import { Container } from "../Container/Container";

function OurContribution() {
  return (
    <div className=" mt-16 md:mt-24">
      <Container>
        <div className="flex justify-center flex-col p-2 items-center md:mx-32 ">
          <h1 className=" font-extralight text-3xl my-4">OurContribution</h1>
          <p className=" text-center text-xs md:text-lg ">
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>
        {/* //outer container */}
        <div className=" flex gap-7 flex-col sm:flex-row md:justify-evenly  md:mx-32 my-16 ">
          <div className="">
            <p className=" text-center font-extralight text-5xl">5M</p>

            <p className=" font-light leading-normal text-center text-xs mt-2">
              Daily User <br /> Engagements{" "}
            </p>
          </div>
          <div className="">
            <p className=" text-center text-5xl">$500K</p>

            <p className=" font-light leading-normal text-center text-xs mt-2">
              Revenue Surge for an <br />
              Platform
            </p>
          </div>
          <div className="">
            <p className=" text-center text-5xl">10X</p>

            <p className="  leading-normal font-light text-center text-xs mt-2">
              ROAS on all our <br />
              marketing campaigns
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurContribution;
