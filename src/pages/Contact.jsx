import React from "react";
import { Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1 className="text-center mt-10 font-semibold text-[33px] text-white">
        Contact Us
      </h1>
      <form className="bg-slate-700 flex flex-col gap-5 mt-4 items-center rounded-md w-[100%] md:w-[600px] lg:w-[650px] mx-auto p-[40px]">
        <input
          type="text"
          placeholder="Type Your Name"
          className="input input-primary w-full"
        />
        <input
          type="email"
          placeholder="Type Your email"
          className="input input-primary w-full"
        />
        <textarea
          className="textarea textarea-primary w-full h-40"
          placeholder="Enter Your Message"
        ></textarea>
        <button className="btn btn-outline btn-info w-full">Info</button>
      </form>
      <Outlet />
    </div>
  );
}

export default Contact;
