import React from "react";
import { Container } from "../Container/Container";

function ProjectSection() {
  return (
    <div>
      <Container>
        <div className="mx-2 md:mx-32 m-3">
          <div className=" flex justify-center flex-col">
            <h1 className=" text-center font-light text-3xl my-5">
              Interested in delving deeper into the project?
            </h1>
            <p className="text-center  font-medium  leading-normal">
              If you d like to explore further details about our initiatives or
              any of our <br /> affiliated brands, don t hesitate to connect.
              You can reach out to us via <br /> email at{" "}
              <span className="font-bold">hello@abc.com</span> or give us a call
              at
              <span className="font-bold"> +91 480 20802730</span> .
            </p>
          </div>
          <div className=" flex gap-4 justify-center items-center mt-14">
            <button className=" w-48 border px-8 py-2 font-bold ">
              Ring us on Skype
            </button>
            <button className=" w-48 bg-white text-black border px-8 py-2 font-bold">
              Contact
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectSection;
