import React from "react";
import profile from "../../Assets/me.jpeg";
import {
  PhoneIcon,
  LocationMarkerIcon,
  UserIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
import "./Dashboard.css";

import image1 from "../../Assets/protfolio/image-1.png";
import image2 from "../../Assets/protfolio/image-2.png";
import image3 from "../../Assets/protfolio/image-3.png";
import image4 from "../../Assets/protfolio/image-4.png";
import image5 from "../../Assets/protfolio/image-5.png";
import image6 from "../../Assets/protfolio/image-6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const MyProfile = () => {
  return (
    <div>
      <h1 className=" text-xl font-medium">My Portfolio</h1>
      <div className="divider"></div>

      <div className="flex flex-wrap">
        <div class="avatar">
          <div class="sm:ml-10 w-32 rounded-full">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="sm:m-10">
          <small className="font-medium">HELLO, THERE I'M</small>
          <h1 className="text-3xl mt-2 font-medium">
            Shanjida Rahman <span className="text-primary">Maria</span>
          </h1>
          <p className=" font-medium text-lg my-2">
            A <span className="text-primary">Front-ENd Web Developer</span>{" "}
            passionate about creating interactive application and experience on
            the web.
          </p>
          <p className=" text-lg font-light ">shanjida.rahman003@gmail.com</p>
        </div>
      </div>
      <div class="divider text-xl font-medium">About Me</div>
      <div className=" sm:mx-10 sm:w-3/4 my-10">
        <h1 className=" text-xl font-medium">My Intro,</h1>
        <h1 className="text-3xl mt-2 font-medium">About Me</h1>
        <p className=" font-medium text-sm my-2">
          In present days, I'm a third-year ( 6th semester ) student in Bachelor
          of Science in Computer Science and Engineering/Tejgaon College, Dhaka.
          Besides Studying, I'm learning work as a MERN Stack Developer.
        </p>

        <div className="my-5">
          <p className="mb-1 flex">
            <UserIcon className="h-6 w-5 mr-1 " />
            <span className=" font-medium">Name</span> : Shanjida Rahman Maria
          </p>

          <p className="mb-1 flex">
            <LocationMarkerIcon className="h-6 w-5 mr-1 " />
            <span className=" font-medium">Address</span> : Plot no:1790,
            Janatabag, Rayerbag, Dhaka-1236.
          </p>
          <p className="mb-1 flex">
            <PhoneIcon className="h-6 w-5 mr-1 " />
            <span className=" font-medium">Contact</span> : 1234567891
          </p>
          <p className="mt-5">
            <span className=" font-medium">Knowledge I've Now :</span>
            <ul className="ml-28 mt-2">
              <li className="flex">
                {" "}
                <ArrowRightIcon className="h-6 w-5 mr-1 " />
                HTML, CSS, JavaScript
              </li>
              <li className="flex">
                {" "}
                <ArrowRightIcon className="h-6 w-5 mr-1 " />
                Bootstrap, Tailwind, DaisyUI etc
              </li>
              <li className="flex">
                {" "}
                <ArrowRightIcon className="h-6 w-5 mr-1 " />
                React, ReactJS
              </li>
              <li className="flex">
                {" "}
                <ArrowRightIcon className="h-6 w-5 mr-1 " />
                NodeJS, MongoDB
              </li>
              <li className="flex">
                {" "}
                <ArrowRightIcon className="h-6 w-5 mr-1 " />
                Firebase etc
              </li>
            </ul>
          </p>
          <p className=" text-sm my-5 text-secondary font-medium">
            Right now I'm completing WEB DEVELOPMENT course from Programming
            Hero .
          </p>
        </div>
      </div>

      <div className="divider">Some Of My Works</div>

      <div className="flex flex-wrap mb-14">
        <div className="site-name  my-3 px-2">
          <a href="https://touchit-tech.netlify.app/">
            <h4 className=" py-4 text-gray-400"># Touchit Tech</h4>
            <img src={image5} alt="" />
          </a>
        </div>
        <div className="site-name  my-3 px-2">
          <a href="https://spicy-velvet.web.app/">
            <h4 className=" py-4 text-gray-400"># Spicy Velvet</h4>
            <img src={image6} alt="" />
          </a>
        </div>
        <div className="site-name  my-3 px-2 ">
          <a href="https://bloom-beauty.netlify.app/">
            <h4 className=" py-4 text-gray-400"># Bloom Beauty</h4>
            <img src={image1} alt="" />
          </a>
        </div>
        <div className="site-name  my-3 px-2">
          <a href="https://eden-spring-event.netlify.app/">
            <h4 className=" py-4 text-gray-400"># Eden Spring Event</h4>
            <img src={image2} alt="" />
          </a>
        </div>
        <div className="site-name  my-3 px-2">
          <a href="https://tenchoworld.netlify.app/">
            <h4 className=" py-4 text-gray-400"># Techno world</h4>
            <img src={image3} alt="" />
          </a>
        </div>
        <div className="site-name  my-3 px-2">
          <a href="https://panda-commerce-maria07.netlify.app/">
            <h4 className=" py-4 text-gray-400"># Panda Commerce</h4>
            <img src={image4} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
